import { Navbar } from "../components";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import bgImage from "../assets/image.jpg"

const EventScreen = () => {

    async function fetchUserProjects() {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/events/`);
            console.log("55555" + response.data);
            setProjects(response.data);
            // Handle the successful response here
        } catch (error) {
            console.error('Error fetching user projects:', error);
            // Handle errors here
        } finally {
            setIsLoading(false); // Stop loading regardless of success or failure
        }
    };

    const [events, setProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUserProjects();
    }, []);

    if (!events) {
        return null; // or some other placeholder content
    }

    if (isLoading) {
        return <LoadingPage />; // Render loading component or any loading indicator
    }

    return (
        <div className='App'>
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'auto'
            }}>
                <div className='black-bg-transparent-60'>
                    <Navbar name='Events' />
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex relative h-12 mt-16 items-center justify-between'>
                        <input
                            type="text"
                            placeholder="Search for event"
                            className="rounded-md border-2 border-white text-sm text-white py-1 w-1/3 px-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {dropdownButtons}
                    </div>
                </div>
                <div className='bg-black min-h-screen '>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex relative items-center justify-between'>
                        <div className='flex-col mt-10'>
                            <div
                                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {events.map((event, index) => ( // Added index as key
                                    <div key={index} className="mt-5 lg:w-[calc(33.333% - 1rem)] xl:w-[calc(25% - 1.5rem)]">
                                        <div className="relative">
                                            <a href={`/event-details?eventId=${event.eventId}`} target="_blank">
                                                <img src={event.img} alt="MyRadar App Screenshot"
                                                    className="w-full object-cover rounded-[15px]" />
                                            </a>
                                        </div>
                                        <div className="py-3">
                                            <h2 className="text-xl font-bold text-white">{event.eventName}</h2>
                                            <h3 className="text-sm text-gray-400">{event.eventDescription}</h3>
                                            <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
                                            <div className="flex flex-wrap justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-cyan-400">{event.startDate} {event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default EventScreen

const dropdownButtons = <div
    className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex space-x-5'>
    <Menu as="div" className="inline-block relative">
        <div>
            <Menu.Button
                className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-transparent px-3 h-8 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800">
                City
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
        </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            Support
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            License
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
    <Menu as="div" className="inline-block relative ">
        <div>
            <Menu.Button
                className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-transparent px-3 h-8 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800">
                Industry
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
        </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                                Account settings
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                                Support
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                                License
                            </a>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
</div>

const ListView = () => {
    const [visibleItems, setVisibleItems] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1200) {
                setVisibleItems(3);
            } else if (screenWidth >= 992) {
                setVisibleItems(3);
            } else if (screenWidth >= 768) {
                setVisibleItems(2);
            } else {
                setVisibleItems(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const items = Array.from({ length: visibleItems });
    return (
        <div className="overflow-x-hidden scrolling-touch">
            <div className='flex-col'>
                <p className="text-lg md:text-xl mt-4 font-bold text-left text-white">
                    MOST MOMENTUM
                </p>
                <p className="text-sx md:text-sm  text-left text-gray-400">
                    Offerings that have raised the most money in the last few days
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" className='rounded-md border border-cyan-400 text-white py-2 px-2 text-cyan-400'>See all</Button>
                </div>

            </div>

        </div>
    );
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
