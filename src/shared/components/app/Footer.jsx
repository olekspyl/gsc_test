import restriction from '../../../assets/icons/restriction.svg';
import discord from '../../../assets/icons/discord.svg';
import facebook from '../../../assets/icons/facebook.svg';
import x from '../../../assets/icons/x.svg';
import instagram from '../../../assets/icons/instagram.svg';
import youtube from '../../../assets/icons/youtube.svg';
import reddit from '../../../assets/icons/reddit.svg';



const Footer = () => {
  return (
    <footer className='px-23 md:py-12 xl:py-10 pt-5 pb-10 bg-black'>
      <div className='xl:flex xl:justify-between'>
          <div className='flex items-center	flex-col xl:flex-row  justify-center xl:justify-start xl:gap-5'>
        <img src={restriction} alt="restriction" className='flex w-12 md:w-81 md:h-99 xl:w-78 xl:h-24	h-58 mb-4 xl:mb-5 md:mb-45 ' />
        <div className='flex flex-col'> 
            <p className='text-light flex font-normal font-rubik text-footer tracking-normal w-274 md:w-full md:justify-center text-center mb-2 md:text-footerTab md:tracking-tight xl:text-sm xl:font-light xl:mb-1'>STALKER is a registered trademark of GSC GAME WORLD GLOBAL LTD. © 2021 GSC Game World.</p>
        <p className='text-light flex font-normal font-rubik text-rights w-274 md:w-full md:justify-center text-center tracking-tight mb-4 md:text-footerTab md:tracking-tighter md:mb-26	xl:text-sm xl:font-light xl:mb-0'>All rights reserved. All other copyrights and trademarks are the property of their respective owners.
      </p>
        </div>
      </div>
      <ul className='flex gap-3.5 md:gap-5 xl:gap-18 md:mb-42 xl:mb-0 items-center justify-center mb-4'>
        <li className='flex'><img src={discord} alt="discord" className='flex md:w-9 md:h-26 xl:w-5 xl:h-4'/></li>
        <li className='flex'><img src={facebook} alt="facebook" className='flex md:w-9 md:h-9 xl:w-5 xl:h-5'/></li>
        <li className='flex'><img src={x} alt="x" className='flex md:w-9 md:h-9 xl:w-5 xl:h-5'/></li>
        <li className='flex'><img src={instagram} alt="instagram" className='flex md:w-9 md:h-9 xl:w-5 xl:h-5'/></li>
        <li className='flex'><img src={youtube} alt="youtube" className='flex md:w-9 md:h-26 xl:w-5 xl:h-4'/></li>
        <li className='flex'><img src={reddit} alt="reddit" className='flex md:w-9 md:h-9 xl:w-5 xl:h-5'/></li>
      </ul>
      </div>
      
      <ul className='flex flex-wrap justify-center'>
        <li className='px-3 flex'>
          <p className='text-footerEnd text-light font-rubik font-normal md:text-sm'>Press Kit</p>
        </li>
        <li className='px-3 flex'>
          <p className='text-footerEnd text-light font-rubik font-normal md:text-sm'>FAQ</p>
        </li>
        <li className='px-3 flex'>
          <p className='text-footerEnd text-light font-rubik font-normal md:text-sm'>Terms of Use</p>
        </li>
        <li className='px-3 flex'>
          <p className='text-footerEnd text-light font-rubik font-normal md:text-sm'>Privacy Policy</p>
        </li>
      </ul>

      
    </footer>
  )
}

export default Footer;
