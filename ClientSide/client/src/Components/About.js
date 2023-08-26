import CarOwnerNav from "./CarOwnerNav";
import CarUserNav from "./CarUserNav";

export default function About() {
    const type=JSON.parse(localStorage.getItem("loggedUser")).roll_id.id;
    return (
        <>
            {
                type===2 &&
                <CarOwnerNav/>
            }
            {
                type==3 &&
                <CarUserNav/>
            }
            <div className="about" style={{margin:'20px', padding: '40px'}}>
            <h3>CityGo - InterCity Car Pooling System</h3>
            <p>
            Online Inter-city Car Pooling System could be divide into four main parts, Car-owner part, User part, Admin part and the Acknowledgement part.

                The proposed system aims to provide a user-friendly platform that connects individuals looking to share rides for their daily commutes or occasional trips ,In this project offers a comprehensive solution to the challenges posed by urban transportation.By harnessing the power of Java and .NET, the system provides a secure, user-friendly, and technologically robust platform for individuals to connect, share rides, and collectively contribute to sustainable urban mobility.

                By connecting individuals with similar travel routes and preferences, the system promotes efficient Mysql used as backend technology ,React as frontend technology and the connection of both the database and frontend technology we are using two technology most of the project features are implemented using Spring Boot(Java) and some features are implemented using .Net core Framework utilization and reduces traffic congestion, while also contributing to a greener environment.


            </p>
        </div>
        </>
    )
}