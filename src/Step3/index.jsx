import {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Popup from '../Popup';
import Checkbox from '../Checkbox';
import Input from '../Input';

function Step3() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div
      className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullScreen jss737 MuiPaper-elevation24 MuiPaper-rounded"
      role="dialog"
    >
      <div className="MuiBox-root jss912 jss905">
        <button
          className="MuiButtonBase-root MuiIconButton-root jss906"
          tabIndex={0}
          type="button"
          data-test-id="arrow-back"
        >
          <span className="MuiIconButton-label">
            <svg
              className="MuiSvgIcon-root jss909"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </span>
          <span className="MuiTouchRipple-root" />
        </button>
        <div className="MuiBox-root jss913 jss907">
          <div className="MuiBox-root jss914">
            <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-colorTextPrimary">
              Edit per diem rates
            </h2>
          </div>
        </div>
        <div className="MuiBox-root jss915 jss908" />
      </div>
      <div className="MuiBox-root jss482 jss481">
        <div className="MuiBox-root jss483">
          <div className="MuiBox-root jss486 jss484">
            <div className="MuiPaper-root MuiStepper-root jss485 MuiStepper-vertical MuiPaper-elevation0">
              <div className="MuiStep-root MuiStep-vertical MuiStep-completed">
                <span className="MuiStepLabel-root MuiStepLabel-vertical">
                  <span className="MuiStepLabel-iconContainer">
                    <svg
                      width={24}
                      height={24}
                      viewBox="-6 -6 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="MuiSvgIcon-root jss4851"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.72136 9.5C4.54127 9.5 4.37019 9.42745 4.24412 9.30049L1.69585 6.73404C1.43472 6.47105 1.43472 6.03575 1.69585 5.77276C1.95698 5.50977 2.38919 5.50977 2.65033 5.77276L4.72136 7.85856L9.34968 3.19724C9.61081 2.93425 10.043 2.93425 10.3042 3.19724C10.5653 3.46024 10.5653 3.89553 10.3042 4.15853L5.1986 9.30049C5.07254 9.42745 4.90145 9.5 4.72136 9.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-completed MuiTypography-body2 MuiTypography-displayBlock">
                      Per diem set up
                    </span>
                  </span>
                </span>
              </div>
              <div className="MuiStep-root MuiStep-vertical MuiStep-completed">
                <span className="MuiStepLabel-root MuiStepLabel-vertical">
                  <span className="MuiStepLabel-iconContainer">
                    <svg
                      width={24}
                      height={24}
                      viewBox="-6 -6 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="MuiSvgIcon-root jss4851"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.72136 9.5C4.54127 9.5 4.37019 9.42745 4.24412 9.30049L1.69585 6.73404C1.43472 6.47105 1.43472 6.03575 1.69585 5.77276C1.95698 5.50977 2.38919 5.50977 2.65033 5.77276L4.72136 7.85856L9.34968 3.19724C9.61081 2.93425 10.043 2.93425 10.3042 3.19724C10.5653 3.46024 10.5653 3.89553 10.3042 4.15853L5.1986 9.30049C5.07254 9.42745 4.90145 9.5 4.72136 9.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-completed MuiTypography-body2 MuiTypography-displayBlock">
                      Set daily rates
                    </span>
                  </span>
                </span>
              </div>
              <div className="MuiStep-root MuiStep-vertical">
                <span className="MuiStepLabel-root MuiStepLabel-vertical">
                  <span className="MuiStepLabel-iconContainer">
                    <svg
                      className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={12} r={12} />
                      <text
                        className="MuiStepIcon-text"
                        x={12}
                        y={16}
                        textAnchor="middle"
                      >
                        3
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
                      Set conditions
                    </span>
                  </span>
                </span>
              </div>
              <div className="MuiStep-root MuiStep-vertical">
                <span className="MuiStepLabel-root MuiStepLabel-vertical Mui-disabled">
                  <span className="MuiStepLabel-iconContainer">
                    <svg
                      className="MuiSvgIcon-root MuiStepIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={12} r={12} />
                      <text
                        className="MuiStepIcon-text"
                        x={12}
                        y={16}
                        textAnchor="middle"
                      >
                        4
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock">
                      Add deductions
                    </span>
                  </span>
                </span>
              </div>
              <div className="MuiStep-root MuiStep-vertical">
                <span className="MuiStepLabel-root MuiStepLabel-vertical Mui-disabled">
                  <span className="MuiStepLabel-iconContainer">
                    <svg
                      className="MuiSvgIcon-root MuiStepIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={12} r={12} />
                      <text
                        className="MuiStepIcon-text"
                        x={12}
                        y={16}
                        textAnchor="middle"
                      >
                        5
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock">
                      Review & save
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiPaper-root jss488 MuiPaper-elevation4">
          <div className="MuiBox-root jss490">
            <div className="MuiBox-root jss207">
              <div className="MuiBox-root jss208">
                <h2 className="MuiTypography-root MuiTypography-h2 jss209">
                  Set conditions
                </h2>
                <h6 className="MuiTypography-root MuiTypography-subtitle1 jss211 jss212">
                  <div className="MuiBox-root jss213">
                    The conditions under which the daily rate may change. <br />
                    If multiple conditions are valid, the higher ranking one
                    will apply.
                  </div>
                </h6>
              </div>
              <div className="MuiBox-root jss215">
                <button
                  className="MuiButtonBase-root MuiButton-root jss216 MuiButton-contained MuiButton-containedPrimary"
                  tabIndex={0}
                  type="button"
                  data-test-id="Add Approval Rule-button"
                >
                  <span className="MuiButton-label">Add Condition</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
            </div>
          </div>
          <hr className="MuiDivider-root" />
          <div className="MuiBox-root jss2191">
            <div className="MuiBox-root jss234">
              <div className="MuiGrid-root MuiGrid-container">
                <div className="MuiGrid-root jss233 MuiGrid-item MuiGrid-grid-xs-4">
                  <h6 className="MuiTypography-root jss235 jss236 MuiTypography-h6">
                    RATE NAME
                  </h6>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                  <h6 className="MuiTypography-root jss235 jss236 MuiTypography-h6">
                    approver sequence
                  </h6>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                  <h6 className="MuiTypography-root jss235 jss238 MuiTypography-h6">
                    APPLIED RATE (% of daily rate)
                  </h6>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true" />
              </div>
            </div>
            <div
              data-rbd-droppable-id="newRules"
              data-rbd-droppable-context-id={0}
              onClick={handleClickOpen}
            >
              <div
                className="MuiPaper-root jss241 jss247 MuiPaper-outlined MuiPaper-rounded"
                data-test-id="approval-rule-1"
                data-rbd-draggable-context-id={0}
                data-rbd-draggable-id={116}
              >
                <div
                  tabIndex={0}
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id={116}
                  data-rbd-drag-handle-context-id={0}
                  draggable="false"
                  className="jss239"
                  data-test-id="drag-icon"
                  title=""
                >
                  <svg
                    className="MuiSvgIcon-root jss242"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    width={24}
                  >
                    <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <div className="MuiGrid-root jss240 MuiGrid-container MuiGrid-align-items-xs-center">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root jss230 jss221 MuiGrid-item MuiGrid-grid-xs-4">
                      <div className="MuiBox-root jss248">
                        <div className="MuiBox-root jss249">
                          <span className="MuiBox-root jss250">
                            <div className="MuiBox-root jss251">
                              <div className="MuiBox-root jss253 jss227">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  Trip is longer than 14 days
                                </span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss230 jss221 MuiGrid-item MuiGrid-grid-xs-4">
                      <div className="MuiBox-root jss248">
                        <div className="MuiBox-root jss249">
                          <span className="MuiBox-root jss250">
                            <div className="MuiBox-root jss251">
                              <div className="MuiBox-root jss252 jss226">
                                Trip duration:
                              </div>
                              <div className="MuiBox-root jss253 jss227">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  Longer than 14 days
                                </span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss230 MuiGrid-item MuiGrid-grid-xs-3">
                      <span className="MuiBox-root jss254" title="">
                        <div className="MuiBox-root jss255">
                          <div className="MuiBox-root jss257 jss227">
                            <span className="MuiTypography-root MuiTypography-h4">
                              80%
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                    <div className="MuiGrid-root jss232 MuiGrid-item MuiGrid-grid-xs-true">
                      <span className="MuiBox-root jss258" title="">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary MuiIconButton-sizeSmall"
                          tabIndex={0}
                          type="button"
                          data-test-id="trash-icon"
                        >
                          <span className="MuiIconButton-label">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                          </span>
                          <span className="MuiTouchRipple-root" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Popup
              open={open}
              onClose={handleClose}
              title={'Edit rate condition'}
              maxWidth={800}
            >
              <div className="MuiBox-root jss3270">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start">
                    <div className="MuiBox-root jss3277">
                      <div
                        className="MuiBox-root jss3278"
                        style={{
                          textTransform: 'uppercase',
                          height: 40,
                          alignItems: 'center',
                        }}
                      >
                        <div className="MuiBox-root jss279 jss3276">
                          Rate name
                        </div>
                      </div>
                    </div>
                    <div className="MuiBox-root jss3281 jss3274">
                      <div
                        className="MuiBox-root jss3282"
                        data-test-id="section-value-undefined"
                      >
                        <div className="MuiBox-root jss3283">
                          <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                              <input
                                aria-invalid="false"
                                autoComplete="off"
                                id="name"
                                name="name"
                                placeholder="Rate name"
                                type="text"
                                role="presentation"
                                className="MuiInputBase-input MuiOutlinedInput-input"
                                defaultValue="Depart>8AM or Arrive<6PM"
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
                    <div className="MuiBox-root jss3277">
                      <div
                        className="MuiBox-root jss3278"
                        style={{
                          textTransform: 'uppercase',
                          height: 40,
                          alignItems: 'center',
                        }}
                      >
                        <div className="MuiBox-root jss279 jss3276">
                          APPLIED RATE
                        </div>
                      </div>
                    </div>
                    <div className="MuiBox-root jss3281 jss3274">
                      <div
                        className="MuiBox-root jss33282"
                        data-test-id="section-value-undefined"
                      >
                        <div className="MuiBox-root jss33283">
                          <div className="MuiFormControl-root MuiTextField-root">
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                              <input
                                aria-invalid="false"
                                autoComplete="off"
                                id="name"
                                name="name"
                                placeholder="APPLIED RATE"
                                type="text"
                                role="presentation"
                                className="MuiInputBase-input MuiOutlinedInput-input"
                                defaultValue="50"
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
                        </div>
                        <div className="MuiBox-root jss3165">
                          % of the daily rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MuiBox-root jss147">
                <div className="MuiBox-root jss3148">Conditions</div>
              </div>
              <div className="MuiGrid-root MuiGrid-container">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                  <Checkbox>
                    <div className="checkBoxWrap">
                      Trip duration is longer than
                      <div
                        className="MuiBox-root jss33282"
                        data-test-id="section-value-undefined"
                      >
                        <div className="MuiBox-root jss33283">
                          <div className="MuiFormControl-root MuiTextField-root">
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                              <input
                                aria-invalid="false"
                                autoComplete="off"
                                id="name"
                                name="name"
                                placeholder="Days"
                                type="text"
                                role="presentation"
                                className="MuiInputBase-input MuiOutlinedInput-input"
                                defaultValue=""
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
                        </div>
                        <div className="MuiBox-root jss3165">days</div>
                      </div>
                    </div>
                  </Checkbox>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                  <Checkbox checked>
                    <div className="checkBoxWrap">
                      Only for first and last day
                    </div>
                  </Checkbox>
                </div>
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                  style={{paddingLeft: 32, marginBottom: 10}}
                >
                  <Checkbox checked>
                    <div className="checkBoxWrap">
                      First day starts before
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
                                      <path fill="none" d="M0 0h24v24H0z" />
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
                  </Checkbox>
                </div>
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                  style={{paddingLeft: 32}}
                >
                  <Checkbox checked>
                    <div className="checkBoxWrap">
                      Last day ends after
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
                                defaultValue="18:00"
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
                                      <path fill="none" d="M0 0h24v24H0z" />
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
                  </Checkbox>
                </div>
              </div>
              <div className="MuiBox-root jss147">
                <div className="MuiBox-root jss3148 jss31483">
                  Rounding rule
                </div>
              </div>
              <div className="MuiGrid-root jss3109 MuiGrid-container">
                <div className="MuiGrid-root jss3112 MuiGrid-item MuiGrid-grid-xs-3">
                  <div className="MuiBox-root jss3188">
                    <span>round APPLIED RATE</span>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9">
                  <div className="MuiBox-root jss3189">
                    <div className="MuiBox-root jss3190">
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Yes"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Yes"
                            label="Yes"
                            control={
                              <Radio
                                sx={{
                                  color: '#6261B5',
                                  '&.Mui-checked': {
                                    color: '#6261B5',
                                  },
                                }}
                              />
                            }
                            sx={{
                              color: '#212831',
                              '&.MuiFormControlLabel-root span': {
                                fontSize: '15px',
                              },
                            }}
                          />
                          <FormControlLabel
                            value="No"
                            label="No"
                            control={
                              <Radio
                                sx={{
                                  color: '#6261B5',
                                  '&.Mui-checked': {
                                    color: '#6261B5',
                                  },
                                }}
                              />
                            }
                            sx={{
                              color: '#212831',
                              '&.MuiFormControlLabel-root span': {
                                fontSize: '15px',
                              },
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="MuiBox-root jss3346">
                      <div className="MuiBox-root jss3348">
                        <Input
                          options={[
                            {label: 'Round up', value: 'Round up'},
                            {label: 'Round down', value: 'Round down'},
                          ]}
                          value="Round up"
                        />
                      </div>
                    </div>
                    <div className="MuiBox-root jss313">
                      <div className="MuiBox-root jss315">
                        <Input
                          options={[
                            {
                              label: 'Nearest whole number',
                              value: 'Nearest whole number',
                            },
                            {
                              label: '2 decimal places',
                              value: '2 decimal places',
                            },
                            {label: 'xxx', value: 'xxx'},
                          ]}
                          value="Nearest whole number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
            <div
              data-rbd-droppable-id="newRules"
              data-rbd-droppable-context-id={0}
            >
              <div
                className="MuiPaper-root jss241 jss247 MuiPaper-outlined MuiPaper-rounded"
                data-test-id="approval-rule-1"
                data-rbd-draggable-context-id={0}
                data-rbd-draggable-id={116}
              >
                <div
                  tabIndex={0}
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id={116}
                  data-rbd-drag-handle-context-id={0}
                  draggable="false"
                  className="jss239"
                  data-test-id="drag-icon"
                  title=""
                >
                  <svg
                    className="MuiSvgIcon-root jss242"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    width={24}
                  >
                    <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <div className="MuiGrid-root jss240 MuiGrid-container MuiGrid-align-items-xs-center">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root jss230 jss221 MuiGrid-item MuiGrid-grid-xs-4">
                      <div className="MuiBox-root jss248">
                        <div className="MuiBox-root jss249">
                          <span className="MuiBox-root jss250">
                            <div className="MuiBox-root jss251">
                              <div className="MuiBox-root jss253 jss227">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  {'Depart>8AM or Arrive<6PM'}
                                </span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss230 jss221 MuiGrid-item MuiGrid-grid-xs-4">
                      <div className="MuiBox-root jss248">
                        <div className="MuiBox-root jss249">
                          <span className="MuiBox-root jss250">
                            <div className="MuiBox-root jss251">
                              <div className="MuiBox-root jss252 jss226">
                                First day before:
                              </div>
                              <div className="MuiBox-root jss253 jss227">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  8:00AM
                                </span>
                              </div>
                            </div>
                            <div className="MuiBox-root jss251">
                              <div className="MuiBox-root jss252 jss226">
                                AND Last day after:
                              </div>
                              <div className="MuiBox-root jss253 jss227">
                                <span className="MuiTypography-root MuiTypography-h4">
                                  6:00PM
                                </span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss230 MuiGrid-item MuiGrid-grid-xs-3">
                      <span className="MuiBox-root jss254" title="">
                        <div className="MuiBox-root jss255">
                          <div className="MuiBox-root jss257 jss227">
                            <span className="MuiTypography-root MuiTypography-h4">
                              80%
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                    <div className="MuiGrid-root jss232 MuiGrid-item MuiGrid-grid-xs-true">
                      <span className="MuiBox-root jss258" title="">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary MuiIconButton-sizeSmall"
                          tabIndex={0}
                          type="button"
                          data-test-id="trash-icon"
                        >
                          <span className="MuiIconButton-label">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                          </span>
                          <span className="MuiTouchRipple-root" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="MuiDivider-root" />

          <div className="MuiBox-root jss783">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-space-between">
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary btn-notup"
                  tabIndex="0"
                  type="button"
                >
                  <span className="MuiButton-label">Save As Draft</span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
              </div>
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-true">
                <div className="MuiGrid-root MuiGrid-item">
                  <a
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                    tabIndex={0}
                    type="button"
                    href="/step2"
                  >
                    <span className="MuiButton-label">Prev</span>
                    <span className="MuiTouchRipple-root" />
                  </a>
                </div>
                <div className="MuiGrid-root MuiGrid-item">
                  <a
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    href="/step4"
                  >
                    <span className="MuiButton-label">Next</span>
                    <span className="MuiTouchRipple-root" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
