import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Layout = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Currency Exchange Rates</span>
            </nav>
            <div className="container py-3">
                {props.children}
            </div>
            <footer className="p-3 bg-light">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12 row justify-content-center">
                    <div id="socialContainer" className="pb-2">
                        <a href="https://www.instagram.com/batoonworld/" rel="noreferrer" target="_blank" className="mx-1">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        <a href="https://twitter.com/batoonworld" rel="noreferrer" target="_blank" className="mx-1">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <a href="https://www.github.com/MBatoon1996" rel="noreferrer" target="_blank" className="mx-1">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
        <p id="copyright" className="text-center">©2021 Marques Batoon</p>
      </footer>
        </React.Fragment>
    );
}

export default Layout;