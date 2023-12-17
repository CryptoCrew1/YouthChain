import React, { useEffect, useState } from "react";
import axios from 'axios';
import LoadingPage from "../pages/LoadingPage";
import {useNavigate} from "react-router-dom";

 function MyEventBody() {

    async function fetchUserEvents(ethereumAddress) {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/user/events/${ethereumAddress}`);
            setEvents(response.data);
            // Handle the successful response here
        } catch (error) {
            console.error('Error fetching user events:', error);
            // Handle errors here
        } finally {
            setIsLoading(false); // Stop loading regardless of success or failure
        }
    };

    const [ethereumAddress, setValue] = useState('');
    const [events, setEvents] = useState(null); // To store fetched projects
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedAddress = sessionStorage.getItem('ethereumAddress') || '';
        setValue(storedAddress);
    }, []);
    
    useEffect(() => {
        if (ethereumAddress != "") {
            fetchUserEvents(ethereumAddress);
        }
    }, [ethereumAddress]);



     const navigate = useNavigate();

     const handleClick = () => {
         navigate('/add-event'); // Replace '/new-page' with your desired route
     };

     if (isLoading) {
        return <LoadingPage />; // Render loading component or any loading indicator
    }
    
    if (!events) {
        return null; // or some other placeholder content
    }

    return (

        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white">My Events</h2>
                    <div className="flex items-center">
                        <span className="text-white font-medium mr-2">New Event</span>
                        <button
                            onClick={handleClick}
                            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
                            +
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
                    {events.map((event) => (
                        <div key={event.id}
                             className="mt-5 lg:w-[calc(100vw/3 - 1.5rem)] xl:w-[calc(100vw/4 - 2rem)]">
                            <div className="relative">
                                <a href={`/event-details?eventId=${event.eventId}`} target="_blank">
                                    <img src={event.img} alt="MyRadar App Screenshot"
                                         className="w-full object-cover rounded-[15px]"/>
                                </a>
                            </div>
                            <div className="py-3">
                                <h2 className="text-xl font-bold text-white">{event.eventName}</h2>
                                <h3 className="text-sm text-gray-400">{event.eventDescription}</h3>
                                <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-cyan-400">{event.startDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

 }

export default MyEventBody
