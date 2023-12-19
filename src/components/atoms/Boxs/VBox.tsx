import Box, { BoxProps } from '@mui/material/Box';

type VBoxProps = BoxProps & { }

const VBox = ({...props}: VBoxProps ) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      {...props}
    >

    </Box>
  );
};

export default VBox;