import { Link } from 'react-router-dom';
import './styles.scss';

const PrivacyType = () => (
  <div>
    <div className="form__header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="logo__img"
            src="img/LogoIcon/White.png"
            alt="airbnbLogo"
          />
        </Link>
      </div>
      <div className="header__help-container">
        <button className="header__help" type="button">
          Help
        </button>
        <button className="header__save" type="button">
          Save and exit
        </button>
      </div>
    </div>
    <div className="container__question1">
      <h1 className="question__title">What kind of space will your guest have?</h1>
    </div>
    <div className="container__options-fixed1">
      <div className="container__options-scroll1">
        <button className="option" type="button">An entire place.</button>
        <button className="option" type="button">A private room.</button>
        <button className="option" type="button">A shared room.</button>
      </div>
    </div>
    <div className="container__button-step">
      <div className="progress1" />
      <Link to="/PropertyTypeGroup">
        <button className="button__backstep" type="button">
          Back
        </button>
      </Link>
      <Link to="/Location">
        <button className="button__nextstep" type="button">
          Next
        </button>
      </Link>
    </div>
  </div>
);

export default PrivacyType;