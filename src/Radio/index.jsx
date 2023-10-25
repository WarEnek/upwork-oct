import {useState} from 'react';
import './index.css';

export default function Radio({checked, children}) {
  const [isChecked, setIsChecked] = useState(checked);

  function clickOnLabel() {
    setIsChecked(!isChecked);
  }

  return (
    <div
    className="MuiFormGroup-root MuiFormGroup-row"
    role="radiogroup"
    aria-label="milestone_settings.round_time_off_balance"
    aria-disabled="false"
  >
    <label className="MuiFormControlLabel-root jss136">
      <span
        className="MuiButtonBase-root MuiIconButton-root jss138 MuiRadio-root MuiRadio-colorPrimary jss139 Mui-checked MuiIconButton-colorPrimary"
        aria-disabled="false"
      >
        <span className="MuiIconButton-label">
          <input
            className="jss141"
            name="milestone_settings.round_time_off_balance"
            type="radio"
            defaultValue="yes"
          />
          <div className="jss142 jss144">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
            <svg
              className="MuiSvgIcon-root jss143"
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
      <span className="MuiTypography-root MuiFormControlLabel-label jss137 MuiTypography-body1">
        Yes
      </span>
    </label>
    <label className="MuiFormControlLabel-root jss136">
      <span
        className="MuiButtonBase-root MuiIconButton-root jss138 MuiRadio-root MuiRadio-colorPrimary MuiIconButton-colorPrimary"
        aria-disabled="false"
      >
        <span className="MuiIconButton-label">
          <input
            className="jss141"
            name="milestone_settings.round_time_off_balance"
            type="radio"
            defaultValue="no"
            defaultChecked=""
          />
          <div className="jss142">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
            <svg
              className="MuiSvgIcon-root jss143"
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
      <span className="MuiTypography-root MuiFormControlLabel-label jss137 MuiTypography-body1">
        No
      </span>
    </label>
  </div>
  
  );
}
