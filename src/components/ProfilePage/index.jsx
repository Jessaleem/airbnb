import './styles.scss';
import { Link } from 'react-router-dom';
import Header from '../Header';
import AccountNavbar from '../AccountPage/AccountNavbar';

const ProfilePage = () => (
  <>
    <Header />
    <div className="profile__Container">
      <Link to="/Account">
        <div className="profile__backButton">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Dark_Gray_obpkut.png" className="profile__backArrow" alt="backArrow" />
        </div>
      </Link>
      <div className="profile__main-container">
        <div className="profile__personalInfo">
          <div className="profile__profilePic-container">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716573/images/Account/profilepic_bo57dk.jpg" className="profile__profilePic" alt="profilepic" />
          </div>
          <div className="profile__userinfo">
            <h2>Hi, I’m Jessica</h2>
            <span className="profile__joinedinfo">Joined in 2015</span>
            <div className="profile__edit">
              <button className="profile_editButton" type="button"> Edit profile </button>
              <a href="https://www.airbnb.com/users/edit-photo" className="profile__editProfilePic"> Update photo </a>
            </div>
          </div>
        </div>
        <section className="profile__Section-container">
          <h2 className="profile__aboutText">About</h2>
          <span className="profile__aboutContent">Lover of travel, nature, music wine and culture.</span>
          <div className="profile__sectionInfo">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660062280/images/Account/Casa_dnmdet.png" className="profile__icon" alt="starlogo" />
            <span className="profile__aboutSubText">Lives in Barranquilla, Colombia</span>
          </div>
          <div className="profile__sectionInfo">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660063891/images/Account/Dialogo_mgikls.png" className="profile__icon" alt="starlogo" />
            <span className="profile__aboutSubText">Speaks English,Spanish</span>
          </div>
        </section>
        <section className="profile__Section-container">
          <h2 className="profile__aboutText">Jessica confirmed</h2>
          <div className="profile__sectionInfo">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
            <span className="profile__aboutSubText">Identity</span>
          </div>
          <div className="profile__sectionInfo">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
            <span className="profile__aboutSubText">Email adress</span>
          </div>
          <div className="profile__sectionInfo">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
            <span className="profile__aboutSubText">Phone number</span>
          </div>
        </section>
        <p className="profile__reviews">Reviews by you</p>
      </div>
      <div className="profile__container-bigSc">
        <div className="profile__leftContainer-bigSc">
          <div className="profile__profilePic-container-bigSc">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716573/images/Account/profilepic_bo57dk.jpg" className="profile__profilePic-biSc" alt="profilepic" />
            <a href="https://www.airbnb.com/users/edit-photo" className="profile__editProfilePic-bigSc"> Update photo </a>
          </div>
          <section className="profile__Section-container-bigSC">
            <h2 className="profile__aboutText">Jessica confirmed</h2>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
              <span className="profile__aboutSubText">Identity</span>
            </div>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
              <span className="profile__aboutSubText">Email adress</span>
            </div>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
              <span className="profile__aboutSubText">Phone number</span>
            </div>
          </section>
        </div>
        <div className="profile__rightContainer-bigSc">
          <div className="profile__userinfo-bigSc">
            <h2>Hi, I’m Jessica</h2>
            <span className="profile__joinedinfo">Joined in 2015</span>
            <button className="profile_editButton" type="button"> Edit profile </button>
          </div>
          <section className="profile__Section-container2-bigSc">
            <h2 className="profile__aboutText">About</h2>
            <span className="profile__aboutContent">Lover of travel, nature, music wine and culture.</span>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660062280/images/Account/Casa_dnmdet.png" className="profile__icon" alt="starlogo" />
              <span className="profile__aboutSubText">Lives in Barranquilla, Colombia</span>
            </div>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660063891/images/Account/Dialogo_mgikls.png" className="profile__icon" alt="starlogo" />
              <span className="profile__aboutSubText">Speaks English,Spanish</span>
            </div>
          </section>
          <p className="profile__reviews">Reviews by you</p>
        </div>
      </div>
    </div>
    <AccountNavbar />
  </>
);

export default ProfilePage;