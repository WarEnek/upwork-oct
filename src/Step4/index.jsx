import {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Popup from '../Popup';
import Checkbox from '../Checkbox';
import Input from '../Input';

function Step4() {
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
                      Set conditions
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
                        4
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
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
                  Add deductions
                </h2>
                <h6 className="MuiTypography-root MuiTypography-subtitle1 jss211 jss212">
                  <div className="MuiBox-root jss213">
                    The following deductions will be applied to the daily per
                    diem rate.
                    <br />
                    Employees are responsible for self-declaring whether the
                    deductions are applied when they are requesting for per
                    diem.
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
                  <span className="MuiButton-label">Add Deduction</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
            </div>
          </div>
          <hr className="MuiDivider-root" />
          <div className="MuiBox-root jss822 jss8222">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-direction-xs-column">
              <div className="MuiGrid-root MuiGrid-item leftWidthSdvig">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                    <h6 className="MuiTypography-root jss761 jss823 MuiTypography-h6">
                      DEDUCTION NAME
                    </h6>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                    <h6 className="MuiTypography-root jss761 jss824 MuiTypography-h6">
                      DEDUCTION RATE (% of daily rate)
                    </h6>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
                    <div className="MuiBox-root jss825" />
                  </div>
                </div>
              </div>
              <div className="MuiBox-root jsss5295" >
                  <div className="MuiPaper-root jss297 jsss5298 MuiPaper-outlined MuiPaper-rounded" onClick={handleClickOpen}>
                    <div
                      className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                      data-test-id="Intern"
                    >
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                        <span
                          className="MuiTypography-root MuiTypography-h5"
                          style={{whiteSpace: 'nowrap', overflow: 'clip'}}
                        >
                          Lunch provided
                        </span>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                        <div
                          className="MuiBox-root jsss5299"
                          data-test-id="include-index"
                          style={{gap: 8}}
                        >
                          30%
                        </div>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2">
                        <div className="MuiBox-root jsss5301">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root jsss5300"
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
              <div className="MuiBox-root jsss5295" >
                  <div className="MuiPaper-root jss297 jsss5298 MuiPaper-outlined MuiPaper-rounded" onClick={handleClickOpen}>
                    <div
                      className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                      data-test-id="Intern"
                    >
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                        <span
                          className="MuiTypography-root MuiTypography-h5"
                          style={{whiteSpace: 'nowrap', overflow: 'clip'}}
                        >
                          Dinner provided
                        </span>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                        <div
                          className="MuiBox-root jsss5299"
                          data-test-id="include-index"
                          style={{gap: 8}}
                        >
                          40%
                        </div>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2">
                        <div className="MuiBox-root jsss5301">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root jsss5300"
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
              <Popup
                open={open}
                onClose={handleClose}
                title={'Edit Deduction'}
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
                                  defaultValue="Lunch provided"
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
                                  defaultValue="30"
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
                    href="/step3"
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
                    href="/step5"
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

export default Step4;
