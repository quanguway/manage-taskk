import Box, { BoxProps } from '@mui/material/Box';

type HBoxProps = BoxProps & { }

const HBox = ({...props}: HBoxProps ) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      {...props}
    >

    </Box>
  );
};

export default HBox;