import { Container } from 'react-bootstrap';
import { NavbarSection } from '../components';

const Default = (props) => {
  return (
    <>
      <NavbarSection background={true} />
      <Container>{props.children}</Container>
    </>
  );
};

export default Default;
