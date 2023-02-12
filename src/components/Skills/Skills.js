import { React, useState, useRef, useEffect } from "react"
import styles from "./Skills.module.css"
import Container from "../Container/Container"
import colors from "../../colors"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useTextWidth } from "@imagemarker/use-text-width"

const Skills = () => {
	return (
		// <Container title="Skills." titleColor={colors.containerTitle}>
		// 	<Picker />
		// 	<div className={styles.container} style={{ backgroundColor: colors.backgroundLight }}>
		// 		{/* <div className={styles.row}>
		// 			<div className={styles.category}>Frontend</div>
		// 			<div className={styles.skills}>React.js</div>
		// 		</div>
		// 		<div className={styles.row}>
		// 			<div className={styles.category}>Backend</div>
		// 			<div className={styles.skills}>Node.js MongoDB Express.js Postman Django</div>
		// 		</div>
		// 		<div className={styles.row}>
		// 			<div className={styles.category}>Programming Languages</div>
		// 			<div className={styles.skills}>Python Typescript Java Swift </div>
		// 		</div>
		// 		<div className={styles.row}>
		// 			<div className={styles.category}>IDEs</div>
		// 			<div className={styles.skills}>VSCode Intellij Idea AndroidStudio</div>
		// 		</div>
		// 		<div className={styles.row}>
		// 			<div className={styles.category}>Version control</div>
		// 			<div className={styles.skills}>Git GitHub GitLab</div>
		// 		</div>
		// 		<div className={styles.row}>
		// 			<div className={styles.category}>Other software</div>
		// 			<div className={styles.skills}>Photoshop AdobeXD Figma</div>
		// 		</div> */}
		// 		<div>Node</div>
		// 		<div>Mongo</div>
		// 	</div>
		// </Container>
		<Picker />
	)
}

const Picker = () => {
	const values = ["All", "Frontend", "Backend", "Programming Languges", "IDEs", "Other Software"]
	const skills = {
		frontend: ["Javascript", "Typescript", "HTML"],
	}
	const [currentSkills, setCurrentSkills] = useState(skills.frontend)
	const [selectedFilter, setSelectedFilter] = useState("Frontend")
	const selectorWidth = useTextWidth({ text: selectedFilter, font: "25px Times" }) + 10

	return (
		<Container title="Skills." titleColor={colors.containerTitle}>
			<AnimateSharedLayout>
				<div className={styles.picker}>
					{values.map((value) => {
						return (
							<>
								<motion.div className={styles.pickerElement} onClick={() => setSelectedFilter(value)}>
									{selectedFilter === value && (
										<motion.div layoutId="filter" className={styles.pickerElementBackground} style={{ width: selectorWidth, backgroundColor: colors.backgroundLight }}></motion.div>
									)}
									<p>{value}</p>
								</motion.div>
							</>
						)
					})}
				</div>
			</AnimateSharedLayout>
			<div className={styles.container} style={{ backgroundColor: colors.backgroundLight }}>
				{currentSkills.map((value) => {
					return <p>{value}</p>
				})}
			</div>
		</Container>
	)
}
export default Skills
