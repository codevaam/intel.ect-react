import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Content from './Uploadview';
import Home from './Homecontent'

class Navigation extends React.Component {
    upload = () => {
        ReactDOM.render(<Content />, document.getElementById('main-content'));
    }
    home = () => {
        ReactDOM.render(<Home />, document.getElementById('main-content'));
    }
    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-sm-column nav-bar col-2 no-gutters">
                <h4 className="nav-text px-4 pt-5 pb-3">Navigation</h4>
                <Nav.Link className="nav-item1 px-4" onClick={this.home}>Home</Nav.Link>
                <Nav.Link className="nav-item1 px-4" onClick={this.upload}>Upload</Nav.Link>
                <Nav.Link className="nav-item1 px-4" href="/browse">Browse</Nav.Link>
                <Nav.Link className="nav-item1 px-4" href="/checklist">Checklist</Nav.Link>

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