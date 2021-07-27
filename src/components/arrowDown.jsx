import Lottie from 'react-lottie';
import arrowDown from '../assets/animations/arrow-down.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: arrowDown,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ArrowDown = ({ width, height }) => (
  <Lottie options={defaultOptions} height={height} width={width} />
);

export default ArrowDown;
