
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoadingPage from "../pages/LoadingPage";

function MyProjectBody() {

    async function fetchUserProjects(ethereumAddress) {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/user/projects/${ethereumAddress}`);
            setProjects(response.data);
            // Handle the successful response here
        } catch (error) {
            console.error('Error fetching user projects:', error);
            // Handle errors here
        } finally {
            setIsLoading(false); // Stop loading regardless of success or failure
        }
    };

    const [ethereumAddress, setValue] = useState('');
    const [projects, setProjects] = useState(null); // To store fetched projects
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedAddress = sessionStorage.getItem('ethereumAddress') || '';
        setValue(storedAddress);
    }, []);
    
    useEffect(() => {
        if (ethereumAddress != "") {
            fetchUserProjects(ethereumAddress);
        }
    }, [ethereumAddress]);

    

    // projects = fetchUserProjects(ethereumAddress);

    const navigate = useNavigate();

    const handleClick = () => {

        navigate('/add-project'); // Replace '/new-page' with your desired route
    };

    if (isLoading) {
        return <LoadingPage />; // Render loading component or any loading indicator
    }
    
    if (!projects) {
        return null; // or some other placeholder content
    }
    
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white">My Projects</h2>
                    <div className="flex items-center">
                        <span className="text-white font-medium mr-2">New Project</span>
                        <button
                            onClick={handleClick}
                            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
                            +
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {projects.map((project) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className=" mt-5 lg:w-[calc(100vw/3.5)] xl:w-[calc(100vw/4.5)]">
                            <div className="relative">
                            <a href={`/funding-details?projectId=${project.projectId}`} target="_blank">
                                    <img src={project.ImageUrl} alt="MyRadar App Screenshot"
                                         className="w-full object-cover rounded-[15px] rounded-bl-none"/>
                                </a>
                                <div className="absolute bottom-0 left-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-t-[25px]">
                                    <p>{project.DaysLeft} DAYS LEFT</p>
                                </div>
                            </div>
                            <div className="py-3">
                                <h2 className="text-xl font-bold text-white">{project.ProjectName} </h2>
                                <h3 className="text-sm text-gray-400">{project.ProjectDescription} </h3>
                                <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.Raised} </span>
                                        <span className="text-xs text-gray-400">Raised</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.Investors} </span>
                                        <span className="text-xs text-gray-400">Investors</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.Votes} </span>
                                        <span className="text-xs text-gray-400">Votes</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.MinInvestment} </span>
                                        <span className="text-xs text-gray-400">Min. Investment</span>
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
export default MyProjectBody
