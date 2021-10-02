import React, {Component} from 'react'
import Logo from '../../img/logo.png'
import Image from 'next/image'

export const Navbar = () => {

let logo ={
    height: "200px",
    width: "200px"
}    

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top"><Image src={Logo} alt="..." style={logo} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#portfolio">作品を見る</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">新規登録</a></li>
                    <li className="nav-item"><a className="nav-link" href="#team">ログイン</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}


