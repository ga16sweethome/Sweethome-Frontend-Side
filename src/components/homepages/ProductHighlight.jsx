import kitchen from '../../assets/kitchen.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProductHighlight = () => {
  const [category, setCategory] = useState('');
  const [image, setImage] = useState( kitchen );
  const navigate = useNavigate();

  const direct = ()=>{
     navigate("/showcase")
  }

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BASE_API
      )
      .then((response) => {
         console.log(response)
      //   const data = response.data.result[0].image;
      //   setImage(data);
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
                     onClick={()=>direct()}
                  >
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
