import React from "react"
import styles from "./Skills.module.css"
import Container from "../Container/Container"
import colors from "../../colors"
const Skills = () => {
	return (
		<Container title="Skills." titleColor={colors.containerTitle}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.category}>Frontend</div>
					<div className={styles.skills}>React.js</div>
				</div>
				<div className={styles.row}>
					<div className={styles.category}>Backend</div>
					<div className={styles.skills}>Node.js MongoDB Express.js Postman</div>
				</div>
				<div className={styles.row}>
					<div className={styles.category}>Programming Languages</div>
					<div className={styles.skills}>VSCode Intellij Idea AndroidStudio</div>
				</div>
				<div className={styles.row}>
					<div className={styles.category}>Version control</div>
					<div className={styles.skills}>Git GitHub GitLab</div>
				</div>
				<div className={styles.row}>
					<div className={styles.category}>Other software</div>
					<div className={styles.skills}>Photoshop AdobeXD Figma</div>
				</div>
			</div>
		</Container>
	)
}

export default Skills
