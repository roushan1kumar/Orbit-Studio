import Navbar from "./components/Navbar";
import Scene from "./components/Scene";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Contact from "./components/Contact";
<<<<<<< HEAD
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
=======
import StarBackground from "./components/StarBackground";

function App() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <BackgroundAnimation />
      <StarBackground />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="
          relative
          min-h-screen
          flex items-center
          px-6 md:px-20
          overflow-hidden
        "
      >

        {/* GLOW */}
        <div className="hero-glow" />

        {/* 3D BACKGROUND */}
        <div className="
          absolute inset-0
          opacity-50
          z-[1]
        ">
          <Scene />
        </div>

        {/* DARK OVERLAY */}
        <div className="
          absolute inset-0
          bg-gradient-to-b
          from-black/10
          via-black/40
          to-black
          z-[2]
        " />

        {/* CONTENT */}
        <div className="
          relative z-10
          max-w-7xl
          w-full
          mx-auto
        ">

          {/* SMALL LABEL */}
          <p className="
            uppercase
            tracking-[0.5em]
            text-white/40
            text-xs
            mb-10
          ">
            Creative Development Studio
          </p>

          {/* BIG TITLES */}
          <div className="overflow-hidden">

            <h1 className="
              cinematic-title
              text-[15vw]
            ">
              Orbit
            </h1>

          </div>

          <div className="overflow-hidden">

            <h1 className="
              cinematic-title
              text-[15vw]
              text-white/70
            ">
              Studio
            </h1>

          </div>

          {/* DESCRIPTION */}
          <div className="
            mt-14
            max-w-2xl
          ">

            <p className="
              text-lg md:text-xl
              text-white/50
              leading-relaxed
            ">
              Crafting cinematic digital experiences
              with motion, interaction, WebGL and
              immersive storytelling.
            </p>

          </div>

          {/* BUTTONS */}
          <div className="
            flex items-center gap-6
            mt-14
          ">

            <button className="
              px-8 py-4
              rounded-full
              bg-white
              text-black
              uppercase
              tracking-[0.2em]
              text-sm
            ">
              Explore Work
            </button>

            <button className="
              px-8 py-4
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              uppercase
              tracking-[0.2em]
              text-sm
            ">
              About Studio
            </button>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="
          relative
          py-40
          px-6 md:px-20
          z-10
        "
      >

        <div className="
          max-w-7xl
          mx-auto
        ">

          {/* LABEL */}
          <p className="
            uppercase
            tracking-[0.5em]
            text-white/30
            text-xs
            mb-20
          ">
            Selected Experience
          </p>

          {/* PROJECTS */}
          <div className="space-y-10">

            {/* URBANNOOK */}
            <div className="
              project-card
              rounded-[3rem]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10 md:p-16
            ">

              <div className="
                flex flex-col md:flex-row
                justify-between
                gap-10
              ">

                <div>

                  <p className="
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                    text-xs
                    mb-6
                  ">
                    Social Media / Branding
                  </p>

                  <h2 className="
                    text-5xl md:text-7xl
                    font-black
                    tracking-[-0.05em]
                  ">
                    UrbanNook
                  </h2>

                </div>

                <div className="max-w-md">

                  <p className="
                    text-white/50
                    leading-relaxed
                  ">
                    Managed social media presence,
                    created cinematic promotional
                    videos and helped improve
                    the digital branding of the company.
                  </p>

                </div>

              </div>

            </div>

            {/* SWEET HEART HOTEL */}
            <div className="
              project-card
              rounded-[3rem]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10 md:p-16
            ">

              <div className="
                flex flex-col md:flex-row
                justify-between
                gap-10
              ">

                <div>

                  <p className="
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                    text-xs
                    mb-6
                  ">
                    Website Development
                  </p>

                  <h2 className="
                    text-5xl md:text-7xl
                    font-black
                    tracking-[-0.05em]
                  ">
                    Sweet Heart Hotel
                  </h2>

                </div>

                <div className="max-w-md">

                  <p className="
                    text-white/50
                    leading-relaxed
                  ">
                    Designed and worked on
                    modern website experiences
                    focused on presentation,
                    responsiveness and customer engagement.
                  </p>

                </div>

              </div>

            </div>

            {/* SHOPIFY */}
            <div className="
              project-card
              rounded-[3rem]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10 md:p-16
            ">

              <div className="
                flex flex-col md:flex-row
                justify-between
                gap-10
              ">

                <div>

                  <p className="
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                    text-xs
                    mb-6
                  ">
                    Shopify / E-Commerce
                  </p>

                  <h2 className="
                    text-5xl md:text-7xl
                    font-black
                    tracking-[-0.05em]
                  ">
                    Store Development
                  </h2>

                </div>

                <div className="max-w-md">

                  <p className="
                    text-white/50
                    leading-relaxed
                  ">
                    Worked on Shopify stores,
                    layout optimization and
                    improving overall digital
                    shopping experience.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
