import { Navbar } from '../components';


import NewProjectBody from "../components/NewProjectBody.jsx";





const AddEventScreen = () => {

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
                <NewProjectBody />
            </div>

        </div>

    )
}

export default AddEventScreen