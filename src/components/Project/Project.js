import React from "react"
import styles from "./Project.module.css"
import { motion } from "framer-motion"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import colors from "../../colors"
const Project = (props) => {
	const isSmall = useMediaQuery("(max-width: 1079px)")

	const imageUrl = `/project-images/${props.image}`

	const imageStyle = {
		backgroundImage: `url(${imageUrl})`,
	}

	const colorStyle = {
		color: colors.foregroundDark,
		backgroundColor: colors.backgroundLight,
	}

	return (
		<div className={styles.container} style={colorStyle}>
			<div className={styles.image} style={imageStyle}></div>
			<div className={styles.textContainer}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.content}> {props.content}</div>

				<div className={styles.links}>
					{props.github && (
						<a className={styles.github} href={props.github} target="_blank" rel="noreferrer">
							{" "}
						</a>
					)}
					{props.demo && (
						<a className={styles.demo} href={props.demo} target="_blank" rel="noreferrer">
							{" "}
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Project
