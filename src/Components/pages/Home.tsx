import './Home.scss';
import porfolio from '../../assets/Hoang.jpg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import about from '../../assets/user.png';
import projects from '../../assets/projects.png';
import contact from '../../assets/contact.png';
import demo from '../../assets/demo.jpg';
const Home: React.FC = () => {
  return (
    <>
      <main className='home'>
        <section className='home-container'>
          <div className='home-container--porfolio'>
            <img
              src={porfolio}
              alt='image-porfolio'
              className='home-container--porfolio-img'
            />
            <p className='home-container--porfolio-name'>Hoang Nguyen</p>
          </div>
          <div className='home-container--links'>
            <FontAwesomeIcon
              icon={faGithub}
              className='home-container--links-github'
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className='home-container--links-linkedin'
            />
          </div>
          <aside className='home-container-aside'>
            <div className='home-container-aside-home'>
              <FontAwesomeIcon
                icon={faHouse}
                className='home-container-aside-home-img'
              />
              <p className='home-container-aside-home-name'>Home</p>
            </div>
            <div className='home-container-aside-about'>
              <img
                src={about}
                alt='about'
                className='home-container-aside-about-img'
              />
              <p className='home-container-aside-about-name'>About</p>
            </div>
            <div className='home-container-aside-projects'>
              <img
                src={projects}
                alt='projects'
                className='home-container-aside-projects-img'
              />
              <p className='home-container-aside-projects-name'>Projects</p>
            </div>
            <div className='home-container-aside-contact'>
              <img
                src={contact}
                alt='contact'
                className='home-container-aside-contact-img'
              />
              <p className='home-container-aside-contact-name'>Contact</p>
            </div>
          </aside>
        </section>
        <section className='home-wrapper'>
          <div className='home-wrapper-about'></div>
        </section>
      </main>
    </>
  );
};
export default Home;
