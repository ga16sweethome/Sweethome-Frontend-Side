import imagesDesigner from '../../assets/img/designerImg.png';
import Dashboard from '../../layouts/Dashboard';

const DesignerBiografiSection = () => {
  return (
    <Dashboard>
      <div className='wrapper p-5 my-5'>
        <h2 className='ps-4 mb-5 fw-bold serif'>Meet Our Designer</h2>
        <div className='d-flex'>
          <div className=''>
            <img src={imagesDesigner} alt='' />
          </div>
          <div className='ms-5 d-flex flex-column justify-content-center'>
            <div className='designers-quotes mb-5'>
              <h2 className='fw-bold'>
                “Designing home its like designing future”
              </h2>
              <p className='odio'>
                Odio tortor tincidunt risus aliquet malesuada semper. Vestibulum
                id faucibus aliquam ut bibendum praesent nibh. Fames sed
                pulvinar sagittis non leo tortor, quis. Volutpat nec diam ac
                venenatis commodo scelerisque arcu venenatis. Sem euismod urna
                ac egestas dignissim eros.
              </p>
            </div>
            <div className='designers-name'>
              <h4 className='fw-bold mb-0'>Gloria Suherman</h4>
              <p className='fs-5 text-ash '>Senior Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default DesignerBiografiSection;
