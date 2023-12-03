import './App.css';
import Home from './components/Home';
import ActivitiesList from './components/ActivitiesList';
import { ACTIVITIES_MOCK } from "./components/mocklist";
import { Container } from '@mui/material';
function App() {
  return (
    //<ActivitiesList activities={ACTIVITIES_MOCK}/>
    <>
      <Container maxWidth="md" sx={{ 
        backgroundColor: "#FFF", 
        height: "100%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
      }}>
        {/* <Home /> */}
        <ActivitiesList activities={ACTIVITIES_MOCK}/>

      </Container>
    </>
    );
}

export default App;
