import './index.css';

function Edit() {
  return (
    <div
      className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullScreen jss737 MuiPaper-elevation24 MuiPaper-rounded"
      role="dialog"
    >
      <div className="MuiBox-root jss912 jss905">
        <a
          className="MuiButtonBase-root MuiIconButton-root jss906"
          tabIndex={0}
          type="button"
          data-test-id="arrow-back"
          href="/"
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
        </a>
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
                        1
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
                      Per diem set up
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
                        2
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock">
                      Set daily rates
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
                        3
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock">
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
            <p className="MuiTypography-root  MuiTypography-body1 jss489">
              Per diem setup
            </p>
            <h6 className="MuiTypography-root MuiTypography-subtitle1 jss279 jss280">
              Name your per diem and select the review types
            </h6>
          </div>
          <hr className="MuiDivider-root" />
          <div className="jss491">
            <form>
              <div>
                <div className="MuiBox-root jss501" id="static-basic">
                  <div
                    className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column"
                    data-omni-section-root="true"
                  >
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-direction-xs-column blockHalfSize">
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start">
                          <div className="MuiBox-root jss508">
                            <div
                              className="MuiBox-root jss509"
                              style={{
                                textTransform: 'uppercase',
                                height: 40,
                                alignItems: 'center',
                              }}
                            >
                              <div className="MuiBox-root jss510 jss504 jss507">
                                name of PER DIEM
                                <span className="jss511">&nbsp;*</span>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss512 jss506">
                            <div
                              className="MuiBox-root jss513"
                              data-test-id="section-value-undefined"
                            >
                              <div className="MuiBox-root jss514">
                                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                    <input
                                      aria-invalid="false"
                                      autoComplete="off"
                                      id="first_name"
                                      name="base_data.first_name"
                                      placeholder="First Name"
                                      type="text"
                                      role="presentation"
                                      className="MuiInputBase-input MuiOutlinedInput-input"
                                      defaultValue="Per diem A"
                                    />
                                    <fieldset
                                      aria-hidden="true"
                                      className="jss515 MuiOutlinedInput-notchedOutline"
                                      style={{paddingLeft: 8}}
                                    >
                                      <legend
                                        className="jss516"
                                        style={{width: '0.01px'}}
                                      >
                                        <span>​</span>
                                      </legend>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jss519" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start">
                          <div className="MuiBox-root jss619">
                            <div
                              className="MuiBox-root jss620"
                              style={{
                                textTransform: 'uppercase',
                                height: 40,
                                alignItems: 'center',
                              }}
                            >
                              <div className="MuiBox-root jss621 jss504 jss618">
                                APPLICABLE PERIOD
                                <span className="jss511">&nbsp;*</span>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss622 jss506">
                            <div
                              className="MuiBox-root jss623"
                              data-test-id="section-value-undefined"
                            >
                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root jss569 jss567"
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
                                    id="hired_date"
                                    name="employment.hired_date"
                                    placeholder="DD/MM/YYYY"
                                    type="text"
                                    role="presentation"
                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
                                    defaultValue=""
                                  />
                                  <fieldset
                                    aria-hidden="true"
                                    className="jss515 MuiOutlinedInput-notchedOutline"
                                    style={{paddingLeft: 8}}
                                  >
                                    <legend
                                      className="jss516"
                                      style={{width: '0.01px'}}
                                    >
                                      <span>​</span>
                                    </legend>
                                  </fieldset>
                                </div>
                              </div>
                              <div className="MuiBox-root jss624" />
                            </div>
                          </div>
                          <div className="divideDate">
                            <hr />
                          </div>
                          <div className="MuiBox-root jss622 jss506">
                            <div
                              className="MuiBox-root jss623"
                              data-test-id="section-value-undefined"
                            >
                              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart">
                                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root jss569 jss567"
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
                                    id="hired_date"
                                    name="employment.hired_date"
                                    placeholder="DD/MM/YYYY"
                                    type="text"
                                    role="presentation"
                                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
                                    defaultValue=""
                                  />
                                  <fieldset
                                    aria-hidden="true"
                                    className="jss515 MuiOutlinedInput-notchedOutline"
                                    style={{paddingLeft: 8}}
                                  >
                                    <legend
                                      className="jss516"
                                      style={{width: '0.01px'}}
                                    >
                                      <span>​</span>
                                    </legend>
                                  </fieldset>
                                </div>
                              </div>
                              <div className="MuiBox-root jss624" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start">
                          <div className="MuiBox-root jss626">
                            <div
                              className="MuiBox-root jss627"
                              style={{
                                textTransform: 'uppercase',
                                height: 40,
                                alignItems: 'center',
                              }}
                            >
                              <div className="MuiBox-root jss628 jss504 jss625">
                                CURRENCY
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss629 jss506">
                            <div
                              className="MuiBox-root jss630"
                              data-test-id="section-value-undefined"
                            >
                              <div className="MuiBox-root jss632">
                                <div
                                  className="MuiAutocomplete-root MuiAutocomplete-fullWidth MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon"
                                  role="combobox"
                                  aria-expanded="false"
                                  name="employment.probation_period"
                                >
                                  <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
                                      <input
                                        aria-invalid="false"
                                        autoComplete="off"
                                        id="probation_period"
                                        placeholder="Probation period"
                                        type="text"
                                        className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                                        aria-autocomplete="list"
                                        autoCapitalize="none"
                                        spellCheck="false"
                                        role="presentation"
                                        defaultValue="SGD"
                                      />
                                      <div className="MuiAutocomplete-endAdornment">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator"
                                          tabIndex={-1}
                                          type="button"
                                          aria-label="Clear"
                                          title="Clear"
                                        >
                                          <span className="MuiIconButton-label">
                                            <svg
                                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                              focusable="false"
                                              viewBox="0 0 24 24"
                                              aria-hidden="true"
                                            >
                                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                            </svg>
                                          </span>
                                          <span className="MuiTouchRipple-root" />
                                        </button>
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator"
                                          tabIndex={-1}
                                          type="button"
                                          aria-label="Open"
                                          title="Open"
                                        >
                                          <span className="MuiIconButton-label">
                                            <svg
                                              width={10}
                                              height={7}
                                              viewBox="0 0 10 7"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="MuiSvgIcon-root arrowIcon"
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
                                      <fieldset
                                        aria-hidden="true"
                                        className="jss515 MuiOutlinedInput-notchedOutline"
                                        style={{paddingLeft: 8}}
                                      >
                                        <legend
                                          className="jss516"
                                          style={{width: '0.01px'}}
                                        >
                                          <span>​</span>
                                        </legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jss635" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-flex-start">
                          <div className="MuiBox-root jss508">
                            <div
                              className="MuiBox-root jss509"
                              style={{
                                textTransform: 'uppercase',
                                height: 40,
                                alignItems: 'center',
                              }}
                            >
                              <div className="MuiBox-root jss510 jss504 jss507">
                                description
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss512 jss506">
                            <div
                              className="MuiBox-root jss513"
                              data-test-id="section-value-undefined"
                            >
                              <div className="MuiBox-root jss514">
                                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                    <input
                                      aria-invalid="false"
                                      autoComplete="off"
                                      id="first_name"
                                      name="base_data.first_name"
                                      placeholder="Description"
                                      type="text"
                                      role="presentation"
                                      className="MuiInputBase-input MuiOutlinedInput-input"
                                      defaultValue=""
                                    />
                                    <fieldset
                                      aria-hidden="true"
                                      className="jss515 MuiOutlinedInput-notchedOutline"
                                      style={{paddingLeft: 8}}
                                    >
                                      <legend
                                        className="jss516"
                                        style={{width: '0.01px'}}
                                      >
                                        <span>​</span>
                                      </legend>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jss519" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blokFullWidth">
                      <div className="MuiBox-root jss49021">
                        <p className="MuiTypography-root  MuiTypography-body1 jss489">
                          Availability scope
                        </p>
                        <h6 className="MuiTypography-root MuiTypography-subtitle1 jss279 jss280">
                          Define the group of employees who can apply for this
                          per diem for the applicable period.
                        </h6>
                      </div>
                      <div className="perDiemText">
                        Per diem is available to
                      </div>
                      <div className="MuiBox-root jss293">
                        <div className="checkbox-group" role="radiogroup">
                          <div className="MuiBox-root jss2941">
                            <label className="MuiFormControlLabel-root jss2851">
                              <span
                                className="MuiButtonBase-root MuiIconButton-root jss295 MuiRadio-root MuiRadio-colorPrimary jss2781 Mui-checked MuiIconButton-colorPrimary"
                                aria-disabled="false"
                                data-test-id="specific-group-radio-button"
                              >
                                <span className="MuiIconButton-label">
                                  <input
                                    className="jss298"
                                    type="radio"
                                    defaultValue={1}
                                    defaultChecked=""
                                    name="mui-51444"
                                  />
                                  <div className="jss299 jss301">
                                    <svg
                                      className="MuiSvgIcon-root"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                    >
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                    <svg
                                      className="MuiSvgIcon-root jss300"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                    >
                                      <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
                                    </svg>
                                  </div>
                                </span>
                                <span className="MuiTouchRipple-root" />
                              </span>
                              <span className="MuiTypography-root MuiFormControlLabel-label jss286 MuiTypography-body1">
                                Everyone
                              </span>
                            </label>
                          </div>
                          <div className="MuiBox-root jss2941">
                            <label className="MuiFormControlLabel-root jss2851">
                              <span
                                className="MuiButtonBase-root MuiIconButton-root jss295 MuiRadio-root MuiRadio-colorPrimary jss2781 MuiIconButton-colorPrimary"
                                aria-disabled="false"
                                data-test-id="specific-employee-radio-button"
                              >
                                <span className="MuiIconButton-label">
                                  <input
                                    className="jss298"
                                    type="radio"
                                    defaultValue={2}
                                    name="mui-51444"
                                  />
                                  <div className="jss299">
                                    <svg
                                      className="MuiSvgIcon-root"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                    >
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                    <svg
                                      className="MuiSvgIcon-root jss300"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                    >
                                      <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
                                    </svg>
                                  </div>
                                </span>
                                <span className="MuiTouchRipple-root" />
                              </span>
                              <span className="MuiTypography-root MuiFormControlLabel-label jss286 MuiTypography-body1">
                                Specific groups
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="MuiBox-root jss306">
                        <div className="MuiBox-root jss307">
                          <div className="MuiBox-root jss308">
                            <span className="MuiBox-root jss309 jss279" />
                            <div className="MuiBox-root jss310">
                              <div className="MuiBox-root jss311">
                                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                    <input
                                      aria-invalid="false"
                                      autoComplete="off"
                                      id="criteria[0].id"
                                      name="criteria[0].id"
                                      type="number"
                                      role="presentation"
                                      className="MuiInputBase-input MuiOutlinedInput-input"
                                      defaultValue=""
                                    />
                                    <fieldset
                                      aria-hidden="true"
                                      className="jss289 MuiOutlinedInput-notchedOutline"
                                      style={{paddingLeft: 8}}
                                    >
                                      <legend
                                        className="jss290"
                                        style={{width: '0.01px'}}
                                      >
                                        <span>​</span>
                                      </legend>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jss312">
                                <div className="MuiBox-root jss313">
                                  <span className="MuiBox-root jss314" title="">
                                    <span
                                      className="MuiButtonBase-root MuiIconButton-root jss295 MuiCheckbox-root MuiCheckbox-colorPrimary jss296 Mui-checked MuiIconButton-colorPrimary"
                                      aria-disabled="false"
                                      style={{padding: 0}}
                                    >
                                      <span className="MuiIconButton-label">
                                        <input
                                          className="jss298"
                                          id="criteria[0].id"
                                          name="criteria[0].is_valid"
                                          type="checkbox"
                                          data-indeterminate="false"
                                          defaultValue=""
                                        />
                                        <svg
                                          className="MuiSvgIcon-root"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                        >
                                          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                      </span>
                                      <span className="MuiTouchRipple-root" />
                                    </span>
                                  </span>
                                  <div className="MuiBox-root jss315" />
                                </div>
                              </div>
                              <div className="MuiBox-root jss319">
                                <div
                                  className="MuiAutocomplete-root MuiAutocomplete-fullWidth MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon"
                                  role="combobox"
                                  aria-expanded="false"
                                  name="criteria[0].type"
                                >
                                  <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
                                      <input
                                        aria-invalid="false"
                                        autoComplete="off"
                                        id="criteria[0].type"
                                        placeholder="Select field"
                                        type="text"
                                        className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                                        aria-autocomplete="list"
                                        autoCapitalize="none"
                                        spellCheck="false"
                                        role="presentation"
                                        defaultValue="Location"
                                      />
                                      <div className="MuiAutocomplete-endAdornment">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator MuiAutocomplete-clearIndicatorDirty"
                                          tabIndex={-1}
                                          type="button"
                                          aria-label="Clear"
                                          title="Clear"
                                        >
                                          <span className="MuiIconButton-label">
                                            <svg
                                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                              focusable="false"
                                              viewBox="0 0 24 24"
                                              aria-hidden="true"
                                            >
                                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                            </svg>
                                          </span>
                                          <span className="MuiTouchRipple-root" />
                                        </button>
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator"
                                          tabIndex={-1}
                                          type="button"
                                          aria-label="Open"
                                          title="Open"
                                        >
                                          <span className="MuiIconButton-label">
                                            <svg
                                              width={10}
                                              height={7}
                                              viewBox="0 0 10 7"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="MuiSvgIcon-root arrowIcon"
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
                                      <fieldset
                                        aria-hidden="true"
                                        className="jss2891 MuiOutlinedInput-notchedOutline"
                                        style={{paddingLeft: 8}}
                                      >
                                        <legend
                                          className="jss2901"
                                          style={{width: '0.01px'}}
                                        >
                                          <span>​</span>
                                        </legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss320 jss281">
                            Includes
                          </div>
                          <div className="MuiBox-root jss321">
                            <div className="MuiBox-root jss325 jss2801">
                              <div
                                className="MuiAutocomplete-root jss2801 MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon"
                                role="combobox"
                                aria-expanded="false"
                              >
                                <div className="MuiFormControl-root MuiTextField-root jss322 MuiFormControl-fullWidth">
                                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
                                    <div
                                      role="button"
                                      className="MuiChip-root MuiAutocomplete-tag MuiChip-deletable"
                                      tabIndex={-1}
                                      data-tag-index={0}
                                    >
                                      <span className="MuiChip-label">
                                        Singapore
                                      </span>
                                      <svg
                                        className="MuiSvgIcon-root MuiChip-deleteIcon"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                      >
                                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                                      </svg>
                                    </div>
                                    <input
                                      aria-invalid="false"
                                      autoComplete="off"
                                      id="criteria[0].values"
                                      placeholder=""
                                      type="text"
                                      className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                                      aria-autocomplete="list"
                                      autoCapitalize="none"
                                      spellCheck="false"
                                      role="presentation"
                                      defaultValue=""
                                    />
                                    <div className="MuiAutocomplete-endAdornment">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator MuiAutocomplete-clearIndicatorDirty"
                                        tabIndex={-1}
                                        type="button"
                                        aria-label="Clear"
                                        title="Clear"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                          >
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                          </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator"
                                        tabIndex={-1}
                                        type="button"
                                        aria-label="Open"
                                        title="Open"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            width={10}
                                            height={7}
                                            viewBox="0 0 10 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root arrowIcon"
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
                                    <fieldset
                                      aria-hidden="true"
                                      className="jss2891 MuiOutlinedInput-notchedOutline"
                                      style={{paddingLeft: 8}}
                                    >
                                      <legend
                                        className="jss2901"
                                        style={{width: '0.01px'}}
                                      >
                                        <span>​</span>
                                      </legend>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss326 jss281">
                            <button
                              className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary MuiIconButton-sizeSmall"
                              tabIndex={0}
                              type="button"
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
                            </button>
                          </div>
                        </div>
                        <div className="MuiBox-root jss374">
                          <div className="MuiBox-root jss375">
                            <span className="MuiBox-root jss376 jss279">
                              AND
                            </span>
                            <div className="MuiBox-root jss377">
                              <div className="MuiBox-root jss378">
                                <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                    <input
                                      aria-invalid="false"
                                      autoComplete="off"
                                      id="criteria[1].id"
                                      name="criteria[1].id"
                                      type="number"
                                      role="presentation"
                                      className="MuiInputBase-input MuiOutlinedInput-input"
                                      defaultValue=""
                                    />
                                    <fieldset
                                      aria-hidden="true"
                                      className="jss2891 MuiOutlinedInput-notchedOutline"
                                      style={{paddingLeft: 8}}
                                    >
                                      <legend
                                        className="jss2901"
                                        style={{width: '0.01px'}}
                                      >
                                        <span>​</span>
                                      </legend>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiBox-root jss379">
                                <div className="MuiBox-root jss380">
                                  <span className="MuiBox-root jss381" title="">
                                    <span
                                      className="MuiButtonBase-root MuiIconButton-root jss295 MuiCheckbox-root MuiCheckbox-colorPrimary jss296 Mui-checked MuiIconButton-colorPrimary"
                                      aria-disabled="false"
                                      style={{padding: 0}}
                                    >
                                      <span className="MuiIconButton-label">
                                        <input
                                          className="jss298"
                                          id="criteria[1].id"
                                          name="criteria[1].is_valid"
                                          type="checkbox"
                                          data-indeterminate="false"
                                          defaultValue=""
                                        />
                                        <svg
                                          className="MuiSvgIcon-root"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                        >
                                          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                      </span>
                                      <span className="MuiTouchRipple-root" />
                                    </span>
                                  </span>
                                  <div className="MuiBox-root jss382" />
                                </div>
                              </div>
                              <div className="MuiBox-root jss384">
                                <div
                                  className="MuiAutocomplete-root MuiAutocomplete-fullWidth MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon"
                                  role="combobox"
                                  aria-expanded="false"
                                  name="criteria[1].type"
                                >
                                  <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
                                      <input
                                        aria-invalid="false"
                                        autoComplete="off"
                                        id="criteria[1].type"
                                        placeholder="Select field"
                                        type="text"
                                        className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                                        aria-autocomplete="list"
                                        autoCapitalize="none"
                                        spellCheck="false"
                                        role="presentation"
                                        defaultValue="Custom group"
                                      />
                                      <div className="MuiAutocomplete-endAdornment">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator MuiAutocomplete-clearIndicatorDirty"
                                          tabIndex={-1}
                                          type="button"
                                          aria-label="Clear"
                                          title="Clear"
                                        >
                                          <span className="MuiIconButton-label">
                                            <svg
                                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                              focusable="false"
                                              viewBox="0 0 24 24"
                                              aria-hidden="true"
                                            >
                                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                            </svg>
                                          </span>
                                          <span className="MuiTouchRipple-root" />
                                        </button>
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator"
                                          tabIndex={-1}
                                          type="button"
                                          aria-label="Open"
                                          title="Open"
                                        >
                                          <span className="MuiIconButton-label">
                                            <svg
                                              width={10}
                                              height={7}
                                              viewBox="0 0 10 7"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="MuiSvgIcon-root arrowIcon"
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
                                      <fieldset
                                        aria-hidden="true"
                                        className="jss2891 MuiOutlinedInput-notchedOutline"
                                        style={{paddingLeft: 8}}
                                      >
                                        <legend
                                          className="jss2901"
                                          style={{width: '0.01px'}}
                                        >
                                          <span>​</span>
                                        </legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss385 jss281">
                            Includes
                          </div>
                          <div className="MuiBox-root jss386">
                            <div className="MuiBox-root jss387 jss2801">
                              <div
                                className="MuiAutocomplete-root jss2801 MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon"
                                role="combobox"
                                aria-expanded="false"
                              >
                                <div className="MuiFormControl-root MuiTextField-root jss322 MuiFormControl-fullWidth">
                                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiOutlinedInput-adornedStart MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
                                    <div
                                      role="button"
                                      className="MuiChip-root MuiAutocomplete-tag MuiChip-deletable"
                                      tabIndex={-1}
                                      data-tag-index={0}
                                    >
                                      <span className="MuiChip-label">
                                        Singapore business travellers
                                      </span>
                                      <svg
                                        className="MuiSvgIcon-root MuiChip-deleteIcon"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                      >
                                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                                      </svg>
                                    </div>
                                    <div
                                      role="button"
                                      className="MuiChip-root MuiAutocomplete-tag MuiChip-deletable"
                                      tabIndex={-1}
                                      data-tag-index={1}
                                    >
                                      <span className="MuiChip-label">
                                        C-level
                                      </span>
                                      <svg
                                        className="MuiSvgIcon-root MuiChip-deleteIcon"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                      >
                                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                                      </svg>
                                    </div>
                                    <input
                                      aria-invalid="false"
                                      autoComplete="off"
                                      id="criteria[1].values"
                                      placeholder=""
                                      type="text"
                                      className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                                      aria-autocomplete="list"
                                      autoCapitalize="none"
                                      spellCheck="false"
                                      role="presentation"
                                      defaultValue=""
                                    />
                                    <div className="MuiAutocomplete-endAdornment">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator MuiAutocomplete-clearIndicatorDirty"
                                        tabIndex={-1}
                                        type="button"
                                        aria-label="Clear"
                                        title="Clear"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                          >
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                          </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator"
                                        tabIndex={-1}
                                        type="button"
                                        aria-label="Open"
                                        title="Open"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            width={10}
                                            height={7}
                                            viewBox="0 0 10 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root arrowIcon"
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
                                    <fieldset
                                      aria-hidden="true"
                                      className="jss2891 MuiOutlinedInput-notchedOutline"
                                      style={{paddingLeft: 8}}
                                    >
                                      <legend
                                        className="jss2901"
                                        style={{width: '0.01px'}}
                                      >
                                        <span>​</span>
                                      </legend>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss388 jss281">
                            <button
                              className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary MuiIconButton-sizeSmall"
                              tabIndex={0}
                              type="button"
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
                            </button>
                          </div>
                        </div>
                        <div className="MuiBox-root jss327">
                          <div className="MuiBox-root jss328">
                            <button
                              className="MuiButtonBase-root MuiButton-root jss218 MuiButton-text MuiButton-textPrimary"
                              tabIndex={0}
                              type="button"
                              data-test-id="rule-add-button"
                            >
                              <span className="MuiButton-label">
                                <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
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
                                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                      stroke="#000"
                                      strokeWidth="1.3"
                                      strokeLinecap="round"
                                      fill="none"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.5 10H12.5"
                                      stroke="#000"
                                      strokeWidth="1.3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10 7.5V12.5"
                                      stroke="#000"
                                      strokeWidth="1.3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                Add rule
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiBox-root jss544">
                      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-direction-xs-column"></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <hr className="MuiDivider-root" />
          <div className="MuiBox-root jss760">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-space-between">
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary btn-notup"
                  tabIndex={0}
                  type="button"
                >
                  <span className="MuiButton-label">Save As Draft</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-true">
                <div className="MuiGrid-root MuiGrid-item" />
                <div className="MuiGrid-root MuiGrid-item">
                  <a
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    href="/step3"
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

export default Edit;
