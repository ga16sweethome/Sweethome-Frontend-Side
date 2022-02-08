import { Card } from 'react-bootstrap';

const TestimonyCard = () => {
  return (
    <div className='TestimonyCard'>
      <img
        className='profile-testimony rounded shadow'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
        alt='profile testimony'
      />
      <Card>
        <Card.Body className='mt-5'>
          <blockquote className='blockquote px-4 select-none'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam
              aperiam dolorem corporis, saepe debitis.
            </p>
            <footer className='fw-bold'>
              Kitchen Make Over{' '}
              <span className='blockquote-footer fw-normal'>Jhon Doe</span>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestimonyCard;
