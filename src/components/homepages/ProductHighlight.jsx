import kitchen from '../../assets/kitchen.jpg';

const ProductHighlight = () =>{
   return(
      // <div className="productHighlight">
      //    <div className="productImage" >
      //       <div className="ideasBar bg-primary">

      //       </div>
      //    </div>
      // </div>
      <div className="productHighlight d-flex">
         <div className="contentImage card">
            <img src={kitchen} className="card-img" alt="..."/>
            <div className="contentOverlay d-flex align-items-end card-img-overlay">
              <div className="ideasBar d-flex bg-primary">
                 <div className="categoryFilter d-flex align-items-center justify-content-between m-auto text-light">
                     <div>Get currated renovation idea for your</div>
                     <div className="filterSelect">
                        <select className="form-select text-light" id="inlineFormSelectPref">
                           <option value="1">Kitchen</option>
                           <option value="2">Living Room</option>
                           <option value="3">Bed Room</option>
                        </select>
                     </div>
                     <div className="seeAllButton">
                        <button type="submit" className="btn btn-secondary">See All</button>
                     </div>
                 </div>
              </div>
            </div>
         </div>
      </div>
   )
};

export default ProductHighlight;

// style={{backgroundImage: `url(${kitchen})`}}


