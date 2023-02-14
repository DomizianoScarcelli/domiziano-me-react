import React from "react"
import styles from "./Contributions.module.css"
import colors from "../../colors"
import { icons } from "../../icons"

const Contributions = () => {
	return (
		<div className={styles.container}>
			<div className={styles.line} style={{ backgroundColor: colors.foregroundMedium }}></div>
			<ContributionPanel
				repository={"DamascenoRafael/reminders-menubar"}
				link={"https://github.com/DamascenoRafael/reminders-menubar/pull/105"}
				title={"Adding possibility to specify due date and time with natural language"}
				number={"105"}
			/>
			<ContributionPanel
				repository={"elebumm/RedditVideoMakerBot"}
				link={"https://github.com/elebumm/RedditVideoMakerBot/pull/238"}
				title={"Allowing users to choose a reddit thread instead of being randomized"}
				number={"238"}
			/>
			<ContributionPanel
				repository={"elebumm/RedditVideoMakerBot"}
				link={"https://github.com/elebumm/RedditVideoMakerBot/pull/261"}
				title={"Option to filter the comments by length (min and max number of characters)"}
				number={"261"}
			/>
			<ContributionPanel
				repository={"elebumm/RedditVideoMakerBot"}
				link={"https://github.com/elebumm/RedditVideoMakerBot/pull/333/"}
				title={"Added a .env variable to change the save location of the final video"}
				number={"333"}
			/>
		</div>
	)
}

const ContributionPanel = ({ repository, title, link, number }) => {
	const openPullRequest = (link) => {
		window.open(link, "_blank")
	}
	return (
		<div className={styles.panel} style={{ backgroundColor: colors.foregroundMedium }}>
			<div href={link} className={styles.top} style={{ backgroundColor: colors.foregroundDark, borderColor: colors.foregroundMedium }} onClick={() => openPullRequest(link)}>
				<p>{repository}</p>
			</div>
			<p>
				{title} <span onClick={() => openPullRequest(link)}>{`#${number}`}</span>
			</p>
			<div className={styles.merged}>
				<img src={icons.gitMerge} alt="merged-icon" />
				<p>Merged</p>
			</div>
		</div>
	)
}

export default Contributions
