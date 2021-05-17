import React from "react"
import {FaBars} from "react-icons/fa"
import "./Navstyle.scss";
import { Link as LinkR } from "react-router-dom"
import {Link as LinkS} from "react-scroll"

const Navbar = () => {
	return (
		<>
			<nav>
				<div className="container">
					<LinkR  to="/" className="brandName">Ritam Jana</LinkR>
					<div className="mobileIcons">
						<FaBars />
					</div>
					<ul className="navMenu">
						<li className="navItem">
							<LinkS to="about" className="navLinks">About</LinkS>
						</li>
						<li className="navItem">
							<LinkS to="experience" className="navLinks">Experience</LinkS>
						</li>
						<li className="navItem">
							<LinkS to="projects" className="navLinks">Projects</LinkS>
						</li>
						<li className="navItem">
							<LinkS to="contact" className="navLinks">Contact</LinkS>
						</li>
					</ul>
					<nav className="resumeBtn">
						<LinkR to="/resume" className="resumeBtnLink">Resume</LinkR>
					</nav>
				</div>
			</nav>
		</>
	)
}

export default Navbar
