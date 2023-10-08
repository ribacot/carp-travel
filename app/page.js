import About from "./components/about/about";
import Choose from "./components/choose/choose";
import Hero from "./components/hero/hero";
import Weoffer from "./components/weoffer/weOffer";
export default function Home({ height }) {
  return (
    <>
      <Hero height={height} />
      <About />
      <Weoffer />
      <Choose />
    </>
  );
}
