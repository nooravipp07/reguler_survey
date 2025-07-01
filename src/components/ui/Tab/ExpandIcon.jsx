import Image from 'next/image';
import PropTypes from 'prop-types';

const ExpandIcon = ({ isActive, plain }) => {
  const Plus = plain ? '/svg/plus-plain.svg' : '/svg/plus.svg';
  const Minus = plain ? '/svg/minus-plain.svg' : '/svg/minus.svg';

  return <Image src={isActive ? Minus : Plus} alt="" width={20} height={20} />;
};

ExpandIcon.defaultProps = {
  isActive: false,
  plain: false,
};

ExpandIcon.propTypes = {
  isActive: PropTypes.bool,
  plain: PropTypes.bool,
};

export default ExpandIcon;
