import Box from '@mui/material/Box';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type RotateProps =  {
  isRotate: boolean;
  children: React.ReactNode;
  deg?: number;
}

const Rotate = ({isRotate, children, deg = 90}: RotateProps) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <Box
        // height={400}
        aria-expanded={isRotate}
        display={'flex'}
        justifyContent={'center'}
        alignContent={'center'}
        variants={{
          default: { transform: 'rotate(0)' },
          rotate: { transform: `rotate(${deg}deg)` }
        }}
        component={m.div}
        initial={'default'}
        animate={isRotate ? 'rotate': 'default'}>
        {children}
      </Box>
    </LazyMotion>
  );
};
export default Rotate;