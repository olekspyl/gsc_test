import restriction from '../../../assets/icons/restriction.svg';
import discord from '../../../assets/icons/discord.svg';
import facebook from '../../../assets/icons/facebook.svg';
import x from '../../../assets/icons/x.svg';
import instagram from '../../../assets/icons/instagram.svg';
import youtube from '../../../assets/icons/youtube.svg';
import reddit from '../../../assets/icons/reddit.svg';
import styles from './scss/Footer.module.scss'



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
          <div className={styles.footer_leftSide}>
        <img src={restriction} alt="restriction" className={styles.restriction} />
        <div className={styles.footer_innerContainer}> 
            <p className={styles.trademark}>STALKER is a registered trademark of GSC GAME WORLD GLOBAL LTD. © 2021 GSC Game World.</p>
        <p className={styles.rights}>All rights reserved. All other copyrights and trademarks are the property of their respective owners.
      </p>
        </div>
      </div>
      <ul className={styles.media}>
          <li className={styles.list}><img src={discord} alt="discord" className={styles.asymIcons } /></li>
          <li className={styles.list}><img src={facebook} alt="facebook" className={styles.symIcons } /></li>
        <li className={styles.list}><img src={x} alt="x" className={styles.symIcons }/></li>
        <li className={styles.list}><img src={instagram} alt="instagram" className={styles.symIcons }/></li>
        <li className={styles.list}><img src={youtube} alt="youtube" className={styles.asymIcons }/></li>
        <li className={styles.list}><img src={reddit} alt="reddit" className={styles.symIcons }/></li>
      </ul>
      </div>
      <ul className={styles.footer_endList}>
        <li className={styles.footer_endItem}>
          <p className={styles.footer_itemText}>Press Kit</p>
        </li>
        <li className={styles.footer_endItem}>
          <p className={styles.footer_itemText}>FAQ</p>
        </li>
        <li className={styles.footer_endItem}>
          <p className={styles.footer_itemText}>Terms of Use</p>
        </li>
        <li className={styles.footer_endItem}>
          <p className={styles.footer_itemText}>Privacy Policy</p>
        </li>
      </ul>

      
    </footer>
  )
}

export default Footer;
