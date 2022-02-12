import {Modal, Form, Button, Col, Row} from 'react-bootstrap';
const ProfileSetting = (props)=>{
   return(
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header className="border-0" closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
               <div className="fw-bold">
                  Edit Profile
               </div>
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Upload Profile Picture</Form.Label>
                  <Form.Control type="file" placeholder="Masukan Project Id" />
               </Form.Group>
            </Form>
            <Form className="pb-2">
               <Row>
                  <Col>
                     <Form.Label>First Name</Form.Label>
                     <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control placeholder="Last name" />
                  </Col>
               </Row>
            </Form>
            <Form className="pb-2">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter email"
               />
            </Form>
         </Modal.Body>
         <Modal.Footer className="justify-content-center border-0">
            <Button onClick={props.onHide} variant="secondary" className="text-dark fw-bold px-5 mb-3">
               Save Change
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default ProfileSetting;