import React from "react"
import styles from "./HamburgerMenu.module.css"
import { useState } from "react"

const HamburgerMenu = () => {
	const [expanded, setExpanded] = useState(false)

	return (
		<div
			className={styles.hamburger + " " + (expanded ? styles.isActive : "")}
			onClick={() => {
				setExpanded(!expanded)
			}}
		>
			{[1, 2, 3].map(() => {
				return <span className={styles.line}></span>
			})}
		</div>
	)
}

export default HamburgerMenu
