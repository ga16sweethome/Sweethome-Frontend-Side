import kitchen from '../../assets/kitchen.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductHighlight = () => {
  const [category, setCategory] = useState('');
  const [image, setImage] = useState( kitchen );

  useEffect(() => {
    axios
      .get(
        `https://team-b-see-event.herokuapp.com/api/v1/event?category=${category}`
      )
      .then((response) => {
        const data = response.data.result[0].image;
        setImage(data);
      });
  }, [category]); 

  return (
    <div className='productHighlight d-flex '>
      <div className='contentImage card mx-auto'>
        <img src={image} className='card-img imageHighlight' alt='...' />
        <div className='contentOverlay d-flex align-items-end card-img-overlay'>
          <div className='ideasBar d-flex bg-primary'>
            <div className='categoryFilter d-flex align-items-center justify-content-between m-auto text-light'>
              <div className='ideaCaption'>
                Get currated renovation idea for your
              </div>
              <div className='filterSelect'>
                <select
                  className='form-select text-light'
                  id='inlineFormSelectPref'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}>
                  <option value=' '>All Category</option>
                  <option value='Photography'>Kitchen</option>
                  <option value='Lifestyle'>Living Room</option>
                  <option value='Design'>Bed Room</option>
                </select>
              </div>
              <div className='seeAllButton'>
                <button
                  type='submit'
                  className='btn px-4 btn-secondary fw-bold'
                  linkas={Link}
                  linkprops={{ to: '/' }}>
                  See All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
