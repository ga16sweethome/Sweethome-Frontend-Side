
import imagesDesigner from '../../assets/img/designerImg.png'
import LandingPage from '../../layouts/LandingPage'



const DesignerBiografiSection = () => {
  return (
    <LandingPage>
    <div className="row">
      <h2 className='meet'>Meet Our Designer</h2>
      <div className="bagianImg col-md-4 col-12" >
        <img src={imagesDesigner} alt="" /></div>
      <div className="col-md-8 col-12">
        <h2 className='des-h2'>“Designing home its like designing future”</h2>
        <p className='odio'>Odio tortor tincidunt risus aliquet malesuada semper. Vestibulum id faucibus aliquam ut bibendum praesent nibh. Fames sed pulvinar sagittis non leo tortor, quis. Volutpat nec diam ac venenatis commodo scelerisque arcu venenatis. Sem euismod urna ac egestas dignissim eros.</p>
        <h2 className='lori'>Gloria Suherman</h2>
        <p className='nior'>Senior Interior Designer</p>
      </div>
    </div>
    </LandingPage>
  )
};

export default DesignerBiografiSection;
