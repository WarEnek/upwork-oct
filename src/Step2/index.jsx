import {useEffect, useRef} from 'react';
import Input from '../Input';
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  {label: 'The Shawshank Redemption', year: 1994},
  {label: 'The Godfather', year: 1972},
  {label: 'The Godfather: Part II', year: 1974},
  {label: 'The Dark Knight', year: 2008},
  {label: '12 Angry Men', year: 1957},
  {label: "Schindler's List", year: 1993},
  {label: 'Pulp Fiction', year: 1994},
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  {label: 'The Good, the Bad and the Ugly', year: 1966},
  {label: 'Fight Club', year: 1999},
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  {label: 'Forrest Gump', year: 1994},
  {label: 'Inception', year: 2010},
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  {label: "One Flew Over the Cuckoo's Nest", year: 1975},
  {label: 'Goodfellas', year: 1990},
  {label: 'The Matrix', year: 1999},
  {label: 'Seven Samurai', year: 1954},
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  {label: 'City of God', year: 2002},
  {label: 'Se7en', year: 1995},
  {label: 'The Silence of the Lambs', year: 1991},
  {label: "It's a Wonderful Life", year: 1946},
  {label: 'Life Is Beautiful', year: 1997},
  {label: 'The Usual Suspects', year: 1995},
  {label: 'Léon: The Professional', year: 1994},
  {label: 'Spirited Away', year: 2001},
  {label: 'Saving Private Ryan', year: 1998},
  {label: 'Once Upon a Time in the West', year: 1968},
  {label: 'American History X', year: 1998},
  {label: 'Interstellar', year: 2014},
  {label: 'Casablanca', year: 1942},
  {label: 'City Lights', year: 1931},
  {label: 'Psycho', year: 1960},
  {label: 'The Green Mile', year: 1999},
  {label: 'The Intouchables', year: 2011},
  {label: 'Modern Times', year: 1936},
  {label: 'Raiders of the Lost Ark', year: 1981},
  {label: 'Rear Window', year: 1954},
  {label: 'The Pianist', year: 2002},
  {label: 'The Departed', year: 2006},
  {label: 'Terminator 2: Judgment Day', year: 1991},
  {label: 'Back to the Future', year: 1985},
  {label: 'Whiplash', year: 2014},
  {label: 'Gladiator', year: 2000},
  {label: 'Memento', year: 2000},
  {label: 'The Prestige', year: 2006},
  {label: 'The Lion King', year: 1994},
  {label: 'Apocalypse Now', year: 1979},
  {label: 'Alien', year: 1979},
  {label: 'Sunset Boulevard', year: 1950},
  {
    label:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  {label: 'The Great Dictator', year: 1940},
  {label: 'Cinema Paradiso', year: 1988},
  {label: 'The Lives of Others', year: 2006},
  {label: 'Grave of the Fireflies', year: 1988},
  {label: 'Paths of Glory', year: 1957},
  {label: 'Django Unchained', year: 2012},
  {label: 'The Shining', year: 1980},
  {label: 'WALL·E', year: 2008},
  {label: 'American Beauty', year: 1999},
  {label: 'The Dark Knight Rises', year: 2012},
  {label: 'Princess Mononoke', year: 1997},
  {label: 'Aliens', year: 1986},
  {label: 'Oldboy', year: 2003},
  {label: 'Once Upon a Time in America', year: 1984},
  {label: 'Witness for the Prosecution', year: 1957},
  {label: 'Das Boot', year: 1981},
  {label: 'Citizen Kane', year: 1941},
  {label: 'North by Northwest', year: 1959},
  {label: 'Vertigo', year: 1958},
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  {label: 'Reservoir Dogs', year: 1992},
  {label: 'Braveheart', year: 1995},
  {label: 'M', year: 1931},
  {label: 'Requiem for a Dream', year: 2000},
  {label: 'Amélie', year: 2001},
  {label: 'A Clockwork Orange', year: 1971},
  {label: 'Like Stars on Earth', year: 2007},
  {label: 'Taxi Driver', year: 1976},
  {label: 'Lawrence of Arabia', year: 1962},
  {label: 'Double Indemnity', year: 1944},
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  {label: 'Amadeus', year: 1984},
  {label: 'To Kill a Mockingbird', year: 1962},
  {label: 'Toy Story 3', year: 2010},
  {label: 'Logan', year: 2017},
  {label: 'Full Metal Jacket', year: 1987},
  {label: 'Dangal', year: 2016},
  {label: 'The Sting', year: 1973},
  {label: '2001: A Space Odyssey', year: 1968},
  {label: "Singin' in the Rain", year: 1952},
  {label: 'Toy Story', year: 1995},
  {label: 'Bicycle Thieves', year: 1948},
  {label: 'The Kid', year: 1921},
  {label: 'Inglourious Basterds', year: 2009},
  {label: 'Snatch', year: 2000},
  {label: '3 Idiots', year: 2009},
  {label: 'Monty Python and the Holy Grail', year: 1975},
];

