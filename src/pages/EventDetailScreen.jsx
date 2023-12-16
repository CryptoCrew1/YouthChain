import React from 'react';
// Import your components and assets
import Navbar from '../components/Navbar';
// Add other imports for FundingBody, Welcome if they are used in the page
import bgImage from '../assets/image.jpg';
import blurImage from '../assets/blurred.png';
import coverImage from '../assets/eventcover.png';
import speakerImage from '../assets/speaker.png';
import soundcloudImage from '../assets/sc.png';
import youtubeImage from '../assets/yt.png';

const EventDetailScreen = () => {
    return (
        <div className='App'>
            <div className="min-h-screen" style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                {/* Navbar Section */}
                <div className='black-bg-transparent-34' style={{ backgroundImage: `url(${bgImage})` }}>
                    <Navbar name="Project Funding" />
                </div>

                {/* Event and Artist Details Section */}
                <div className="relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${blurImage})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative p-6 text-white flex flex-col lg:flex-row">
                        {/* Left side: Event Details + Button */}
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">ODDITY & ALIAS RAVIN SHOWCASE @ KASTEL</h1>
                            <p className="mb-1">13 December Wednesday 2023, 21:00 - 14 December Thursday 2023, 04:00</p>
                            <p className="mb-1">Kastel</p>
                            <p className="mb-1">Ravin Group</p>
                            <p className="mb-4">Hande Tura</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Vote for this event
                            </button>
                        </div>

                        {/* Right side: Artist Image */}
                        <div className="lg:ml-4 flex lg:flex-1 justify-center lg:justify-end items-center mt-4 lg:mt-0">
                            <img src={coverImage} alt="Artist One" className="h-48 rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Description and Rules Section */}
                <div className="bg-black text-white ">
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-8 flex flex-col lg:flex-row'>
                        <div className="max-w-3xl lg:mr-8">
                            {/* Description Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Description</h2>
                                <p className="mb-4">
                                    maNga is preparing to bring its new album 'Anthropocene 002' together with its fans for
                                    the first time! 'Anthropocene 002' Album launch concert is at Bostancı Show Center with
                                    the Atlantis
                                    Production organization on Friday, December 15, 2023!
                                </p>
                            </div>

                            {/* Rules Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Rules</h2>
                                <p>
                                    The event is for participants aged 18 and over. It is forbidden to bring food and drink,
                                    sharp, piercing or flammable tools into the event area. Event participants agree that
                                    photo & video
                                    shooting will be done in the event area. Organization and venue officials have the right
                                    not to let
                                    people they deem unsuitable to the event and backstage area. Particular attention is
                                    paid to the balance
                                    in the number of men and women, their attitude, style, and suitability in general, and
                                    entry may not be
                                    possible due to these and similar reasons. The decision of this event is at the absolute
                                    right of the
                                    organization.
                                </p>
                            </div>
                        </div>

                        {/* Votes Card */}

                        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full md:max-w-sm lg:max-w-md h-52"
                            style={{ boxShadow: '0 0 10px #fff' }}>
                            <h2 className="text-white text-lg font-semibold mb-4">Votes</h2>
                            <div className="relative bg-gray-800 rounded-full overflow-hidden h-4 text-xs flex mb-4">
                                <div style={{ width: '67%' }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    <span className="absolute left-2">67%</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-white mb-4">
                                <span className="invisible">67%</span> {/* Invisible span for maintaining layout */}
                                <span>210 votes</span>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                                Vote Now
                            </button>
                        </div>

                    </div>
                </div>

                <div className="bg-black text-white p-8">
                    <div className="max-w-6xl mx-auto">
                        <br />

                        {/* Speakers Section */}
                        <h2 className="text-xl font-bold mb-4">Speakers</h2>
                        <div className="flex-grow border-t border-gray-600"></div>
                        <br />
                        {/* Speaker Item */}
                        <div className="flex items-center">

                            {/* Speaker Image */}
                            <div className="relative mr-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img src={speakerImage} alt="Hande Tura" />
                                </div>
                            </div>

                            {/* Speaker Name and Line */}
                            <div className="flex-1 flex items-center justify-center">
                                {/* Assuming Hande Tura is centered and there's equal spacing between the text and the icons */}
                                <span className="text-4xl mr-40">Hande Tura</span> {/* Adjust the margin as needed */}
                                <img src={soundcloudImage} alt="Soundcloud"
                                    style={{ width: '100px', height: '40px' }}  // Specify your desired dimensions
                                    className="mr-40" />
                                {/* Adjust the margin as needed */}
                                <img src={youtubeImage} alt="YouTube" style={{ width: '100px', height: '80' }} />
                            </div>


                        </div>
                        <br />
                        <div className="flex-grow border-t border-gray-600"></div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetailScreen;
