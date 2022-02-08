import {Accordion, Button} from 'react-bootstrap';
import {useState} from 'react';
import PaymentModal from './PaymentModal';
import CancelModal from './CanceLModal';

const ProjectResume = ()=>{
   const [paymentShow, setPaymentShow] = useState(false);
   const [cancelShow, setCancelShow] = useState(false);
   return(
      <div className="projectResume">
         <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item className="border-secondary shadow p-3 mb-5 bg-body" eventKey="0">
               <Accordion.Header>
               <div className="d-flex flex-column w-100">
                  <div className="d-flex align-items-center">
                     <div className="badge px-3 fs-6 rounded-pill bg-secondary">
                        Waiting Approval
                     </div>
                     <div className="date ps-3 text-ash">
                        Created on 20 januari 2022, 09.45 PM
                     </div>
                  </div>
                  <div className="d-flex pt-3">
                     <p className="mb-0 pe-2 fw-bold">Tilling Works</p>
                     <span className="text-ash">+</span>
                     <p className="mb-0 ps-2 text-ash">Two packages more</p>
                  </div>
               </div>  
               </Accordion.Header>
               <Accordion.Body>
                  <div className="detail w-100">
                     <div className="projtDetail">
                        <div className="transfer px-5 py-2 col-6 mb-4 bg-ash">
                           Transfer to xxxxxxx
                        </div>
                        <div className="details row">
                           <div className="projectDetail col-8">
                              <div className="row">
                                 <div className="col-3">
                                    <div className="text-ash">Project ID</div>
                                    <div className="fw-bold">#P-0001</div>
                                 </div>
                                 <div className="col-3">
                                    <div className="text-ash">Building Type</div>
                                    <div className="fw-bold">House</div>
                                 </div>
                                 <div className="col-6">
                                    <div className="text-ash">Related Appointment</div>
                                    <div className="fw-bold">#A-0001</div>
                                    <div className="text-ash">
                                       <span className="mb-0 pe-1">24 Februari 2022</span>
                                       <span className="vr"></span>
                                       <span className="mb-0 ps-1">09.00 am - 10.00 pm</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="row pt-4">
                                 <div className="text-ash">Address</div>
                                 <div className="fw-bold">Palm Beach, Pakuwon City, Surabaya</div>
                              </div>
                           </div>
                           <div className="uploadReceipt col-4 text-end">
                              <div className="buttonUpload">
                                 <Button variant="primary" className="px-5" onClick={() => setPaymentShow(true)}>
                                    Upload Receipt
                                 </Button>
                              </div>
                              <div className="cancelRequest">
                                 <span className="text-ash" onClick={() => setCancelShow(true)}>
                                    Request Cancellation
                                 </span>
                              </div>
                              <div className="showModal">
                                 <PaymentModal
                                    show={paymentShow}
                                    onHide={() => setPaymentShow(false)}
                                 />
                                 <CancelModal
                                    show={cancelShow}
                                    onHide={() => setCancelShow(false)}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="billing mt-5">
                           <div className="row pb-2 border-bottom border-ash">
                              <div className="col text-ash">Project Type</div>
                              <div className="col text-ash">Area</div>
                              <div className="col text-ash">Work Duration</div>
                              <div className="col text-ash">Total</div>
                           </div>
                           <div className="row pt-3 pb-3 border-bottom border-ash">
                              <div className="col fw-bold">Tilling Works</div>
                              <div className="col">Living Room</div>
                              <div className="col">1 Weeks</div>
                              <div className="col fw-bold">Rp.7.000.000</div>
                           </div>
                           <div className="row pt-3 pb-3 border-bottom border-ash">
                              <div className="col fw-bold">Carpentry Works</div>
                              <div className="col">Kitchen</div>
                              <div className="col">2 Weeks</div>
                              <div className="col fw-bold">Rp.57.000.000</div>
                           </div>
                           <div className="row pt-3 pb-3 bg-ash">
                              <div className="col-6 fw-bold text-end">Duration</div>
                              <div className="col-2">3 weeks</div>
                              <div className="col-1 fw-bold text-end">Total</div>
                              <div className="col-3">Rp.64.000.000</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   )
}

export default ProjectResume;