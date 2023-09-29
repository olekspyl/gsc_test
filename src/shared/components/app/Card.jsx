import PropTypes from 'prop-types';
import ButtonDownload from '../ui/ButtonDownload';
// import mask from '../../../assets/icons/mask.svg';

const Card = ({ src, alt, top, title, size }) => {
  return (
    <li className="flex relative flex-col items-center">
      <img
        src={src}
        alt={`${alt}`}
        className="w-[292px] h-[164px] md:w-[308px] md:h-[174px] flex mb-5"
      />
      <h3
        className={`absolute top-[${top}px] md:top-[140px] uppercase text-base font-medium text-light font-oswald`}
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
  top: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Card;
