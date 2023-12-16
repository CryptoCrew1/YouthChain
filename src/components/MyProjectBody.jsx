
import React from "react";
import {useNavigate} from "react-router-dom";


const projects = [
    {
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },
    {
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },{
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },{
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },{
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },{
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },{
        projectId: 1,
        ProjectName: '  Tee',
        ProjectDescription: 'skksks',
        ImageUrl: 'https://onlypult.com/blog_uploads/a3aa29467ceba80486b3a6ad0567d61c.webp',
        DaysLeft: "5",
        Raised: '$35',
        Investors: '444',
        Votes: '11',
        MinInvestment: '333',


    },


]

 function MyProjectBody() {
     const navigate = useNavigate();

     const handleClick = () => {
         navigate('/add-project'); // Replace '/new-page' with your desired route
     };
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
                        <div className="mt-5 lg:w-[calc(100vw/3.5)] xl:w-[calc(100vw/4.5)]">
                            <div className="relative">
                            <a href="/funding-details" target="_blank">
                                    <img src={project.imageSrc} alt="MyRadar App Screenshot"
                                         className="w-full object-cover rounded-[15px] rounded-bl-none"/>
                                </a>
                                <div className="absolute bottom-0 left-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-t-[25px]">
                                    <p>{project.days} DAYS LEFT</p>
                                </div>
                            </div>
                            <div className="py-3">
                                <h2 className="text-xl font-bold text-white">{project.name} </h2>
                                <h3 className="text-sm text-gray-400">{project.subname} </h3>
                                <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.raised} </span>
                                        <span className="text-xs text-gray-400">Raised</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.investors} </span>
                                        <span className="text-xs text-gray-400">Investors</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.votes} </span>
                                        <span className="text-xs text-gray-400">Votes</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-cyan-400">{project.min} </span>
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
