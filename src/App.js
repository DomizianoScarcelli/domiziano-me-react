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

				<Container title="Resources." description="These are some resources I decided to publish, since they may be useful for many other people" grid noExpand>
					<ResourceTab title="Python Exercises" image="python_logo.webp" demo="https://python-exercises.netlify.app/" />
					<ResourceTab title="University Notes" image="graduation.png" demo="https://domiziano-cs-notes.netlify.com" />
				</Container>

				<Container title="Projects." grid>
					<Project image="skin-lesion.png" title="Skin Lesion Classification" github="https://github.com/DomizianoScarcelli/skin-lesion-classification">
						<p>
							Implemented different skin lesion models on the <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T">HAM10000</a> dataset using{" "}
							<b>PyTorch</b>. We used <a href="https://github.com/huangzh13/StyleGAN.pytorch">StyleGAN</a> to generate synthetic data and{" "}
							<a href="https://github.com/facebookresearch/segment-anything">SAM</a> to segment the images to achieve better performance. There is also a re-implementation of the{" "}
							<a href="https://link.springer.com/article/10.1007/s10489-022-03320-x">MSLANet paper</a> with some modification to improve performances
						</p>
					</Project>
					<Project
						image="spotify.webp"
						title="Spotify Playlist Continuation"
						github="https://github.com/DomizianoScarcelli/spotify-recommender"
						video="https://www.youtube.com/watch?v=6SfWoqsLD08"
					>
						<p>
							Distributed recommender system on a dataset of 100K playlists for the <a href="daje">Spotify Playlist Continuation Challenge 2018</a> implemented using <b>PySpark</b>,{" "}
							<b>PyTorch</b> and <b>Petastorm</b>.
						</p>
					</Project>
					<Project image="tablefork.png" title="Voicefork" github="https://github.com/DomizianoScarcelli/voicefork" video="https://www.youtube.com/watch?v=0-LgkOZpavc">
						<p>
							TheFork mobile app clone created with <a href="https://reactnative.dev/">React Native</a>, whose backend is structured in microservices and deployed on <b>AWS</b>. The
							application is containerized with <a href="https://www.docker.com/">Docker</a> and load tested with <a href="https://k6.io/">k6</a>. <br />
						</p>
					</Project>
					<Project image="alexa.png" title="Voicefork Alexa Skill" github="https://github.com/DomizianoScarcelli/voicefork-alexa-skill" video="https://www.youtube.com/watch?v=PHmqiMtnwJc">
						<p>
							<b>Alexa</b> skill made with Typescript using the same backend made for Voicefork
						</p>
					</Project>
					<Project image="drones.png" title="Q-Learning Routing Protocol for Drones" github="https://github.com/DomizianoScarcelli/voicefork-alexa-skill">
						<p>
							Implemented a routing protocol for UAV ad-hoc wireless networks using <b>Q-learning</b> inside of a Drone simulator
						</p>
					</Project>
					<Project image="biometric-bites.png" title="Biometrics Bites" github="https://github.com/DomizianoScarcelli/BiometricsBites">
						<p>
							Developed a Web app that allows biometric access to the university cafeteria with <b>face recognition.</b> The frontend is developed with <b>React</b>, the backend with
							<b> Django</b>.
						</p>
					</Project>
					<Project image="pathfinder-visualizer-2.png" title="Pathfinder Visualizer" content="" github="https://github.com/DomizianoScarcelli/pathfinder-visualizer">
						<p>
							Web app that allows the user to select two points and see the shortest path between them. The app is developed using <a href="https://p5js.org/">p5.js</a>
						</p>
					</Project>
					{/* <Project
						image="workout-tracker-2.png"
						title="Workout Tracker"
						content="Web app that allows the user to track their workout progress. The user can also see the analytics for a selected period of time. The app is developed using the MERN stack."
						github="https://github.com/DomizianoScarcelli/workout-tracker"
					/> */}
					<Project image="gc-logo.png" title="GeneroCity" demo="https://www.generocity.it/">
						<p>
							Developed during my internship at University of La Sapienza, it's a smart parking native <b>Android app </b>that allows the users to swap parking spots."
						</p>
					</Project>
					<Project image="ascii-editor-gui-3.png" title="ASCII Editor GUI" content="" github="https://github.com/DomizianoScarcelli/ascii-editor-refactor">
						<p>
							Java GUI app using the <b>Swing library </b>that allows the user to edit an image made of ASCII text using his mouse. The app is based on{" "}
							<a href="https://github.com/trystan/AsciiPanel">Trystan's Ascii Panel</a>.
						</p>
					</Project>
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
