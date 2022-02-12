import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  ToggleButton,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { BiRightArrowAlt } from 'react-icons/bi';
import * as Yup from 'yup';
import {
  setSections,
  setStyles,
  getSections,
  getStyles,
  getServicesType,
  getBuildingType,
} from '../../redux/actionCreators/appointmentAction';

const validationSchema = Yup.object().shape({
  buildingType: Yup.string().required('Required!'),
  serviceType: Yup.string().required('Required!'),
  estimatedWorkDuration: Yup.string().required('Required!'),
  budget: Yup.number().required('Required!'),
  address: Yup.string().required('Required!'),
  sections: Yup.array().min(1, 'Required!'),
  styles: Yup.array().min(1, 'Required!'),
  note: Yup.string(),
});

const EnquiryDetails = () => {
  const dispatch = useDispatch();
  const { sections, styles, servicesType, buildingType } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    dispatch(getSections());
    dispatch(getStyles());
    dispatch(getServicesType());
    dispatch(getBuildingType());
  }, [dispatch]);

  const checkboxSections = (e, idx, arr) => {
    const checked = e.target.checked;

    dispatch(setSections({ checked, idx, arr }));
  };

  const checkboxStyles = (e, idx, arr) => {
    const checked = e.target.checked;

    dispatch(setStyles({ checked, idx, arr }));
  };

  return (
    <div className='py-7 px-5'>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          buildingType: '',
          serviceType: '',
          estimatedWorkDuration: '',
          budget: '',
          address: '',
          sections: [],
          styles: [],
          note: '',
        }}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          dirty,
          errors,
        }) => {
          {
            /* console.log('handleSubmit', handleSubmit);
          console.log('handleChange', handleChange);
          console.log('handleBlur', handleBlur); */
          }
          console.log('values', values);
          console.log('touched', touched);
          console.log('isValid', isValid);
          console.log('dirty', dirty);
          console.log('errors', errors);
          return (
            <Form className='d-flex flex-column w-100'>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='buildingType'>
                  <Form.Label className='fw-bold'>
                    Building Type<span className='text-danger'>*</span>
                  </Form.Label>
                  <Form.Select
                    className='py-3'
                    name='buildingType'
                    aria-label='Building Type select options'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.buildingType}
                    isInvalid={touched.buildingType && !!errors.buildingType}>
                    <option value=''>Open this select menu</option>
                    {buildingType.result &&
                      buildingType.result.map((type, idx) => (
                        <option key={idx} value={type.name}>
                          {type.name}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>
                    {touched.buildingType &&
                      errors.buildingType &&
                      errors.buildingType}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId='serviceType'>
                  <Form.Label className='fw-bold'>
                    Service Type<span className='text-danger'>*</span>
                  </Form.Label>
                  <Form.Select
                    className='py-3'
                    name='serviceType'
                    aria-label='Default select example'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.serviceType}
                    isInvalid={touched.serviceType && !!errors.serviceType}>
                    <option value=''>Open this select menu</option>
                    {servicesType.result &&
                      servicesType.result.map((type, idx) => (
                        <option key={`services-${idx}`} value={type.name}>
                          {type.name}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>
                    {touched.serviceType &&
                      errors.serviceType &&
                      errors.serviceType}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='estimatedWorkDuration'>
                  <Form.Label className='fw-bold'>
                    Estimated Work Duration
                    <span className='text-danger'>*</span>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      className='py-3'
                      name='estimatedWorkDuration'
                      type='number'
                      placeholder='e.g 3'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.estimatedWorkDuration}
                      isInvalid={
                        touched.estimatedWorkDuration &&
                        !!errors.estimatedWorkDuration
                      }
                    />
                    <InputGroup.Text
                      id='estimatedWorkDuration'
                      className='bg-white px-3'>
                      week(s)
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type='invalid'>
                    {touched.estimatedWorkDuration &&
                      errors.estimatedWorkDuration &&
                      errors.estimatedWorkDuration}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId='budget'>
                  <Form.Label className='fw-bold'>
                    Budget<span className='text-danger'>*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text id='budget' className='bg-white px-3'>
                      Rp
                    </InputGroup.Text>
                    <Form.Control
                      className='py-3'
                      name='budget'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.budget}
                      type='number'
                      isInvalid={touched.budget && !!errors.budget}
                      placeholder='e.g 10000000'
                    />
                  </InputGroup>
                  <Form.Control.Feedback type='invalid'>
                    {touched.budget && errors.budget && errors.budget}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className='mb-3' controlId='formGridAddress1'>
                <Form.Label className='fw-bold'>
                  Address<span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  className='py-3'
                  as='textarea'
                  rows={3}
                  name='address'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  isInvalid={touched.address && !!errors.address}
                  placeholder={`e.g One East Residences 7-16 
Jl. Raya Kertajaya Indah No. 79
Surabaya Jawa Timur`}
                />
                <Form.Control.Feedback type='invalid'>
                  {touched.address && errors.address && errors.address}
                </Form.Control.Feedback>
              </Form.Group>

              <Row className='mb-3'>
                <Col xs={6}>
                  <div
                    className={`bg-wheat rounded px-0 h-100 border ${
                      errors.sections && 'border-danger'
                    }`}>
                    <div className='header-checkbox d-flex justify-content-between align-items-center mt-3 mx-3'>
                      <h4 className='fw-bold mb-0 fs-6'>
                        Sections<span className='text-danger'>*</span>
                      </h4>
                      <p className='fst-italic text-ash mb-0'>
                        you may select more then one
                      </p>
                    </div>
                    <div className='checkbox-item m-2'>
                      {sections.result &&
                        sections.result.map((section, idx, arr) => (
                          <ToggleButton
                            key={`sections-${idx}`}
                            name='sections'
                            className='m-1 rounded'
                            id={section.name.replace(' ', '-')}
                            type='checkbox'
                            variant='outline-primary'
                            checked={section.value}
                            onChange={(e) => {
                              handleChange(e);
                              checkboxSections(e, idx, arr);
                            }}
                            value={section.name}>
                            {section.name}
                          </ToggleButton>
                        ))}
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div
                    className={`bg-wheat rounded px-0 h-100 border ${
                      errors.styles && 'border-danger'
                    }`}>
                    <div className='header-checkbox d-flex justify-content-between align-items-center mt-3 mx-3'>
                      <h4 className='fw-bold mb-0 fs-6'>
                        Styles<span className='text-danger'>*</span>
                      </h4>
                      <p className='fst-italic text-ash mb-0'>
                        you may select more then one
                      </p>
                    </div>
                    <div className='checkbox-item m-2'>
                      {styles.result &&
                        styles.result.map((style, idx, arr) => (
                          <ToggleButton
                            key={`styles-${idx}`}
                            name='styles'
                            className='m-1 rounded'
                            id={style.name.replace(' ', '-')}
                            type='checkbox'
                            variant='outline-primary'
                            checked={style.value}
                            onChange={(e) => {
                              handleChange(e);
                              checkboxStyles(e, idx, arr);
                            }}
                            value={style.name}>
                            {style.name}
                          </ToggleButton>
                        ))}
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  {errors.sections && (
                    <p className='text-danger'>{errors.sections}</p>
                  )}
                </Col>
                <Col xs={6}>
                  {errors.styles && (
                    <p className='text-danger'>{errors.styles}</p>
                  )}
                </Col>
              </Row>

              <Form.Group className='mb-5' controlId='formGridNote'>
                <Form.Label className='fw-bold'>Note</Form.Label>
                <Form.Control
                  className='py-3'
                  as='textarea'
                  rows={3}
                  name='note'
                  placeholder='Write your request here'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.note}
                />
              </Form.Group>

              <Button
                className='ms-auto px-5'
                variant='primary'
                type='submit'
                disabled={!dirty || !isValid}
                onClick={handleSubmit}>
                Next <BiRightArrowAlt />
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EnquiryDetails;
