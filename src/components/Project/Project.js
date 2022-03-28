import React from "react"
import styles from "./Project.module.css"
import { motion } from "framer-motion"

const Project = (props) => {
	const imageUrl = `/project-images/${props.image}`

	const imageStyle = {
		backgroundImage: `url(${imageUrl})`,
	}

	const colorStyle = {
		color: props.textColor,
		backgroundColor: props.backgroundColor,
	}

	return (
		<motion.div whileHover={{ scale: 1.1 }} className={styles.container} style={colorStyle}>
			<div className={styles.image} style={imageStyle}></div>
			<div className={styles.textContainer}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.content}> {props.content}</div>
			</div>
		</motion.div>
	)
}

export default Project
