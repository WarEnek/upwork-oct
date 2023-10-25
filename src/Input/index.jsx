import Autocomplete from '@mui/joy/Autocomplete';

export default function Input({options, value, placeholder}) {
  return (
    <Autocomplete
      placeholder={placeholder}
      options={
        options || [
          {label: 'Value 1', year: 'value1'},
          {label: 'Value 2', year: 'value2'},
        ]
      }
      value={value}
      disableClearable
      popupIcon={
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
      }
      sx={{
        background: '#f7f7fb',
        height: '40px',
        fontSize: 14,
        fontWeight: 400,
      }}
    />
  );
}
