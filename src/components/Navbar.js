import React from 'react';
import './Navbar.css';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <img className="ico mx-2 my-3 h-100 " src="https://icons4web.com/wp-content/uploads/2017/10/Photo-gallery-golden-icon-159662.jpg" alt="icon"></img>
        <strong><a className="navbar-brand" href="/" style={{fontFamily:'sans-serif', fontSize: "2rem"}}>{props.title}</a></strong>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li>
          </ul>
          <div className="btn-group mx-2" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-dark" onClick={props.togglecolor}>Black</button>
            <div className='mx-2'></div>
            <button type="button" className="btn btn-success" onClick={props.togglecolor1}>Green</button>
            <div className='mx-2'></div>
            <button type="button" className="btn btn-danger" onClick={props.togglecolor2}>Red</button>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <strong><label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label></strong>
          </div>
        </div>
      </div>
    </nav>

  )
}
Navbar.defaultProps = {
  title: 'set title here'
}