<section
  id="services"
  className="
    relative
    py-40
    px-6 md:px-20
    z-10
  "
>

  <div className="
    max-w-7xl
    mx-auto
  ">

    {/* LABEL */}
    <p className="
      uppercase
      tracking-[0.5em]
      text-white/30
      text-xs
      mb-20
    ">
      Services
    </p>

    {/* TOP CONTENT */}
    <div className="
      grid md:grid-cols-2
      gap-20
      mb-24
    ">

      <div>

        <h2 className="
          text-5xl md:text-8xl
          font-black
          leading-[0.95]
          tracking-[-0.05em]
        ">
          Building digital experiences that grow brands.
        </h2>

      </div>

      <div className="flex items-end">

        <p className="
          text-white/50
          text-lg
          leading-relaxed
          max-w-xl
        ">
          From cinematic websites to social media
          branding and business development,
          we help companies create strong
          digital identities.
        </p>

      </div>

    </div>

    {/* SERVICES GRID */}
    <div className="
      grid md:grid-cols-2
      gap-8
    ">

      {/* SERVICE CARD */}
      <div className="
        project-card
        rounded-[3rem]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-10
      ">

        <p className="
          text-white/30
          uppercase
          tracking-[0.3em]
          text-xs
          mb-8
        ">
          01
        </p>

        <h3 className="
          text-4xl
          font-bold
          mb-6
        ">
          Web Development
        </h3>

        <p className="
          text-white/50
          leading-relaxed
        ">
          Premium modern websites with
          cinematic UI, smooth animations,
          responsive layouts and immersive
          interactions.
        </p>

      </div>

      {/* SERVICE CARD */}
      <div className="
        project-card
        rounded-[3rem]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-10
      ">

        <p className="
          text-white/30
          uppercase
          tracking-[0.3em]
          text-xs
          mb-8
        ">
          02
        </p>

        <h3 className="
          text-4xl
          font-bold
          mb-6
        ">
          Social Media Management
        </h3>

        <p className="
          text-white/50
          leading-relaxed
        ">
          Strategic content creation,
          social branding, engagement
          optimization and digital presence
          management for businesses.
        </p>

      </div>

      {/* SERVICE CARD */}
      <div className="
        project-card
        rounded-[3rem]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-10
      ">

        <p className="
          text-white/30
          uppercase
          tracking-[0.3em]
          text-xs
          mb-8
        ">
          03
        </p>

        <h3 className="
          text-4xl
          font-bold
          mb-6
        ">
          Promotional Videos
        </h3>

        <p className="
          text-white/50
          leading-relaxed
        ">
          Cinematic promotional content,
          editing, motion graphics and
          storytelling videos designed
          for brand growth.
        </p>

      </div>

      {/* SERVICE CARD */}
      <div className="
        project-card
        rounded-[3rem]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-10
      ">

        <p className="
          text-white/30
          uppercase
          tracking-[0.3em]
          text-xs
          mb-8
        ">
          04
        </p>

        <h3 className="
          text-4xl
          font-bold
          mb-6
        ">
          Shopify Development
        </h3>

        <p className="
          text-white/50
          leading-relaxed
        ">
          Modern Shopify stores with
          optimized layouts, branding,
          performance improvements and
          better customer experience.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="
          relative
          py-40
          px-6 md:px-20
          z-10
        "
      >

        {/* GLOW */}
        <div className="
          absolute
          top-0 left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-white/5
          blur-[180px]
          rounded-full
        " />

        <div className="
          relative z-10
          max-w-7xl
          mx-auto
          grid md:grid-cols-2
          gap-24
        ">

          {/* LEFT */}
          <div>

            <p className="
              uppercase
              tracking-[0.5em]
              text-white/30
              text-xs
              mb-8
            ">
              About
            </p>

            <h2 className="
              text-5xl md:text-8xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
            ">
              We create immersive digital worlds.
            </h2>

          </div>

          {/* RIGHT */}
          <div>

            <p className="
              text-xl
              text-white/60
              leading-relaxed
              mb-10
            ">
              Orbit Studio combines cinematic
              motion design, WebGL experiences
              and interactive storytelling to
              create futuristic digital products.
            </p>

            <p className="
              text-white/40
              leading-relaxed
            ">
              Inspired by premium studios like
              synchronized.studio, we focus on
              immersive experiences that feel
              emotional, smooth and unforgettable.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}
>>>>>>> 6d730ce (first commit)
      <Contact />

    </div>
  );
}

export default App;