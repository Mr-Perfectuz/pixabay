import React from 'react';

const Gallery = () =>{
    return(
        <header className="d-flex align-center justify-content-between">
            .
            <a href="#home">Logo</a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link " href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Gallery;