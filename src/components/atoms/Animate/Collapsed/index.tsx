import Box from '@mui/material/Box';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type CollapsedProps =  {
  isOpen: boolean;
  children: React.ReactNode;
}

const Collapsed = ({isOpen, children}: CollapsedProps) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <Box
        // height={400}
        aria-expanded={isOpen}
        variants={{
          collapsed: { height: '100px' },
          open: { height: 'auto' }
        }}
        component={m.div}
        style={{ overflow: 'hidden' }}
        initial={'open'}
        animate={{height: isOpen ? 'auto': 0}}>
        {children}
      </Box>
    </LazyMotion>
  );
};
export default Collapsed;