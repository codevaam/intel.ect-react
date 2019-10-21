import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Content extends React.Component {
    render() {
        return (
            <div className="ml-4">
                <h4 className="topic-catagory">PICK UP WHERE YOU LEFT OFF</h4>
                <div className="row">
                    <div className="cards mt-2 mb-5">
                        <div className="col h-100 texty">
                            <span className="subject-text">OS</span>
                        </div>
                        <div className="full-title p-2">Operating System</div>
                    </div>
                </div>
                <h4 className="topic-catagory pt-5 mt-3">Subjects</h4>
                <div className="row">
                    <div className="cards mt-2">
                        <div class="col h-100 texty">
                            <span className="subject-text">OS</span>
                        </div>
                        <div className="full-title p-2">Operating System</div>
                    </div>
                    <div className="cards ml-3 mt-2">
                        <div className="col h-100 texty">
                            <span className="subject-text">DBMS</span>
                        </div>
                        <div className="full-title p-2">Database</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
