import './index.css';

import logo from '../assets/logo.svg';
import userAva from '../assets/Emily_Tan_IenxnIz.png';

function Header() {
  return (
    <div className="jss72" >
    <div className="jss118" >
      <ul className="MuiList-root MuiList-padding">
        <a className="MuiListItem-root jss131" href="/dashboard/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Home"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Home
            </span>
          </div>
        </a>
        <div className="MuiBox-root jss310" >
          <div
            className="MuiButtonBase-root MuiListItem-root jss131 MuiListItem-button"
            tabIndex={0}
            role="button"
            aria-disabled="false"
            
          >
            <span className="MuiBadge-root">
              <div className="MuiListItemIcon-root jss128" >
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z" />
                </svg>
              </div>
              <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-dot" />
            </span>
            <div
              className="MuiListItemText-root"
              data-test-id="To-Dos"
              
            >
              <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
                To-Dos
              </span>
            </div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
        </div>
        <a className="MuiListItem-root jss131" href="/team-calendar/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Team Calendar"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Team Calendar
            </span>
          </div>
        </a>
        <hr className="MuiDivider-root jss120" />
        <a className="MuiListItem-root jss131" href="/people/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="People"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              People
            </span>
          </div>
        </a>
        <a className="MuiListItem-root jss131" href="/documents/templates/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Documents"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Documents
            </span>
          </div>
        </a>
        <a className="MuiListItem-root jss131" href="/reports/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Reports"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Reports
            </span>
          </div>
        </a>
        <a className="MuiListItem-root jss131" href="/analytics/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Analytics"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Analytics
            </span>
          </div>
        </a>
        <a className="MuiListItem-root jss131" href="/performance/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0015 2.68688C12.0317 3.08021 11.7374 3.42354 11.344 3.45373C9.70964 3.57918 8.1455 4.17064 6.83705 5.158C5.52859 6.14536 4.53068 7.4872 3.96164 9.02444C3.39259 10.5617 3.27627 12.2299 3.62646 13.8312C3.97666 15.4326 4.77868 16.8999 5.93744 18.0593C7.09621 19.2187 8.56312 20.0215 10.1643 20.3726C11.7654 20.7236 13.4337 20.6082 14.9712 20.04C16.5088 19.4718 17.8512 18.4746 18.8392 17.1667C19.8273 15.8588 20.4196 14.2949 20.5459 12.6606C20.5763 12.2673 20.9198 11.9731 21.3131 12.0035C21.7065 12.0339 22.0007 12.3774 21.9703 12.7707C21.8229 14.6774 21.1318 16.5019 19.9791 18.0278C18.8264 19.5537 17.2602 20.7171 15.4664 21.38C13.6726 22.0429 11.7263 22.1776 9.85832 21.768C7.99031 21.3584 6.27891 20.4218 4.92702 19.0692C3.57512 17.7165 2.63943 16.0046 2.23087 14.1364C1.82232 12.2682 1.95802 10.322 2.62191 8.52851C3.2858 6.73506 4.45002 5.16958 5.97655 4.01766C7.50309 2.86575 9.32791 2.17571 11.2347 2.02935C11.628 1.99916 11.9714 2.29354 12.0015 2.68688Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0948 7.75053C11.2393 8.1176 11.0589 8.53231 10.6918 8.67681C10.1394 8.89427 9.64991 9.24601 9.26761 9.70022C8.88531 10.1544 8.62227 10.6968 8.50228 11.2782C8.38229 11.8596 8.40913 12.4618 8.58039 13.0302C8.75164 13.5987 9.0619 14.1155 9.4831 14.5339C9.9043 14.9523 10.4232 15.259 10.9927 15.4265C11.5623 15.5939 12.1647 15.6167 12.7453 15.4928C13.3259 15.3689 13.8665 15.1023 14.3181 14.7169C14.7697 14.3316 15.1182 13.8398 15.3319 13.2859C15.4739 12.9179 15.8874 12.7346 16.2555 12.8767C16.6235 13.0187 16.8067 13.4322 16.6647 13.8002C16.3654 14.5756 15.8776 15.2642 15.2453 15.8037C14.613 16.3432 13.8562 16.7165 13.0434 16.89C12.2305 17.0634 11.3873 17.0315 10.5898 16.7971C9.79242 16.5626 9.06603 16.1331 8.47634 15.5474C7.88666 14.9617 7.4523 14.2382 7.21254 13.4423C6.97279 12.6465 6.9352 11.8035 7.10319 10.9895C7.27117 10.1755 7.63943 9.41619 8.17465 8.7803C8.70987 8.1444 9.39516 7.65197 10.1686 7.34752C10.5356 7.20303 10.9503 7.38346 11.0948 7.75053Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.3414 5.62197C14.2739 5.37468 14.3441 5.11021 14.5254 4.92896L17.0508 2.40357C17.2308 2.22353 17.4931 2.15294 17.7392 2.21829C17.9853 2.28365 18.178 2.47506 18.245 2.72071L18.8952 5.10485L21.2793 5.75507C21.525 5.82206 21.7164 6.01476 21.7817 6.26085C21.8471 6.50694 21.7765 6.76922 21.5965 6.94926L19.0711 9.47464C18.8898 9.65589 18.6254 9.72613 18.3781 9.65868L16.0001 9.01013L12.5051 12.5051C12.2261 12.784 11.7739 12.784 11.4949 12.5051C11.216 12.2262 11.216 11.7739 11.4949 11.4949L14.9899 7.99998L14.3414 5.62197ZM16.3698 7.63023L18.354 8.17138L19.716 6.80944L18.1255 6.37569C17.8815 6.30914 17.6909 6.11852 17.6244 5.87451L17.1906 4.28406L15.8287 5.646L16.3698 7.63023Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Performance"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Performance
            </span>
          </div>
        </a>
        <div className="MuiBox-root jss141" >
          <div
            className="MuiButtonBase-root MuiListItem-root jss131 MuiListItem-button"
            tabIndex={0}
            role="button"
            aria-disabled="false"
            
          >
            <span className="MuiBadge-root">
              <div className="MuiListItemIcon-root jss128" >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M0.75 18C0.75 17.5858 1.08579 17.25 1.5 17.25H6.5C6.91421 17.25 7.25 17.5858 7.25 18C7.25 18.4142 6.91421 18.75 6.5 18.75H1.5C1.08579 18.75 0.75 18.4142 0.75 18Z"
                    fill="#61758F"
                  />
                  <path
                    d="M13 18C13 17.5858 13.3358 17.25 13.75 17.25H17.25C17.6642 17.25 18 17.5858 18 18C18 18.4142 17.6642 18.75 17.25 18.75H13.75C13.3358 18.75 13 18.4142 13 18Z"
                    fill="#61758F"
                  />
                  <path
                    d="M10 10.75C10.4142 10.75 10.75 11.0858 10.75 11.5L10.75 14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25L9.25 11.5C9.25 11.0858 9.58579 10.75 10 10.75Z"
                    fill="#61758F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 15.75C8.75736 15.75 7.75 16.7574 7.75 18C7.75 19.2426 8.75736 20.25 10 20.25C11.2426 20.25 12.25 19.2426 12.25 18C12.25 16.7574 11.2426 15.75 10 15.75ZM6.25 18C6.25 15.9289 7.92893 14.25 10 14.25C12.0711 14.25 13.75 15.9289 13.75 18C13.75 20.0711 12.0711 21.75 10 21.75C7.92893 21.75 6.25 20.0711 6.25 18Z"
                    fill="#61758F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 5.25C4.5 3.45507 5.95507 2 7.75 2H12.75C14.5449 2 16 3.45507 16 5.25V8.25C16 10.0449 14.5449 11.5 12.75 11.5H7.75C5.95507 11.5 4.5 10.0449 4.5 8.25V5.25ZM7.75 3.5C6.7835 3.5 6 4.2835 6 5.25V8.25C6 9.2165 6.7835 10 7.75 10H12.75C13.7165 10 14.5 9.2165 14.5 8.25V5.25C14.5 4.2835 13.7165 3.5 12.75 3.5H7.75Z"
                    fill="#61758F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.9159 17.1104C23.4176 17.5973 23.4176 18.4027 22.9159 18.8896C21.7288 20.0415 20.7857 20.7665 19.3179 21.7113C18.5488 22.2063 17.5021 21.7279 17.4219 20.7849C17.276 19.0714 17.276 16.9285 17.4219 15.215C17.5021 14.2721 18.5488 13.7936 19.3179 14.2886C20.7857 15.2335 21.7288 15.9584 22.9159 17.1104ZM21.6768 18C20.7624 17.1303 19.9891 16.5259 18.8822 15.7951C18.7893 17.1865 18.7893 18.8134 18.8822 20.2049C19.9891 19.474 20.7624 18.8696 21.6768 18Z"
                    fill="#61758F"
                  />
                </svg>
              </div>
              <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
            </span>
            <div
              className="MuiListItemText-root"
              data-test-id="Workflows"
              
            >
              <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
                Workflows
              </span>
            </div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
        </div>
        <div className="MuiBox-root jss313" >
          <div
            className="MuiButtonBase-root MuiListItem-root jss131 MuiListItem-button"
            tabIndex={0}
            role="button"
            aria-disabled="false"
            
          >
            <span className="MuiBadge-root">
              <div className="MuiListItemIcon-root jss128" >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M4.62693 22.3535C4.08515 22.3535 3.61963 22.1589 3.23038 21.7696C2.84112 21.3803 2.64648 20.9148 2.64648 20.373V5.12739C2.64648 4.58172 2.84112 4.11287 3.23038 3.72084C3.61963 3.32882 4.08515 3.13281 4.62693 3.13281H6.12476V1.63281H7.98998V3.13281H16.0095V1.63281H17.8748V3.13281H19.3726C19.9183 3.13281 20.3871 3.32882 20.7791 3.72084C21.1712 4.11287 21.3672 4.58172 21.3672 5.12739V12.5285H19.3726V9.75021H4.62693V20.373H12.1476V22.3535H4.62693ZM4.62693 8.25021H19.3726V5.12739H4.62693V8.25021Z"
                    fill="#61758F"
                  />
                  <path
                    d="M19 24C17.6316 24 16.4561 23.5132 15.4737 22.5395C14.4912 21.5658 14 20.3947 14 19.0263C14 17.6404 14.4912 16.4561 15.4737 15.4737C16.4561 14.4912 17.6316 14 19 14C20.3684 14 21.5439 14.4912 22.5263 15.4737C23.5088 16.4561 24 17.6404 24 19.0263C24 20.3947 23.5088 21.5658 22.5263 22.5395C21.5439 23.5132 20.3684 24 19 24ZM21.2368 21.3158C21.3421 21.2105 21.3904 21.0789 21.3816 20.9211C21.3728 20.7632 21.3158 20.6316 21.2105 20.5263L19.4474 18.7632V16.1316C19.4474 15.9912 19.3947 15.8684 19.2895 15.7632C19.1842 15.6579 19.0614 15.6053 18.9211 15.6053C18.7807 15.6053 18.6535 15.6623 18.5395 15.7763C18.4254 15.8904 18.3684 16.0175 18.3684 16.1579V19.0263C18.3684 19.114 18.3816 19.1886 18.4079 19.25C18.4342 19.3114 18.4737 19.3684 18.5263 19.4211L20.4474 21.3421C20.5526 21.4474 20.6842 21.5 20.8421 21.5C21 21.5 21.1316 21.4386 21.2368 21.3158Z"
                    fill="#61758F"
                  />
                </svg>
              </div>
              <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
            </span>
            <div
              className="MuiListItemText-root"
              data-test-id="Time Off"
              
            >
              <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
                Time Off
              </span>
            </div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
        </div>
        <div className="MuiBox-root jss143" >
          <div
            className="MuiButtonBase-root MuiListItem-root jss131 MuiListItem-button Mui-selected jss132 jss144"
            tabIndex={0}
            role="button"
            aria-disabled="false"
            
          >
            <span className="MuiBadge-root">
              <div className="MuiListItemIcon-root jss128" >
                <svg
                  width={22}
                  height={19}
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 2.625C0.5 1.58947 1.33947 0.75 2.375 0.75H19.625C20.6605 0.75 21.5 1.58947 21.5 2.625V12.375C21.5 13.4105 20.6605 14.25 19.625 14.25H2.375C1.33947 14.25 0.5 13.4105 0.5 12.375V2.625ZM18.5 12.75H3.5C3.5 11.9216 2.82843 11.25 2 11.25V3.75C2.82843 3.75 3.5 3.07843 3.5 2.25H18.5C18.5 3.07843 19.1716 3.75 20 3.75V11.25C19.1716 11.25 18.5 11.9216 18.5 12.75ZM11 5.25C9.75736 5.25 8.75 6.25736 8.75 7.5C8.75 8.74264 9.75736 9.75 11 9.75C12.2426 9.75 13.25 8.74264 13.25 7.5C13.25 6.25736 12.2426 5.25 11 5.25ZM7.25 7.5C7.25 5.42893 8.92893 3.75 11 3.75C13.0711 3.75 14.75 5.42893 14.75 7.5C14.75 9.57107 13.0711 11.25 11 11.25C8.92893 11.25 7.25 9.57107 7.25 7.5ZM4.25 7.5C4.25 7.08579 4.58579 6.75 5 6.75H5.0075C5.42171 6.75 5.7575 7.08579 5.7575 7.5V7.5075C5.7575 7.92171 5.42171 8.2575 5.0075 8.2575H5C4.58579 8.2575 4.25 7.92171 4.25 7.5075V7.5ZM16.25 7.5C16.25 7.08579 16.5858 6.75 17 6.75H17.0075C17.4217 6.75 17.7575 7.08579 17.7575 7.5V7.5075C17.7575 7.92171 17.4217 8.2575 17.0075 8.2575H17C16.5858 8.2575 16.25 7.92171 16.25 7.5075V7.5ZM0.5 15.75C0.5 15.3358 0.835786 15 1.25 15C6.78434 15 12.147 15.7402 17.2437 17.1276C17.5072 17.1993 17.75 17.0004 17.75 16.7551V15.75C17.75 15.3358 18.0858 15 18.5 15C18.9142 15 19.25 15.3358 19.25 15.75V16.7551C19.25 18.0168 18.0404 18.899 16.8498 18.5749C11.8802 17.2222 6.65005 16.5 1.25 16.5C0.835786 16.5 0.5 16.1642 0.5 15.75Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
            </span>
            <div
              className="MuiListItemText-root"
              data-test-id="Expenses"
              
            >
              <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
                Expenses
              </span>
            </div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
        </div>
        <hr className="MuiDivider-root jss120" />
        <a className="MuiListItem-root jss131" href="/apps/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Apps"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Apps
            </span>
          </div>
        </a>
        <a className="MuiListItem-root jss131" href="/rewards/">
          <span className="MuiBadge-root">
            <div className="MuiListItemIcon-root jss128" >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46429 3.81348C8.21442 3.81348 7.97106 3.91437 7.78878 4.09997C7.6059 4.28618 7.50001 4.5425 7.50001 4.81348C7.50001 5.08445 7.6059 5.34077 7.78878 5.52698C7.97106 5.71258 8.21442 5.81348 8.46429 5.81348H10.6343C10.5619 5.64213 10.4786 5.46464 10.3836 5.28875C9.89769 4.38929 9.27398 3.81348 8.46429 3.81348ZM11 7.81348V10.8135L3.60001 10.8135C3.30348 10.8135 3.14122 10.8127 3.02464 10.8032C3.02 10.8028 3.0156 10.8024 3.01145 10.802C3.01107 10.7979 3.01069 10.7935 3.01031 10.7888C3.00078 10.6723 3.00001 10.51 3.00001 10.2135V8.41348C3.00001 8.11695 3.00078 7.9547 3.01031 7.83811C3.01069 7.83347 3.01107 7.82908 3.01145 7.82492C3.0156 7.82454 3.02 7.82416 3.02464 7.82378C3.14122 7.81425 3.30348 7.81348 3.60001 7.81348H11ZM5.66953 5.81348C5.55822 5.49481 5.50001 5.15686 5.50001 4.81348C5.50001 4.02358 5.80802 3.26249 6.36188 2.69855C6.91635 2.13401 7.67224 1.81348 8.46429 1.81348C10.259 1.81348 11.3725 3.03193 12 4.08571C12.6275 3.03193 13.741 1.81348 15.5357 1.81348C16.3278 1.81348 17.0837 2.13401 17.6381 2.69855C18.192 3.26249 18.5 4.02358 18.5 4.81348C18.5 5.15686 18.4418 5.49481 18.3305 5.81348L20.4319 5.81347C20.6843 5.81344 20.9301 5.81342 21.1382 5.83042C21.3668 5.8491 21.6366 5.89317 21.908 6.03146C22.2843 6.22321 22.5903 6.52917 22.782 6.9055C22.9203 7.17692 22.9644 7.44665 22.9831 7.67525C23.0001 7.8834 23 8.12919 23 8.38156V10.2454C23 10.4978 23.0001 10.7436 22.9831 10.9517C22.9644 11.1803 22.9203 11.45 22.782 11.7215C22.5903 12.0978 22.2843 12.4037 21.908 12.5955C21.6366 12.7338 21.3668 12.7779 21.1382 12.7965C21.0938 12.8002 21.0476 12.803 21 12.8053V19.652C21 20.1792 21 20.6339 20.9694 21.0085C20.9371 21.4039 20.8658 21.7971 20.673 22.1754C20.3854 22.7399 19.9265 23.1989 19.362 23.4865C18.9836 23.6793 18.5904 23.7506 18.195 23.7829C17.8205 23.8135 17.3657 23.8135 16.8386 23.8135H12.0014C12.0009 23.8135 12.0005 23.8135 12 23.8135C11.9995 23.8135 11.9991 23.8135 11.9986 23.8135H7.16144C6.6343 23.8135 6.17954 23.8135 5.80498 23.7829C5.40963 23.7506 5.01641 23.6793 4.63803 23.4865C4.07355 23.1989 3.6146 22.7399 3.32699 22.1754C3.13419 21.7971 3.06288 21.4038 3.03057 21.0085C2.99997 20.6339 2.99999 20.1792 3 19.652L3.00001 12.8053C2.95241 12.803 2.90624 12.8002 2.86178 12.7965C2.63318 12.7779 2.36345 12.7338 2.09202 12.5955C1.7157 12.4037 1.40974 12.0978 1.21799 11.7215C1.07969 11.45 1.03563 11.1803 1.01695 10.9517C0.999943 10.7435 0.999973 10.4978 1 10.2454L1.00001 8.41348C1.00001 8.40283 1 8.3922 1 8.38158C0.999973 8.1292 0.999943 7.88341 1.01695 7.67525C1.03563 7.44665 1.07969 7.17692 1.21799 6.9055C1.40974 6.52917 1.7157 6.22321 2.09202 6.03146C2.36345 5.89317 2.63318 5.8491 2.86178 5.83042C3.06993 5.81341 3.31573 5.81344 3.56811 5.81347C3.57873 5.81348 3.58936 5.81348 3.60001 5.81348H5.66953ZM5.00001 12.8135V19.6135C5.00001 20.19 5.00078 20.5623 5.02393 20.8456C5.04613 21.1173 5.08381 21.218 5.109 21.2675C5.20487 21.4556 5.35785 21.6086 5.54601 21.7045C5.59546 21.7297 5.69618 21.7674 5.96784 21.7895C6.25118 21.8127 6.62345 21.8135 7.20001 21.8135H11V12.8135H5.00001ZM13 12.8135V21.8135H16.8C17.3766 21.8135 17.7488 21.8127 18.0322 21.7895C18.3038 21.7674 18.4046 21.7297 18.454 21.7045C18.6422 21.6086 18.7951 21.4556 18.891 21.2675C18.9162 21.218 18.9539 21.1173 18.9761 20.8456C18.9992 20.5623 19 20.19 19 19.6135V12.8135H13ZM20.4 10.8135C20.6965 10.8135 20.8588 10.8127 20.9754 10.8032C20.98 10.8028 20.9844 10.8024 20.9886 10.802C20.9889 10.7979 20.9893 10.7935 20.9897 10.7888C20.9992 10.6723 21 10.51 21 10.2135V8.41348C21 8.11695 20.9992 7.9547 20.9897 7.83811C20.9893 7.83347 20.9889 7.82907 20.9885 7.82492C20.9844 7.82454 20.98 7.82416 20.9754 7.82378C20.8588 7.81425 20.6965 7.81348 20.4 7.81348H13V10.8135H20.4ZM15.5357 5.81348C15.7856 5.81348 16.0289 5.71258 16.2112 5.52698C16.3941 5.34077 16.5 5.08445 16.5 4.81348C16.5 4.5425 16.3941 4.28618 16.2112 4.09997C16.0289 3.91437 15.7856 3.81348 15.5357 3.81348C14.726 3.81348 14.1023 4.38929 13.6165 5.28875C13.5214 5.46464 13.4381 5.64213 13.3658 5.81348H15.5357Z"
                  fill="#61758F"
                />
              </svg>
            </div>
            <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
          </span>
          <div
            className="MuiListItemText-root"
            data-test-id="Rewards"
            
          >
            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
              Rewards
            </span>
          </div>
        </a>
        <div className="MuiBox-root jss147" >
          <div
            className="MuiButtonBase-root MuiListItem-root jss131 MuiListItem-button"
            tabIndex={0}
            role="button"
            aria-disabled="false"
            
          >
            <span className="MuiBadge-root">
              <div className="MuiListItemIcon-root jss128" >
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <span className="MuiBadge-badge jss129 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary jss130 MuiBadge-invisible MuiBadge-dot" />
            </span>
            <div
              className="MuiListItemText-root"
              data-test-id="Settings"
              
            >
              <span className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock">
                Settings
              </span>
            </div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
        </div>
      </ul>
    </div>
  </div>
  );
}

export default Header;
