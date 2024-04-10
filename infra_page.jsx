import './infra_page.css';

const InfraPage = () => {
  return (
    <div className="about-us-container">
      <section className="company-info">
        <div className="company-info-content">
          <h2>About Our Company</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consectetur elit, id scelerisque ipsum. Integer commodo, dolor a congue tristique, sem libero bibendum lorem, vel pretium nisi sapien non sapien. Curabitur sit amet nisi at metus pharetra suscipit.</p>
          <p>Our company is committed to delivering high-quality products and services to our customers.</p>
        </div>
        <div className="company-info-image">
          <img src="Hero.jpg" alt="Company" />
        </div>
      </section>
      
      <section className="photos">
        <div className="photo-gallery">
          <div className="card">
            <img src="Hero.jpg" alt="Photo 1" />
            <div className="card-content">
              <p>Infrastructure Photo 1</p>
            </div>
          </div>
          <div className="card">
            <img src="Hero.jpg" alt="Photo 2" />
            <div className="card-content">
              <p>Infrastructure Photo 2</p>
            </div>
          </div>
          <div className="card">
            <img src="Hero.jpg" alt="Photo 3" />
            <div className="card-content">
              <p>Infrastructure Photo 3</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="infrastructure">
        <div className="infrastructure-details-box">
          <h1>Our Infrastructure</h1>
          <div className="infrastructure-details">
            <p>Bro ipsum dolor sit amet newschooler core shot tele ripping DH. OTB taco glove yard sale skid lid huck corn. Death cookies glades freshies cruiser. Ollie bail euro, laps bomb hole punter corduroy endo. Huck T-bar taco mitt afterbang crank.</p>
            <p>Beater ripper backside frontside. Face plant air granny gear, Whistler newschooler bomb hole DH flowy nose press tele. 360 dope bump, wheelie drop crank north shore hero schwag huckfest grind drop pow pow huck. ACL slash saddle avie cruiser clipless.</p>
            <p>Death cookies avie corduroy glades, sharkbite big ring switch. Slash free ride jib dust on crust, shred bunny slope stoked bear trap. Trail swag Whistler booter schraeder giblets japan air stunt fully Snowboard. Laps pow pow chillax sharkbite gaper, glades stoked Ski Bike jib carve stunt saddle. 360 heli rig gnar.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfraPage;
