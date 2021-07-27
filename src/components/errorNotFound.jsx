import Lottie from 'react-lottie';
import NotFound from '../assets/animations/404_not_found.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFound,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ErrorNotFound = () => (
  <>
    <Lottie options={defaultOptions} height='100vh' width='100vw' />
  </>
);

export default ErrorNotFound;
