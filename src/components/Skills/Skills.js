import React from "react"
import styles from "./Skills.module.css"
import Container from "../Container/Container"

const Skills = () => {
	return (
		<Container title="Skills." titleColor="#2a9d8f">
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.category}>Frontend</div>
					<div className={styles.skills}>React.js</div>
				</div>
				<div className={styles.row}>
					<div className={styles.category}>Backend</div>
					<div className={styles.skills}>Node.js | MongoDB | Express.js | Postman</div>
				</div>
				<div className={styles.row}>
					<div className={styles.category}>Programming Languages</div>
					<div className={styles.skills}>VSCode | Intellij Idea | AndroidStudio</div>
				</div>
			</div>
		</Container>
	)
}

export default Skills
