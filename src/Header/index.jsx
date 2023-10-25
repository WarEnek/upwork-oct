import './index.css';

import logo from '../assets/logo.svg';
import userAva from '../assets/Emily_Tan_IenxnIz.png';
import userAvaPedro from '../assets/SantosPedroSantos.png';

function Header() {

  return (
    <header className="jss79">
      <div className="jss80">
        <a href="/dashboard/">
          <img src={logo} alt="Logo" className="jss81" />
        </a>
      </div>
      <div className="MuiBox-root jss83">
        <div className="MuiBox-root jss93">
          <div className="MuiBox-root jss107 jss95">
            <span className="MuiBadge-root">
              <svg
                width={24}
                height={24}
                viewBox="0 15 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="MuiSvgIcon-root jss94"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  d="M14.9611 34.094C14.8724 35.7138 13.5309 37 11.8889 37C10.2469 37 8.90533 35.7138 8.81664 34.094H4.02651C3.459 34.094 3 33.6362 3 33.0694V32.0427C3 30.9109 3.9192 29.9915 5.052 29.9915C5.05067 29.9915 5.05128 25.8886 5.05128 25.8886C5.05128 22.9988 6.85841 20.4652 9.49573 19.4816V19.3915C9.49573 18.0711 10.5687 17 11.8889 17C13.2105 17 14.2821 18.0705 14.2821 19.3915V19.4817C16.9193 20.4654 18.7265 22.9994 18.7265 25.8886V29.9909C19.8569 29.9915 20.7778 30.9105 20.7778 32.0427V33.0694C20.7778 33.6339 20.3173 34.094 19.7513 34.094H14.9611ZM13.5899 34.094H10.1879C10.2737 34.9578 11.0025 35.6325 11.8889 35.6325C12.7753 35.6325 13.5041 34.9578 13.5899 34.094ZM19.4103 32.7265V32.0427C19.4103 31.6664 19.1022 31.359 18.7258 31.359C17.9702 31.359 17.359 30.7481 17.359 29.9909V25.8886C17.359 23.4356 15.7302 21.3021 13.4088 20.6325L12.9145 20.4899V19.3915C12.9145 18.8261 12.4555 18.3675 11.8889 18.3675C11.3234 18.3675 10.8633 18.8269 10.8633 19.3915V20.4899L10.369 20.6324C8.04745 21.302 6.4188 23.435 6.4188 25.8886V29.9909C6.4188 30.7459 5.80611 31.359 5.052 31.359C4.67454 31.359 4.36752 31.6661 4.36752 32.0427V32.7265H19.4103Z"
                  fill="currentColor"
                />
              </svg>
              <span className="MuiBadge-badge jss103 MuiBadge-anchorOriginTopRightRectangular MuiBadge-colorSecondary MuiBadge-invisible" />
            </span>
          </div>
          <div className="MuiBox-root jss108 jss94">Notifications</div>
          <div className="MuiBox-root jss109">
            <hr className="MuiDivider-root jss88 MuiDivider-vertical" />
          </div>
          <div
            className="MuiAvatar-root MuiAvatar-circular"
            data-test-id="ET-undefined"
            style={{width: 40, height: 40, borderRadius: 40}}
          >
            {window.location.pathname === '/submission' || window.location.pathname === '/submissionsubmitted' ? (
              <img alt="Pedro" src={userAvaPedro} className="MuiAvatar-img" />
            ) : (
              <img alt="Emily Tan" src={userAva} className="MuiAvatar-img" />
            )}
          </div>
          <div className="MuiBox-root jss110">Emily Tan</div>
          <div className="MuiBox-root jss111">
            <div className="MuiBox-root jss112 jss84" data-test-id="user-menu">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
