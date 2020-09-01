import React from 'react';

const NoMatch = () => {
    const styles = {
        textAlign: 'center',
        color: 'red'
    }
    return (
        <div style={styles}>
            <h3>Page Not Found</h3>
            <h1>404 error</h1>
        </div>
    );
};

export default NoMatch;