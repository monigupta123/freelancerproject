import React from 'react';
import Header from '../components/Header';

const HomeScreen = (props) => {
    return (
        <div style={{
            backgroundImage: "url('/images/tr.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header title='Home' />
            
            
        </div>
    );
};

export default HomeScreen;
