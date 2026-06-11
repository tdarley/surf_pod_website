import Image from "next/image";
import Script from "next/script";

const infrastructureCards = [
  {
    title: "Hardware",
    copy: "Purpose-built outdoor access units engineered for reliable coastal deployment.",
  },
  {
    title: "Mobile Application",
    copy: "Session access and operator controls through a dedicated mobile interface.",
  },
  {
    title: "Deployment Network",
    copy: "Distributed infrastructure installed across accommodation-based surf locations.",
  },
];

const hardwareFeatures = [
  "Per-board intelligent control",
  "Integrated retention system",
  "Self-reporting hardware",
  "Connected deployment platform",
  "Coastal-grade engineering",
]

const deploymentLocations = [
  "Campsites",
  "Holiday Parks",
  "Surf Hostels",
  "Coastal Accommodation",
  "Holiday Resorts",
 
];

const galleryItems = [
  "Full unit render",
  "Side profile",
  "Close-up mechanism",
  "Exploded view",
  "App interaction render",
];

export default function Home() {
  return (
    <div className="surf-shell min-h-screen text-white">
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
      />
      <header className="section-wrap sticky top-0 z-20 py-6 backdrop-blur-md">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/35 px-5 py-3">
          <Image
            src="/SurfPod-Logo-Green.png"
            alt="SurfPods logo"
            width={132}
            height={28}
            priority
          />
          <a
            href="#register"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-200 hover:text-cyan-200"
          >
            Register Interest
          </a>
        </div>
      </header>

      <main>
        <section className="section-wrap grid min-h-[88vh] items-center gap-10 pb-8 pt-8 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="rise text-xs uppercase tracking-[0.2em] text-cyan-300/90">Infrastructure Platform</p>
            <h1 className="rise rise-delay mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl">
              SURFPODS
            </h1>
            <p className="rise rise-delay-2 mt-7 max-w-xl text-lg text-slate-300">
              Automated surfboard access infrastructure for coastal accommodation.
            </p>
            <p className="mt-4 max-w-xl text-base text-slate-400">
              Designed for campsites, holiday parks and coastal resorts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#infrastructure"
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
              >
                View System
              </a>
              <a
                href="#register"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium transition hover:border-cyan-200 hover:text-cyan-200"
              >
                Register Interest
              </a>
            </div>
          </div>

          <div className="hero-glow overflow-hidden rounded-3xl border border-white/15 bg-black/70">
            <model-viewer
              src="/rack.glb"
              poster="/Homepage-Background.jpg"
              alt="SurfPods rack 3D model"
              camera-controls
              auto-rotate
              rotation-per-second="8deg"
              interaction-prompt="none"
              shadow-intensity="1"
              exposure="1"
              class="h-full min-h-[460px] w-full md:min-h-[620px]"
            ></model-viewer>
          </div>
        </section>

        <section id="infrastructure" className="section-wrap pb-20 pt-10">
          <h2 className="section-title">Surfboard Access Infrastructure</h2>
          <p className="section-copy mt-5">
            SurfPods combines hardware, embedded electronics and mobile software into one deployed access network.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {infrastructureCards.map((card) => (
              <article key={card.title} className="panel rounded-2xl p-6">
                <h3 className="text-xl font-medium">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap grid gap-10 py-20 md:grid-cols-[1fr_1.05fr] md:items-center">
          <div>
            <h2 className="section-title">Engineered for Coastal Environments</h2>
            <p className="section-copy mt-5">
              Built for outdoor deployment with secure access, modular construction and long-term reliability.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {hardwareFeatures.map((feature) => (
                <li key={feature} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-2">
            <Image
              src="/Homepage-Background.jpg"
              alt="SurfPods hardware render"
              width={1200}
              height={800}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        <section className="section-wrap grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">Complete Session Control</h2>
            <p className="section-copy mt-5">
              Users access equipment through the mobile app while operators monitor deployment status in real time.
            </p>
          </div>
          <div className="order-1 grid gap-4 sm:grid-cols-2 md:order-2">
            <div className="panel rounded-3xl p-3">
              <Image
                src="/Homepage-Background.jpg"
                alt="Mobile app screen one"
                width={700}
                height={1300}
                className="aspect-[9/19] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="panel rounded-3xl p-3">
              <Image
                src="/Homepage-Background.jpg"
                alt="Mobile app screen two"
                width={700}
                height={1300}
                className="aspect-[9/19] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-wrap py-20">
          <h2 className="section-title">Built for Distributed Deployment</h2>
          <p className="section-copy mt-5">
            Designed for installation across multiple coastal accommodation environments with centralized control.
          </p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-black/45 p-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {deploymentLocations.map((location) => (
                <div key={location} className="rounded-xl border border-cyan-300/25 bg-cyan-300/8 px-4 py-3 text-sm">
                  {location}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap py-20">
          <h2 className="section-title">System Overview</h2>
          <p className="section-copy mt-5">
            A product gallery presenting unit form, mechanism detail and operator interaction context.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {galleryItems.map((item, index) => (
              <figure
                key={item}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-4 ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src="/Homepage-Background.jpg"
                  alt={item}
                  width={1400}
                  height={900}
                  className="h-56 w-full rounded-2xl object-cover sm:h-72"
                />
                <figcaption className="mt-4 text-sm text-slate-300">{item}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section-wrap py-24">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/8 px-6 py-14 text-center sm:px-10">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Building the Future of Surfboard Access
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Join the early access programme and follow deployment progress.
            </p>
            <a
              href="#register"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
            >
              Register Interest
            </a>
          </div>
        </section>

        <section id="register" className="section-wrap pb-24">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/12 bg-black/55 p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Register Interest</h2>
            <p className="mt-4 text-slate-300">
              Share your details to receive deployment updates and early access information.
            </p>
            <form className="mt-8 grid gap-4" action="#" method="post">
              <label className="grid gap-2 text-sm" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-300/60 placeholder:text-slate-500 focus:ring-2"
                  placeholder="Your full name"
                />
              </label>
              <label className="grid gap-2 text-sm" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-300/60 placeholder:text-slate-500 focus:ring-2"
                  placeholder="you@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm" htmlFor="company">
                Company
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none ring-cyan-300/60 placeholder:text-slate-500 focus:ring-2"
                  placeholder="Company or property name"
                />
              </label>
              <button
                type="submit"
                className="mt-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                Submit Interest
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
