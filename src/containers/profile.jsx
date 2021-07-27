import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import '../assets/styles/profile.scss';
import Header from '../components/header';
import ArrowDown from '../components/arrowDown';
import profilePhoto from '../assets/images/gjimenez.png';
import hobbiesPhoto from '../assets/images/hobbies.png';

const Profile = () => (
  <div className='container-fluid'>
    <Header />
    <div className='banner'>
      <div className='banner_profile'>
        <img
          className='banner_profile_img'
          src={profilePhoto}
          alt='Not found'
        />

        <div className='banner_profile_resume'>
          <p>Hi!</p>
          <p>I´m Gustavo Jimenez</p>
          <p>Full-Stack Developer at UEAT</p>
          <button type='button' className='btn btn-primary'>
            <DescriptionIcon />
            Resume
          </button>
        </div>
      </div>

      <div className='banner_contact'>
        <ul className='banner_contact_ul'>
          <OverlayTrigger
            placement='bottom'
            delay={{ show: 100, hide: 300 }}
            overlay={<Tooltip id='github-tooltip'>Github Projects</Tooltip>}
          >
            <li
              className='banner_contact_li'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Tooltip on bottom'
            >
              <a
                href='https://github.com/Strngrwrld'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            </li>
          </OverlayTrigger>

          <OverlayTrigger
            placement='bottom'
            delay={{ show: 100, hide: 300 }}
            overlay={<Tooltip id='linkedin-tooltip'>LinkedIn</Tooltip>}
          >
            <li className='banner_contact_li'>
              <a
                href='https://www.linkedin.com/in/gustavo-jimenez-jaramillo-9a17911a8/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            </li>
          </OverlayTrigger>

          <OverlayTrigger
            placement='bottom'
            delay={{ show: 100, hide: 300 }}
            overlay={<Tooltip id='contacto-tooltip'>Email Contact</Tooltip>}
          >
            <li className='banner_contact_li'>
              <a href='mailto:gjimenez.code@gmail.com'>
                <EmailIcon />
              </a>
            </li>
          </OverlayTrigger>
        </ul>
      </div>
      <div className='arrowDown'>
        <ArrowDown height='150px' width='150px' />
      </div>
    </div>

    <div className='about'>
      <h2 className='about_h2'>About</h2>
      <p className='about_p'>
        Full-Stack Developer with experience in designing and developing user
        interfaces, testing, debugging, and training staff within eCommerce and
        digital signature technologies. Proven ability in optimizing web
        functionalities that improve data retrieval and workflow efficiencies. I
        am thrilled to be constantly growing both personally and professionally,
        working in constant communication with my equipment to provide creative
        solutions to problems using technology. other of my passions is playing
        basketball.
      </p>
    </div>

    <div className='hobbies'>
      <h2 className='hobbies_h2'>Hobbies</h2>
      <div className='hobbies_content'>
        <img src={hobbiesPhoto} alt='Not Found' className='hobbies_img' />
        <p className='hobbies_p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
          unde! Mollitia soluta, nostrum, numquam tempora sit illo debitis
          dignissimos maiores esse sequi voluptatum pariatur placeat maxime
          adipisci alias, at veritatis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime animi vel ipsam, reprehenderit ipsa
          voluptates. Fugit quo laudantium nisi esse. Eaque quibusdam quos
          laborum blanditiis dignissimos iusto maiores delectus ex?
        </p>
      </div>
    </div>

    <div className='skills'>
      <h2 className='skills_h2'>Languages ​​and Technologies</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
        aliquid, rem vel dicta nobis ratione dolor tenetur explicabo, rerum,
        nesciunt inventore. Unde perspiciatis adipisci tenetur quo vero fugiat
        ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        provident reiciendis facere dicta labore rem commodi perspiciatis quos!
        Possimus nam mollitia placeat reiciendis, nulla repellat eos quia
        debitis! Provident, maxime.
      </p>
    </div>

    <div className='projects'>
      <h2 className='projects_h2'>Projects</h2>
      <p className='projects_p'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
        aliquid, rem vel dicta nobis ratione dolor tenetur explicabo, rerum,
        nesciunt inventore. Unde perspiciatis adipisci tenetur quo vero fugiat
        ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        provident reiciendis facere dicta labore rem commodi perspiciatis quos!
        Possimus nam mollitia placeat reiciendis, nulla repellat eos quia
        debitis! Provident, maxime.
      </p>
    </div>
  </div>
);
export default Profile;
