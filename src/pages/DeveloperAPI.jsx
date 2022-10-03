import React from 'react';
import ResponsiveDrawer from '../components/pageSections/Developer/ResponsiveDrawer';
import ModalBox from '../components/elements/Modal/ModalBox';

const DeveloperAPI = () => {
    return (<>
        <ResponsiveDrawer />
        <ModalBox Text="We are planning to provide web service (API) for developers in near future. We will notify you if you created an account." Link="/" TextToLink="Back to home page." BoxColor="skyblue"/>
    </>);
}

export default DeveloperAPI;