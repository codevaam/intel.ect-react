import React from 'react';
import "mdbreact/dist/css/mdb.css";
import axios from 'axios';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        console.log(this.fileInput);
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.get("http://localhost:4000/topics")
        .then(res => {
            console.log(res);
            return res.json();
        })
        alert(
            `Selected file - ${
            this.fileInput.current.files[0].name
            }`
        );
        
    }
    changeText(file) {
        console.log(file);
        document.getElementsByClassName('upload-text2').innerHTML = file;
    }
    render() {
        return (
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <center><label className="custom-file-upload w-50 ml-auto">
                        <input type="file" ref={this.fileInput} onChange={this.changeText(this.files)} id="file-upload" />
                        <center><img src="./upload-to-cloud.png" className="upload-img" alt="..."></img></center>
                        <div class="upload-text2 my-4"> Drag your file here or <span class="browse-link">browse</span></div>
                    </label><br />
                        <button type="submit" className="btn btn-primary">Submit</button></center>
                </form>
                <div className="upload-text my-3">
                    Simply upload your syllabus.
                </div>
                <div className="upload-text">
                    thats all you need to do
                </div>
            </div>
        )
    }
}


export default Content;