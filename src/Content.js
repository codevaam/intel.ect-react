import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h4>Content</h4>
                <div class="row">
                    <div className="cards ml-auto mt-2">
                        <div class="col h-100 texty">
                            <span className="subject-text">OS</span>
                        </div>
                    </div>
                    <div className="cards ml-3 mt-2">
                        <div class="col h-100 texty">
                            <span className="subject-text">DBMS</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
