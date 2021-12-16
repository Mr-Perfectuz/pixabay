import React from 'react';
import Button from '../Common/Button';

const Gallery = () =>{
    return(
        <header className="py-3">
            <div className="container d-flex align-center justify-content-between">
            <a className="nav-link brand" href="#home">Logo</a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link " href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
                <Button status="primary" title="Sign Up"/>
                <Button status="dark"title="Login"/>
                <Button status="warning" />
            </div>

        </header>
    )
}

export default Gallery;