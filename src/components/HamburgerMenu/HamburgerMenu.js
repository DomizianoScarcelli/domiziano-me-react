import React from "react"
import styles from "./HamburgerMenu.module.css"
import colors from "../../colors"
const HamburgerMenu = (props) => {
	return (
		<div className={styles.hamburger + " " + (props.isActive ? styles.isActive : "")} onClick={props.toggleActive}>
			{[1, 2, 3].map(() => {
				return <span className={styles.line} style={{ backgroundColor: colors.text }}></span>
			})}
		</div>
	)
}

export default HamburgerMenu
