import PropTypes from 'prop-types';

const Icon = ({ src, alt, mdH, xlH }) => {
  return (
    <li className="flex">
      <img src={src} alt={`${alt}`} className={`flex md:w-9 md:h-${mdH} xl:w-5 xl:h-${xlH}`} />
    </li>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  mdH: PropTypes.string.isRequired,
  xlH: PropTypes.string.isRequired,
};

export default Icon;
