import { Modal, Carousel, CloseButton } from 'react-bootstrap';
import {useState} from 'react';
import Kitchen from '../../assets/kitchen.jpg';

const GaleriView = (props)=>{
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };

   return(
      <div className="galeriView">
         <Modal
         {...props}
         >
            <Modal.Header className="border-0 bg-dark text-end">
            <CloseButton variant="white" onClick ={props.onHide} />
            </Modal.Header>
            <Modal.Body className="bg-dark">
               <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item className="text-center">
                  <img
                     className="d-block w-75 mx-auto"
                     src={Kitchen}
                     alt="First slide"
                  />
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                     className="d-block w-75 mx-auto"
                     src={Kitchen}
                     alt="Second slide"
                  />
                  </Carousel.Item>
               </Carousel>
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default GaleriView;