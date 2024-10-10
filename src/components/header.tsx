import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BiBookmark, BiUserCircle } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { HiMiniBars2 } from "react-icons/hi2";
import { PiPhone } from "react-icons/pi";
import { SlHome } from "react-icons/sl";
import Socials from "./Socials";

function Header() {
    const [offsetY, setOffsetY] = useState(0);
    const [previousScrollY, setPreviousScrollY] = useState(0);
    const [isTopDiv, setIsTopDiv] = useState(false);
    window.onscroll = () => {
        let scrollpos = Math.floor(window.scrollY);
        if(scrollpos < previousScrollY){
            setIsTopDiv(false);
        }
        else{
            setIsTopDiv(true);
        }
        setOffsetY(scrollpos);
        setPreviousScrollY(scrollpos);
    }
  return (
    <div className="w-screen h-screen relative sm:h-screen home-bg">
      {offsetY > 200 && isTopDiv && (
        <div
          className="fixed top-14 z-50"
          style={{ left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <Fade
            className="flex flex-row justify-center shadow-lg rounded-3xl p-6 backdrop-blur-3xl bg-black bg-opacity-50"
            direction="down"
            duration={500}
            style={{
                backdropFilter: 'blur(5px)'
            }}
          >
            <div className="flex flex-row w-full">
              <a
                href="#home"
                className="cursor-pointer text-5xl mr-5 header-links text-gray-400"
              >
                <SlHome className="hover-primary-color"></SlHome>
              </a>
              <a
                href="#services"
                className="cursor-pointer text-5xl text-gray-400 mr-5 header-links"
              >
                <BiBookmark className="hover-primary-color"></BiBookmark>
              </a>
              <a
                href="#contact"
                className="cursor-pointer text-5xl text-gray-400 mr-5 header-links"
              >
                <PiPhone className="hover-primary-color"></PiPhone>
              </a>
            </div>
          </Fade>
        </div>
      )}

      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-screen h-full flex flex-col justify-between backdrop-blur-2xl"
        style={{ background: "linear-gradient(0deg, #000000 20%, #00000033)", backdropFilter: 'blur(5px)' }}
      >
        <div className="flex flex-row justify-between w-full lg:w-4/5 xl:w-2/3 mx-auto h-20 items-center px-4">
          <div className="flex flex-row w-fit items-center text-3xl font-bold gap-x-2">
            <BiUserCircle className="primary-color text-5xl"></BiUserCircle>
            <span>
              <span className="primary-color">S</span>
              <span className="text-gray-50">heriff</span>
            </span>
          </div>
          <div className="hidden md:flex flex-row justify-evenly flex-grow md:ml-10 lg:ml-24 xl:ml-40">
            <a
              href=""
              className="text-xl w-fit cursor-pointer text-gray-50 hover-primary-color"
            >
              HOME
            </a>
            <a
              href=""
              className="text-xl w-fit cursor-pointer text-gray-50 hover-primary-color"
            >
              ABOUT
            </a>
            <a
              href=""
              className="text-xl w-fit cursor-pointer text-gray-50 hover-primary-color"
            >
              SERVICES
            </a>
            <a
              href=""
              className="text-xl w-fit cursor-pointer text-gray-50 hover-primary-color"
            >
              CONTACT
            </a>

            <a href="tel:+2349164187495" className="flex flex-row ml-10">
              <PiPhone className="primary-color text-3xl"></PiPhone>
              <span className="primary-color">+234 9164-187-495</span>
            </a>
          </div>
          <div className="flex md:hidden cursor-pointer">
            <HiMiniBars2 className="primary-color text-3xl"></HiMiniBars2>
          </div>
        </div>

        <div className="flex flex-col flex-grow w-full md:w-4/6 lg:w-3/6 items-center justify-center mx-auto gap-y-5">
          <Fade
            direction="up"
            duration={500}
            delay={500}
            className="text-3xl md:text-5xl"
          >
            <span>
              <span className="text-gray-50">Hi, I am</span>
              <span className="primary-color">&nbsp;Ashiru Sheriff</span>
            </span>
          </Fade>
          <h3 className="text-center text-gray-50 text-xl px-2">
            A Professional Web developer and passionate problem solver. I
            combine my creative problem solving skills to solve real world
            problems by building long-lasting, efficient and visually appealing
            websites.
          </h3>

          <Socials></Socials>
        
        </div>
      </div>
    </div>
  );
}

export default Header;
