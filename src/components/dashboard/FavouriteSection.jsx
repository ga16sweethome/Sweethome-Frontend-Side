import { ProjectCard } from '../../components';
import CardLoading from '../loading/CardLoading';

const FavouriteSection = () => {
  return (
    <div className='favouriteSection row g-5 mb-5 px-5'>
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>
  );
};

export default FavouriteSection;
