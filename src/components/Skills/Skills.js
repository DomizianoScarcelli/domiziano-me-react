import { React, useState, useRef, useEffect } from "react"
import styles from "./Skills.module.css"
import Container from "../Container/Container"
import colors from "../../colors"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useTextWidth } from "@imagemarker/use-text-width"
import { icons } from "./skillsIcons"

const Skills = () => {
	const values = ["All", "Frontend", "Backend", "Programming Languges", "IDEs", "Other Software"]
	const skills = {
		frontend: ["Javascript", "Typescript", "HTML5", "CSS3", "React"],
		backend: ["Django", "MySql"],
		programmingLanguages: ["python", "java", "javascript", "typescript_badge", "swift"],
		IDEs: [],
		otherSoftware: [],
	}
	const [currentSkills, setCurrentSkills] = useState(skills.frontend)
	const [selectedFilter, setSelectedFilter] = useState("Frontend")
	const selectorWidth = useTextWidth({ text: selectedFilter, font: "25px Times" }) + 10

	const selectSkillsFromFilter = (filter) => {
		switch (filter) {
			case "Frontend":
				return skills.frontend
			case "Backend":
				return skills.backend
			case "Programming Languges":
				return skills.programmingLanguages
			case "IDEs":
				return skills.IDEs
			case "Other Software":
				return skills.otherSoftware
			default:
				return getAllSkills()
		}
	}

	const getAllSkills = () => {
		let skillsArray = []
		for (const [key, list] of Object.entries(skills)) {
			for (const skill of list) {
				skillsArray.push(skill)
			}
		}

		return skillsArray
	}

	const changeFilter = (newFilter) => {
		const newSkills = selectSkillsFromFilter(newFilter)
		setSelectedFilter(newFilter)
		setCurrentSkills(newSkills)
	}

	return (
		<Container title="Skills." titleColor={colors.containerTitle}>
			<AnimateSharedLayout>
				<div className={styles.picker}>
					{values.map((value) => {
						return (
							<>
								<motion.div className={styles.pickerElement} onClick={() => changeFilter(value)}>
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
				{currentSkills.map((value, index) => {
					{
						/* return <img className={styles.skillsIcon} src={icons.react} /> */
					}
					return (
						<motion.p animate={{ scale: [0.8, 1.2, 1] }} transition={{ duration: 0.2 + index / 40 }}>
							{value}
						</motion.p>
					)
				})}
			</div>
		</Container>
	)
}
export default Skills
