import { NavbarSection } from "../components";

const LandingPage = (props) => {
  return (
    <>
    <NavbarSection />
    <div className='LandingPage container'>{props.children}</div>
   </> 
  );
};

export default LandingPage;
