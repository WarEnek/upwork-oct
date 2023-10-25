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
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

import Checkbox from '../Checkbox';
import Popup from '../Popup';
import Header from '../Header';
import Aside from '../Aside';
import Input from '../Input';

function SubmissionApprove() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupStep2, setOpenPopupStep2] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handlePopupStep2ClickOpen = () => {
    setOpenPopupStep2(true);
    setOpenPopup(false);
  };

  const handleStep2Click = () => {
    setOpenPopupStep2(false);
    setOpenPopup(false);
    setOpenAlert(true);
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
      <Collapse in={openAlert} className='colapseAlert'>
        <Alert
          severity="success"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{mb: 2, backgroundColor: '#64B092', color: '#fff'}}
        >
          Expense(s) has been approved successfully
        </Alert>
      </Collapse>
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
                className="MuiPaper-root jss151 jss155 jss149 MuiPaper-elevation2 MuiPaper-rounded"
                data-omni-profile-content="true"
              >
                <div className="MuiBox-root jss159">
                  <div className="MuiBox-root jss160">
                    <div className="MuiBox-root jss161">
                      <div className="jss162" data-test-id="tabs-container">
                        <div className="MuiBox-root jss167 jss163">
                          <button
                            className="MuiButtonBase-root jss164"
                            tabIndex={0}
                            type="button"
                            data-test-id="categories"
                          >
                            <div className="MuiBox-root jss168">
                              my expenses
                            </div>
                          </button>
                        </div>
                        <a
                          className="jss163"
                          href="/expenses/settings/approval-flows/"
                        >
                          <button
                            className="MuiButtonBase-root jss164 active"
                            tabIndex={0}
                            type="button"
                            data-test-id="Approval flows"
                          >
                            <div className="MuiBox-root jss169">to approve</div>
                          </button>
                          <div className="underline" />
                        </a>
                        <a
                          className="jss163"
                          href="/expenses/settings/approval-flows/"
                        >
                          <button
                            className="MuiButtonBase-root jss164"
                            tabIndex={0}
                            type="button"
                            data-test-id="Approval flows"
                          >
                            <div className="MuiBox-root jss169">
                              To Reimburse
                            </div>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="MuiBox-root jsss469">
                      <div className="MuiBox-root jsss470">
                        <h2 className="MuiTypography-root MuiTypography-h2 jsss319">
                          <div className="MuiBox-root jsss472">
                            <div className="MuiBox-root jsss324 jsss464">
                              <div
                                className="MuiBox-root jss475 jss325 jsss473 jsss465 selected"
                                data-test-id="Draft"
                              >
                                To Do
                              </div>
                              <div
                                className="MuiBox-root jss476 jss325 jsss473 jsss465"
                                data-test-id="Submitted"
                              >
                                All
                              </div>
                            </div>
                          </div>
                        </h2>
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
                                <Checkbox />
                                <span className="MuiTouchRipple-root" />
                              </span>
                              <h6 className="MuiTypography-root jss679 jssss680 MuiTypography-h6">
                                SubmitTED DATE
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
                              employee
                            </h6>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                            <h6 className="MuiTypography-root jss679 jssss685 MuiTypography-h6">
                              LAST APPROVER
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
                                <Checkbox />
                                08/05/2023
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiTypography-root MuiTypography-h4">
                                Meals & Ente...
                              </span>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiTypography-root MuiTypography-h4">
                                Starbucks
                              </span>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiBox-root jss692 jss634">
                                SGD
                              </span>
                              <span className="MuiBox-root jss693 jss630">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  <b>12.90</b>
                                </span>
                              </span>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <div className="MuiBox-root jss720">
                                <div className="MuiBox-root jss721 jss696 jss642">
                                  <span className="MuiBadge-root sub-ava">
                                    Pedro Santos
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiBox-root jss692 jss634">
                                —
                              </span>
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
                      <div
                        className="MuiPaper-root jss689 jssss690 MuiPaper-outlined MuiPaper-rounded"
                        onClick={handlePopupClickOpen}
                      >
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
                                <Checkbox />
                                08/05/2023
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiTypography-root MuiTypography-h4">
                                Meals & Ente...
                              </span>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiTypography-root MuiTypography-h4">
                                Starbucks
                              </span>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiBox-root jss692 jss634">
                                SGD
                              </span>
                              <span className="MuiBox-root jss693 jss630">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  <b>12.90</b>
                                </span>
                              </span>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <div className="MuiBox-root jss720">
                                <div className="MuiBox-root jss721 jss696 jss642">
                                  <span className="MuiBadge-root sub-ava">
                                    Pedro Santos
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                              <span className="MuiBox-root jss692 jss634">
                                —
                              </span>
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
                    <Popup
                      open={openPopup}
                      next={handlePopupStep2ClickOpen}
                      onClose={handlePopupClose}
                      title={'View per diem request'}
                      maxWidth={800}
                    >
                      <div className="stages">
                        <div className="active">
                          <div className="stagesCircle">1</div>
                          <span className="stagesText">Trip details</span>
                        </div>
                        <div>
                          <div className="stagesCircle">2</div>
                          <span className="stagesText">
                            Review per diem total
                          </span>
                        </div>
                      </div>
                      <div className="MuiBox-root jss147">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start">
                          <div className="MuiBox-root jsss3277">
                            <div
                              className="MuiBox-root jss3278"
                              style={{
                                textTransform: 'uppercase',
                                height: 40,
                                alignItems: 'center',
                              }}
                            >
                              <div className="MuiBox-root jss279 jss3276">
                                Status
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root  jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                            <div
                              className="MuiBox-root jss3282"
                              data-test-id="section-value-undefined"
                            >
                              <div className="statusChip-wrap">
                                <div className="statusChip">For approval</div>
                              </div>
                              <div className="MuiBox-root jss288" />
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root jss3148">Trip details</div>
                        <div className="MuiBox-root jsss3148">Leg 1</div>
                        <hr className="MuiDivider-root" />
                        <div className="MuiBox-root jss3270">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    Departure
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Singapore, 19 September 2023, 08:15
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    Arrival
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Malaysia, 19 September 2023, 10:00
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MuiBox-root jss147">
                        <div className="MuiBox-root jsss3148">Leg 2</div>
                        <hr className="MuiDivider-root" />
                        <div className="MuiBox-root jss3270">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    Departure
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Singapore, 19 September 2023, 08:15
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    Arrival
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Malaysia, 19 September 2023, 10:00
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MuiBox-root jss147">
                        <div className="MuiBox-root jss3148">
                          Additional details
                        </div>

                        <div className="MuiBox-root jss3270">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    Project
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Project A
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root jss3270">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    CUSTOMER
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Customer A
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root jss3270">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    remarks
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      Empty
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root jss3270">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start depAiC">
                              <div className="MuiBox-root jsss3277">
                                <div
                                  className="MuiBox-root jss3278"
                                  style={{
                                    textTransform: 'uppercase',
                                    height: 40,
                                    alignItems: 'center',
                                  }}
                                >
                                  <div className="MuiBox-root jss279 jss3276">
                                    Approval progress
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                <div
                                  className="MuiBox-root jss3282"
                                  data-test-id="section-value-undefined"
                                >
                                  <div className="MuiBox-root jss3283">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                      <div className="progress-wrap">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <circle
                                            cx="6"
                                            cy="6"
                                            r="6"
                                            fill="#6261B5"
                                          />
                                        </svg>
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
                                          <div className="sub-ava-name-other">
                                            <b>Emily Tan</b>
                                            Pending approval
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss288" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popup>
                    <Popup
                      open={openPopupStep2}
                      next={handleStep2Click}
                      prev={handlePopupClickOpen}
                      onClose={handlePopupStep2ClickClose}
                      title={'View per diem request'}
                      maxWidth={800}
                    >
                      <div className="stages">
                        <div>
                          <div className="stagesCircle">1</div>
                          <span className="stagesText">Trip details</span>
                        </div>
                        <div className="active">
                          <div className="stagesCircle">2</div>
                          <span className="stagesText">
                            Review per diem total
                          </span>
                        </div>
                      </div>
                      <div
                        className="MuiPaper-root MuiAlert-root MuiAlert-outlinedInfo jss246 MuiPaper-elevation0"
                        role="alert"
                      >
                        <div className="MuiAlert-icon">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="MuiSvgIcon-root"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.60414 6.55641C2.0433 6.7492 1.66675 7.27682 1.66675 7.86987V8.96197H18.3334V3.09557C18.3334 2.1421 17.3947 1.47216 16.493 1.78211L2.60414 6.55641ZM2.60414 11.3675C2.0433 11.1748 1.66675 10.6471 1.66675 10.0541V8.96199H18.3334V14.8284C18.3334 15.7819 17.3947 16.4518 16.493 16.1418L2.60414 11.3675Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.09741 13.2698L11.5094 15.8176C10.9775 17.287 9.56981 18.337 7.91686 18.337C5.80744 18.337 4.09741 16.627 4.09741 14.5176V13.2698Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="MuiAlert-message">
                          Select only the items that will be covered by the
                          company (e.g. specific day’s per diem allowance), and
                          indicate any deductions (e.g. free lunch or dinner
                          included in hotel expense)
                        </div>
                      </div>
                      <div className="popsHead">
                        <h3>Per diem allowance breakdown</h3>
                        <strong>SGD 189.00</strong>
                      </div>
                      <div className="perDay-wrap">
                        <div className="perDay-item">
                          <div>
                            <div>
                              <div className="perDay-row">
                                <div>
                                  <div>
                                    <div className="perDay-item-date">
                                      Tue, 19/09/2023
                                    </div>
                                    <div className="perDay-item-depart">
                                      <b>Malaysia,</b>{' '}
                                      {'Depart >8AM or Arrive <6PM'}
                                    </div>
                                  </div>
                                </div>
                                <div className="perDay-item-price">
                                  SGD 43.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="perDay-item">
                          <div>
                            <div>
                              <div className="perDay-row">
                                <div>
                                  <div>
                                    <div className="perDay-item-date">
                                      Tue, 19/09/2023
                                    </div>
                                    <div className="perDay-item-depart">
                                      <b>Malaysia,</b>{' '}
                                      {'Depart >8AM or Arrive <6PM'}
                                    </div>
                                  </div>
                                </div>
                                <div className="perDay-item-price">
                                  SGD 43.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="perDay-item">
                          <div>
                            <div>
                              <div className="perDay-row">
                                <div>
                                  <div>
                                    <div className="perDay-item-date">
                                      Tue, 19/09/2023
                                    </div>
                                    <div className="perDay-item-depart">
                                      <b>Malaysia,</b>{' '}
                                      {'Depart >8AM or Arrive <6PM'}
                                    </div>
                                  </div>
                                </div>
                                <div className="perDay-item-price">
                                  SGD 43.00
                                </div>
                              </div>
                              <div className="perDay-tags">
                                <div className="perDay-tags-list">
                                  <span className="perDay-tags-chip active">
                                    DINNER PROVIDED
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popup>
                    <div className="MuiBox-root jsss99">
                      <div className="MuiBox-root jsss374">
                        <div className="jsss375">
                          <div className="jsss376">
                            <span className="text left">Results:</span>
                            <div className="jsss381">
                              <div className="jsss382" aria-haspopup="true">
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
      </main>
    </div>
  );
}

export default SubmissionApprove;
