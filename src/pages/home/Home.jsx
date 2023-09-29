import divider from '../../assets/icons/rad-divider-mob.svg';
import copy from '../../assets/icons/copy.svg';
import sreenshots from '../../assets/images/screenshots.webp';
import videos from '../../assets/images/videos.webp';
import arts from '../../assets/images/arts.webp';
import logo from '../../assets/images/logo.webp';
import fact from '../../assets/images/fact.webp';
import ost from '../../assets/images/ost.webp';

import styles from './scss/Home.module.scss'
import ButtonDownload from '../../shared/components/ui/ButtonDownload';


const Home = () => {
  return (
    <main className={styles.home}>
        <section className={styles.home_section}>
          <h1 className={styles.mainTitle}>press kit</h1>
          <div className={styles.dividerContainer}> 
            <img src={divider} alt='divider' className='flex md:w-[365px] md:h-[16px]' />
          </div>

        {/* -------  CARD SET ------------ */}
          <ul className={styles.cardSetList}>
            <li className={styles.cardItem}>
              <img src={sreenshots} alt="screenshots" className={styles.cardImg} />
              <h3 className={styles.cardTitle}>screenshots</h3>
              <div className={styles.btn_textCard}>
                <ButtonDownload />
                  <p className={styles.cardText}>(.zip 68 mb)</p>
              </div>
            </li>
            <li className={styles.cardItem}>
            <img src={videos} alt="videos" className={styles.cardImg} />
              <h3 className={styles.cardTitle}>videos</h3>
              <div className={styles.btn_textCard}>
            <ButtonDownload />
                <p className={styles.cardText}>(.zip 1.5 gb)</p>
                </div>
            </li>           
          <li className={styles.cardItem}>
            <img src={arts} alt="arts" className={styles.cardImg} />
              <h3 className={styles.cardTitleArts}>arts</h3>
              <div className={styles.btn_textCard}>
            <ButtonDownload />
                <p className={styles.cardText}>(.zip 128 mb)</p>
                </div>
          </li>
          <li className={styles.cardItem}>
            <img src={logo} alt="logo" className={styles.cardImg} />
              <h3 className={styles.cardTitle}>logo</h3>
              <div className={styles.btn_textCard}>
            <ButtonDownload />
                <p className={styles.cardText}>(.zip 76.5 kb)</p>
                </div>
          </li>
          <li className={styles.cardItem}>
            <img src={fact} alt="fact" className={styles.cardImg} />
              <h3 className={styles.cardTitle}>fact sheet</h3>
              <div className={styles.btn_textCard}>
            <ButtonDownload />
                <p className={styles.cardText}>(.zip 128 mb)</p>
                </div>
          </li>
          <li className={styles.cardItem}>
            <img src={ost} alt="ost" className={styles.cardImg} />
              <h3 className={styles.cardTitle}>ost</h3>
              <div className={styles.btn_textCard}>
              <ButtonDownload />
                <p className={styles.cardText}>(.zip 68 mb)</p>
                </div>
          </li>
        </ul>
      </section>

      {/* ------- CONTACTS ------- */}
      <section className={styles.contacts}>
          <h2 className={styles.contacts_title}>contacts</h2>
          <div className={styles.contacts_container}>
             <div className={styles.inquiryContainer}>
                <h4 className={styles.genInqTitle}>General Inquiries:</h4>
                <div className={styles.post_copyContainer}>
                  <p className={styles.post}>info@stalker2.com</p>
                  <img src={copy} alt="copy" className={styles.flexContainer} />
                </div>
                <p className={styles.textCopied}>Copied</p>
             </div>
          <div className={styles.inquiryContainer}>
        <h4 className={styles.pressInqTitle}>Press Inquiries:</h4>
        <div className={styles.press_copyContainer}>
          <p className={styles.post}>press@stalker2.com</p>
        <img src={copy} alt="copy"  className={styles.flexContainer}/>
            </div>
             <p className={styles.textCopied}>Copied</p>
        </div>
        </div>
      </section>
    </main>
      
  )
}

export default Home;


