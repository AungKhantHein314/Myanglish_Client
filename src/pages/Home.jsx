import React from 'react';
import { Container } from '@mui/system';
import Introduction from '../components/pageSections/Home/Introduction';
import StartTranslating from '../components/pageSections/Home/StartTranslating';

const Home = () => {

    return (<div style={{ 
        backgroundImage: `url("/background.png")`,
        width: "100%",
        height: "1000px",
        backgroundPosition: "center"
      }}>
        <Container>
            <Introduction />
            <br/>
            <br/>
            <StartTranslating />
        </Container>
    </div>);
}

export default Home;