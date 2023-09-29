import close from '@/assets/icons/close.svg';
import logo from '@/assets/icons/logo-gsc.svg';
import PropTypes from 'prop-types';

const NavBar = ({ closeMenu }) => {
  return (
    <section className="bg-black px-3.5 min-h-screen">
      <div className="flex justify-between">
        <img src={logo} alt="logo-gsc" />
        <img src={close} alt="close" className="cursor-pointer" onClick={closeMenu} />
      </div>
      <nav className="flex justify-center mt-[166px]">
        <ul className="flex flex-col text-center gap-4">
          <li className="uppercase text-light text-base font-light font-oswald opacity-70">
            <a className="" href="/">
              h.o.m.e.
            </a>
          </li>
          <li className="uppercase text-light text-base font-light font-oswald opacity-70">
            <a className="" href="/">
              d.i.g.i.t.a.l.
            </a>
          </li>
          <li className="uppercase text-light text-base font-light font-oswald opacity-70">
            <a className="" href="/">
              p.h.y.s.i.c.a.l.
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

NavBar.propTypes = {
  closeMenu: PropTypes.bool.isRequired,
};

export default NavBar;
