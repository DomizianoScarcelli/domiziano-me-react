import React from "react"
import styles from "./Container.module.css"
const Container = (props) => {
	return (
		<div className={styles.container} id={`${props.title.toLowerCase()}`}>
			<div className={styles.title}>{props.title}</div>
			{props.description && <p className="contentContainer__description noBottomPadding">{props.description}</p>}
			<div className={`${props.grid && styles.innerContainer} ${props.noExpand && styles.noExpand}`} style={{ width: "100%" }}>
				{props.children}
			</div>
		</div>
	)
}

export default Container
