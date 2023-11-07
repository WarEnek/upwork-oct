import {useRef, useEffect, useState} from 'react';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../Header';
import Aside from '../Aside';

function Example() {
  const [openAlert, setOpenAlert] = useState(false);
  useEffect(() => {
    if (window.location.hash.substring(1) === 'success') {
      setOpenAlert(true)
      setTimeout(() => {
        setOpenAlert(false)
      }, 4000)
    }

  }, [])
  
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
          sx={{mb: 2, backgroundColor: '#64B092', color: '#fff', fontFamily: 'Lato, sans-serif'}}
        >
          Per diem policy has been saved successfully
        </Alert>
      </Collapse>
      <main className="jss71">
        <Aside />
        <div className="jss73">
          <div className="MuiBox-root jss156 jss152">
            <div className="MuiBox-root jss157 jss153 jss150">
              <div className="MuiBox-root jss158">
                <h1 className="MuiTypography-root MuiTypography-h1">
                  Settings
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
                            <div className="MuiBox-root jss168">categories</div>
                          </button>
                        </div>
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
                              Approval flows
                            </div>
                          </button>
                        </a>
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
                            <div className="MuiBox-root jss169">PER DIEM</div>
                          </button>
                          <div className="underline" />
                        </a>
                      </div>
                    </div>
                    <div className="MuiBox-root jss274 jss170">
                      <div className="MuiBox-root jss275">
                        <div className="MuiBox-root jss276">
                          <h2 className="MuiTypography-root MuiTypography-h2 jss277">
                            Per diem
                          </h2>
                          <h6 className="MuiTypography-root MuiTypography-subtitle1 jss279 jss280">
                            Set up per diem rates below to enable employees to
                            request for per diem allowance.
                          </h6>
                        </div>
                        <div className="MuiBox-root jss281">
                          <button
                            className="MuiButtonBase-root MuiButton-root jss282 MuiButton-contained MuiButton-containedPrimary"
                            tabIndex={0}
                            type="button"
                            data-test-id="Add Category-button"
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
                              Add Per Diem Rates
                            </span>
                            <span className="MuiTouchRipple-root" />
                          </button>
                        </div>
                      </div>
                      <div className="MuiBox-root jss284">
                        <hr className="MuiDivider-root" />
                      </div>
                      <div className="MuiBox-root jss285">
                        <div className="MuiGrid-root MuiGrid-container">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <h6 className="MuiTypography-root jss286 jss287 MuiTypography-h6">
                              PER DIEM name
                            </h6>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <h6 className="MuiTypography-root jss286 jss289 MuiTypography-h6">
                              Applicable period
                            </h6>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                            <h6 className="MuiTypography-root jss286 jss290 MuiTypography-h6">
                              status
                            </h6>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true" />
                        </div>
                      </div>
                      <a
                        className="MuiPaper-root jss293 jss294 MuiPaper-outlined MuiPaper-rounded"
                        href="/step1"
                      >
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                          data-test-id="Hotel-category"
                        >
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <span
                              className="MuiTypography-root MuiTypography-h5"
                              style={{
                                fontWeight: 700,
                                marginRight: 8,
                                display: 'inline-block',
                              }}
                            >
                              {'Per diem A -> Singapore per diem policy 2024'}
                            </span>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            01/01/2024 - 31/12/2024
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                            <span
                              className="MuiBox-root jss297 jss295 jss296"
                              data-test-id="category-status"
                            >
                              Active
                            </span>
                          </div>
                          <div className="MuiGrid-root jss291 MuiGrid-item MuiGrid-grid-xs-true">
                            <div className="MuiBox-root jss299">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root jss298"
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
                      </a>
                      <div className="MuiPaper-root jss293 jss294 MuiPaper-outlined MuiPaper-rounded">
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                          data-test-id="Hotel-category"
                        >
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <span
                              className="MuiTypography-root MuiTypography-h5"
                              style={{
                                fontWeight: 700,
                                marginRight: 8,
                                display: 'inline-block',
                              }}
                            >
                              {'Per diem B -> Singapore per diem policy 2023'}
                            </span>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            01/01/2023 - 31/12/2023
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                            <span
                              className="MuiBox-root jss297 jss295 jss296"
                              data-test-id="category-status"
                            >
                              Active
                            </span>
                          </div>
                          <div className="MuiGrid-root jss291 MuiGrid-item MuiGrid-grid-xs-true">
                            <div className="MuiBox-root jss299">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root jss298"
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
                      <div className="MuiPaper-root jss293 jss294 MuiPaper-outlined MuiPaper-rounded">
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                          data-test-id="Hotel-category"
                        >
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <span
                              className="MuiTypography-root MuiTypography-h5"
                              style={{
                                fontWeight: 700,
                                marginRight: 8,
                                display: 'inline-block',
                              }}
                            >
                              {'Per diem C -> Singapore per diem policy 2022'}
                            </span>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            01/01/2022 - 31/12/2022
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                            <span
                              className="MuiBox-root jss297 jss295 jss296"
                              data-test-id="category-status"
                            >
                              Active
                            </span>
                          </div>
                          <div className="MuiGrid-root jss291 MuiGrid-item MuiGrid-grid-xs-true">
                            <div className="MuiBox-root jss299">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root jss298"
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
                      <div className="MuiPaper-root jss293 jss294 MuiPaper-outlined MuiPaper-rounded">
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                          data-test-id="Hotel-category"
                        >
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <span
                              className="MuiTypography-root MuiTypography-h5"
                              style={{
                                fontWeight: 700,
                                marginRight: 8,
                                display: 'inline-block',
                              }}
                            >
                              {'Per diem D -> Malaysia per diem policy 2024'}
                            </span>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            01/01/2024 - 31/12/2024
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                            <span
                              className="MuiBox-root jss297 jss295 jss296"
                              data-test-id="category-status"
                            >
                              Active
                            </span>
                          </div>
                          <div className="MuiGrid-root jss291 MuiGrid-item MuiGrid-grid-xs-true">
                            <div className="MuiBox-root jss299">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root jss298"
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
                      <div className="MuiPaper-root jss293 jss294 MuiPaper-outlined MuiPaper-rounded">
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
                          data-test-id="Hotel-category"
                        >
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            <span
                              className="MuiTypography-root MuiTypography-h5"
                              style={{
                                fontWeight: 700,
                                marginRight: 8,
                                display: 'inline-block',
                              }}
                            >
                              {'Per diem A -> Malaysia per diem policy 2023'}
                            </span>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
                            01/01/2023 - 31/12/2023
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                            <span
                              className="MuiBox-root jss297 jss295 jss296"
                              data-test-id="category-status"
                            >
                              Active
                            </span>
                          </div>
                          <div className="MuiGrid-root jss291 MuiGrid-item MuiGrid-grid-xs-true">
                            <div className="MuiBox-root jss299">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root jss298"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Example;
