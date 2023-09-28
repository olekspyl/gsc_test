import dividerMob from '../../assets/icons/rad-divider-mob.svg';
import divider from '../../assets/icons/rad-divider.svg';
import copy from '../../assets/icons/copy.svg';
import sreenshots from '../../assets/images/screenshots.webp';
import videos from '../../assets/images/videos.webp';
import arts from '../../assets/images/arts.webp';
import logo from '../../assets/images/logo.webp';
import fact from '../../assets/images/fact.webp';
import ost from '../../assets/images/ost.webp';

import ButtonDownload from '../../shared/components/ui/ButtonDownload';


const Home = () => {
  return (
      <main className='mx-5'>
          <section className="pt-10 px-3.5 ">
        <h1 className='text-3xl	text-light font-medium uppercase tracking-tight text-center mb-1 md:mb-5 md:text-tablet xl:mb-5 xl:text-5xl font-oswald'>press kit</h1>
        <div className='flex justify-center	mb-3.5 md:mb-10'> 
          <img src={dividerMob} alt='divider' className='flex md:hidden xl:hidden' />
          <img src={divider} alt='divider' className='hidden md:flex xl:flex' />
        </div>
        {/* -------  CARD SET ------------ */}
          <ul className='flex flex-col md:flex-row md:flex-wrap items-center gap-10 md:gap-60 md:max-w-full md:justify-center xl:w-1044 xl:mx-auto'>
            

          <li className='flex relative flex-col items-center '>
            <img src={sreenshots} alt="screenshots" className='w-292  h-164 md:w-308 md:h-174 flex mb-5' />
              <h3 className='absolute uppercase top-32 md:top-140 text-base	font-medium	 text-light font-oswald'>screenshots</h3>
              <div className='md:flex md:items-center'>
                   <ButtonDownload />
                    <p className='font-normal text-xs	text-greyLight md:flex md:right-55 md:absolute font-rubik text-center	'>(.zip 68 mb)</p>
              </div>
           
            </li>

            <li className='flex relative flex-col items-center '>
            <img src={videos} alt="videos" className='w-292  h-164 md:w-308 md:h-174 flex mb-5' />
              <h3 className='absolute uppercase top-32 md:top-140 text-base	font-medium	 text-light font-oswald'>videos</h3>
              <div className='md:flex md:items-center'>
            <ButtonDownload />
                <p className='font-normal	text-xs	text-greyLight md:flex md:absolute md:right-55 font-rubik text-center'>(.zip 1.5 gb)</p>
                </div>
            </li>           

          <li className='flex flex-col relative items-center '>
            <img src={arts} alt="arts" className='w-292 h-164 md:w-308 md:h-174 flex mb-5' />
              <h3 className='absolute top-140 uppercase text-base	font-medium	 text-light font-oswald'>arts</h3>
              <div className='md:flex md:items-center'>
            <ButtonDownload />
                <p className='font-normal	text-xs	text-greyLight md:absolute md:right-55 font-rubik text-center'>(.zip 128 mb)</p>
                </div>
          </li>
          <li className='flex flex-col relative items-center '>
            <img src={logo} alt="logo" className='w-292 h-164 md:w-308 md:h-174 flex mb-5' />
              <h3 className='absolute top-32 md:top-140 uppercase text-base	font-medium	 text-light font-oswald'>logo</h3>
              <div className='md:flex md:items-center'>
            <ButtonDownload />
                <p className='font-normal	text-xs	text-greyLight md:absolute md:right-55 font-rubik text-center'>(.zip 76.5 kb)</p>
                </div>
          </li>
          <li className='flex flex-col relative items-center '>
            <img src={fact} alt="fact" className='w-292 h-164 md:w-308 md:h-174 flex mb-5' />
              <h3 className='absolute top-32 md:top-140 uppercase text-base	font-medium	 text-light font-oswald'>fact sheet</h3>
              <div className='md:flex md:items-center'>
            <ButtonDownload />
                <p className='font-normal	text-xs	text-greyLight md:absolute md:right-55 font-rubik text-center'>(.zip 128 mb)</p>
                </div>
          </li>
          <li className='relative flex flex-col items-center '>
            <img src={ost} alt="ost" className='w-292 h-164 md:w-308 md:h-174 flex mb-5' />
              <h3 className='absolute top-32 md:top-140 uppercase text-base	font-medium	 text-light font-oswald'>ost</h3>
              <div className='md:flex md:items-center'>
              <ButtonDownload />
                <p className='font-normal	text-xs	text-greyLight md:absolute md:right-55 font-rubik text-center'>(.zip 68 mb)</p>
                </div>
          </li>
        </ul>
      </section>

      {/* ------- CONTACTS ------- */}
      <section className="py-60 md:pb-20 px-3.5">
        <h2 className='uppercase text-2xl	text-center	font-medium	 text-light font-oswald mb-5'>contacts</h2>
        <div className='md:flex md:justify-center md:gap-120'>
          <div className='flex flex-col items-center'>
            <h4 className='text-orange font-rubik text-baseHeight uppercase font-light mb-2 tracking-tightest'  >General Inquiries:</h4>
        <div className='flex mb-5 items-center md:mb-1.5'>
        <p className='text-light font-rubik text-baseHeight font-normal	flex '>info@stalker2.com</p>
              <img src={copy} alt="copy" className='flex' />
            </div>
            <p className='hidden md:flex md:font-rubik md:font-normal	md:text-copied md:text-center md:px-5 md:py-2 md:opacity-60 md:tracking-tight md:text-light md:bg-black md:rounded-[60px] md:border md:border-grey md:border-dashed	 '>Copied</p>
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-orange font-rubik text-baseHeight tracking-tightest uppercase font-light mb-2'>Press Inquiries:</h4>
        <div className='flex items-center md:mb-1.5'>
          <p className='text-light font-rubik text-baseHeight font-normal	flex '>press@stalker2.com</p>
        <img src={copy} alt="copy"  className='flex'/>
            </div>
             <p className='hidden md:flex md:font-rubik md:font-normal	md:text-copied md:text-center md:px-5 md:py-2 md:opacity-60 md:tracking-tight md:text-light md:bg-black md:rounded-[60px] md:border md:border-grey md:border-dashed	 '>Copied</p>
        </div>
        </div>
      </section>
    </main>
      
  )
}

export default Home;


// h1 має бути 40px, 