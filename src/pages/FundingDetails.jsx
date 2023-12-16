import { NavbarFundingDetail } from "../components"
import bgImage from '../assets/image.jpg'
import cardImage from '../assets/cardImage.webp'
import React, { useEffect, useState } from 'react';

const Tab = ({ children }) => (
    <div className="flex-col mt-4 pb-24">{children}</div>
);

const project={
    projectId:   "ss",
    Industry:   "ss",
    ImageUrl:   "ss",
    DaysLeft:   "ss",
    ProjectName:   "ss",
    ProjectDescription:   "ss",
    Raised:   "ss",
    Investors:   "ss",
    Votes:   "ss",
    MinInvestment:   "ss",
    Slogan:   "ss",
    Slogan2:   "ss",
    ReasonsToInvest:   "ss",
}

const FundingDetails = () => {
    const [activeTab, setActiveTab] = useState('overview');
    return (
        <div className='App'>
            <div className="fixed top-0 w-full z-10" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'auto'
            }}>
                <NavbarFundingDetail />
            </div>
            <div className="bg-black min-h-screen">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-16">
                    <div className="flex-col">
                        <div className="flex">
                            {leftSideOfText()}
                            {cardWithImage()}
                        </div>

                        <dev className="flex mt-16">
                            <div className="flex-1 flex-col items-left justify-left">
                                <div className="mb-4 inline-block"
                                    style={{ boxShadow: '0 1px 1px rgba(255, 255, 255, 1)' }}>
                                    <button
                                        className={`px-6 py-2 font-regular border-b-2 ${activeTab === 'overview' ? 'text-cyan-400 border-cyan-400' : 'text-white border-transparent'}`}
                                        onClick={() => setActiveTab('overview')}
                                    >
                                        Overview
                                    </button>
                                    <button
                                        className={`px-6 py-2 font-regular border-b-2 ${activeTab === 'about' ? 'text-cyan-400 border-cyan-400' : 'text-white border-transparent'}`}
                                        onClick={() => setActiveTab('about')}
                                    >
                                        About
                                    </button>
                                    <button
                                        className={`px-6 py-2 font-regular border-b-2 ${activeTab === 'terms' ? 'text-cyan-400 border-cyan-400' : 'text-white border-transparent'}`}
                                        onClick={() => setActiveTab('terms')}
                                    >
                                        Terms
                                    </button>
                                </div>
                                <div className="w-full w-1/2">
                                    {activeTab === 'overview' &&
                                        <Tab>
                                            <p className="text-base md:text-xl font-regular text-left text-white">
                                                REASONS TO INVEST
                                            </p>
                                            <p className="text-xs md:text-sm font-regular text-left text-gray-300 mt-6">
                                                POPULAR APP: Our proprietary AI rain prediction algorithms are just one of the key valuable
                                                features our users love with the MyRadar app. Millions of users rely on us every day to keep
                                                them ahead of the weather and other dangers, and we’re still growing.
                                            </p>
                                            <p className="text-xs md:text-sm font-regular text-left text-gray-300 mt-6">
                                                WE'RE PLANNING FOR SPACE!: We're planning to build and launch our own satellites to better observe
                                                the world from above using advanced AI software “at the edge” to monitor the planet and alert users
                                                of the dangers below. This will further increase the value of our services and allow us to innovate even
                                                further to help keep people safe from impending environmental threats.
                                            </p>
                                            <p className="text-xs md:text-sm font-regular text-left text-gray-300 mt-6">
                                                ESTABLISHED & EXPERIENCED: MyRadar was established in 2009 and is on a mission to keep innovating and provide users
                                                with an unparalleled range of imagery, data, and services.
                                            </p>
                                        </Tab>}
                                    {activeTab === 'about' &&
                                        <Tab>
                                            <AboutSection />
                                            <TeamSection />
                                        </Tab>}
                                    {activeTab === 'terms' &&
                                        <Tab>
                                            {termsSection()}
                                        </Tab>}
                                </div>
                            </div>
                            <div className="flex-1">
                                {investCard()}
                            </div>
                        </dev>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default FundingDetails


function investCard() {
    return <div className="bg-black p-6 text-white rounded-2xl shadow-xl max-w-sm mx-auto mt-8"
    style={{ boxShadow: '0 2px 2px rgba(255, 255, 255, 1)'}}>
        <div className="bg-cyan-400 text-black text-lg rounded-full py-2 px-4 mb-2"
        style={{ boxShadow: '0 2px 2px rgba(255, 255, 255, 1)'}}>
            <div className="text-center font-bold">Invest Now</div>
            <div className="text-center text-sm">3,00 $ Per Share</div>
        </div>

        <div className="flex justify-between items-center mt-8 mb-4">
            <div>
                <div className="text-sm font-semibold text-gray-500">RAISED</div>
                <div className="text-xl font-bold text-cyan-400">{project.Slogan} $</div>
            </div>
            <div>
                <div className="text-sm font-semibold text-gray-500">INVESTORS</div>
                <div className="text-xl font-bold text-cyan-400">{project.Investors}</div>
            </div>
        </div>

        <div className="flex justify-between">
            <div>
                <div className="text-sm font-semibold text-gray-500">MIN INVEST</div>
                <div className="text-xl font-bold text-cyan-400">{project.MinInvestment} $</div>
            </div>
            <div>
                <div className="text-sm font-semibold text-gray-500 pr-8">VOTES</div>
                <div className="text-xl font-bold text-cyan-400">$ {project.Votes}M</div>
            </div>
        </div>
    </div>;
}

