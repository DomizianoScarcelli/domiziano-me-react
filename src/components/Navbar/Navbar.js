import React from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
	const items = ["Projects.", "About.", "Contact Me."]

	return (
		<nav className={styles.navbar}>
			{items.map((item) => {
				return (
					<a className={styles.item} href={`#${item.toLowerCase()}`}>
						{item}
					</a>
				)
			})}
		</nav>
	)
}

export default Navbar
