import React from "react"
import styles from "./Container.module.css"
import colors from "../../colors"
const Container = (props) => {
	return (
		<div className={styles.container} id={`${props.title.toLowerCase()}`}>
			<div className={styles.title}>{props.title}</div>
			<div className={props.grid && styles.innerContainer} style={{ width: "100%" }}>
				{props.children}
			</div>
		</div>
	)
}

export default Container
