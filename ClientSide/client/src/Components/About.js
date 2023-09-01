import CarOwnerNav from "./CarOwnerComponents/CarOwnerNav";
import CarUserNav from "./CarUserComponents/CarUserNav";
import aboutI from "../Assests/6.svg"
import AdminNav from "./AdminFuncCompo/AdminNav";

export default function About() {
        const type = (JSON.parse(localStorage.getItem("loggedUser")).roll_id.id);

    return (
        <>
            {
                type == 1 &&
                <AdminNav />
            }
            {
                type === 2 &&
                <CarOwnerNav />
            }
            {
                type == 3 &&
                <CarUserNav />
            }
            <div className="aboutImg" style={{height:'250px',marginTop:'30px'}}>
            <img style={{objectFit:"contain",height:'100%'}} src={aboutI} alt="about_image" />
            </div>
            <div className="about" style={{ marginTop:'40px', padding: '40px',width:'1200px',marginInline:'auto',"boxShadow": "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                <h3>CityGo - InterCity Car Pooling System</h3>
                <p >
                    Online Inter-city Car Pooling System could be divide into four main parts, Car-owner part, User part, Admin part and the Acknowledgement part.

                    The proposed system aims to provide a user-friendly platform that connects individuals looking to share rides for their daily commutes or occasional trips ,In this project offers a comprehensive solution to the challenges posed by urban transportation.By harnessing the power of Java and .NET, the system provides a secure, user-friendly, and technologically robust platform for individuals to connect, share rides, and collectively contribute to sustainable urban mobility.

                    By connecting individuals with similar travel routes and preferences, the system promotes efficient Mysql used as backend technology ,React as frontend technology and the connection of both the database and frontend technology we are using two technology most of the project features are implemented using Spring Boot(Java) and some features are implemented using .Net core Framework utilization and reduces traffic congestion, while also contributing to a greener environment.


                </p>
            </div>
            
        </>
    )
}