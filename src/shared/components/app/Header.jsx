import logo from '../../../assets/icons/logo-gsc.svg';
import menu from '../../../assets/icons/menu.svg';
import lang from '../../../assets/icons/lang.svg';
import logo2 from '../../../assets/images/logo_S2.png';
import divider from '../../../assets/icons/header_divider.svg';
import rightSide from '../../../assets/icons/btn_side_right.svg';
import leftSide from '../../../assets/icons/btn_side_left.svg';
import trolley from '../../../assets/icons/trolley.svg'

const Header = () => {
    return (
      <header className='mx-5'>
        <section className="px-3.5 bg-gradient-to-b from-#181512-500 to-#181512-0">
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                <div className='xl:flex items-center xl:mr-60'>
                    <img src={logo} alt='logo-gsc' className='flex xl:mr-5'/>
                        <img src={logo2} alt='alt-logo' className='hidden xl:flex xl:h-9 xl:w-106 xl:mr-4'></img>
                        <div>
                            <p className='hidden xl:flex xl:uppercase xl:text-white xl:text-xs xl:font-normal'>available</p>
                            <img src={divider} alt='divider' className='hidden xl:flex'></img>
                            <time dateTime="2023" className='hidden xl:flex xl:uppercase xl:text-orange xl:text-sm xl:font-bold'>2023</time>
                        </div>
                    </div>
                    <nav className='flex'>
                        <ul className='hidden xl:flex xl:gap-5 xl:items-center'>
                            <li className='hidden xl:flex xl:uppercase xl:text-light xl:text-base xl:font-light font-oswald opacity-70'>
                                <a className='hidden xl:flex' href='/'> h.o.m.e.</a>
                            </li>
                            <li className='hidden xl:flex xl:uppercase xl:text-light xl:text-base xl:font-light font-oswald opacity-70'>
                                 <a className='hidden xl:flex' href='/'>d.i.g.i.t.a.l.</a>
                            </li>
                            <li className='hidden xl:flex xl:uppercase xl:text-light xl:text-base xl:font-light font-oswald opacity-70'>
                                <a className='hidden xl:flex' href='/'>p.h.y.s.i.c.a.l.</a>
                                </li>
                        </ul>
                        </nav>
                        </div>
                    <div className='hidden xl:flex'>
                         <button className='hidden xl:flex xl:relative xl:items-center xl:bg-light' type='button'>
                        <img className='hidden xl:flex xl:absolute xl:-left-10' src={leftSide} alt='left-side-btn' />
                        <img className='hidden xl:flex xl:absolute xl:-left-8' src={trolley} alt='trolley'/>
                            <p className='hidden xl:flex xl:pl-2.5 xl:text-base xl:uppercase xl:font-medium xl:text-blackText font-oswald'>preorder now</p></button>
                         <img className='hidden xl:block' src={rightSide} alt='right-side-btn' />
                    </div>
                <div className='flex gap-4 xl:hidden'>
                    <img src={lang} alt='lang' className='hidden md:flex xl:hidden' />    
                    <img src={menu} alt='menu' className=' md:flex xl:hidden'/>
                </div>
            </div>
        </section>
      </header>
      
  )
}

export default Header
// background: linear-gradient(180deg, rgba(27, 25, 29, 0.00) 6.77%, #1B191D 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
