import "./App.css"
import Project from "./components/Project/Project"
import Container from "./components/Container/Container"
import ContactForm from "./components/ContactForm/ContactForm"
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"

export default function App() {
	return (
		<div class="container center-vertically" id="topContainer">
			<Header />

			<Container title="About." titleColor="#2a9d8f">
				<div class="contentContainer__description">
					I'm a 22 years old Software Engineer passionate about web development. I've got my Bachelor's Degree in March 2022. I'm constantly learning new tools and technologies to develop
					more useful and good looking web apps.
				</div>
			</Container>

			<Container title="Projects." titleColor="#2a9d8f">
				<div class="contentContainer__body" id="contentContainer__body">
					<Project
						textColor="#e8e2df"
						backgroundColor="#434343"
						image="word_search.webp"
						title="Word Search Generator"
						content="Web app written using React with Typescrit that uses a backtracking algorithm to generate a Word Search puzzle of any dimension from a set of words"
						github="https://github.com/DomizianoScarcelli/word-find-puzzle"
					/>
					<Project
						textColor="#e8e2df"
						backgroundColor="#434343"
						image="pathfinder-visualizer.svg"
						title="Pathfinder Visualizer"
						content="Web app that allows the user to select two  points and see the shortest path between them.
							The app is developed using p5.js"
						github="https://github.com/DomizianoScarcelli/pathfinder-visualizer"
					/>
					<Project
						textColor="#e8e2df"
						backgroundColor="#434343"
						image="workout-tracker.jpg"
						title="Workout Tracker"
						content="Web app that allows the user to track their workout progress. The user can also see the analytics for a selected period of time. The app is developed using the MERN stack."
						github="https://github.com/DomizianoScarcelli/workout-tracker"
					/>
					<Project
						textColor="#e8e2df"
						backgroundColor="#434343"
						image="gc-logo.png"
						title="GeneroCity"
						content="Developed during my internship at University of La Sapienza, it's a smart parking native Android app that allows the users to swap parking spots."
					/>
					<Project
						textColor="#e8e2df"
						backgroundColor="#434343"
						image="ascii-editor-gui.svg"
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

			<Container title="Contact me." titleColor="#2a9d8f">
				<ContactForm />
			</Container>

			<a class="backToTop center-horizontally" id="backToTopButton" href="#topContainer">
				<img src="../public/res/arrow_upward_white_24dp.svg" />
			</a>
		</div>
	)
}
