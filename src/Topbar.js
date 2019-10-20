import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Content from './Content';
// import Navigation from './Navbar';

class Topbar extends React.Component {
    render() {
        return (
            <div className="flex-row col mb-auto no-gutters">
                <Nav defaultActiveKey="/home">
                    <input type="text" className="m-2 pl-3" placeholder="Search"></input>
                    <Nav.Link className="nav-item2 py-3 px-3 ml-auto" eventKey="link-1">Account</Nav.Link>
                    <Nav.Link className="nav-item2 py-3 px-3" eventKey="link-2">Login</Nav.Link>
                </Nav>
                <div className="main-content row p-4">
                    <Content />
                </div>
            </div>
        )
    }
}

export default Topbar;