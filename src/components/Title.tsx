import { Fade } from "react-awesome-reveal";

interface title{
    text:string;
}

const Title = (prop:title) => {
    return (
        <div className="div flex flex-col w-fit my-5 gap-y-2">
            <Fade direction="up" duration={500} delay={200} className="text-center primary-color text-xl md:text-3xl"><h3>{prop.text}</h3></Fade>
            <Fade direction="left" duration={500} delay={500} className="bg-primary-color-light h-1 rounded-md w-52 mx-auto">
                <div className="h-full w-3/4 rounded-md bg-primary-color mx-auto"></div>
            </Fade>
        </div>
    )
}

export default Title;