import Navbar from "./components/Navbar";
import Scene from "./components/Scene";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Contact from "./components/Contact";
import PageMotion from "./components/PageMotion";
import StarBackground from "./components/StarBackground";

function App() {

  return (

    <div className="relative text-white overflow-x-hidden min-h-screen">

      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Navbar */}
      <Navbar />

      {/* HOME SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center transition duration-500 hover:scale-[1.02]"
      >

        {/* 3D Background */}
        <div className="absolute inset-0 opacity-60">
          <Scene />
        </div>

        {/* Hero Content */}
        <PageMotion>
          <div className="relative z-10">

            <h1 className="text-7xl md:text-9xl font-bold tracking-wide">
              Flux Studio
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
              Creative Developer & Motion Designer
            </p>

          </div>
        </PageMotion>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center transition duration-500 hover:scale-[1.02]"
      >

        <h1 className="text-6xl font-bold">
          Projects Section
        </h1>

      </section>

      <div className="relative text-white overflow-x-hidden min-h-screen">

        <StarBackground />

        <Navbar />

      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center transition duration-500 hover:scale-[1.02]"
      >

        <h1 className="text-6xl font-bold">
          About Section
        </h1>

      </section>

      {/* CONTACT COMPONENT */}
      <Contact />

    </div>
  );
}

export default App;