function termsSection() {
    return <div className="text-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">TERMS</h2>
        <h3 className="text-xl font-semibold mb-2">ACME AtronOmatic</h3>

        {/*<div className="grid grid-cols-2 gap-18 mb-8">
            <div>
                <h4 className="text-lg text-cyan-400 font-semibold mb-1">Overview</h4>
                <p className="font-bold">PRICE PER SHARE</p>
                <p>$3</p>
                <p className="font-bold mt-4">DEADLINE</p>
                <p>Dec. 19, 2023 at 10:59 AM GMT+3</p>
            </div>
            <div>
                <p className="font-bold">VOTES</p>
                <p>${project.Votes}</p>
                <p className="font-bold mt-4">FUNDING GOAL</p>
                <p>$15k - $5M</p>
            </div>
        </div>*/}

        <div className="grid grid-cols-2 gap-18 mb-4">
            <div>
                <h4 className="text-lg text-cyan-400 font-semibold mb-1">Breakdown</h4>
                <p className="font-bold">MIN INVESTMENT</p>
                <p>$399</p>
                <p className="font-bold mt-4">MAX INVESTMENT</p>
                <p>$4,999,998</p>
                <p className="font-bold mt-4">MIN NUMBER OF SHARES OFFERED</p>
                <p>5,000</p>
            </div>
            <div>
                <p className="font-bold">OFFERING TYPE</p>
                <p>Equity</p>
                <p className="font-bold mt-4">ASSET TYPE</p>
                <p>Common Stock</p>
                <p className="font-bold mt-4">MAX NUMBER OF SHARES OFFERED</p>
                <p>1,666,666</p>
            </div>
        </div>

        <p className="text-sm italic">Maximum Number of Shares Offered subject to adjustment for bonus shares</p>
    </div>;
}

const AboutSection = () => (
    <div className=" text-white">
        <h2 className="text-base md:text-xl font-regular mb-4">ABOUT</h2>
        <h3 className="text-base font-semibold mb-2">HEADQUARTERS</h3>
        <p className="mb-4 text-sm">111 W Jefferson St Ste 200<br />Orlando, FL 32801</p>
        <p>MyRadar (an AI-focused software company) empowers 15M+ users with an app that anticipates weather and environmental threats. Our anticipated satellites can soon monitor Earth from orbit! These satellites are still in the prototype stage of development.</p>
        <div className="mt-4">
            <a href="#" className="text-blue hover:text-blue-800 visited:text-purple-600">View Site →</a>
        </div>
    </div>
);

// TeamSection.jsx
const TeamSection = () => (
    <div className="pt-8 text-white">
        <h2 className="ttext-base md:text-xl font-regular mb-4">TEAM</h2>
        <div className="flex-col items-left">
            {/* Replace with actual image path */}
            <img
                src="https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F646fccc47eb65b50461373e5%2Ffounders%2Fimages%2Fprofile_image%2Ffounder_andy.jpg&w=1920&q=100"
                alt="Andrew Green" className="mb-4 rounded-full h-[220px]" />
            <h3 className="text-2xl font-bold">Andrew Green</h3>
            <p className="text-lg">CEO</p>
            <p className="mt-4">In 1989, Andy Green started one of the world’s first public-access Internet Service providers. The service pioneered the use of modern Internet access technologies commonly used today, including Internet over Cable TV networks and Internet over DSL lines. The service was sold in 1998. In 2000, Green formed an Internet-based aviation information services company, which evolved into a software and services company that is today known as ACME AtronOmatic, LLC. The company’s primary product is the popular MyRadar weather and environmental information app. Downloaded over 50 million times, the app is available on iOS, Android, Windows, Xbox and Alexa. The infrastructure behind the app also supports business services, and a number of research projects for the US military and federal government. For his efforts in advancing weather and environmental awareness, Green was nominated Weatherperson of the Year in 2020.</p>

        </div>
    </div>
);

function leftSideOfText() {
    return <div className="flex-1 relative flex-col">
        <button className=" text-xs font-semibold px-2 py-2 rounded shadow-md"
            style={{ color: '#BD4B6E', backgroundColor: '#FFE0E9' }}>
            {project.DaysLeft} DAYS LEFT
        </button>
        <p className="text-xs md:text-base mt-4 font-normal text-left text-cyan-400">
            {project.Slogan}
        </p>
        <p className="text-xl md:text-3xl font-bold text-left text-cyan-400">
            {project.Slogan2}
        </p>
        <p className="text-sm md:text-base text-left text-gray-400  mt-1">
            {project.ProjectDescription}
        </p>
        <button className="bg-cyan-400 md:w-1/2 text-black text-base font-bold px-12 py-2 rounded-lg shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50 mt-6">
            Vote for this project
        </button>
        <p className="text-xs md:text-sm md:w-1/2 text-left text-gray-400 mt-6">
            This Reg CF offering is made available through StartEngine Capital, LLC. This investment is
            speculative, illiquid, and involves a high degree of risk, including the possible loss of your entire investment.
        </p>
    </div>;
}

function cardWithImage() {
    return <div className="flex-1 flex justify-end">
        <div className="flex-col">
            <div
                className="bg-black shadow rounded-lg mb-0 mt-12 p-2 rounded-[15px] pt-0"
                style={{ boxShadow: '0 4px 5px rgba(255, 255, 255, 1)', height: '70%', width: '100%' }}>
                <img src={cardImage} alt="MyRadar App Screenshot" className="w-full h-full object-cover rounded-[15px]" />
                <div className="justify-end">
                    <div className="flex w-full justify-center items-center">
                        <div className="bg-black shadow p-2 mt-1 rounded-b-[15px] pt-0"
                            style={{ boxShadow: '0 6px 3px rgba(255, 255, 255, 1)', height: '70%', width: '50%' }}>
                            {/* Content for the center component */}
                            <p className="text-cyan-400 text-xl font-bold text-center mt-1">    {project.Raised} $ Raised</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
