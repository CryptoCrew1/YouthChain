import { Navbar } from '../components';
import MyProjectBody from "../components/MyProjectBody.jsx";

const MyProjectsScreen = () => {

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
                <MyProjectBody />
            </div>

        </div>

    )
}

export default MyProjectsScreen