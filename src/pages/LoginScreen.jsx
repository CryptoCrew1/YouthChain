import React from 'react';
import bgImage from '../assets/image.jpg'; // Make sure the image path is correct

const LoginScreen = () => {
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-16 rounded-full transition duration-300 ease-in-out mt-4">
                Login

            </button>
        </div>
    );
};

export default LoginScreen;
