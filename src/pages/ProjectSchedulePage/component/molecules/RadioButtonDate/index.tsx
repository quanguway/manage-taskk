import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';


export enum EPeriodOptions {
  month = 'month',
  quarter = 'quarter',
  half = 'half',
  year = 'year',
}

const periodOption = [
  {
    value: 'month',
    label: EPeriodOptions.month
  },
  {
    value: 'quarter',
    label: EPeriodOptions.quarter
  },
  {
    value: 'half',
    label: EPeriodOptions.half
  },
  {
    value: 'year',
    label: EPeriodOptions.year
  }
];

type RadioButtonDateProps = ToggleButtonGroupProps & {
  value: EPeriodOptions,
  setValue: (value: EPeriodOptions) => void
}

const RadioButtonDate = ({
  value,
  setValue
} : RadioButtonDateProps) => {


  return (
    <>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(event, value) => setValue(value)}
        // onChange={handleAlignment}
        // aria-label='text alignment'
      >
        {periodOption.map(option => (
          <ToggleButton key={option.value} value={option.value} aria-label='left aligned'>
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};

export default RadioButtonDate;