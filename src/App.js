import "./App.css"
import Project from "./components/Project/Project"
import Container from "./components/Container/Container"
import ContactForm from "./components/ContactForm/ContactForm"
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"
import colors from "./colors"
import Contributions from "./components/Contributions/Contributions"
import ResourceTab from "./components/PublicResources/ResourceTab"

function App() {
	return (
		<>
			<div className="nightContainer">
				<div className="night">
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
					<div className="shooting_star"></div>
				</div>
			</div>
			<div className="container center-vertically" id="topContainer">
				<Header />

				<Container title="About.">
					<p className="justified contentContainer__description">
						I'm a 24 years old <b>Software Engineer</b> passionate in <b>Web</b> and <b>Mobile</b> development. During the last few years I've been always more interesed in{" "}
						<b>Deep Learning</b>.
						<br /> <br />I obtained my Bachelor's Degree in <b>Computer Science</b> in March 2022 and I'm currently studying for my <b>Master's Degree</b> in CS at the University of Rome
						"La Sapienza".
					</p>
				</Container>

				<Container title="Public Resources.">
					<p className="contentContainer__description noBottomPadding">These are some resources I decided to publish, since they may be useful for many other people</p>
					<div className="gap contentContainer__body">
						<ResourceTab title="Python Exercises" image="python_logo.webp" demo="https://python-exercises.netlify.app/" />
						<ResourceTab title="University Notes" image="graduation.png" demo="https://domiziano-cs-notes.netlify.com" />
					</div>
				</Container>

				<Container title="Projects." grid>
					{/* <p className="contentContainer__description noBottomPadding">These are some project I developed, both for learning reasons or as university assignment</p> */}
					{/* TODO: Put the content as a child and not as a prop*/}
					<Project
						image="spotify.webp"
						title="Spotify Playlist Continuation"
						content={
							<p>
								Distributed recommender system on a dataset of 100K playlists for the <a href="daje">Spotify Playlist Continuation Challenge 2018</a> implemented using <b>PySpark</b>,{" "}
								<b>PyTorch</b> and <b>Petastorm</b>.
							</p>
						}
						github="https://github.com/DomizianoScarcelli/spotify-recommender"
					/>
					<Project
						image="tablefork.png"
						title="Voicefork"
						content={
							<p>
								TheFork mobile app clone created with <a>React Native</a>, whose backend is structured in microservices and deployed on <a>AWS</a>. The application is containerized
								with <a>Docker</a> and load tested with <a>k6</a>. <br />
							</p>
						}
						github="https://github.com/DomizianoScarcelli/voicefork"
					/>
					<Project
						image="alexa.png"
						title="Voicefork Alexa Skill"
						content="Alexa skill made with Typescript using the same backend made for Voicefork"
						github="https://github.com/DomizianoScarcelli/voicefork-alexa-skill"
					/>
					<Project
						image="drones.png"
						title="Q-Learning Routing Protocol for Drones"
						content="Implemented a routing protocol for UAV ad-hoc wireless networks using Q-learning inside of a Drones simulator"
						github="https://github.com/DomizianoScarcelli/voicefork-alexa-skill"
					/>
					<Project
						image="biometric-bites.png"
						title="Biometrics Bites"
						content="The project consists in a Web app that allows biometric access to the university cafeteria with face recognition. The frontend is developed with React, the backend with Django."
						github="https://github.com/DomizianoScarcelli/BiometricsBites"
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
					{/* <div className="expandArrow center-horizontally">
					<img src="./res/expand_more_black_24dp.svg" alt="" className="expandArrow__image" id="expandArrow" />
				</div> */}
				</Container>

				<Skills />

				<Container title="Contributions." titleColor={colors.text}>
					<p className="contentContainer__description noBottomPadding">
						I love open source software, and because of that I try to contribute to it whenever I can, in order to learn something new about a specific technology, and to see how other
						people deal with their codebases, especially if it involves many contributors. These are some contributions I've made over the years.
					</p>

					<Contributions />
				</Container>

				<Container title="Contact me." titleColor={colors.text}>
					<ContactForm />
				</Container>
			</div>
		</>
	)
}

export default App
