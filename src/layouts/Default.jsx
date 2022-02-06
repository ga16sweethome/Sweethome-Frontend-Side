import { Container } from 'react-bootstrap';

const Default = (props) => {
  return (
    <>
      <Container>{props.children}</Container>
    </>
  );
};

export default Default;
