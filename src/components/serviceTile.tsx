import { ReactElement } from "react";

interface services{
    icon:ReactElement;
    text:string;
}

const ServiceTile = (prop:services) => {
    return(
        <div className="p-6 bg-gray-500 bg-opacity-5 flex flex-col justify-start items-center w-2/3 md:w-1/3 lg:w-1/4 h-auto md:h-64">
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-black">
                {prop.icon}
            </div>
            <h3 className="text-center text-gray-50 md:text-2xl ml-3">
            {prop.text}
            </h3>
        </div>
    )
}

export default ServiceTile;