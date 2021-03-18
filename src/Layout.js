import React from 'react';

const Layout = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Currency Exchange Rates</span>
            </nav>
            <div className="container py-3">
                {props.children}
            </div>
            
        </React.Fragment>
    );
}

export default Layout;