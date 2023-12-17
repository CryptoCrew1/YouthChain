import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import cardImage from '../assets/cardImage.webp';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const FundingBody = () => {

    async function fetchUserProjects() {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/projects/`);
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

    const [projects, setProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUserProjects();
    }, []);

    if (!projects) {
        return null; // or some other placeholder content
    }

    if (isLoading) {
        return <LoadingPage />; // Render loading component or any loading indicator
    }
    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex relative items-center justify-between'>
            <div className='flex-col mt-10'>
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
                    {projects.map((project, index) => (
                        <div className="px-6 mt-5 lg:w-[calc(100vw/3.5)] xl:w-[calc(100vw/4.5)]">
                            <div className="relative">
                                <a href={`/funding-details?projectId=${project.projectId}`} target="_blank">
                                    <img src={project.ImageUrl} alt="MyRadar App Screenshot"
                                        className="w-full object-cover rounded-[15px] rounded-bl-none" />
                                </a>
                                <div
                                    className="absolute bottom-0 left-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-t-[25px]">
                                    <p>6 DAYS LEFT</p>
                                </div>
                            </div>
                            <div className="py-3">
                                <h2 className="text-xl font-bold text-white">{project.ProjectName}</h2>
                                <h3 className="text-sm text-gray-400">{project.ProjectDescription}</h3>
                                <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">${project.Raised}</span>
                                        <span className="text-xs text-gray-400">Raised</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.Investors}</span>
                                        <span className="text-xs text-gray-400">Investors</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.Votes}</span>
                                        <span className="text-xs text-gray-400">Votes</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">${project.MinInvestment}</span>
                                        <span className="text-xs text-gray-400">Min. Investment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );

}

function projectItem() {
    return <div className="mt-5 lg:w-[calc(100vw/3.5)] xl:w-[calc(100vw/4.5)]">
        <div className="relative">
            <a href="/funding-details" target="_blank">
                <img src={cardImage} alt="MyRadar App Screenshot"
                    className="w-full object-cover rounded-[15px] rounded-bl-none" />
            </a>
            <div className="absolute bottom-0 left-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-t-[25px]">
                <p>6 DAYS LEFT</p>
            </div>
        </div>
        <div className="py-3">
            <h2 className="text-xl font-bold text-white">ACME AtronOmatic</h2>
            <h3 className="text-sm text-gray-400">Keeping You Ahead of the Storm!</h3>
            <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-cyan-400">$3.73M</span>
                    <span className="text-xs text-gray-400">Raised</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-cyan-400">2733</span>
                    <span className="text-xs text-gray-400">Investors</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-cyan-400">1000</span>
                    <span className="text-xs text-gray-400">Votes</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-cyan-400">$399</span>
                    <span className="text-xs text-gray-400">Min. Investment</span>
                </div>
            </div>
        </div>
    </div>;
}



export default FundingBody