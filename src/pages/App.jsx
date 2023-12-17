import {Navbar} from '../components';

import ProjectFundingScreen from "./ProjectFundingScreen.jsx";
import EventScreen from "./EventScreen.jsx";

import {Route, Routes, Link} from "react-router-dom";
import EventDetailScreen from "./EventDetailScreen.jsx";
import FundingDetails from "./FundingDetails.jsx";

import MyProjectsScreen from "./MyProjectsScreen.jsx";
import ProjectFormScreen from "./ProjectFormScreen.jsx";
import MyEventsScreen from "./MyEventsScreen.jsx";
import EventFormScreen from "./EventFormScreen.jsx";
import LoginScreen from "./LoginScreen.jsx";



const App = () => {
    return (
        <div className='black-bg-transparent-34'>

            <nav>
                <ul>

                </ul>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/funding" element={<ProjectFundingScreen />} />
                    <Route path="/events" element={<EventScreen />} />
                    <Route path="/funding-details" element={<FundingDetails />} />
                    <Route path="/event-details" element={<EventDetailScreen />} />
                    <Route path="/add-project" element={<ProjectFormScreen />} />
                    <Route path="/my-projects" element={<MyProjectsScreen />} />
                    <Route path="/my-events" element={<MyEventsScreen />} />
                    <Route path="/add-event" element={<EventFormScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </div>
        </div>
    );
}


export default App