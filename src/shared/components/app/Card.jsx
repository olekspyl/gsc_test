import PropTypes from 'prop-types';
import ButtonDownload from '../ui/ButtonDownload';
import styles from './Card.module.css';

const Card = ({ src, alt, title, size }) => {
  return (
    <li className="flex flex-col items-center relative">
      <div className="flex relative mb-5">
        <img
          src={src}
          alt={`${alt}`}
          className="w-[292px] h-[164px] md:w-[308px] md:h-[174px] flex "
        />
        <div className={`absolute inset-0 w-full h-full ${styles['card-mask']}`}></div>
      </div>
      <h3
        className={`absolute top-[128px] md:top-[140px] uppercase text-base font-medium text-light font-oswald`}
      >
        {title}
      </h3>
      <div className="md:flex md:items-center">
        <ButtonDownload />
        <p className="font-normal text-xs text-greyLight md:absolute md:right-[5px] font-rubik text-center">
          (.zip {size})
        </p>
      </div>
    </li>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Card;
