import { FundingBody, Navbar, Welcome } from '../components';

import bgImage from '../assets/image.jpg';




const ProjectFundingScreen = () => {

    return (
        <div className='App'>
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}
            >
                <div className='black-bg-transparent-34'>
                    <Navbar
                        name="Project Funding"
                    />

                    <Welcome />
                </div>
            </div>
            <div
                className="min-h-screen"
                style={{
                    backgroundColor: 'black',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}>
                <FundingBody />
            </div>

        </div>

    )
}

export default ProjectFundingScreen