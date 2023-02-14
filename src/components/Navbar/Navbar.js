import React, { useState } from "react"
import styles from "./Navbar.module.css"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import colors from "../../colors"
const Navbar = (props) => {
	const items = ["About.", "Projects.", "Contributions.", "Contact Me."]
	const isSmall = useMediaQuery(`(max-width: 89.125rem)`)
	const [selectedItem, setSelectedItem] = useState()
	const [resetTimeout, setResetTimeout] = useState()

	const navbarSelectorVariants = {
		hidden: {
			height: "0px",
			padding: "0px",
		},
		toggle: {
			height: props.isActive ? "fit-content" : "0px",
			padding: props.isActive ? "10px" : "0px",
		},
	}

	const navbarSelectorTextVariants = {
		toggle: {
			visibility: props.isActive ? "visible" : isSmall ? "hidden" : "visible",
		},
	}

	const resetSelectedItem = () => {
		if (resetTimeout === undefined) {
			const resetTimeout = setTimeout(() => {
				setSelectedItem()
			}, 500)
			setResetTimeout(resetTimeout)
		} else {
			clearTimeout(resetTimeout)
			resetSelectedItem()
		}
	}

	const handleSettingSelectedItem = (selectedItem) => {
		if (resetTimeout !== undefined) {
			setSelectedItem(selectedItem)
			clearTimeout(resetTimeout)
			setResetTimeout(undefined)
		} else {
			setSelectedItem(selectedItem)
		}
	}

	return (
		<AnimateSharedLayout>
			<motion.nav variants={navbarSelectorVariants} animate="toggle" className={styles.navbar}>
				{items.map((item) => {
					return (
						<>
							<motion.a
								key={item}
								variants={navbarSelectorTextVariants}
								animate="toggle"
								className={styles.item}
								style={{ color: colors.background }}
								href={`#${item.toLowerCase()}`}
								onMouseOver={() => handleSettingSelectedItem(item)}
								onMouseLeave={resetSelectedItem}
							>
								{selectedItem === item && <motion.div layoutId="navbar" className={styles.underline} style={{ backgroundColor: colors.backgroundLight }}></motion.div>}
								{item}
							</motion.a>
						</>
					)
				})}
			</motion.nav>
		</AnimateSharedLayout>
	)
}

export default Navbar
