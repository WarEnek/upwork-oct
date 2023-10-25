import {useState} from 'react';
import './index.css'

export default function Checkbox({checked, children}) {
  const [isChecked, setIsChecked] = useState(checked);

  function clickOnLabel() {
    setIsChecked(!isChecked);
  }

  return (
    <label className="MuiFormControlLabel-root checkboxwrap" onClick={clickOnLabel}>
      <span
        className="MuiButtonBase-root MuiIconButton-root jss3216 MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-colorPrimary"
        aria-disabled="false"
        data-test-id="Manage apps"
      >
        <span className="MuiIconButton-label">
          <input
            className="jss3219"
            type="checkbox"
            data-indeterminate="false"
            defaultValue=""
            defaultChecked={!checked}
          />
          <svg
            className="MuiSvgIcon-root checkboxSvgDefault checked"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
        </span>
        <span className="MuiTouchRipple-root" />
      </span>
      <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
        {children}
      </span>
    </label>
  );
}
