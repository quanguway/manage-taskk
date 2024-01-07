import Box from '@mui/material/Box';
import { BoxProps, styled } from '@mui/material';

type MilestoneLineProps = BoxProps & { }

const MilestoneLine = ({ ...props }: MilestoneLineProps) => {

  return (
    <MilestoneLineStyled
      position={'absolute'}
      height={'5px'}
      {...props}>

    </MilestoneLineStyled>
  );
};
export default MilestoneLine;

const MilestoneLineStyled = styled(Box)` `;