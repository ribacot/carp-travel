import About from "./components/about/about";
import Choose from "./components/choose/choose";
import Gallery from "./components/gallery/gallery";
import Hero from "./components/hero/hero";
import Weoffer from "./components/weoffer/weOffer";
export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Weoffer />
			<Choose />
			<Gallery/>
		</>
	);
}
