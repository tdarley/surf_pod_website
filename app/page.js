"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

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
    title: "Deployment Locations",
    copy: "SurfPods units are installed at campsites, holiday parks, and coastal accommodation sites.",
  },
];

const hardwareFeatures = [
  "Stainless steel construction",
  "IP-rated electrical components",
  "Modular serviceable design",
  "Corrosion-resistant materials",
]

const sessionControlFeatures = [
  "Per-board time-based rental sessions",
  "Algorithmic session gating using live wave buoy data",
  "Remote session monitoring and override control",
  "Automated session start and return tracking",
  "Board availability monitoring",
  "Operator lockout controls",
];

const problemSolutionPoints = [
  "Guests rent boards through the app",
  "Boards unlock automatically",
  "Usage is tracked automatically",
  "Returns are monitored in real time",
  "No rental desk required",
];

const surfpodsWorkflowSteps = [
  {
    step: "1",
    title: "Select a Board",
    detail: "Users view available surfboards and start a rental session through the mobile app.",
  },
  {
    step: "2",
    title: "Session Validation",
    detail:
      "Before access is granted, SurfPods can automatically verify rental conditions, including wave and safety criteria using live buoy data.",
  },
  {
    step: "3",
    title: "Automated Access",
    detail: "The selected board is released from the unit and the rental session begins automatically.",
  },
  {
    step: "4",
    title: "Live Session Monitoring",
    detail: "The system tracks active rentals, board availability and session status in real time.",
  },
  {
    step: "5",
    title: "Return and Close Session",
    detail:
      "When the board is returned, the session is automatically closed and equipment availability is updated.",
  },
  {
    step: "6",
    title: "Operator Oversight",
    detail: "Operators can remotely monitor sessions, apply lockouts and intervene when required.",
  },
];

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

const contactEmail = "surfpods.rentals@gmail.com";

