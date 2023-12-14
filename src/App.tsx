
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {

  useColorScheme,
} from '@mui/material/styles';

function App() {

  function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
      <Button
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    );
  }

  return (
    <>
      <ModeToggle />
      <Typography>
        Haha
      </Typography>
    </>
  );
}

export default App;