function Step2() {
  const ref = useRef(null);

  // 👇️ check if an element is focused on mount
  useEffect(() => {
    if (document.activeElement === ref.current) {
      console.log('element has focus');
    } else {
      console.log('element does NOT have focus');
    }
  }, []);
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
                        2
                      </text>
                    </svg>
                  </span>
                  <span className="MuiStepLabel-labelContainer">
                    <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
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
            <div className="MuiBox-root jss207">
              <div className="MuiBox-root jss208">
                <h2 className="MuiTypography-root MuiTypography-h2 jss209">
                  Set daily rates
                </h2>
                <h6 className="MuiTypography-root MuiTypography-subtitle1 jss211 jss212">
                  <div className="MuiBox-root jss213">
                    Standard daily rates to be given to employees based on the
                    destination country
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
                  <span className="MuiButton-label">Import CSV</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
            </div>
          </div>
          <hr className="MuiDivider-root" />
          <div className="MuiBox-root jss822">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-direction-xs-column">
              <div className="MuiGrid-root MuiGrid-item">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                    <h6 className="MuiTypography-root jss761 jss823 MuiTypography-h6">
                      Country
                    </h6>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                    <h6 className="MuiTypography-root jss761 jss824 MuiTypography-h6">
                      AMOUNT
                    </h6>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
                    <div className="MuiBox-root jss825" />
                  </div>
                </div>
              </div>

              <div className="MuiGrid-root MuiGrid-item">
                <div className="MuiBox-root jss826">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                      <div className="MuiBox-root jss828">
                        <Input
                          options={[
                            {label: 'Afghanistan', value: 'value1'},
                            {label: 'Albania', value: 'value2'},
                            {label: 'Algeria', value: 'value3'},
                            {label: 'Angola', value: 'value3'},
                            {label: 'Anguilla', value: 'value3'},
                          ]}
                          value="Albania"
                        />
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                      <div className="MuiBox-root jss512">
                        <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                            <input
                              aria-invalid="false"
                              autoComplete="off"
                              id="first_name"
                              name="base_data.first_name"
                              placeholder="Amount"
                              type="text"
                              role="presentation"
                              className="MuiInputBase-input MuiOutlinedInput-input"
                              defaultValue="64.00"
                            />
                            <fieldset
                              aria-hidden="true"
                              className="jss513 MuiOutlinedInput-notchedOutline"
                              style={{paddingLeft: 8}}
                            >
                              <legend
                                className="jss514"
                                style={{width: '0.01px'}}
                              >
                                <span>​</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root jss820 MuiIconButton-colorSecondary"
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
                            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-item">
                <div className="MuiBox-root jss826">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                      <div className="MuiBox-root jss828">
                        <Input
                          options={[
                            {label: 'Afghanistan', value: 'value1'},
                            {label: 'Albania', value: 'value2'},
                            {label: 'Algeria', value: 'value3'},
                            {label: 'Angola', value: 'value3'},
                            {label: 'Anguilla', value: 'value3'},
                          ]}
                          value="Algeria"
                        />
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                      <div className="MuiBox-root jss512">
                        <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                            <input
                              aria-invalid="false"
                              autoComplete="off"
                              id="first_name"
                              name="base_data.first_name"
                              placeholder="Amount"
                              type="text"
                              role="presentation"
                              className="MuiInputBase-input MuiOutlinedInput-input"
                              defaultValue="100.00"
                            />
                            <fieldset
                              aria-hidden="true"
                              className="jss513 MuiOutlinedInput-notchedOutline"
                              style={{paddingLeft: 8}}
                            >
                              <legend
                                className="jss514"
                                style={{width: '0.01px'}}
                              >
                                <span>​</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root jss820 MuiIconButton-colorSecondary"
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
                            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-item">
                <div className="MuiBox-root jss826">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                      <div className="MuiBox-root jss828">
                        <Input
                          options={[
                            {label: 'Afghanistan', value: 'value1'},
                            {label: 'Albania', value: 'value2'},
                            {label: 'Algeria', value: 'value3'},
                            {label: 'Angola', value: 'value3'},
                            {label: 'Anguilla', value: 'value3'},
                          ]}
                          value="Afghanistan"
                        />
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true">
                      <div className="MuiBox-root jss512">
                        <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                            <input
                              aria-invalid="false"
                              autoComplete="off"
                              id="first_name"
                              name="base_data.first_name"
                              placeholder="Amount"
                              type="text"
                              role="presentation"
                              className="MuiInputBase-input MuiOutlinedInput-input"
                              defaultValue="86.00"
                            />
                            <fieldset
                              aria-hidden="true"
                              className="jss513 MuiOutlinedInput-notchedOutline"
                              style={{paddingLeft: 8}}
                            >
                              <legend
                                className="jss514"
                                style={{width: '0.01px'}}
                              >
                                <span>​</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root jss820 MuiIconButton-colorSecondary"
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
                            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MuiBox-root jss831">
                <button
                  className="MuiButtonBase-root MuiButton-root jss178 MuiButton-text MuiButton-textPrimary"
                  tabIndex={0}
                  type="button"
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
                    Add destination country
                  </span>
                </button>
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
                    href="/edit"
                  >
                    <span className="MuiButton-label">Prev</span>
                    <span className="MuiTouchRipple-root" />
                  </a>
                </div>
                <div className="MuiGrid-root MuiGrid-item">
                  <button
                    className="MuiButtonBase-root MuiButton-root jss182 MuiButton-contained MuiButton-containedPrimary"
                    tabIndex={0}
                    type="button"
                    data-test-id="next-btn"
                  >
                    <span className="MuiButton-label">Next</span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
