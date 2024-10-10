import { CgFacebook } from 'react-icons/cg';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Socials = () => {
    return (
        
        <div className="flex flex-row gap-2 md:gap-x-4 flex-wrap px-2 justify-center">
            <a href='https://web.facebook.com/profile.php?id=100083136165965' target='_blank' className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl border border-primary-color rounded-full primary-color hover-bg-primary-color socials hover:text-gray-50">
            <CgFacebook className="text-xl md:text-2xl"></CgFacebook>
            </a>
            <a href='https://www.linkedin.com/in/ashiru-olanrewaju-219725223' target='_blank' className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl border border-primary-color rounded-full primary-color hover-bg-primary-color socials hover:text-gray-50">
            <BsLinkedin className="text-xl md:text-2xl"></BsLinkedin>
            </a>
            <a href='https://www.instagram.com/lanre_290/' target='_blank' className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl border border-primary-color rounded-full primary-color hover-bg-primary-color socials hover:text-gray-50">
            <BsInstagram className="text-xl md:text-2xl"></BsInstagram>
            </a>
            <a href='mailto:lanre2967@gmail.com' target='_blank' className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl border border-primary-color rounded-full primary-color hover-bg-primary-color socials hover:text-gray-50">
            <GoMail className="text-xl md:text-2xl"></GoMail>
            </a>
            <a href='https://github.com/Lanre290' target='_blank' className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl border border-primary-color rounded-full primary-color hover-bg-primary-color socials hover:text-gray-50">
            <BsGithub className="text-xl md:text-2xl"></BsGithub>
            </a>
            <a href='https://x.com/lanre2967' target='_blank' className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl border border-primary-color rounded-full primary-color hover-bg-primary-color socials hover:text-gray-50">
            <BsTwitterX className="text-xl md:text-2xl"></BsTwitterX>
            </a>
        </div>
    )
}

export default Socials;