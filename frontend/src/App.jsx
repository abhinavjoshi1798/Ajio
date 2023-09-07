import { Box, useDisclosure } from '@chakra-ui/react';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Box>
        <AllRoutes/>
      </Box>
    </div>
  );
}

export default App;


