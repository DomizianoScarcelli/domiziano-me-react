import React from "react"
import styles from "./ContactForm.module.css"
import colors from "../../colors"

const Contactform = () => {
	return (
		<div className={styles.main_container}>
			<form action="https://formsubmit.co/4e698c3eb254383c5a9a0ddd66b504b3" method="POST" name="contactModule" className={styles.container} netlify>
				{/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> */}
				<input type="hidden" name="_autoresponse" value="Thanks for contacting me, I will answer ASAP!" />

				<div className={styles.field}>
					<div className={styles.title}>Name.</div>
					<input type="text" name="name" className={styles.input} style={{ backgroundColor: colors.background }} required />
				</div>
				<div className={styles.field}>
					<div className={styles.title}>Email.</div>
					<input type="email" name="email" className={styles.input} style={{ backgroundColor: colors.background }} required />
				</div>
				<div className={styles.field + " " + styles.bigField}>
					<div className={styles.title}>Message.</div>
					<textarea name="message" className={styles.input + " " + styles.largeModule} style={{ backgroundColor: colors.background }} required></textarea>
				</div>
			</form>
			<div
				className={styles.submitButton}
				onClick={() => {
					document.forms["contactModule"].submit()
				}}
			>
				Send.
			</div>
		</div>
	)
}

export default Contactform
