import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface prog{
    text:string;
    image:string;
    index:number;
}

function Skill(data:prog){
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return(
        <motion.div
      ref={ref}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: data.index * 0.05 }}
      className="md:p-4 shadow-lg rounded-xl bg-transparent"
    >
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-transparent cursor-pointer border-2 border-primary-color hover:bg-primary-color flex flex-col justify-center items-center hover:bg-opacity-10 hover:bg-gray-200 transition duration-300 ease-in-out">
            <div className="flex flex-col md:flex-row gap-x-2 items-center">
                <img src={data.image} alt={data.text} className="w-8 h-8"></img>
                <h3 className="text-sm md:text-lg primary-color">{data.text}</h3>
            </div>
        </div>
    </motion.div>
    )
}

export default Skill