import rightSide from '../../../assets/icons/btn_side_right.svg';
import leftSide from '../../../assets/icons/btn_side_left.svg';
import trolley from '../../../assets/icons/trolley.svg';

const ButtonPreorder = () => {
  return (
    <button
      className="hidden xl:flex xl:relative xl:items-center xl:bg-light xl:h-[39.5px]"
      type="button"
    >
      <img className="hidden xl:flex xl:absolute xl:-left-10" src={leftSide} alt="left-side-btn" />
      <img className="hidden xl:flex xl:absolute xl:-left-8" src={trolley} alt="trolley" />
      <p className="hidden xl:flex xl:pl-2.5 xl:text-base xl:uppercase xl:font-medium xl:text-blackText font-oswald">
        preorder now
      </p>
      <img
        className="hidden xl:flex xl:absolute xl:left-[110px]"
        src={rightSide}
        alt="right-side-btn"
      />
    </button>
  );
};

export default ButtonPreorder;
