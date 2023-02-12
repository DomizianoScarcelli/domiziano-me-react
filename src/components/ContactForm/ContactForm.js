import React from "react"
import styles from "./ContactForm.module.css"
import colors from "../../colors"

const Contactform = () => {
	return (
		<>
			<form action="https://formsubmit.co/scarcelli.domiziano@gmail.com" method="POST" name="contactModule" className={styles.container}>
				{/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> */}
				<input type="hidden" name="_autoresponse" value="Thanks for contacting me, I will answer ASAP!" />

				<div className={styles.field}>
					<div style={{ color: colors.foregroundDark }} className={styles.title}>
						Name.
					</div>
					<input type="text" name="name" className={styles.input} style={{ backgroundColor: colors.background }} />
				</div>
				<div className={styles.field}>
					<div style={{ color: colors.foregroundDark }} className={styles.title}>
						Email.
					</div>
					<input type="email" name="email" className={styles.input} style={{ backgroundColor: colors.background }} />
				</div>
				<div className={styles.field + " " + styles.bigField}>
					<div style={{ color: colors.foregroundDark }} className={styles.title}>
						Message.
					</div>
					<textarea name="message" className={styles.input + " " + styles.largeModule} style={{ backgroundColor: colors.background }}></textarea>
				</div>
			</form>
			<div
				className={styles.submitButton + " center-horizontally"}
				style={{
					backgroundColor: colors.background,
					color: colors.foregroundDark,
				}}
				onClick={() => {
					document.forms["contactModule"].submit()
				}}
			>
				Send.
			</div>
		</>
	)
}

export default Contactform
