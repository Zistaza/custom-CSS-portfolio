import Hero from "../components/Hero";
import Education from "./../components/Education";
import Navbar from "./../components/Navbar";
import Services from "./../components/Services";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";

export default function Home() {
  return (
    <main>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <Navbar />
      <Hero />
      <Education />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
