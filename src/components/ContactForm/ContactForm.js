import React from "react"
import styles from "./ContactForm.module.css"

const Contactform = () => {
	return (
		<>
			<form action="https://formsubmit.co/scarcelli.domiziano@gmail.com" method="POST" name="contactModule" className={styles.container}>
				{/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> */}
				<input type="hidden" name="_autoresponse" value="Thanks for contacting me, I will answer ASAP!" />

				<div className={styles.field}>
					<div className={styles.title}>Name.</div>
					{/* green */}
					<input type="text" name="name" className={styles.input} />
				</div>
				<div className={styles.field}>
					<div className={styles.title}>Email.</div>
					{/* yellow */}
					<input type="email" name="email" className={styles.input} />
				</div>
				<div className={styles.field + " " + styles.bigField}>
					<div className={styles.title}>Message.</div>
					{/* lightGreen */}
					<textarea name="message" className={styles.input + " " + styles.largeModule}></textarea>
				</div>
			</form>
			<div
				class="submitButton center-horizontally"
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
