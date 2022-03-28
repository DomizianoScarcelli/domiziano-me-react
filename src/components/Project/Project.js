import React from "react"
import styles from "./Project.module.css"
import { motion } from "framer-motion"
import { useState } from "react"

const Project = (props) => {
	const [isHover, setHover] = useState(false)

	const imageUrl = `/project-images/${props.image}`

	const imageStyle = {
		backgroundImage: `url(${imageUrl})`,
	}

	const colorStyle = {
		color: props.textColor,
		backgroundColor: props.backgroundColor,
	}

	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			onHoverStart={() => {
				setHover(true)
			}}
			onHoverEnd={() => {
				setHover(false)
			}}
			className={styles.container}
			style={colorStyle}
		>
			<div className={styles.image} style={imageStyle}></div>
			<div className={styles.textContainer}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.content}> {props.content}</div>
				{isHover && (
					<motion.div className={styles.links}>
						<div className={styles.github + " " + styles.icon}></div>
						<div className={styles.demo + " " + styles.icon}></div>
					</motion.div>
				)}
			</div>
		</motion.div>
	)
}

export default Project
