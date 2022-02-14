import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { rupiahFormatter } from '../../utility/number';

const ProjectCard = (props) => {
  const data = props.data;

  return (
    <div className='col-12 col-md-6'>
      <Link
        to='/project'
        className='ProjectCard card text-decoration-none text-dark shadow-sm'>
        <Card.Img
          variant='top'
          src={data.gallery[0].picture}
        />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title className='fw-bold mb-0'>{data.name}</Card.Title>
            {data.project &&
                <Card.Text className='estimated-time mb-0'>{data.project.totalDuration} weeks</Card.Text>
            }
          </div>
          <div className='d-flex justify-content-between'>
          {data.project ? (
            <Card.Text className='mb-0'>{data.project.appointment.address}</Card.Text>
          ) : (
            <Card.Text className='mb-0'></Card.Text>
          )
          }
            {data.project && 
              <Card.Text>
                {rupiahFormatter(parseInt(data.project.totalPrice)).replace(',00', '')}
              </Card.Text>
            }
          </div>
        </Card.Body>
      </Link>
    </div>
  );
};

export default ProjectCard;
