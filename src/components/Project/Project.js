import React from "react"
import styles from "./Project.module.css"

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
		<div className={styles.container} style={colorStyle}>
			<div className={styles.image} style={imageStyle}></div>
			<div className={styles.textContainer}>
				<div className={styles.title}>{props.title}</div>

				<div className={styles.content}> {props.content}</div>
			</div>
		</div>
	)
}

export default Project
