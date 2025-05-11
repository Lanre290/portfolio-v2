import bg from './../assets/bg.jpeg'
import Socials from './Socials';

function Footer(){
    return(
        <div id='contact' className="w-full px-3 pt-10 bg-cover bg-center relative h-96 mt-36" style={{backgroundImage: `url(${bg})`}}>
            <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-between items-center" style={{background: "linear-gradient(0deg, #000000 20%, #00000033)", backdropFilter: 'blur(5px)'}}>
            <div className="flex flex-col flex-grow items-center justify-center">
                <text className="primary-color text-2xl mb-7">Contact me: </text>
                    <Socials></Socials>
            </div>

            <h3 className="primary-color text-3xl mb-10">
                &copy; 2025
            </h3>
            </div>
        </div>
    )
}

export default Footer;