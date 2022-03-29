import React from "react"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Navbar from "../Navbar/Navbar"
import styles from "./Header.module.css"

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				Domiziano.
				<div class="center-vertically">
					<HamburgerMenu />
				</div>
			</div>

			<Navbar />
			<div className={styles.description}>
				I'm a CS student from Italy. <br />I love web and mobile development.
			</div>
		</div>
	)
}

export default Header
