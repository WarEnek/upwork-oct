import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import ModalClose from '@mui/joy/ModalClose';
import './index.css';

export default function Popup({
  onClose,
  selectedValue,
  open,
  prev,
  next,
  title,
  maxWidth,
  sub,
  ap,
  submit,
  children,
}) {
  return (
    <Modal
      className="modal-wrap"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Sheet
        className="modal"
        variant="outlined"
        sx={{
          maxWidth: maxWidth || '500px',
          borderRadius: 'md',
          boxShadow: 'lg',
        }}
      >
        <div>
          <ModalClose variant="plain" sx={{m: 1}} />
          <h4 className="modalTitle">{title}</h4>
        </div>
        <div className="popupOverflow">{children}</div>
        {sub ? (
          <div className="modalBottom">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-true">
              <div
                className="MuiGrid-root MuiGrid-item"
                style={{flex: '1 1 0%'}}
              >
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                  tabIndex={0}
                  type="button"
                  onClick={onClose}
                >
                  <span className="MuiButton-label">Cancel</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>

              <div className="MuiGrid-root MuiGrid-item">
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                  tabIndex={0}
                  type="button"
                >
                  <span className="MuiButton-label">Save as Draft</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
              {prev && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                    tabIndex={0}
                    type="button"
                    onClick={prev}
                  >
                    <span className="MuiButton-label">Prev</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
              {next && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    onClick={next}
                  >
                    <span className="MuiButton-label">Next</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
              {submit && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    onClick={submit}
                  >
                    <span className="MuiButton-label">Update</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : ap ? (
          <div className="modalBottom">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-true">
              <div
                className="MuiGrid-root MuiGrid-item"
                style={{flex: '1 1 0%'}}
              >
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                  tabIndex={0}
                  type="button"
                  onClick={onClose}
                >
                  <span className="MuiButton-label">Cancel</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>

              {/* <div className="MuiGrid-root MuiGrid-item">
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                  tabIndex={0}
                  type="button"
                >
                  <span className="MuiButton-label">Save as Draft</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div> */}
              {prev && (
                <>
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                    tabIndex={0}
                    type="button"
                    onClick={prev}
                  >
                    <span className="MuiButton-label">Prev</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedError"
                    tabIndex={0}
                    type="button"
                    onClick={onClose}
                  >
                    <span className="MuiButton-label">Reject</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
                </>
              )}
              {next && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    onClick={next}
                  >
                    <span className="MuiButton-label">Next</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
              {submit && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    onClick={submit}
                  >
                    <span className="MuiButton-label">Approve</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="modalBottom">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-true">
              <div className="MuiGrid-root MuiGrid-item">
                <button
                  className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                  tabIndex={0}
                  type="button"
                  onClick={onClose}
                >
                  <span className="MuiButton-label">Cancel</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
              {prev && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-outlined MuiButton-outlinedPrimary"
                    tabIndex={0}
                    type="button"
                    onClick={prev}
                  >
                    <span className="MuiButton-label">Prev</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
              {next && (
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                    onClick={next}
                  >
                    <span className="MuiButton-label">Update</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Sheet>
    </Modal>
  );
}
