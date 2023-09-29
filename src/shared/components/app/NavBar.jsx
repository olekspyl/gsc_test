import close from '../../../assets/icons/close.svg'
import logo from '../../../assets/icons/logo-gsc.svg'
import styles from './scss/NavBar.module.scss'



const NavBar = ({open}) => {
    const onClosedClick = () => {
        open(false);
    }


  return (
      <section className={styles.navBar}>
          <div className={styles.logoContainer}>
              <img src={logo} alt="logo-gsc" />
              <img src={close} alt="close" onClick={onClosedClick} />
          </div>
          <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a className='' href='/'> h.o.m.e.</a>
                    </li>
                    <li className={styles.navItem}>
                            <a className='' href='/'>d.i.g.i.t.a.l.</a>
                    </li>
                    <li className={styles.navItem}>
                        <a className='' href='/'>p.h.y.s.i.c.a.l.</a>
                        </li>
                </ul>
            </nav>
    </section>
  )
}

export default NavBar;
