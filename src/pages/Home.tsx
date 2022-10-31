import BasicThreadList from '../components/BasicThreadList';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
            <BasicThreadList />
        </>
    );
};

export default Home;
