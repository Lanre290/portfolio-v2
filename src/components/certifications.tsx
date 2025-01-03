import Title from "./Title";
import studentExpert from "./../assets/student expert.png";
import ALX from "./../assets/alx.jpeg";
import web_dev from "./../assets/web.dev.svg";
import { BsArrowRight } from "react-icons/bs";

function Certifications() {
  return (
    <div className="flex flex-col w-full md:w-5/6 lg:4/6 xl:3/6 mb-24 gap-y-7">
      <Title text="Certifications"></Title>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        <a
          href="https://badgr.com/public/assertions/JmZwwo3gQnGxA1eXBBd-0g?identity__email=lanre2967@gmail.com"
          target="_blank"
          className="bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-80"
        >
          <div className="w-16 h-16 min-w-16 min-h-16 md:w-28 md:h-28 md:min-w-28 md:min-h-28 rounded-full flex items-center justify-center bg-black bg-center bg-cover bg-no-repeat mt-3">
            <img
              src={studentExpert}
              alt="postman student expert"
              className="w-full h-full min-w-full min-h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-center text-gray-50 md:text-2xl ml-3 p-2 py-0">
            Postman API Fundamentals Student Expert
          </h3>
          <h3 className="text-center primary-color">Completed</h3>
          <a
            href={'https://badgr.com/public/assertions/JmZwwo3gQnGxA1eXBBd-0g?identity__email=lanre2967@gmail.com'}
            target="_blank"
            className="w-full flex justify-center items-center py-3 cursor-pointer primary-color hover:bg-gray-50 hover:bg-opacity-10 gap-x-3"
          >
            View <BsArrowRight className="text-2xl"></BsArrowRight>
          </a>
        </a>
        <a
          href="https://intranet.alxswe.com/certificates/sEGyJPLeBh"
          target="_blank"
          className="bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-80"
        >
          <div className="w-16 h-16 min-w-16 min-h-16 md:w-28 md:h-28 md:min-w-28 md:min-h-28 rounded-full flex items-center justify-center bg-black bg-center bg-cover bg-no-repeat mt-3">
            <img
              src={ALX}
              alt="postman student expert"
              className="w-full h-full min-w-full min-h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-center text-gray-50 md:text-2xl ml-3 p-2 py-0">
            ALX Professional Foundational Course
          </h3>
          <h3 className="text-center primary-color">Completed</h3>
          <a
            href={'https://intranet.alxswe.com/certificates/sEGyJPLeBh'}
            target="_blank"
            className="w-full flex justify-center items-center py-3 cursor-pointer primary-color hover:bg-gray-50 hover:bg-opacity-10 gap-x-3"
          >
            View <BsArrowRight className="text-2xl"></BsArrowRight>
          </a>
        </a>
        <a className="bg-gray-500 bg-opacity-5 flex flex-col justify-between items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-80">
          <div className="w-16 h-16 min-w-16 min-h-16 md:w-28 md:h-28 md:min-w-28 md:min-h-28 rounded-full flex items-center justify-center bg-black bg-center bg-cover bg-no-repeat mt-3">
            <img
              src={web_dev}
              alt="Google certification"
              className="w-full h-full min-w-full min-h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-center text-gray-50 md:text-2xl ml-3 p-2 py-0">
            Google (Web.dev) - User and Data Privacy
          </h3>
          <h3 className="text-center primary-color">Completed</h3>
          <a
            href={'#'}
            target="_blank"
            className="w-full flex justify-center items-center py-3 cursor-pointer primary-color hover:bg-gray-50 hover:bg-opacity-10 gap-x-3"
          >
            View <BsArrowRight className="text-2xl"></BsArrowRight>
          </a>
        </a>
      </div>
    </div>
  );
}

export default Certifications;
