import Image from "next/image";
import Link from "next/link";

export default function HomeLandscape() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y hidden md:inline-block">

      {/* Auto Z Section */}
      <section id="home" className="h-screen flex px-16 snap-center">
        {/* Left Side */}
        <div className="h-screen flex flex-col flex-grow">
          <div className="h-1/6" />
          <div className="grid grid-rows-3 items-end flex-grow">
            <h1 className="font-black text-7xl row-start-2">Auto Z</h1>
            <Link
              className="pb-4 row-start-3 text-emerald-600 text-xl font-bold flex gap-3 hover:underline"
              href="/recruitments"
            >
              Recruitments{" "}
              <Image src="/icons/arrow.svg" width={32} height={16} alt="arrow icon" />
            </Link>
          </div>
          <div className="h-1/6" />
        </div>

        {/* Right Side */}
        <div className="h-screen w-3/5 flex flex-col items-center">
          <div className="h-1/6" />
          <Image
            src="/pictures/cbe9457a-8cc9-488f-9a27-3dfe6e32c98a.jpg"
            height={600}
            width={600}
            alt="Autonomous vehicle"
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="px-8 mt-6">
            <h2 className="font-bold text-2xl pb-4 text-emerald-600">Who are We?</h2>
            <p className="font-medium text-slate-600 text-justify leading-relaxed">
              An autonomous ground vehicle developed by our OG group — the spark that
              started our journey. Originally a Maruti Ecco, it has now been converted
              into a fully autonomous electric vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="h-screen flex px-16 snap-center">
        <div className="h-screen flex flex-col flex-grow">
          <div className="h-1/6" />
          <div className="grid grid-rows-3 items-end flex-grow">
            <h1 className="font-black text-7xl row-start-2">The Team</h1>
            <Link
              className="pb-4 row-start-3 text-emerald-600 text-xl font-bold flex gap-3"
              href="/members"
            >
              View Members
              <Image src="/icons/arrow.svg" width={32} height={16} alt="arrow icon" />
            </Link>
          </div>
          <div className="h-1/6" />
        </div>
        <div className="h-screen w-3/5 flex flex-col pt-20 gap-4">
          <Image
            src="/pictures/android_medium_page1.jpg"
            height={720}
            width={1080}
            alt="Team"
          />
          <span className="font-medium text-slate-600 text-justify">
            We are a team of passionate innovators from VIT, Vellore, committed to developing advanced autonomous robots. With expertise spanning engineering, computer science, and design, we thrive on interdisciplinary collaboration, believing that the fusion of diverse skills is the key to groundbreaking innovation by solutions.
          </span>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="h-screen flex px-16 snap-center">
        <div className="h-screen flex flex-col flex-grow">
          <div className="h-1/6" />
          <div className="grid grid-rows-3 items-end flex-grow">
            <h1 className="font-black text-7xl row-start-2">Sponsors</h1>
            <Link
              className="pb-4 row-start-3 text-emerald-600 text-xl font-bold flex gap-3"
              href="/sponsors"
            >
              Our Sponsors
              <Image src="/icons/arrow.svg" width={32} height={16} alt="arrow icon" />
            </Link>
          </div>
          <div className="h-1/6" />
        </div>
        <div className="h-screen w-3/5 flex flex-col">
          <div className="h-1/6" />
          <Image
            src="/pictures/sponsors.jpg"
            height={384}
            width={998}
            alt="Sponsors"
          />
          <span className="font-medium text-slate-600 text-justify w-3/4 mt-6">
            Sponsors enable us to continue our experiments knowing we won't be putting ourselves out of business.
          </span>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen snap-center flex flex-col px-6 py-10 justify-center items-center text-center space-y-4"
      >
        <h1 className="font-black text-5xl mb-6">Contact</h1>

        <a
          href="mailto:teamautoz2020@gmail.com"
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-md"
        >
          Email Us
        </a>

        <div className="flex space-x-6 mt-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/team_autoz?igsh=Z24wdDN2b2FmaWdj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 hover:text-emerald-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.25 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/teamautoz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-emerald-600"
          >
            
          </a>
        </div>
      </section>
    </div>
  );
}
