import React from 'react'
import Footer from './footer'
import { Link, Outlet } from 'react-router-dom'
export default function Navigation() {
  return (
    <>
<header className="top-area">
			<div className="header-area">
		
			    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

			        <div className="container">

			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i className="fa fa-bars"></i>
			                </button>
			                <Link className="navbar-brand" to="/">Emmanuel</Link>
			            </div>
			        

			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li className=" smooth-menu active"></li>
			                    <li className=" smooth-menu"><Link to="/education">education</Link></li>
			                    <li className="smooth-menu"><Link to="/experience">experience</Link></li>
			                    <li className="smooth-menu"><Link to="/profile">profile</Link></li>
			                    <li className="smooth-menu"><Link to="/portfolio">portfolio</Link></li>
			                    <li className="smooth-menu"><Link to="/contact">contact</Link></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			  
			</div>

		    <div className="clearfix"></div>

		</header>
		
        <main>
		 <Outlet/>
		</main>
	    <Footer/>
    </>
  )
}
