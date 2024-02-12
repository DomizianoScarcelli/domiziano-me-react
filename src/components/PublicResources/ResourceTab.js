import React, { useState, useRef, useLayoutEffect } from "react"
import styles from "../Project/Project.module.css"

const ResourceTab = ({ title, image, demo }) => {
	const imageUrl = `/project-images/${image}`
	const containerRef = useRef()
	const [containerWidth, setContainerWidth] = useState()

	useLayoutEffect(() => {
		function updateContainerWidth() {
			setContainerWidth(containerRef.current.offsetWidth)
		}
		window.addEventListener("resize", updateContainerWidth)
	}, [])

	const imageStyle = {
		backgroundImage: `url(${imageUrl})`,
	}

	return (
		<div ref={containerRef} className={styles.container}>
			<div className={styles.innerContainer}>
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
			</div>
		</div>
	)
}

export default ResourceTab
