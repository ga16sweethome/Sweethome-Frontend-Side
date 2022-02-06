import {Accordion} from 'react-bootstrap'

const AppointmentResume = ()=>{
   return(
      <div className="appointmentResume">
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
                     <p className="mb-0 pe-2 fw-bold">24 Februari 2022</p>
                     <span className="vr"></span>
                     <p className="mb-0 ps-2 text-ash">09.00 am - 10.00 pm</p>
                  </div>
               </div>  
               </Accordion.Header>
               <Accordion.Body>
                  <div className="detail d-flex w-100">
                     <div className="aptDetail w-50">
                        <div className="fw-bold">
                           Appointment Details
                        </div>
                        <div className="d-flex pt-4">
                           <div className="w-50">
                              <div className="text-ash">Building Type</div>
                              <div className="fw-bold">House</div>
                           </div>
                           <div className="w-50">
                              <div className="text-ash">Service Type</div>
                              <div className="fw-bold">Interior Design</div>
                           </div>
                        </div>
                        <div className="d-flex pt-4">
                           <div className="w-50">
                              <div className="text-ash">Estimated Work Duration</div>
                              <div className="fw-bold">1 Month</div>
                           </div>
                           <div className="w-50">
                              <div className="text-ash">Budget</div>
                              <div className="fw-bold">Rp. 1.000.000.000</div>
                           </div>
                        </div>
                        <div className="pt-4">
                           <div className="text-ash">Address</div>
                           <div className="fw-bold">Palm Beach, Pakuwon city, Surabaya</div>
                        </div>
                        <div className="pt-4">
                           <div className="text-ash">Inspection Area</div>
                           <div className="fw-bold">Living room and Bedroom</div>
                        </div>
                     </div>
                     <div className="note w-50">
                        <div className="fw-bold">
                           Note
                        </div>
                        <div className="pt-4">
                           Get free professional consultation. Volutpat, risus sit augue at amet orci mauris viverra. Get free professional consultation. Volutpat, risus sit augue at amet orci mauris viverra.
                        </div>
                     </div>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   )
}

export default AppointmentResume;