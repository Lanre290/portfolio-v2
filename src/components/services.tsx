import { CgScreen, CgWebsite } from "react-icons/cg";
import ServiceTile from "./serviceTile";
import Title from "./Title";
import { TbApi } from "react-icons/tb";
import { MdApps } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

function Services(){
    


    return(
        <div id="services" className="w-full md:w-5/6 lg:4/6 xl:3/6 mx:auto md:mx-0">
            <Title text="Services"></Title>
            <div className="py-10 flex flex-row flex-wrap items-center justify-center w-full gap-2">
                <ServiceTile icon={<CgWebsite className="text-gray-50 text-5xl"></CgWebsite>} text="Full-stack web development"></ServiceTile>
                <ServiceTile icon={<TbApi className="text-gray-50 text-5xl"></TbApi>} text="RESTful-API development and deployment"></ServiceTile>
                <ServiceTile icon={<CgScreen className="text-gray-50 text-5xl"></CgScreen>} text="Frontend development"></ServiceTile>
                <ServiceTile icon={<MdApps className="text-gray-50 text-5xl"></MdApps>} text="Single Page Applications"></ServiceTile>
                <ServiceTile icon={<GrUserAdmin className="text-gray-50 text-5xl"></GrUserAdmin>} text="Building Content Management Systems (CMS)"></ServiceTile>
            </div>
        </div>
    )
}

export default Services;