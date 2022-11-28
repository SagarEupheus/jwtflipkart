import { Box } from '@mui/material';
import './App.css';
import Header from "./Components/header/Header"
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Box style={{marginTop:"64px"}}>
      <Home/>
      </Box>
    </div>
  );
}

export default App;
