import { Navbar } from '../components';


import MyEventBody from "../components/MyEventBody.jsx";





const MyEventsScreen = () => {

    return (
        <div className='App'>
            <div

            >
                <div className='black-bg-transparent-34'>
                    <Navbar
                        name="Project Funding"
                    />


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
                <MyEventBody />
            </div>

        </div>

    )
}

export default MyEventsScreen