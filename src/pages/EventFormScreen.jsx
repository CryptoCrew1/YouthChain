import bgImage from '../assets/image.jpg';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";

function EventForm({ formData, handleChange, handleSubmit }) {

    const fields = [
        "eventName", "eventDescription", "img", "startDate", "endDate", "location",
        "mainSpeaker", "rules", "neededVotes",
    ];

    // Divide fields into two groups for left and right columns
    const halfwayIndex = Math.ceil(fields.length / 2);
    const leftFields = fields.slice(0, halfwayIndex);
    const rightFields = fields.slice(halfwayIndex);

    const renderField = (field) => (
        <div key={field} className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor={field}>
                {field}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-white leading-tight focus:outline-none focus:shadow-outline"
                id={field}
                type="text"
                placeholder={field}
                name={field}
                value={formData[field] || ''}
                onChange={handleChange}
            />
        </div>
    );

    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Ensures minimum height of the viewport
                display: 'flex', // Using flex to center the grid container
                flexDirection: 'column', // Column direction to align children
                justifyContent: 'top', // Vertically center content in the viewport
            }}
            >
                <Navbar />
                <div className="grid grid-cols-2 gap-4 px-4 py-4 mt-8 mx-auto max-w-7xl bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
                    {fields.map(field => renderField(field))}
                </div>

                <div className="flex justify-center pb-4">
                    <button
                        type="submit"
                        className="bg-cyan-400 bg-opacity-50 hover:bg-cyan-500 hover:bg-opacity-70 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg"

                    >
                        Submit
                    </button>
                </div>
            </div>

        </form>
    );
}


import Navbar from '../components/Navbar';


function EventFormScreen() {
    const [formData, setFormData] = useState({
    });

    const navigate = useNavigate();

    const [ethereumAddress, setValue] = useState('');

    useEffect(() => {
        const storedAddress = sessionStorage.getItem('ethereumAddress') || '';
        setValue(storedAddress);
    }, []);
    var eId = "";

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(formData);
        try {
            // Here you make the API call to submit your formData
            const response = await axios.post('http://127.0.0.1:8000/addEvents/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    // Add other headers here
                }
            }); 
            console.log(response.data);
            eId = response.data;
            navigate('/my-events')
            // Handle response or navigate to another page
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors
        }

        try {
                console.log("ethereumAddress" , ethereumAddress)
                console.log("ID", eId)
                const response = await axios.post('http://127.0.0.1:8000/associateEvent', {
                "ethereumAddress" : ethereumAddress,
                "eventId": eId,
            });
            console.log(response.data);
            // Handle the response (e.g., show a success message)
        } catch (error) {
            console.error('Error:', error);
            // Handle the error (e.g., show an error message)
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name.includes('[')) {
            // For nested fields like 'TeamMembers[Position]'
            const [parentField, subField] = name.replace(']', '').split('[');
            setFormData(prevFormData => ({
                ...prevFormData,
                [parentField]: {
                    ...prevFormData[parentField],
                    [subField]: value
                }
            }));
        } else {
            // For regular fields
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };


    return (
        <div>
            <EventForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

        </div>

    );
}

export default EventFormScreen;

