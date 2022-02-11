import { HomeIcons } from '../../assets';
import { Button } from 'react-bootstrap';

const PropertyDetails = ()=>{
   return(
      <div className="propertyDetails">
         <div className="propertyDetail row bg-wheat py-3 px-2 mx-1 mb-3 rounded-1">
            <div className="row">
               <div className="col">
                  <span className="propType">Property Type</span>
                  <p className="propName fw-bold text-primary">Apartement</p>
               </div>
               <div className="col">
                  <span className="areaSize">Area Size</span>
                  <p className="Size fw-bold text-primary">94m^2</p>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <span className="cost">Cost</span>
                  <p className="propName fw-bold text-primary">Rp.185.000.000</p>
               </div>
               <div className="col">
                  <span className="duration">Renovation Duration</span>
                  <p className="durationTime fw-bold text-primary">4 Weeks</p>
               </div>
            </div>
            <div className="row">
               <span className="style">Style</span>
               <p className="styles fw-bold text-primary mb-0">Contemporary, Scandinavian, Modern</p>
            </div>
         </div>
         <div className="projectInclude d-flex row bg-wheat py-3 px-2 mx-1 mb-3 rounded-1">
            <div className="includeHead row m-0 p-0 fw-bold text-primary border-bottom border-1 border-ash">
               <div className="col ">
                  Work Include
               </div>
            </div>
            <div className="includeContent pt-2 row d-flex">
               <div className="col-6">
                  - Carpentery
               </div>
               <div className="col-6">
                  - False Ceilling
               </div>
               <div className="col-6">
                  - Flooring
               </div>
               <div className="col-6">
                  - Air Conditioning
               </div>
               <div className="col-6">
                  - Tilling
               </div>
               <div className="col-6">
                  - Electrical Wiring
               </div>
            </div>
         </div>
         <div className="getQuotes row  bg-wheat py-3 px-2 mx-1 mb-3 rounded-1">
            <div className="quoteSection text-center">
               <HomeIcons/>
               <p>Let Our Profesional Designer Visualize Your Dream House</p>
               <Button variant="secondary" className="text-dark fw-bold px-5">Get Free Quotes</Button>
            </div>
         </div>
      </div>
   )
}

export default PropertyDetails;