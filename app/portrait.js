import Image from "next/image";
import Link from "next/link";

export default function HomePortrait() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y md:hidden">

      <section id="home" className="h-screen flex flex-col px-6 snap-center justify-center">
        <h1 className="font-black text-6xl mb-6 text-center">Auto Z</h1>
       
        <div className="flex flex-col items-center gap-6">
          <span className="font-medium text-slate-600 text-justify max-w-md">
            <h2 className="font-bold text-xl pb-4 text-emerald-600">Who are We?</h2>
            An autonomous ground vehicle developed by our OG group. The spark that started our journey.
            Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
          </span>
          <Image
            src="/pictures/cbe9457a-8cc9-488f-9a27-3dfe6e32c98a.jpg"
            height={500}
            width={450}
            alt="Autonomous vehicle"
            className="rounded-md"
          />
           <Link
          href="/recruitments"
          className="text-emerald-600 text-xl font-bold flex justify-center items-center gap-3 mb-6"
        >
          Recruitments
          <Image src="/icons/arrow.svg" width={24} height={12} alt="arrow icon" />
        </Link>
        </div>
      </section>

      <section id="team" className="h-screen flex flex-col px-6 snap-center justify-center items-center space-y-6 text-center">
        <h1 className="font-black text-5xl">The Team</h1>
        
        <Image
          src="/pictures/android_medium_page1.jpg"
          height={240}
          width={360}
          alt="Team"
          className="rounded-md"
        />
        <p className="font-medium text-slate-600 max-w-md">
          We are a team of passionate innovators from VIT, Vellore, committed to developing advanced autonomous robots. With expertise spanning engineering, computer science, and design, we thrive on interdisciplinary collaboration, believing that the fusion of diverse skills is the key to groundbreaking innovation by solutions.
        </p>
        <Link
          href="/members"
          className="text-emerald-600 text-xl font-bold flex justify-center items-center gap-3"
        >
          View Members
          <Image src="/icons/arrow.svg" width={24} height={12} alt="arrow icon" />
        </Link>
      </section>

      <section id="sponsors" className="h-screen flex flex-col px-6 snap-center justify-center items-center space-y-6 text-center">
        <h1 className="font-black text-5xl">Sponsors</h1>
        
        <Image
          src="/pictures/sponsors.jpg"
          height={160}
          width={420}
          alt="Sponsors"
          className="rounded-md"
        />
        <p className="font-medium text-slate-600 max-w-md">
          Sponsors enable us to continue our experiments knowing we won't be putting ourselves out of business.
        </p>
        <Link
          href="/sponsors"
          className="text-emerald-600 text-xl font-bold flex justify-center items-center gap-3"
        >
          Our Sponsors
          <Image src="/icons/arrow.svg" width={24} height={12} alt="arrow icon" />
        </Link>
      </section>

      {/* Contact Section Added Below */}
      <section
        id="contact"
        className="h-screen snap-center flex flex-col px-6 py-10 justify-center items-center text-center space-y-4"
      >
        <h1 className="font-black text-4xl mb-6">Contact</h1>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
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
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
>
  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.69V9h3.43v11.45zM5.4 7.45a1.98 1.98 0 110-3.96 1.98 1.98 0 010 3.96zM20.45 20.45h-3.43v-5.5c0-1.31-.03-2.99-1.83-2.99-1.84 0-2.12 1.43-2.12 2.9v5.59H9.64V9h3.3v1.56h.05c.46-.87 1.6-1.78 3.29-1.78 3.52 0 4.17 2.31 4.17 5.31v6.36z"/>
</svg>

            
          </a>
        </div>
      </section>

    </div>
  );
}

