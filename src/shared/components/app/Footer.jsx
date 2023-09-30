import restriction from '@/assets/icons/restriction.svg';
import divider from '@/assets/icons/verticalDivider.svg';
import icons from '../../data/icons';
import Icon from './Icon';

// import FooterItem from './FooterItem';
// const items = [
//   { text: 'Press Kit' },
//   { text: 'FAQ' },
//   { text: 'Terms of Use' },
//   { text: 'Privacy Policy' },
// ];

const Footer = () => {
  return (
    <footer className="px-[23px] md:py-12 xl:py-10 pt-5 pb-10 bg-black">
      <div className="xl:flex xl:justify-between">
        <div className="flex items-center flex-col xl:flex-row justify-center xl:justify-start xl:gap-5">
          <img
            src={restriction}
            alt="restriction"
            className="flex w-12 md:w-[81px] md:h-[99px] xl:w-[78px] xl:h-24 h-[58px] mb-4 xl:mb-5 md:mb-[45px]"
          />
          <div className="flex flex-col">
            <p className="text-light flex font-normal font-rubik text-footer tracking-normal w-[274px] md:w-full md:justify-center text-center mb-2 md:text-footerTab md:tracking-tight xl:text-sm xl:font-light xl:mb-1">
              STALKER is a registered trademark of GSC GAME WORLD GLOBAL LTD. © 2021 GSC Game World.
            </p>
            <p className="text-light flex font-normal font-rubik text-rights w-[274px] md:w-full md:justify-center text-center tracking-tight mb-4 md:text-footerTab md:tracking-tighter md:mb-[42px]	xl:text-sm xl:font-light xl:mb-0">
              All rights reserved. All other copyrights and trademarks are the property of their
              respective owners.
            </p>
          </div>
        </div>
        <ul className="flex gap-3.5 md:gap-5 xl:gap-18 md:mb-42 xl:mb-0 items-center justify-center mb-4">
          {icons.map(({ src, alt, mdH, xlH }, index) => (
            <Icon key={index} src={src} alt={alt} mdH={mdH} xlH={xlH}></Icon>
          ))}
        </ul>
      </div>
      <ul className="md:flex md:justify-center">
        <li>
          <ul className="flex flex-wrap justify-center relative mb-3 md:mb-0">
            <li className="flex ">
              <p className="text-footerEnd text-light font-rubik font-normal md:text-sm cursor-pointer pr-3">
                Press Kit
              </p>
              <img src={divider} alt="divider" className="md:h-[19px]" />
            </li>
            <li className="flex ">
              <p className="text-footerEnd text-light font-rubik font-normal md:text-sm cursor-pointer pl-3">
                FAQ
              </p>
              <img src={divider} alt="divider" className="hidden md:flex md:h-[19px] md:px-3" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-wrap justify-center relative mb-3">
            <li className="flex ">
              <p className="text-footerEnd text-light font-rubik font-normal md:text-sm cursor-pointer pr-3">
                Terms of Use
              </p>
              <img src={divider} alt="divider" className="md:h-[19px]" />
            </li>
            <li className="flex ">
              <p className="text-footerEnd text-light font-rubik font-normal md:text-sm cursor-pointer pl-3">
                Privacy Policy
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
