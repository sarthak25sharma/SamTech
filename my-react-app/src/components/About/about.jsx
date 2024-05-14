import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CCardFooter, CRow, CCol } from '@coreui/react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
      <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={'./Hero.jpg'} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consectetur elit, id scelerisque ipsum. Integer commodo, dolor a congue tristique, sem libero bibendum lorem, vel pretium nisi sapien non sapien. Curabitur sit amet nisi at metus pharetra suscipit. Nam id nibh justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">something can be typed</small>
            </CCardFooter>
          </CCard>
        </CCol>
         <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={'./Hero.jpg'} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consectetur elit, id scelerisque ipsum. Integer commodo, dolor a congue tristique, sem libero bibendum lorem, vel pretium nisi sapien non sapien. Curabitur sit amet nisi at metus pharetra suscipit. Nam id nibh justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">something can be typed</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={'./Hero.jpg'} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consectetur elit, id scelerisque ipsum. Integer commodo, dolor a congue tristique, sem libero bibendum lorem, vel pretium nisi sapien non sapien. Curabitur sit amet nisi at metus pharetra suscipit. Nam id nibh justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">something can be typed</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={'./Hero.jpg'} />
            <CCardBody>
              <CCardTitle>Card title</CCardTitle>
              <CCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consectetur elit, id scelerisque ipsum. Integer commodo, dolor a congue tristique, sem libero bibendum lorem, vel pretium nisi sapien non sapien. Curabitur sit amet nisi at metus pharetra suscipit. Nam id nibh justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-body-secondary">something can be typed</small>
            </CCardFooter>
          </CCard>
        </CCol>

        {/* Add more CCol components with similar structure */}
      </CRow>
    </div>
  );
}

export default About;