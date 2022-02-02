import {
  Accordion,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from 'react-bootstrap';

const colorVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

function BootstrapComponents() {
  return (
    <Container>
      <h1 className='text-center my-5'> React-bootstrap Theming </h1>

      {/* === FORMS === */}
      <section className='mb-3'>
        <h2> Forms </h2>
        <Form>
          <Row className='mb-3'>
            <Col>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password' />
              </Form.Group>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Group>
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type='file' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Default Select input example</Form.Label>
                <Form.Select aria-label='Default select example'>
                  <option>Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
            </Col>
          </Row>

          {/* With Validation Feedback */}
          <Row className='mb-3'>
            <Col>
              <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='First name'
                  defaultValue='Mark'
                  isValid={true}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Last name'
                  defaultValue=''
                  isInvalid={true}
                />
                <Form.Control.Feedback type='invalid'>
                  Last Name is required!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* Checkbox & Radios */}
          <Row className='mb-3'>
            <Col>
              <Form.Check
                inline
                label='Checkbox 1'
                name='group1'
                type='checkbox'
                id={`inline-checkbox-1`}
                defaultChecked
              />
              <Form.Check
                inline
                label='Checkbox 2'
                name='group1'
                type='checkbox'
                id={`inline-checkbox-2`}
              />
              <Form.Check
                inline
                disabled
                label='Checkbox 3 (disabled)'
                type='checkbox'
                id={`inline-checkbox-3`}
              />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Check
                inline
                label='Radio 1'
                name='group1'
                type='radio'
                id={`inline-Radio-1`}
              />
              <Form.Check
                inline
                label='Radio 2'
                name='group1'
                type='radio'
                id={`inline-Radio-2`}
                defaultChecked
              />
              <Form.Check
                inline
                disabled
                label='Radio 3 (disabled)'
                type='radio'
                id={`inline-Radio-3`}
              />
            </Col>
          </Row>
        </Form>
        <hr />
      </section>

      <Row>
        <Col>
          {/* === BUTTONS === */}
          <section className='mb-3'>
            <h2> Buttons </h2>
            <p> Default Style </p>
            <Button variant='primary'>Primary</Button>{' '}
            <Button variant='secondary'>Secondary</Button>{' '}
            <Button variant='success'>Success</Button>{' '}
            <Button variant='warning'>Warning</Button>{' '}
            <Button variant='danger'>Danger</Button>{' '}
            <Button variant='info'>Info</Button>{' '}
            <Button variant='light'>Light</Button>{' '}
            <Button variant='dark'>Dark</Button>{' '}
            <Button variant='link'>Link</Button>
            <br /> <br />
            <p> Outline Style </p>
            <Button variant='outline-primary'>Primary</Button>{' '}
            <Button variant='outline-secondary'>Secondary</Button>{' '}
            <Button variant='outline-success'>Success</Button>{' '}
            <Button variant='outline-warning'>Warning</Button>{' '}
            <Button variant='outline-danger'>Danger</Button>{' '}
            <Button variant='outline-info'>Info</Button>{' '}
            <Button variant='outline-light'>Light</Button>{' '}
            <Button variant='outline-dark'>Dark</Button> <br /> <br />
            <p> Button Size </p>
            <Button variant='primary' size='lg'>
              Large Button
            </Button>{' '}
            <Button variant='secondary' size='lg'>
              Large Button
            </Button>{' '}
            <Button variant='outline-primary' size='sm'>
              Small Button
            </Button>{' '}
            <Button variant='outline-secondary' size='sm'>
              Small Button
            </Button>{' '}
            <br />
            <br />
            <p> Button Group </p>
            <ButtonGroup aria-label='Basic example'>
              <Button variant='primary'>Left</Button>
              <Button variant='primary'>Middle</Button>
              <Button variant='primary'>Right</Button>
            </ButtonGroup>
            <hr />
          </section>
        </Col>
        <Col>
          {/* === BADGES === */}
          <section className='mb-3'>
            <h2> Badges </h2>
            <p> Defaut Style </p>
            <Badge bg='primary'>Primary</Badge>{' '}
            <Badge bg='secondary'>Secondary</Badge>{' '}
            <Badge bg='success'>Success</Badge>{' '}
            <Badge bg='warning'>Warning</Badge>{' '}
            <Badge bg='danger'>Danger</Badge> <Badge bg='info'>Info</Badge>{' '}
            <Badge bg='light'>Light</Badge> <Badge bg='dark'>Dark</Badge> <br />
            <br />
            <p> Pill Style </p>
            <Badge pill bg='primary'>
              Primary
            </Badge>{' '}
            <Badge pill bg='secondary'>
              Secondary
            </Badge>{' '}
            <Badge pill bg='success'>
              Success
            </Badge>{' '}
            <Badge pill bg='warning'>
              Warning
            </Badge>{' '}
            <Badge pill bg='danger'>
              Danger
            </Badge>{' '}
            <Badge pill bg='info'>
              Info
            </Badge>{' '}
            <Badge pill bg='light'>
              Light
            </Badge>{' '}
            <Badge pill bg='dark'>
              Dark
            </Badge>{' '}
            <hr />
          </section>

          {/* === DROPDOWN === */}
          <section className='mb-3'>
            <h2> Dropdown </h2>
            <Dropdown>
              <Dropdown.Toggle variant='primary'>
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Dropdown header</Dropdown.Header>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr />
          </section>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* === ALERTS === */}
          <section className='mb-3'>
            <h2> Alerts </h2>
            <Alert variant='primary'>Primary Alert</Alert>
            <Alert variant='secondary'>Secondary Alert</Alert>
            <Alert variant='success'>Success Alert</Alert>
            <Alert variant='warning'>Warning Alert</Alert>
            <Alert variant='danger'>Danger Alert</Alert>
            <Alert variant='info'>Info Alert</Alert>
            <Alert variant='light'>Light Alert</Alert>
            <Alert variant='dark'>Dark Alert</Alert>

            <br />

            <p> With Additional Content </p>
            <Alert variant='success'>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <Alert.Link>Visit this link</Alert.Link>
            </Alert>

            <hr />
          </section>
        </Col>
        <Col>
          {/* === ACCORDION === */}
          <section className='mb-3'>
            <h2> Accordion </h2>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <hr />
          </section>
        </Col>
      </Row>

      {/* === CARDS === */}
      <section className='mb-3'>
        <h2> Cards </h2>

        <p> Card Body Only </p>
        <Row md={4} className='mb-3'>
          {[1, 2, 3, 4].map(() => {
            return (
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href='#'>Card Link</Card.Link>
                    <Card.Link href='#'>Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <p> With Header & Footer </p>
        <Row md={4} className='mb-3'>
          {[1, 2, 3, 4].map(() => {
            return (
              <Col>
                <Card>
                  <Card.Header> Card Header </Card.Header>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href='#'>Card Link</Card.Link>
                    <Card.Link href='#'>Another Link</Card.Link>
                  </Card.Body>
                  <Card.Footer> Card Footer </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>

        <p> Outline Color </p>
        <Row md={4} className='mb-3'>
          {colorVariants.map((color) => {
            return (
              <Col>
                <Card border={color} className='mb-4'>
                  <Card.Body>
                    <Card.Title>Card Title {color} </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <p> Background Color </p>
        <Row md={4} className='mb-3'>
          {colorVariants.map((color) => {
            return (
              <Col>
                <Card
                  bg={color}
                  text={color === 'light' ? 'dark' : 'white'}
                  className='mb-4'>
                  <Card.Body>
                    <Card.Title>Card Title {color} </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <hr />
      </section>
    </Container>
  );
}

export default BootstrapComponents;
