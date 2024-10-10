import Title from "./Title";
import studentExpert from './../assets/student expert.png';
import ALX from './../assets/alx.jpeg';

function Certifications(){
    return(
        <div className="flex flex-col w-full md:w-5/6 lg:4/6 xl:3/6 mb-24 gap-y-7">
            <Title text="Certifications"></Title>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
                <a href="https://badgr.com/public/assertions/JmZwwo3gQnGxA1eXBBd-0g?identity__email=lanre2967@gmail.com" target="_blank" className="p-6 bg-gray-500 bg-opacity-5 flex flex-col justify-start items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-64">
                    <div className="w-16 h-16 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-black bg-center bg-cover bg-no-repeat">
                        <img src={studentExpert} alt="postman student expert" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h3 className="text-center text-gray-50 md:text-2xl ml-3">
                        Postman API Fundamentals Student Expert
                    </h3>
                </a>
                <a className="p-6 bg-gray-500 bg-opacity-5 flex flex-col justify-start items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-64">
                    <div className="w-16 h-16 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-black">
                        <img src={ALX} alt="postman student expert" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h3 className="text-center text-gray-50 md:text-2xl ml-3">
                        ALX Professional Foundational Course
                    </h3>
                    <h3 className="text-center primary-color">in progress</h3>
                </a>
                <a className="p-6 bg-gray-500 bg-opacity-5 flex flex-col justify-start items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-64">
                    <div className="w-16 h-16 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-black">

                    </div>
                    <h3 className="text-center text-gray-50 md:text-2xl ml-3">
                        Web.dev - User and Data Privacy
                    </h3>
                </a>
            </div>
        </div>
    )
}

export default Certifications;