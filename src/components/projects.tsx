import ProjectTile from "./projectTile";
import connect from "./../assets/connect.png";
import moodmix from './../assets/moodmix.png';
import cgpaCalc from './../assets/cgpa calculator.png';
import Title from "./Title";

const Projects = () => {
  return (
    <div className="flex flex-col w-full md:w-5/6 lg:4/6 xl:3/6 mx-auto">
        <Title text="Projects"></Title>
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full">
            <ProjectTile
                image={connect}
                title="Connect"
                url="https://connect-8784.onrender.com/"
                description="Connect is a social platform, inspired by Facebook, where users share posts, follow friends, message, and interact through likes and comments, making connection effortless."
            ></ProjectTile>
            <ProjectTile
                image={cgpaCalc}
                title="CGPA Calculator"
                url="https://cgpa-calculator-lac.vercel.app/"
                description="The aim of the project is to create an easy-to-use CGPA calculator for college undergraduates where they can predict their own scores and GP at the end of the semester."
            ></ProjectTile>
            <ProjectTile
                image={moodmix}
                title="MoodMix"
                url="https://moodify-w6jn.onrender.com/"
                progress={true}
                description="An ai powered webapp that generates spotify playlist for you based on your mood."
            ></ProjectTile>
            </div>
    </div>
  );
};

export default Projects;