import React, { useEffect } from 'react';
import bgImage from '../assets/image.jpg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Web3 from 'web3';
import { useStateContext } from '../context';



const LoginScreen = () => {
    const {connect, address} = useStateContext();

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!address) {
            connect();
        }

        if (window.ethereum) { // Check if MetaMask is installed
            try {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.request({ method: 'eth_requestAccounts' });// Request access to account
                const accounts = await web3.eth.getAccounts(); // Get connected accounts

                if (accounts.length > 0) {
                    axios.post('http://127.0.0.1:8000/user/', { "ethereumAddress": accounts[0] })
                        .then(response => { // Update the state with response data
                            sessionStorage.setItem("ethereumAddress", response.data.ethereumAddress)// Assuming setGlobalState is correctly set up
                        })
                        .catch(error => console.error('Error fetching data:', error));
                    // Navigate to a new page upon successful connection
                    navigate('/funding'); // Replace with your desired route
                }
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };
    if (sessionStorage.getItem('ethereumAddress') != null) {
        sessionStorage.removeItem('ethereumAddress');
        const web3_old = new Web3(window.ethereum);
        web3_old.currentProvider.reset;
    }
    return (
        <div

            className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="text-center p-2">
                <h1 style={{ fontFamily: 'Aleo, serif', fontSize: '50px', fontWeight: '700', color: 'white' }}>
                    Empowering Youth, Enriching Communities.
                </h1>
                <p style={{ fontFamily: 'Aleo, serif', fontSize: '50px', fontWeight: '700', color: 'white' }}>
                    Efficient for Innovators, Accessible for All.
                </p>
                <p className="text-white text-lg mb-6">
                    Democratizing Blockchain for the next Generation. Our platform champions initiatives <br />for driven
                    youths, fresh entrepreneurs, and engaged citizens alike.
                </p>
            </div>
            <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-16 rounded-full transition duration-300 ease-in-out mt-4">
                Login

            </button>
        </div>
    );
};

export default LoginScreen;
