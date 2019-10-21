import React from 'react';
import Navigation from './Navbar';
import Topbar from './Topbar';
import Content from './Homecontent';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
    func() {
        document.onload(() => {
            document.getElementById('main-content').innerHTML = <Content />
        })
    }
    render() {
        return (
            <div className="row">
                <Navigation />
                <Topbar />
            </div>
        )
    }
}

export default Home;