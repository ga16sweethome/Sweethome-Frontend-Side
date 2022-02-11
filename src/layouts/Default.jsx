import { Footer, NavbarSection } from '../components';

const Default = (props) => {
  return (
    <>
      <NavbarSection background={true} />
      <div className='mt-5'>{props.children}</div>
      <Footer />
    </>
  );
};

export default Default;
