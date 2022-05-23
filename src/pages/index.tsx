import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';

let Homepage: React.FC = () => {
    return (
        <React.Fragment>
            <Header
                tags={['strapsheet', 'homepage', 'technology comparision']}
                title="strapsheet | 5 seconds tech comparion"
                description="strapsheets makes comparing tech products easier and hassel free. Get the product you need under 5 seconds."
            />
            <Navbar />
        </React.Fragment>
    );
};

export default Homepage;
