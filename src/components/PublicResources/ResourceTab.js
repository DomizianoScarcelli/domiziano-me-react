import React from "react"
import styles from "../Project/Project.module.css"

const ResourceTab = ({ title, image, demo }) => {
	const imageUrl = `/project-images/${image}`

	const imageStyle = {
		backgroundImage: `url(${imageUrl})`,
	}

	return (
		<div className={styles.container}>
			<a href={demo} target="_blank" rel="noreferrer" className={styles.innerContainer}>
				<div className={styles.textContainer}>
					<div className={styles.image} style={imageStyle}></div>
					<div className={styles.title}>{title}</div>
				</div>
				<div className={styles.textContainer}>
					<div className={styles.links}>
						{demo && (
							<a className={styles.demo} href={demo} target="_blank" rel="noreferrer">
								{" "}
							</a>
						)}
					</div>
				</div>
			</a>
		</div>
	)
}

export default ResourceTab
