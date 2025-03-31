import Title from "./Title";
import dp from "./../assets/dp.jpg";

function Bio() {
  return (
    <div
      id="about"
      className="flex flex-col w-full px-2 md:w-5/6 lg:4/6 xl:3/6 -mt-5 mx-auto"
    >
      <Title text="ABOUT ME"></Title>
      <div className="flex flex-col md:flex-row">
        <div className="py-10 bg-center bg-cover bg-no-repeat flex flex-row items-center justify-center w-full lg:w-1/2 mx:auto md:mx-0">
          <div className="flex flex-col">
            <div
              className="rounded-xl min-w-36 w-24 h-24 lg:w-36 lg:h-36 m-1 bg-transparent object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
            <div
              className="rounded-xl min-w-36 w-24 h-24 lg:w-36 lg:h-36 m-1 bg-transparent object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
            <div
              className="rounded-xl w-24 h-24 lg:w-36 lg:h-36 bg-transparent m-1 object-cover"
              style={{
                backgroundImage: `url(${dp})`,
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundPositionX: "-50%",
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col h-full items-start justify-center gap-y-5 lg:w-1/2 flex-grow">
          <h3 className="px-2 text-gray-50 text-xl text-center md:text-left">
            I'm a full-stack web developer based in Lagos, Nigeria,
            specializing in building and designing web applications for clients
            worldwide. I work with HTML, CSS, JavaScript, PHP, React, and
            Laravel, with additional experience in Node.js. I focus on
            creating scalable, user-friendly, and high-performing solutions,
            ensuring seamless functionality and a great user experience across
            the board.
          </h3>
          <a
            href="https://docs.google.com/document/d/1slr6MgJUl1MkIBgwV41CUlFgQdDtoFiCTE9VMIrfDAs/edit?tab=t.0#heading=h.x8fm1uorkbaw"
            className="bg-primary-color text-gray-50 cursor-pointer px-6 py-2 rounded-lg w-fit md:ml-2 mx-auto md:mx-0"
            target="_blank"
          >
            View my CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bio;
