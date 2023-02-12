import React from "react"
import styles from "./Navbar.module.css"
import { motion } from "framer-motion"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import colors from "../../colors"
const Navbar = (props) => {
	const isSmall = useMediaQuery("(max-width: 1079px)")
	const items = ["Projects.", "About.", "Contact Me."]
	const daySelectorVariants = {
		//TODO: Change naming
		hidden: {
			height: "0px",
			padding: "0px",
		},
		toggle: {
			height: props.isActive ? "fit-content" : "0px",
			padding: props.isActive ? "10px" : "0px",
		},
	}

	const daySelectorTextVariants = {
		toggle: {
			visibility: props.isActive ? "visible" : isSmall ? "hidden" : "visible",
		},
	}

	return (
		<motion.nav variants={daySelectorVariants} animate="toggle" className={styles.navbar}>
			{items.map((item) => {
				return (
					<motion.a variants={daySelectorTextVariants} animate="toggle" className={styles.item} style={{ color: colors.background }} href={`#${item.toLowerCase()}`}>
						{item}
					</motion.a>
				)
			})}
		</motion.nav>
	)
}

export default Navbar
