import '../../scss/customs/deBioSection.scss'
import imagesDesigner from '../../assets/img/designerImg.png'



const DesignerBiografiSection = () => {
  return (
    <div class="container">
    <div class="row">
      <h2 className='meet'>Meet Our Designer</h2>
      <div class="bagianImg col-4" >
        <img src={imagesDesigner} alt="" /></div>
      <div class="col-6">
        <h2 className='des-h2'>“Designing home its like designing future”</h2>
        <p>Odio tortor tincidunt risus aliquet malesuada semper. Vestibulum id faucibus aliquam ut bibendum praesent nibh. Fames sed pulvinar sagittis non leo tortor, quis. Volutpat nec diam ac venenatis commodo scelerisque arcu venenatis. Sem euismod urna ac egestas dignissim eros.</p>
        <h2 className='lori'>Gloria Suherman</h2>
        <p className='nior'>Senior Interior Designer</p>
      </div>
    </div>
  </div>
  )
};

export default DesignerBiografiSection;
