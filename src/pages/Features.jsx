import React from 'react';
import FeatureList from '../components/pageSections/Features/FeatureList';
import ModalBox from '../components/elements/Modal/ModalBox';

const Features = () => {

    return (<>
        <FeatureList />
        <ModalBox Text="We are planning to provide other related features in near future. We will notify you if you created an account." Link="/" TextToLink="Back to home page." BoxColor="#f0c769"/>
    </>);
}

export default Features;