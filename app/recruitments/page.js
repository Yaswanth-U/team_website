"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Recruitments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    // enable smooth scrolling
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  const scrollToRegister = (e) => {
    e.preventDefault();
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#register";
    }
  };

  return (
    <div className="w-screen min-h-screen overflow-y-scroll bg-gray-50">
      {/* Why Join Us Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-white px-8">
        <h2 className="text-4xl font-bold text-emerald-600">Why Join Us?</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We are a team of passionate engineers, developers, and innovators working on cutting-edge autonomous vehicle technology.
        </p>
      </section>

      {/* Domains Section (moved above form) */}
      <section id="domains" className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-emerald-600 mb-8">
          <a
            href="#register"
            onClick={scrollToRegister}
            className="hover:underline"
          >
            Available Domains &amp; Tasks
          </a>
        </h2>

        <div className="max-w-4xl mx-auto text-left space-y-8">
          {[
            {
              title: "Computer Science / Autonomy",
              description:
                "Focus on Path Planning, Mapping, Localization, and Perception. Work with open-source libraries and develop an Autonomous Stack—from simple controllers to advanced mapping algorithms.",
            },
            {
              title: "Electrical & Electronics",
              description:
                "Focus on integrating sensors, embedded system design, and control systems. Involves circuit design, PCB development, and digital signal processing.",
            },
            {
              title: "Mechanical",
              description:
                "Involves Research, Design, and Fabrication of mechanical systems. Helpful skills include 3D design, kinematics, and mechatronics but curiosity and innovation matter most.",
            },
            {
              title: "Graphic Design",
              description:
                "Create visual assets such as logos, posters, and other graphics that communicate our mission across social media and marketing channels.",
            },
            {
              title: "Video Editing",
              description:
                "Transform raw footage into engaging video content—reels, documentaries, and more—for platforms like Instagram and YouTube using Premiere Pro, Final Cut Pro, etc.",
            },
            {
              title: "Social Media & Marketing",
              description:
                "Manage the team’s online presence. Create content, research trends, and engage strategically across platforms like Instagram. Strong writing and storytelling skills help!",
            },
          ].map((domain, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-800">
                <a
                  href="https://github.com/ro-jc/AutoZRecruitments_25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  {domain.title}
                </a>
              </h3>
              <p className="text-gray-700 mt-2">{domain.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Register Your Interest Section */}
      <section id="register" className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">
          Register Your Interest
        </h2>
        <p className="text-gray-600 mb-8">
          Fill in your details and select your preferred domains through the Google Form below.
        </p>

        {/* Google Form Embed */}
        <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSckXERmLnMD7tRm2htKRXMC_1NfRYOtVewQJU0YocdG2eZR3Q/viewform?embedded=true"
            width="100%"
            height="2300"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-md"
            title="Register Your Interest Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-gray-900 text-white">
        <p>© 2025 Auto Z. All rights reserved.</p>
        <a
          href="mailto:teamautoz2020@gmail.com"
          className="text-emerald-400 block mt-2"
        >
          Email Us
        </a>
        <Link href="/" className="text-emerald-400 block mt-2">
          Go Back
        </Link>
      </footer>
    </div>
  );
}
