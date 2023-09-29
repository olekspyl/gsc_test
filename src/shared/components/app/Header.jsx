import logo from '../../../assets/icons/logo-gsc.svg';
import menu from '../../../assets/icons/menu.svg';
import lang from '../../../assets/icons/lang.svg';
import logo2 from '../../../assets/images/logo_S2.png';
import divider from '../../../assets/icons/header_divider.svg';
import styles from './scss/Header.module.scss';
import ButtonPreorder from '../ui/ButtonPreorder';


const Header = ({open}) => {

    const onOpenClick = () => {
        open(true);
    }

        return (
            <header className={styles.header}>
                <section className={styles.header_section}>
                    <div className={styles.header_container}>
                        <div className={styles.flexContainer}>
                            <div className={styles.header_logoContainer}>
                                <img src={logo} alt='logo-gsc' className={styles.logo_gsc} />
                                <img src={logo2} alt='alt-logo' className={styles.logo_stalker} />
                                <div>
                                    <p className={styles.available}>available</p>
                                    <img src={divider} alt='divider' className={styles.hidden_flex}></img>
                                    <time dateTime="2023" className={styles.time}>2023</time>
                                </div>
                            </div>
                            <nav className={styles.flexContainer}>
                                <ul className={styles.navContainer}>
                                    <li className={styles.navItem}>
                                        <a className={styles.hidden_flex} href='/'> h.o.m.e.</a>
                                    </li>
                                    <li className={styles.navItem}>
                                        <a className={styles.hidden_flex} href='/'>d.i.g.i.t.a.l.</a>
                                    </li>
                                    <li className={styles.navItem}>
                                        <a className={styles.hidden_flex} href='/'>p.h.y.s.i.c.a.l.</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.hidden_flex}>
                            <ButtonPreorder />
                        </div>
                        <div className={styles.menu_lang}>
                            <img src={lang} alt='lang' className={styles.lang} />
                            <img src={menu} alt='menu' className={styles.menu} onClick={onOpenClick} />
                        </div>
                    </div>
                </section>
            </header>

        )  

}

export default Header;
// background: linear-gradient(180deg, rgba(27, 25, 29, 0.00) 6.77%, #1B191D 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
