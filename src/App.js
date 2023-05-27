import "./App.css"
import Project from "./components/Project/Project"
import Container from "./components/Container/Container"
import ContactForm from "./components/ContactForm/ContactForm"
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"
import colors from "./colors"
import Contributions from "./components/Contributions/Contributions"

export default function App() {
	return (
		<div class="container center-vertically" id="topContainer">
			<Header />

			<Container title="About." titleColor={colors.containerTitle}>
				<p class="justified contentContainer__description">
					I'm a 23 years old Software Engineer passionate about software development, in particular Web and App development, with some interest about anything that's AI.
					<br /> <br />I obtained my Bachelor's Degree in Computer Science in March 2022 and I'm currently studying for my Master's Degree in CS at the University of Rome "La Sapienza".
				</p>
			</Container>

			<Container title="Projects." titleColor={colors.containerTitle}>
				<p className="contentContainer__description noBottomPadding">These are some project I developed, both for learning reasons or as university assignment</p>
				<div class="contentContainer__body" id="contentContainer__body">
					<Project
						image="wordsearch-2.png"
						title="Word Search Generator"
						content="Web app written using React with Typescrit that uses a backtracking algorithm to generate a Word Search puzzle of any dimension from a set of words"
						github="https://github.com/DomizianoScarcelli/word-find-puzzle"
					/>
					<Project
						image="pathfinder-visualizer-2.png"
						title="Pathfinder Visualizer"
						content="Web app that allows the user to select two  points and see the shortest path between them.
							The app is developed using p5.js"
						github="https://github.com/DomizianoScarcelli/pathfinder-visualizer"
					/>
					<Project
						image="workout-tracker-2.png"
						title="Workout Tracker"
						content="Web app that allows the user to track their workout progress. The user can also see the analytics for a selected period of time. The app is developed using the MERN stack."
						github="https://github.com/DomizianoScarcelli/workout-tracker"
					/>
					<Project
						image="gc-logo.png"
						title="GeneroCity"
						content="Developed during my internship at University of La Sapienza, it's a smart parking native Android app that allows the users to swap parking spots."
						demo="https://www.generocity.it/"
					/>
					<Project
						image="ascii-editor-gui-3.png"
						title="ASCII Editor GUI"
						content="Java GUI app using the Swing library that allows the user to edit an image made of ASCII text using his mouse. The app is based on Trystan's Ascii Panel."
						github="https://github.com/DomizianoScarcelli/ascii-editor-refactor"
					/>
				</div>
				{/* <div class="expandArrow center-horizontally">
					<img src="./res/expand_more_black_24dp.svg" alt="" class="expandArrow__image" id="expandArrow" />
				</div> */}
			</Container>

			<Skills />

			<Container title="Contributions." titleColor={colors.containerTitle}>
				<p className="contentContainer__description noBottomPadding">Open source code is very important, so whenever I can I try to contribute to some projects on GitHub.</p>

				<Contributions />
			</Container>

			<Container title="Contact me." titleColor={colors.containerTitle}>
				<ContactForm />
			</Container>
		</div>
	)
}
