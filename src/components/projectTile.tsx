import { BsArrowRight } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

interface prop {
    image:any;
    title:string;
    description:string;
    url:string;
    progress?:boolean;
}

const ProjectTile = (prop:prop) => {
    return (
        <div className="bg-gray-500 bg-opacity-5 flex flex-col justify-center items-center w-2/3 md:w-2/5 h-max">
            <img src={prop.image} alt={prop.title} className="w-full min-h-44 h-fit" />
            <h3 className="text-center text-gray-50 text-2xl mx-auto my-3 px-6">{prop.title}</h3>
            <h3 className="text-center text-gray-50 mx-auto px-6 pb-4">{prop.description}</h3>
            {
                prop.progress && <h3 className="text-center primary-color flex flex-row items-center gap-x-2 mb-5">Need to be approved <MdVerified></MdVerified> </h3>
            }
            <a href={prop.url} target="_blank" className="w-full flex justify-center items-center py-3 cursor-pointer primary-color hover:bg-gray-50 hover:bg-opacity-10 gap-x-3">
                View <BsArrowRight className="text-2xl"></BsArrowRight>
            </a>
        </div>
    )
}


export default ProjectTile;