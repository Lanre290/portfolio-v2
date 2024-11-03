import Prog from "./skill-prog";
import Title from "./Title";

function Skills(){
    return(
        <div className="flex flex-col w-11/12 md:w-4/6 mx:auto md:mx-0 my-5">
            <Title text="Skills"></Title>
            <div className="w-full bg-gray-500 bg-opacity-5 p-5 gap-5">
                <Prog progress={99.9} text="HTML"></Prog>
                <Prog progress={83} text="CSS"></Prog>
                <Prog progress={85} text="JAVASCRIPT"></Prog>
                <Prog progress={82} text="TYPESCRIPT"></Prog>
                <Prog progress={85} text="PHP"></Prog>
                <Prog progress={83} text="LARAVEL"></Prog>
                <Prog progress={78} text="REACT"></Prog>
                <Prog progress={85} text="PYTHON"></Prog>
                <Prog progress={70} text="NODE JS"></Prog>
            </div>
        </div>
    )
}

export default Skills;