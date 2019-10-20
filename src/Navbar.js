import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component {
    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column nav-bar col-2 no-gutters">
                <h4 className="nav-text px-4 pt-5 pb-3">Navigation</h4>
                <Nav.Link className="nav-item1 px-4" href="/home">Home</Nav.Link>
                <Nav.Link className="nav-item1 px-4" eventKey="link-1">Upload</Nav.Link>
                <Nav.Link className="nav-item1 px-4" eventKey="link-2">Browse</Nav.Link>
                <Nav.Link className="nav-item1 px-4" eventKey="link-2">Checklist</Nav.Link>

                <h4 className="nav-text px-4 pt-5 pb-3">Playlist</h4>
                <Nav.Link className="nav-item2 px-4" href="/home">Operating Systems</Nav.Link>
                <Nav.Link className="nav-item2 px-4" eventKey="link-1">Computer Architecture</Nav.Link>
                <Nav.Link className="nav-item2 px-4" eventKey="link-2">Database</Nav.Link>
                <Nav.Link className="nav-item2 px-4" eventKey="link-2">Statistics</Nav.Link>
            </Nav>
        )
    }
}

export default Navigation;