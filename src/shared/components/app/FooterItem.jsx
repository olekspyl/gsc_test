import PropTypes from 'prop-types';

const FooterItem = ({ text }) => {
  return (
    <li className="px-3 flex">
      <p className="text-footerEnd text-light font-rubik font-normal md:text-sm">{text}</p>
    </li>
  );
};

FooterItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FooterItem;
