
import React from "react";
import {useNavigate} from "react-router-dom";
import cardImage from "../assets/eventImg.jpg";


const events = [
    {
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'12 Ekim Salı, 5 Gün Sonra, Şişli, İstanbul'
    },
    {
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'27 Temmuz Salı, 5 Gün Sonra, Şişli, İstanbul'
    },{
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'12 Aralık Salı, 5 Gün Sonra, Şişli, İstanbul'
    },{
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'12 Aralık Salı, 5 Gün Sonra, Şişli, İstanbul'
    },{
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'12 Aralık Salı, 5 Gün Sonra, Şişli, İstanbul'
    },{
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'12 Aralık Salı, 5 Gün Sonra, Şişli, İstanbul'
    },{
        eventId: 1,
        eventName: '  Tee',
        eventDescription: 'skksks',
        img: 'https://marketplace.canva.com/EAEi0h7p9-4/1/0/1600w/canva-music-festival-facebook-event-cover-jgMgwq0k3VE.jpg',
        startDate:'12 Aralık Salı, 5 Gün Sonra, Şişli, İstanbul'
    },


]

 function MyEventBody() {
     const navigate = useNavigate();

     const handleClick = () => {
         navigate('/add-event'); // Replace '/new-page' with your desired route
     };
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
                                <a href="/event-details" target="_blank">
                                    <img src={event.img} alt="MyRadar App Screenshot"
                                         className="w-full object-cover rounded-[15px]"/>
                                </a>
                            </div>
                            <div className="py-3">
                                <h2 className="text-xl font-bold text-white">{event.name}</h2>
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
