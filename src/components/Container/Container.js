import React from "react"
import styles from "./Container.module.css"

const Container = (props) => {
	const titleStyle = {
		color: props.titleColor,
	}

	return (
		<div className={styles.container}>
			<div className={styles.title} style={titleStyle}>
				{props.title}
			</div>
			{props.children}
		</div>
	)
}

export default Container