export default function Home() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const handleInterestSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const company = (formData.get("company") || "").toString().trim();

    const subject = encodeURIComponent("SurfPods Register Interest");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nI am interested in SurfPods deployment updates.`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    document.body.classList.add("motion-ready");

    const revealSections = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    revealSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="surf-shell min-h-screen text-white">
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
      />
      <header className="sticky top-0 z-20 border-b border-white/8 bg-black/40 backdrop-blur-xl">
        <div className="section-wrap flex items-center justify-between py-4">
          <Image
            src="/SurfPod-Logo-Green.png"
            alt="SurfPods logo"
            width={140}
            height={30}
            priority
            className="transition-opacity hover:opacity-80"
          />
          <a
            href="#register"
            className="group relative inline-flex items-center rounded-lg border border-white/12 bg-gradient-to-b from-white/8 to-white/4 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:from-white/12 hover:to-white/8 active:from-white/10 active:to-white/6"
          >
            <span className="relative z-10">Register Interest</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="section-wrap grid min-h-[88vh] items-center gap-10 pb-8 pt-8 md:grid-cols-[0.95fr_1.05fr]">
            <div>
            <p className="rise text-xs uppercase tracking-[0.2em] text-cyan-300/90">Automated Rental System</p>
            <h1 className="rise rise-delay mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl">
              SURFPODS
            </h1>
            <p className="rise rise-delay-2 mt-7 max-w-xl text-lg text-slate-300">
              A self-service surfboard rental system with app-based access and automated board control.
            </p>
            <p className="mt-4 max-w-xl text-base text-slate-400">
              Designed for campsites, holiday parks and coastal accommodation sites.
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
                shadow-intensity="2"
                exposure="1"
                class="h-full min-h-[460px] w-full md:min-h-[620px]"
              ></model-viewer>
            </div>
          </div>
        </section>

        <section className="section-wrap reveal-on-scroll py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-[1fr_1.05fr] md:items-stretch">
            <article className="panel reveal-stagger rounded-3xl p-7 md:p-9" style={{ "--reveal-delay": "70ms" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">Problem / Solution</p>
              <h2 className="section-title mt-4">Self-Service Surfboard Hire, Managed Automatically</h2>
              <p className="section-copy mt-5">
                Many accommodation providers are located near great surf but do not have the staff or systems needed to run equipment hire.
              </p>
            </article>

            <article className="panel reveal-stagger rounded-3xl p-7 md:p-9" style={{ "--reveal-delay": "150ms" }}>
              <h3 className="text-xl font-medium text-white">SurfPods automates the entire rental process:</h3>
              <ul className="mt-6 grid gap-3 text-sm text-slate-200">
                {problemSolutionPoints.map((item, index) => (
                  <li
                    key={item}
                    className="reveal-stagger flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    style={{ "--reveal-delay": `${220 + index * 70}ms` }}
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/60 bg-cyan-300/20">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-cyan-200" fill="none" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="infrastructure" className="section-wrap reveal-on-scroll pb-20 pt-10">
          <h2 className="section-title reveal-stagger">Surfboard Rental System</h2>
          <p className="section-copy reveal-stagger mt-5" style={{ "--reveal-delay": "90ms" }}>
            SurfPods combines purpose built hardware, embedded electronics and mobile software into one deployed access system.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {infrastructureCards.map((card, index) => (
              <article
                key={card.title}
                className="panel reveal-stagger rounded-2xl p-6"
                style={{ "--reveal-delay": `${160 + index * 80}ms` }}
              >
                <h3 className="text-xl font-medium">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap reveal-on-scroll py-16 md:py-20">
          <p className="reveal-stagger text-xs uppercase tracking-[0.2em] text-cyan-300/90">How SurfPods Works</p>
          <h2 className="section-title reveal-stagger mt-4" style={{ "--reveal-delay": "70ms" }}>
            Automated Rental Sessions From Start to Finish
          </h2>
          <p className="section-copy reveal-stagger mt-5" style={{ "--reveal-delay": "130ms" }}>
            Guests access surfboards through the SurfPods mobile app while operators maintain full visibility and control over the system.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.1fr]">
            <div className="panel reveal-stagger rounded-3xl p-4 sm:p-5" style={{ "--reveal-delay": "180ms" }}>
              <div className="grid gap-3">
                {surfpodsWorkflowSteps.map((item, index) => {
                  const isActive = index === activeWorkflowStep;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveWorkflowStep(index)}
                      className={`group flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-cyan-300/60 bg-cyan-300/16"
                          : "border-white/10 bg-white/5 hover:border-cyan-300/40 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                          isActive
                            ? "border-cyan-200/80 bg-cyan-200/20 text-cyan-100"
                            : "border-white/25 bg-white/8 text-slate-300"
                        }`}
                      >
                        {item.step}
                      </span>
                      <span className="text-sm font-medium text-slate-100">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <article className="panel reveal-stagger rounded-3xl p-7 md:p-9" style={{ "--reveal-delay": "240ms" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">
                Step {surfpodsWorkflowSteps[activeWorkflowStep].step}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                {surfpodsWorkflowSteps[activeWorkflowStep].title}
              </h3>
              <p className="mt-5 max-w-[55ch] text-slate-300">{surfpodsWorkflowSteps[activeWorkflowStep].detail}</p>

              <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300/90 to-cyan-500/90 transition-all duration-500"
                  style={{ width: `${((activeWorkflowStep + 1) / surfpodsWorkflowSteps.length) * 100}%` }}
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-400">
                {activeWorkflowStep + 1} of {surfpodsWorkflowSteps.length} stages
              </p>
            </article>
          </div>
        </section>

        <section className="section-wrap reveal-on-scroll grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div className="order-2 reveal-stagger md:order-1">
            <h2 className="section-title">Complete Session Control</h2>
            <p className="section-copy mt-5">
              Users access equipment through the mobile app while operators monitor deployment status in real time.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {sessionControlFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="reveal-stagger rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  style={{ "--reveal-delay": `${120 + index * 70}ms` }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 grid gap-4 sm:grid-cols-2 md:order-2">
            <div className="panel reveal-stagger rounded-3xl p-3" style={{ "--reveal-delay": "120ms" }}>
              <Image
                src="/app_homepage.jpg"
                alt="Mobile app screen one"
                width={700}
                height={1300}
                className="aspect-[9/19] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="panel reveal-stagger rounded-3xl p-3" style={{ "--reveal-delay": "210ms" }}>
              <Image
                src="/app_session_screen.jpeg"
                alt="Mobile app screen two"
                width={700}
                height={1300}
                className="aspect-[9/19] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-wrap reveal-on-scroll grid gap-10 py-20 md:grid-cols-[1fr_1.05fr] md:items-center">
          <div className="reveal-stagger">
            <h2 className="section-title">Engineered for Coastal Environments</h2>
            <p className="section-copy mt-5" style={{ "--reveal-delay": "90ms" }}>
              Built for outdoor deployment using corrosion-resistant materials, weather-protected components and serviceable modular construction.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {hardwareFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="reveal-stagger rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  style={{ "--reveal-delay": `${150 + index * 60}ms` }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-stagger overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-2" style={{ "--reveal-delay": "170ms" }}>
            <Image
              src="/storm_image.jpg"
              alt="SurfPods hardware render"
              width={1200}
              height={800}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        <section className="section-wrap reveal-on-scroll py-20">
          <h2 className="section-title reveal-stagger">Designed for Coastal Accommodation</h2>
          <p className="section-copy reveal-stagger mt-5" style={{ "--reveal-delay": "90ms" }}>
            Designed for installation across multiple coastal accommodation environments with centralized control.
          </p>
          <div className="reveal-stagger mt-10 rounded-3xl border border-white/10 bg-black/45 p-7" style={{ "--reveal-delay": "160ms" }}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {deploymentLocations.map((location, index) => (
                <div
                  key={location}
                  className="reveal-stagger rounded-xl border border-cyan-300/25 bg-cyan-300/8 px-4 py-3 text-sm"
                  style={{ "--reveal-delay": `${220 + index * 60}ms` }}
                >
                  {location}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap reveal-on-scroll py-20">
          <h2 className="section-title reveal-stagger">System Overview</h2>
          <p className="section-copy reveal-stagger mt-5" style={{ "--reveal-delay": "90ms" }}>
            A product gallery presenting unit form, mechanism detail and operator interaction context.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {galleryItems.map((item, index) => (
              <figure
                key={item}
                className={`reveal-stagger overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-4 ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}
                style={{ "--reveal-delay": `${160 + index * 80}ms` }}
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

        <section className="section-wrap reveal-on-scroll py-24">
          <div className="reveal-stagger rounded-3xl border border-cyan-300/20 bg-cyan-300/8 px-6 py-14 text-center sm:px-10">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Building the Future of Surfboard Rental
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

        <section id="register" className="section-wrap reveal-on-scroll pb-24">
          <div className="reveal-stagger mx-auto max-w-2xl rounded-3xl border border-white/12 bg-black/55 p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Register Interest</h2>
            <p className="mt-4 text-slate-300">
              Share your details to receive deployment updates and early access information.
            </p>
            <form className="mt-8 grid gap-4" onSubmit={handleInterestSubmit}>
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
            <p className="mt-5 text-sm text-slate-400">
              Prefer email?{" "}
              <a href={`mailto:${contactEmail}`} className="text-cyan-300 hover:text-cyan-200">
                {contactEmail}
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
