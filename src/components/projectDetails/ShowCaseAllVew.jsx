import React from 'react'
import Kitchen from '../../assets/kitchen.jpg'
import {ImageCard} from '../../components'
import { Modal } from 'react-bootstrap'


const ShowCaseAllVew = (props) => {
  


  return (
    <div className=" card-content ">
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            All Photos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3 d-flex flex-wrap pt-2">
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3 g-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3 g-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3 g-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
            <div className="col-3 g-3">
              <ImageCard
                image={Kitchen}
                title="Living Room"
                classTitle="mb-0 fs-6 fw-bold"
                classOverlay="d-flex align-items-end"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ShowCaseAllVew