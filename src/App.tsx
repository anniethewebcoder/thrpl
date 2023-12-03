import './App.css';
import Home from './components/Home';
import EventDetail from './components/EventDetail';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth="md" sx={{ 
        backgroundColor: "#FFF", 
        height: "100%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
      }}>
        {/* <Home /> */}
        <EventDetail />
      </Container>
    </>
    );
}

export default App;
