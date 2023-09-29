import PropTypes from 'prop-types';

import logo from '@/assets/icons/logo-gsc.svg';
import menu from '@/assets/icons/menu.svg';
import lang from '@/assets/icons/lang.svg';
import logo2 from '@/assets/images/logo_S2.png';
import divider from '@/assets/icons/header_divider.svg';
import ButtonPreorder from '../ui/ButtonPreorder';

const Header = ({ toggleMenu }) => {
  return (
    <header className="bg-header">
      <section className="mx-5 px-3.5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="xl:flex items-center xl:mr-[60px]">
              <img src={logo} alt="logo-gsc" className="flex xl:mr-5" />
              <img src={logo2} alt="alt-logo" className="hidden xl:flex xl:h-9 xl:w-106 xl:mr-4" />
              <div>
                <p className="hidden xl:flex xl:uppercase xl:text-white xl:text-xs xl:font-normal">
                  available
                </p>
                <img src={divider} alt="divider" className="hidden xl:flex"></img>
                <time
                  dateTime="2023"
                  className="hidden xl:flex xl:uppercase xl:text-orange xl:text-sm xl:font-bold"
                >
                  2023
                </time>
              </div>
            </div>
            <nav className="flex">
              <ul className="hidden xl:flex xl:gap-5 xl:items-center">
                <li className="hidden xl:flex xl:uppercase xl:text-light xl:text-base xl:font-light font-oswald opacity-70">
                  <a className="hidden xl:flex" href="/">
                    h.o.m.e.
                  </a>
                </li>
                <li className="hidden xl:flex xl:uppercase xl:text-light xl:text-base xl:font-light font-oswald opacity-70">
                  <a className="hidden xl:flex" href="/">
                    d.i.g.i.t.a.l.
                  </a>
                </li>
                <li className="hidden xl:flex xl:uppercase xl:text-light xl:text-base xl:font-light font-oswald opacity-70">
                  <a className="hidden xl:flex" href="/">
                    p.h.y.s.i.c.a.l.
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden xl:flex">
            <ButtonPreorder />
          </div>
          <div className="flex gap-4 xl:hidden">
            <img src={lang} alt="lang" className="hidden md:flex xl:hidden cursor-pointer" />
            <img
              src={menu}
              alt="menu"
              className="md:flex xl:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
// background: linear-gradient(180deg, rgba(27, 25, 29, 0.00) 6.77%, #1B191D 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
