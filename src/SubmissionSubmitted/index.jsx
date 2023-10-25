import {useRef, useEffect, useState} from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import userAva from '../assets/Emily_Tan_IenxnIz.png';

import Checkbox from '../Checkbox';
import Popup from '../Popup';
import Header from '../Header';
import Aside from '../Aside';
import Input from '../Input';

function SubmissionSubmitted() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupStep2, setOpenPopupStep2] = useState(false);

  const handlePopupStep2ClickOpen = () => {
    setOpenPopupStep2(true);
    setOpenPopup(false);
  };

  const handlePopupClickOpen = () => {
    setOpenPopup(true);
  };

  const handlePopupStep2ClickClose = (value) => {
    setOpenPopupStep2(false);
  };
  const handlePopupClose = (value) => {
    setOpenPopup(false);
  };

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [anchorRef, open]);

  return (
    <div className="jss70">
      <Header />
      <main className="jss71">
        <Aside />
        <div className="jss73">
          <div className="MuiBox-root jss156 jss152">
            <div className="MuiBox-root jss157 jss153 jss150">
              <div className="MuiBox-root jss158">
                <h1 className="MuiTypography-root MuiTypography-h1">
                  Submission
                </h1>
              </div>
              <div
                className="MuiPaper-root jss151 jsss155 jss149 MuiPaper-elevation2 MuiPaper-rounded"
                data-omni-profile-content="true"
              >
                <div className="MuiBox-root jss159">
                  <div className="MuiBox-root jsss191">
                    <div className="MuiBox-root jsss192">
                      <div className="MuiBox-root jss467">
                        <div className="MuiBox-root jss468 jsss463">
                          <div className="MuiBox-root jsss469">
                            <div className="MuiBox-root jsss470">
                              <h2 className="MuiTypography-root MuiTypography-h2 jsss319">
                                <div className="MuiBox-root jsss472">
                                  <div className="MuiBox-root jsss324 jsss464">
                                    <div
                                      className="MuiBox-root jss475 jss325 jsss473 jsss465 "
                                      data-test-id="Draft"
                                    >
                                      Draft
                                    </div>
                                    <div
                                      className="MuiBox-root jss476 jss325 jsss473 jsss465 selected"
                                      data-test-id="Submitted"
                                    >
                                      Submitted
                                    </div>
                                  </div>
                                </div>
                              </h2>
                            </div>
                            <div>
                              <button
                                className="MuiButtonBase-root MuiButton-root jssss401 MuiButton-outlined jss529 jssss528 MuiButton-outlinedPrimary"
                                tabIndex={0}
                                type="button"
                                data-test-id="filter-status"
                                aria-controls="filterStatus"
                                aria-haspopup="true"
                              >
                                <span className="MuiButton-label">
                                  <span>Status: For Approval</span>
                                  <svg
                                    width={10}
                                    height={7}
                                    viewBox="0 0 10 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="MuiSvgIcon-root jssss530 arrowIcon"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M5.29188 6.04188L9.41195 1.93588C9.63694 1.69683 9.63694 1.33123 9.41195 1.10624C9.18697 0.881253 8.8073 0.881253 8.58231 1.10624L4.8841 4.80446L1.18588 1.10624C0.94683 0.881253 0.581227 0.881253 0.35624 1.10624C0.131253 1.33123 0.131253 1.69683 0.35624 1.93588L4.46225 6.04188C4.70129 6.26687 5.0669 6.26687 5.29188 6.04188Z"
                                    />
                                  </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                              </button>
                            </div>

                            <div className="MuiBox-root jss477">
                              <button
                                className="MuiButtonBase-root MuiButton-root jss331 MuiButton-contained MuiButton-containedPrimary"
                                tabIndex={0}
                                type="button"
                                data-test-id="Add Expense-button"
                                ref={anchorRef}
                                onClick={handleToggle}
                              >
                                <span className="MuiButton-label">
                                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
                                    <svg
                                      className="MuiSvgIcon-root"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      height={18}
                                      style={{filter: 'none'}}
                                    >
                                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                  </span>
                                  Add Expense
                                </span>
                                <span className="MuiTouchRipple-root" />
                              </button>
                            </div>
                          </div>
                          <div className="MuiBox-root jssss479">
                            <div className="MuiBox-root jssss673">
                              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                  <div className="MuiBox-root jss674 jssss643">
                                    <span
                                      className="MuiButtonBase-root MuiIconButton-root jss675 MuiCheckbox-root MuiCheckbox-colorSecondary jss635 MuiIconButton-colorSecondary"
                                      aria-disabled="false"
                                    >
                                      <span className="MuiTouchRipple-root" />
                                    </span>
                                    <h6 className="MuiTypography-root jss679 jssss680 MuiTypography-h6">
                                      receipt date
                                    </h6>
                                  </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                  <h6 className="MuiTypography-root jss679 jssss682 MuiTypography-h6">
                                    category
                                  </h6>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                  <h6 className="MuiTypography-root jss679 jssss683 MuiTypography-h6">
                                    MERCHANT / Project
                                  </h6>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                  <h6 className="MuiTypography-root jss679 jssss684 MuiTypography-h6">
                                    amount
                                  </h6>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                  <h6 className="MuiTypography-root jss679 jssss685 MuiTypography-h6">
                                    Approver
                                  </h6>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
                                  <h6 className="MuiTypography-root jss679 jssss687 MuiTypography-h6">
                                    status
                                  </h6>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1" />
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jssss688">
                            <div className="MuiPaper-root jss689 jssss690 MuiPaper-outlined MuiPaper-rounded">
                              <div
                                className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                                data-test-id="Holiday Inn_Emily_to reimburse item"
                              >
                                <div className="MuiGrid-root jssss632 MuiGrid-container MuiGrid-spacing-xs-2">
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <div className="MuiBox-root jssss691">
                                      <span
                                        className="MuiButtonBase-root MuiIconButton-root jss675 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary"
                                        aria-disabled="false"
                                        style={{padding: 0, marginRight: 8}}
                                      >
                                        <span className="MuiTouchRipple-root" />
                                      </span>
                                      08/05/2023
                                    </div>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <span className="MuiTypography-root MuiTypography-h4">
                                      Meals & Entertainme...
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <span className="MuiTypography-root MuiTypography-h4">
                                      Starbucks
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <span className="MuiBox-root jss692 jss634">
                                      USD
                                    </span>
                                    <span className="MuiBox-root jss693 jss630">
                                      <span className="MuiTypography-root MuiTypography-h4">
                                        <b>70.00</b>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <div className="MuiBox-root jss720">
                                      <div className="MuiBox-root jss721 jss696 jss642">
                                        <span className="MuiBadge-root sub-ava">
                                          <div
                                            className="MuiAvatar-root MuiAvatar-circular"
                                            data-test-id="ET-undefined"
                                            style={{
                                              width: 40,
                                              height: 40,
                                              borderRadius: 40,
                                            }}
                                          >
                                            <img
                                              alt="Emily Tan"
                                              src={userAva}
                                              className="MuiAvatar-img"
                                            />
                                          </div>
                                          Emily Tan
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
                                    <span className="MuiBox-root  jssss463">
                                      For Approval
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root jss628 MuiGrid-item MuiGrid-grid-xs-1">
                                    <div className="MuiBox-root jss727">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root jss726"
                                        tabIndex={0}
                                        type="button"
                                        data-test-id="icon-more"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            className="MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                          >
                                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                          </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="MuiPaper-root jss689 jssss690 MuiPaper-outlined MuiPaper-rounded">
                              <div
                                className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                                data-test-id="Holiday Inn_Emily_to reimburse item"
                              >
                                <div className="MuiGrid-root jssss632 MuiGrid-container MuiGrid-spacing-xs-2">
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <div className="MuiBox-root jssss691">
                                      <span
                                        className="MuiButtonBase-root MuiIconButton-root jss675 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary"
                                        aria-disabled="false"
                                        style={{padding: 0, marginRight: 8}}
                                      >
                                        <span className="MuiTouchRipple-root" />
                                      </span>
                                      08/05/2023
                                    </div>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <span className="MuiTypography-root MuiTypography-h4">
                                      Meals & Entertainme...
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <span className="MuiTypography-root MuiTypography-h4">
                                      Starbucks
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <span className="MuiBox-root jss692 jss634">
                                      USD
                                    </span>
                                    <span className="MuiBox-root jss693 jss630">
                                      <span className="MuiTypography-root MuiTypography-h4">
                                        <b>70.00</b>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                                    <div className="MuiBox-root jss720">
                                      <div className="MuiBox-root jss721 jss696 jss642">
                                        <span className="MuiBadge-root sub-ava">
                                          <div
                                            className="MuiAvatar-root MuiAvatar-circular"
                                            data-test-id="ET-undefined"
                                            style={{
                                              width: 40,
                                              height: 40,
                                              borderRadius: 40,
                                            }}
                                          >
                                            <img
                                              alt="Emily Tan"
                                              src={userAva}
                                              className="MuiAvatar-img"
                                            />
                                          </div>
                                          Emily Tan
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
                                    <span className="MuiBox-root  jssss463">
                                      For Approval
                                    </span>
                                  </div>
                                  <div className="MuiGrid-root jss628 MuiGrid-item MuiGrid-grid-xs-1">
                                    <div className="MuiBox-root jss727">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root jss726"
                                        tabIndex={0}
                                        type="button"
                                        data-test-id="icon-more"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            className="MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                          >
                                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                          </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="MuiBox-root jsss99">
                            <div className="MuiBox-root jsss374">
                              <div className="jsss375">
                                <div className="jsss376">
                                  <span className="text left">Results:</span>
                                  <div className="jsss381">
                                    <div
                                      className="jsss382"
                                      aria-haspopup="true"
                                    >
                                      <span>1-1</span>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root jsss383"
                                        tabIndex={0}
                                        type="button"
                                        data-test-id="pagination"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            width={7}
                                            height={10}
                                            viewBox="0 0 10 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root jsss384"
                                            focusable="false"
                                            aria-hidden="true"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M5.29188 6.04188L9.41195 1.93588C9.63694 1.69683 9.63694 1.33123 9.41195 1.10624C9.18697 0.881253 8.8073 0.881253 8.58231 1.10624L4.8841 4.80446L1.18588 1.10624C0.94683 0.881253 0.581227 0.881253 0.35624 1.10624C0.131253 1.33123 0.131253 1.69683 0.35624 1.93588L4.46225 6.04188C4.70129 6.26687 5.0669 6.26687 5.29188 6.04188Z"
                                            />
                                          </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                      </button>
                                    </div>
                                  </div>
                                  <span className="text right">of 1</span>
                                </div>
                                <div className="jsss393">
                                  <button
                                    className="MuiButtonBase-root jsss395 left Mui-disabled"
                                    tabIndex={-1}
                                    type="button"
                                    disabled=""
                                  >
                                    Prev
                                  </button>
                                  <nav
                                    aria-label="pagination navigation"
                                    className="MuiPagination-root jsss394"
                                  >
                                    <ul className="MuiPagination-ul">
                                      <li>
                                        <button
                                          className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-textPrimary Mui-selected"
                                          tabIndex={0}
                                          type="button"
                                          aria-current="true"
                                          aria-label="page 1"
                                        >
                                          1
                                          <span className="MuiTouchRipple-root" />
                                        </button>
                                      </li>
                                    </ul>
                                  </nav>
                                  <button
                                    className="MuiButtonBase-root jsss395 right Mui-disabled"
                                    tabIndex={-1}
                                    type="button"
                                    disabled=""
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SubmissionSubmitted;
