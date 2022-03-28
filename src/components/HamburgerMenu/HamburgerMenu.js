import React from "react"
import styles from "./HamburgerMenu.module.css"

const Hamburgermenu = () => {
	return (
		<div className={styles.hamburger}>
			{[1, 2, 3].map(() => {
				return <span className={styles.line}></span>
			})}
		</div>
	)
}

export default Hamburgermenu
