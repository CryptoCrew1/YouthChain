import {Navbar} from '../components';

import ProjectFundingScreen from "./ProjectFundingScreen.jsx";
import EventScreen from "./EventScreen.jsx";

import {Route, Routes, Link} from "react-router-dom";
import EventDetailScreen from "./EventDetailScreen.jsx";
import FundingDetails from "./FundingDetails.jsx";
import AddEventScreen from "./AddEventScreen.jsx";
import NewProjectForm from "./EventForm.jsx";



const App = () => {
    return (
        <div className='black-bg-transparent-34'>

            <nav>
                <ul>

                </ul>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ProjectFundingScreen />} />
                    <Route path="/funding" element={<ProjectFundingScreen />} />
                    <Route path="/events" element={<EventScreen />} />
                    <Route path="/funding-details" element={<FundingDetails />} />
                    <Route path="/event-details" element={<EventDetailScreen />} />
                </Routes>
            </div>
        </div>
    );
}


export default App