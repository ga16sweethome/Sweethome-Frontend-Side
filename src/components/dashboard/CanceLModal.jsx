import {Modal, Form, Button} from 'react-bootstrap';


const CancelModal = (props)=>{
   return(
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header className="border-0" closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
               Request Cancellation
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group className="mb-4 w-50" controlId="exampleForm.ControlInput1">
                  <Form.Label className="fw-bold">Project Id</Form.Label>
                  <Form.Control type="text" placeholder="Masukan Project Id" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="fw-bold">Reason</Form.Label>
                  <Form.Control as="textarea" rows={5} />
               </Form.Group>
            </Form>
         </Modal.Body>
         <Modal.Footer className="justify-content-center border-0">
            <Button onClick={props.onHide} variant="secondary" className="text-dark fw-bold px-5 mb-3">
               Submit Request
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default CancelModal;