import './Home.scss';
import porfolio from '../../assets/Hoang.jpg';
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
            <img src='' alt='github' className='home-container--links-github' />
            <img
              src=''
              alt='linkedin'
              className='home-container--links-linkedin'
            />
          </div>
          <aside className='home-container-aside'>
            <div className='home-container-aside-home'>
              <img
                src=''
                alt='home'
                className='home-container-aside-home-img'
              />
              <p className='home-container-aside-home-name'>Home</p>
            </div>
            <div className='home-container-aside-about'>
              <img
                src=''
                alt='about'
                className='home-container-aside-about-img'
              />
              <p className='home-container-aside-about-name'>About</p>
            </div>
            <div className='home-container-aside-projects'>
              <img
                src=''
                alt='projects'
                className='home-container-aside-projects-img'
              />
              <p className='home-container-aside-projects-name'>Projects</p>
            </div>
            <div className='home-container-aside-contact'>
              <img
                src=''
                alt='contact'
                className='home-container-aside-contact-img'
              />
              <p className='home-container-aside-contact-name'>Contact</p>
            </div>
          </aside>
        </section>
        <section className=''></section>
      </main>
    </>
  );
};
export default Home;
