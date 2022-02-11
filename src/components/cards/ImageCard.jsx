import { Card } from 'react-bootstrap';

const ImageCard = (props)=>{
   return(
      <div className="imageCard">
         <Card className="text-white border-0">
            <Card.Img src={props.image} alt="Card image" />
            <Card.ImgOverlay className={props.classOverlay}>
               <Card.Title className={props.classTitle}>{props.title}</Card.Title>
            </Card.ImgOverlay>
         </Card>
      </div>
   )
}

export default ImageCard;