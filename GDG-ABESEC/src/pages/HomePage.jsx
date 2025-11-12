import Home from "../components/Home";
import About from "../components/About";
import OrganisersAndActingGenerals from "../components/OrganiserAndActingGenerals";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Home />
      <div className="w-full  overflow-x-hidden">
        <About />
      </div>
      <OrganisersAndActingGenerals />
      <Footer />
    </>
  );
}