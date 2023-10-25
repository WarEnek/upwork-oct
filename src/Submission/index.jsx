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

import Checkbox from '../Checkbox';
import Popup from '../Popup';
import Header from '../Header';
import Aside from '../Aside';
import Input from '../Input';
import {useNavigate} from 'react-router-dom';

function Submission() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupStep2, setOpenPopupStep2] = useState(false);
  const navigate = useNavigate();

  const handlePopupStep2ClickOpen = () => {
    setOpenPopupStep2(true);
    setOpenPopup(false);
  };

  const handleToSubmit = () => {
    navigate('/submission-submitted')
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
                                      className="MuiBox-root jss475 jss325 jsss473 jsss465 selected"
                                      data-test-id="Draft"
                                    >
                                      Draft
                                    </div>
                                    <div
                                      className="MuiBox-root jss476 jss325 jsss473 jsss465"
                                      data-test-id="Submitted"
                                    >
                                      Submitted
                                    </div>
                                  </div>
                                </div>
                              </h2>
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
                                  Add New
                                  <svg
                                    width={10}
                                    height={7}
                                    viewBox="0 0 10 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="MuiSvgIcon-root jsss191 arrowIcon"
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
                              <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                              >
                                {({TransitionProps, placement}) => (
                                  <Grow
                                    {...TransitionProps}
                                    style={{
                                      margin: '10px 0 0',
                                      transformOrigin:
                                        placement === 'bottom-start'
                                          ? 'left top'
                                          : 'left bottom',
                                    }}
                                  >
                                    <Paper>
                                      <ClickAwayListener
                                        onClickAway={handleClose}
                                      >
                                        <MenuList
                                          autoFocusItem={open}
                                          id="composition-menu"
                                          aria-labelledby="composition-button"
                                          onKeyDown={handleListKeyDown}
                                        >
                                          <MenuItem onClick={handleClose}>
                                            Expense claim
                                          </MenuItem>
                                          <MenuItem
                                            onClick={handlePopupClickOpen}
                                          >
                                            Per diem
                                          </MenuItem>
                                        </MenuList>
                                      </ClickAwayListener>
                                    </Paper>
                                  </Grow>
                                )}
                              </Popper>
                              <Popup
                                open={openPopup}
                                next={handlePopupStep2ClickOpen}
                                sub
                                onClose={handlePopupClose}
                                title={'New per diem'}
                                maxWidth={800}
                              >
                                <div className="stages">
                                  <div className="active">
                                    <div className="stagesCircle">1</div>
                                    <span className="stagesText">
                                      Additional details
                                    </span>
                                  </div>
                                  <div>
                                    <div className="stagesCircle">2</div>
                                    <span className="stagesText">
                                      Review per diem total
                                    </span>
                                  </div>
                                </div>
                                <div className="MuiBox-root jss147">
                                  <div className="MuiBox-root jss3148">
                                    Trip details
                                  </div>
                                  <div className="MuiBox-root jsss3148">
                                    Leg 1
                                  </div>
                                  <hr className="MuiDivider-root" />
                                  <div className="MuiBox-root jss3270">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
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
                                              Departure
                                              <span className="jsss509">
                                                &nbsp;*
                                              </span>
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
                                                <Input
                                                  options={[
                                                    {
                                                      label: 'Afghanistan',
                                                      value: 'value1',
                                                    },
                                                    {
                                                      label: 'Albania',
                                                      value: 'value2',
                                                    },
                                                    {
                                                      label: 'Algeria',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Angola',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Anguilla',
                                                      value: 'value3',
                                                    },
                                                  ]}
                                                  value="Albania"
                                                />
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart">
                                                    <button
                                                      className="MuiButtonBase-root MuiIconButton-root jss376 jssss374"
                                                      tabIndex={0}
                                                      type="button"
                                                      aria-label="change date"
                                                    >
                                                      <span className="MuiIconButton-label">
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
                                                            d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
                                                            fill="#000"
                                                          />
                                                        </svg>
                                                      </span>
                                                    </button>
                                                  </div>
                                                  <input
                                                    aria-invalid="false"
                                                    autoComplete="off"
                                                    id="receipt_date"
                                                    name="receipt_date"
                                                    placeholder="DD/MM/YYYY"
                                                    type="text"
                                                    role="presentation"
                                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
                                                    defaultValue=""
                                                  />
                                                  <fieldset
                                                    aria-hidden="true"
                                                    className="jsss339 MuiOutlinedInput-notchedOutline"
                                                    style={{paddingLeft: 8}}
                                                  >
                                                    <legend
                                                      className="jsss340"
                                                      style={{width: '0.01px'}}
                                                    >
                                                      <span>​</span>
                                                    </legend>
                                                  </fieldset>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root  jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div
                                                  className="MuiBox-root jss33282"
                                                  data-test-id="section-value-undefined"
                                                >
                                                  <div className="MuiBox-root jss33283 jss33254">
                                                    <div className="MuiFormControl-root MuiTextField-root">
                                                      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd">
                                                        <input
                                                          aria-invalid="false"
                                                          id="schedule[0].time_from"
                                                          placeholder="HH:MM"
                                                          type="text"
                                                          className="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd"
                                                          defaultValue="08:00"
                                                        />
                                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
                                                          <button
                                                            className="MuiButtonBase-root MuiIconButton-root"
                                                            tabIndex={0}
                                                            type="button"
                                                          >
                                                            <span className="MuiIconButton-label">
                                                              <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                                                focusable="false"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                              >
                                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                                                <path
                                                                  fill="none"
                                                                  d="M0 0h24v24H0z"
                                                                />
                                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
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
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss3270">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
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
                                              Arrival
                                              <span className="jsss509">
                                                &nbsp;*
                                              </span>
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
                                                <Input
                                                  options={[
                                                    {
                                                      label: 'Afghanistan',
                                                      value: 'value1',
                                                    },
                                                    {
                                                      label: 'Albania',
                                                      value: 'value2',
                                                    },
                                                    {
                                                      label: 'Algeria',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Angola',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Anguilla',
                                                      value: 'value3',
                                                    },
                                                  ]}
                                                  value="Albania"
                                                />
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart">
                                                    <button
                                                      className="MuiButtonBase-root MuiIconButton-root jss376 jssss374"
                                                      tabIndex={0}
                                                      type="button"
                                                      aria-label="change date"
                                                    >
                                                      <span className="MuiIconButton-label">
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
                                                            d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
                                                            fill="#000"
                                                          />
                                                        </svg>
                                                      </span>
                                                    </button>
                                                  </div>
                                                  <input
                                                    aria-invalid="false"
                                                    autoComplete="off"
                                                    id="receipt_date"
                                                    name="receipt_date"
                                                    placeholder="DD/MM/YYYY"
                                                    type="text"
                                                    role="presentation"
                                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
                                                    defaultValue=""
                                                  />
                                                  <fieldset
                                                    aria-hidden="true"
                                                    className="jsss339 MuiOutlinedInput-notchedOutline"
                                                    style={{paddingLeft: 8}}
                                                  >
                                                    <legend
                                                      className="jsss340"
                                                      style={{width: '0.01px'}}
                                                    >
                                                      <span>​</span>
                                                    </legend>
                                                  </fieldset>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root  jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div
                                                  className="MuiBox-root jss33282"
                                                  data-test-id="section-value-undefined"
                                                >
                                                  <div className="MuiBox-root jss33283 jss33254">
                                                    <div className="MuiFormControl-root MuiTextField-root">
                                                      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd">
                                                        <input
                                                          aria-invalid="false"
                                                          id="schedule[0].time_from"
                                                          placeholder="HH:MM"
                                                          type="text"
                                                          className="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd"
                                                          defaultValue="08:00"
                                                        />
                                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
                                                          <button
                                                            className="MuiButtonBase-root MuiIconButton-root"
                                                            tabIndex={0}
                                                            type="button"
                                                          >
                                                            <span className="MuiIconButton-label">
                                                              <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                                                focusable="false"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                              >
                                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                                                <path
                                                                  fill="none"
                                                                  d="M0 0h24v24H0z"
                                                                />
                                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
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
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="MuiBox-root jss147">
                                  <div className="MuiBox-root jsss3148">
                                    Leg 2
                                  </div>
                                  <hr className="MuiDivider-root" />
                                  <div className="MuiBox-root jss3270">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
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
                                              Departure
                                              <span className="jsss509">
                                                &nbsp;*
                                              </span>
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
                                                <Input
                                                  options={[
                                                    {
                                                      label: 'Afghanistan',
                                                      value: 'value1',
                                                    },
                                                    {
                                                      label: 'Albania',
                                                      value: 'value2',
                                                    },
                                                    {
                                                      label: 'Algeria',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Angola',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Anguilla',
                                                      value: 'value3',
                                                    },
                                                  ]}
                                                  value="Albania"
                                                />
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart">
                                                    <button
                                                      className="MuiButtonBase-root MuiIconButton-root jss376 jssss374"
                                                      tabIndex={0}
                                                      type="button"
                                                      aria-label="change date"
                                                    >
                                                      <span className="MuiIconButton-label">
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
                                                            d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
                                                            fill="#000"
                                                          />
                                                        </svg>
                                                      </span>
                                                    </button>
                                                  </div>
                                                  <input
                                                    aria-invalid="false"
                                                    autoComplete="off"
                                                    id="receipt_date"
                                                    name="receipt_date"
                                                    placeholder="DD/MM/YYYY"
                                                    type="text"
                                                    role="presentation"
                                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
                                                    defaultValue=""
                                                  />
                                                  <fieldset
                                                    aria-hidden="true"
                                                    className="jsss339 MuiOutlinedInput-notchedOutline"
                                                    style={{paddingLeft: 8}}
                                                  >
                                                    <legend
                                                      className="jsss340"
                                                      style={{width: '0.01px'}}
                                                    >
                                                      <span>​</span>
                                                    </legend>
                                                  </fieldset>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root  jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div
                                                  className="MuiBox-root jss33282"
                                                  data-test-id="section-value-undefined"
                                                >
                                                  <div className="MuiBox-root jss33283 jss33254">
                                                    <div className="MuiFormControl-root MuiTextField-root">
                                                      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd">
                                                        <input
                                                          aria-invalid="false"
                                                          id="schedule[0].time_from"
                                                          placeholder="HH:MM"
                                                          type="text"
                                                          className="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd"
                                                          defaultValue="08:00"
                                                        />
                                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
                                                          <button
                                                            className="MuiButtonBase-root MuiIconButton-root"
                                                            tabIndex={0}
                                                            type="button"
                                                          >
                                                            <span className="MuiIconButton-label">
                                                              <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                                                focusable="false"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                              >
                                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                                                <path
                                                                  fill="none"
                                                                  d="M0 0h24v24H0z"
                                                                />
                                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
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
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="MuiBox-root jss3270">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
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
                                              Arrival
                                              <span className="jsss509">
                                                &nbsp;*
                                              </span>
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
                                                <Input
                                                  options={[
                                                    {
                                                      label: 'Afghanistan',
                                                      value: 'value1',
                                                    },
                                                    {
                                                      label: 'Albania',
                                                      value: 'value2',
                                                    },
                                                    {
                                                      label: 'Algeria',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Angola',
                                                      value: 'value3',
                                                    },
                                                    {
                                                      label: 'Anguilla',
                                                      value: 'value3',
                                                    },
                                                  ]}
                                                  value="Albania"
                                                />
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root jsss3281 jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart">
                                                    <button
                                                      className="MuiButtonBase-root MuiIconButton-root jss376 jssss374"
                                                      tabIndex={0}
                                                      type="button"
                                                      aria-label="change date"
                                                    >
                                                      <span className="MuiIconButton-label">
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
                                                            d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"
                                                            fill="#000"
                                                          />
                                                        </svg>
                                                      </span>
                                                    </button>
                                                  </div>
                                                  <input
                                                    aria-invalid="false"
                                                    autoComplete="off"
                                                    id="receipt_date"
                                                    name="receipt_date"
                                                    placeholder="DD/MM/YYYY"
                                                    type="text"
                                                    role="presentation"
                                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
                                                    defaultValue=""
                                                  />
                                                  <fieldset
                                                    aria-hidden="true"
                                                    className="jsss339 MuiOutlinedInput-notchedOutline"
                                                    style={{paddingLeft: 8}}
                                                  >
                                                    <legend
                                                      className="jsss340"
                                                      style={{width: '0.01px'}}
                                                    >
                                                      <span>​</span>
                                                    </legend>
                                                  </fieldset>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="MuiBox-root jss288" />
                                          </div>
                                        </div>
                                        <div className="MuiBox-root  jss3274 MuiGrid-item MuiGrid-grid-xs-true">
                                          <div
                                            className="MuiBox-root jss3282"
                                            data-test-id="section-value-undefined"
                                          >
                                            <div className="MuiBox-root jss3283">
                                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                <div
                                                  className="MuiBox-root jss33282"
                                                  data-test-id="section-value-undefined"
                                                >
                                                  <div className="MuiBox-root jss33283 jss33254">
                                                    <div className="MuiFormControl-root MuiTextField-root">
                                                      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd">
                                                        <input
                                                          aria-invalid="false"
                                                          id="schedule[0].time_from"
                                                          placeholder="HH:MM"
                                                          type="text"
                                                          className="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd"
                                                          defaultValue="08:00"
                                                        />
                                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
                                                          <button
                                                            className="MuiButtonBase-root MuiIconButton-root"
                                                            tabIndex={0}
                                                            type="button"
                                                          >
                                                            <span className="MuiIconButton-label">
                                                              <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                                                focusable="false"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                              >
                                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                                                <path
                                                                  fill="none"
                                                                  d="M0 0h24v24H0z"
                                                                />
                                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
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
                                                <Input placeholder="Project" />
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
                                                <Input placeholder="Customer" />
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
                                              <div
                                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl"
                                                style={{
                                                  height: 'auto',
                                                  minHeight: '72px',
                                                }}
                                              >
                                                <textarea
                                                  aria-invalid="false"
                                                  autoComplete="off"
                                                  id="name"
                                                  name="name"
                                                  placeholder="Reason for trip, or any other remarks"
                                                  type="text"
                                                  role="presentation"
                                                  className="MuiInputBase-input MuiOutlinedInput-input"
                                                  defaultValue=""
                                                  rows="5"
                                                  style={{height: 'auto'}}
                                                />
                                                <fieldset
                                                  aria-hidden="true"
                                                  className="jss3284 MuiOutlinedInput-notchedOutline"
                                                  style={{paddingLeft: 8}}
                                                >
                                                  <legend
                                                    className="jss3285"
                                                    style={{width: '0.01px'}}
                                                  >
                                                    <span>​</span>
                                                  </legend>
                                                </fieldset>
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
                                prev={handlePopupClickOpen}
                                submit={handleToSubmit}
                                sub
                                onClose={handlePopupStep2ClickClose}
                                title={'New per diem'}
                                maxWidth={800}
                              >
                                <div className="stages">
                                  <div>
                                    <div className="stagesCircle">1</div>
                                    <span className="stagesText">
                                      Additional details
                                    </span>
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
                                    Select only the items that will be covered
                                    by the company (e.g. specific day’s per diem
                                    allowance), and indicate any deductions
                                    (e.g. free lunch or dinner included in hotel
                                    expense)
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
                                            <Checkbox checked={true}>
                                              <div>
                                                <div className="perDay-item-date">
                                                  Tue, 19/09/2023
                                                </div>
                                                <div className="perDay-item-depart">
                                                  <b>Malaysia,</b>{' '}
                                                  {'Depart >8AM or Arrive <6PM'}
                                                </div>
                                              </div>
                                            </Checkbox>
                                          </div>
                                          <div className="perDay-item-price">SGD 43.00</div>
                                        </div>
                                        <div className="perDay-tags">
                                          <h4>Deductions</h4>
                                          <div className="perDay-tags-list">
                                            <span className='perDay-tags-chip'>LUNCH PROVIDED</span>
                                            <span className='perDay-tags-chip'>DINNER PROVIDED</span>
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
                                            <Checkbox checked={true}>
                                              <div>
                                                <div className="perDay-item-date">
                                                  Tue, 19/09/2023
                                                </div>
                                                <div className="perDay-item-depart">
                                                  <b>Malaysia,</b>{' '}
                                                  {'Depart >8AM or Arrive <6PM'}
                                                </div>
                                              </div>
                                            </Checkbox>
                                          </div>
                                          <div className="perDay-item-price">SGD 43.00</div>
                                        </div>
                                        <div className="perDay-tags">
                                          <h4>Deductions</h4>
                                          <div className="perDay-tags-list">
                                            <span className='perDay-tags-chip'>LUNCH PROVIDED</span>
                                            <span className='perDay-tags-chip'>DINNER PROVIDED</span>
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
                                            <Checkbox checked={true}>
                                              <div>
                                                <div className="perDay-item-date">
                                                  Tue, 19/09/2023
                                                </div>
                                                <div className="perDay-item-depart">
                                                  <b>Malaysia,</b>{' '}
                                                  {'Depart >8AM or Arrive <6PM'}
                                                </div>
                                              </div>
                                            </Checkbox>
                                          </div>
                                          <div className="perDay-item-price">SGD 43.00</div>
                                        </div>
                                        <div className="perDay-tags">
                                          <h4>Deductions</h4>
                                          <div className="perDay-tags-list">
                                            <span className='perDay-tags-chip'>LUNCH PROVIDED</span>
                                            <span className='perDay-tags-chip active'>DINNER PROVIDED</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </div>
                          </div>
                          <div className="MuiBox-root jsss479">
                            <div
                              className="MuiBox-root  jsss489 jsss478"
                              data-test-id="empty-screen"
                            >
                              <svg
                                width={70}
                                height={70}
                                viewBox="0 0 70 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root"
                                focusable="false"
                                aria-hidden="true"
                                style={{fontSize: 70}}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C26.3276 0 23.0311 10.4019 16.9167 15.6256C9.40264 22.0451 0 24.3424 0 35C0 54.33 15.67 70 35 70Z"
                                  fill="#F7F7FB"
                                />
                                <g filter="url(#filter0_f_3704_1790)">
                                  <path
                                    d="M56.0003 22.75H25.667C24.7005 22.75 23.917 23.42 23.917 24.2464V55.6703C23.917 56.4967 24.7005 57.1667 25.667 57.1667H56.0003C56.9668 57.1667 57.7503 56.4967 57.7503 55.6703V24.2464C57.7503 23.42 56.9668 22.75 56.0003 22.75Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M56.0003 22.75H25.667C24.7005 22.75 23.917 23.42 23.917 24.2464V55.6703C23.917 56.4967 24.7005 57.1667 25.667 57.1667H56.0003C56.9668 57.1667 57.7503 56.4967 57.7503 55.6703V24.2464C57.7503 23.42 56.9668 22.75 56.0003 22.75Z"
                                    fill="#E1E5EF"
                                  />
                                </g>
                                <path
                                  d="M21 23.9167C21 21.3393 23.0893 19.25 25.6667 19.25H47.8333C50.4107 19.25 52.5 21.3393 52.5 23.9167V49C52.5 51.5773 50.4107 53.6667 47.8333 53.6667H25.6667C23.0893 53.6667 21 51.5773 21 49V23.9167Z"
                                  fill="white"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M27.417 20.4154C27.417 18.1602 29.2452 16.332 31.5003 16.332H42.0003C44.2555 16.332 46.0837 18.1602 46.0837 20.4154V23.332C46.0837 24.2985 45.3002 25.082 44.3337 25.082C43.3672 25.082 42.5837 24.2985 42.5837 23.332V20.4154C42.5837 20.0932 42.3225 19.832 42.0003 19.832H31.5003C31.1782 19.832 30.917 20.0932 30.917 20.4154V23.332C30.917 24.2985 30.1335 25.082 29.167 25.082C28.2005 25.082 27.417 24.2985 27.417 23.332V20.4154Z"
                                  fill="#D9DDE4"
                                />
                                <defs>
                                  <filter
                                    id="filter0_f_3704_1790"
                                    x="7.41699"
                                    y="6.25"
                                    width="66.833"
                                    height="67.418"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity={0}
                                      result="BackgroundImageFix"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="BackgroundImageFix"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="8.25"
                                      result="effect1_foregroundBlur_3704_1790"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <h2 className="MuiTypography-root jss490 jsss494 MuiTypography-h2">
                                No draft expenses
                              </h2>
                              <h4 className="MuiTypography-root jsss491 MuiTypography-h4">
                                Pro Tip: Save your expense as drafts and submit
                                in bulk using the checkbox in Draft tab
                              </h4>
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

export default Submission;
