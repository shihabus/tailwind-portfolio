import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Index() {
  const experienceRef = React.useRef(null);
  const skillsRef = React.useRef(null);

  React.useEffect(() => {
    let observer;
    if (experienceRef.current && skillsRef.current) {
      const options = {
        threshold: 0.2,
      };
      observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          const navElement = document.querySelector(
            `a[href="/#${entry.target.id}"]`
          );
          if (
            entry.isIntersecting &&
            !navElement.classList.contains("text-gray-100")
          ) {
            navElement.classList.add("text-gray-100");
          } else if (
            !entry.isIntersecting &&
            navElement.classList.contains("text-gray-100")
          ) {
            navElement.classList.remove("text-gray-100");
          }
        });
      }, options);
      observer.observe(experienceRef.current);
      observer.observe(skillsRef.current);
    }
    return () => observer?.disconnect();
  }, [experienceRef, skillsRef]);

  return (
    <>
      <Head>
        <title>Shihab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-screen font-sans bg-night">
        <div className="container px-6 py-4 mx-auto text-white md:py-8 md:px-14 lg:py-0 lg:flex">
          {/* ---------left--------- */}
          <div className="lg:w-1/3 lg:py-20 lg:h-screen lg:flex lg:flex-col lg:justify-between">
            {/* ------- hero -------- */}
            <div>
              <h1 className="mb-6 text-6xl font-semibold leading-tight">
                Hello, I'm Shihab
              </h1>

              {/* ------- para -------- */}
              <p className="mb-6 leading-loose text-dawn">
                I am frontend developer. Building <span role="img"> 🌈 </span>{" "}
                UI using modern frontend tools, for nearly 4 years. Currently
                working at Dunzo. Extensive experience with React and React
                Native. Stack and tech agnostic by a true JS enthusiast{" "}
                <span role="img" className="animate-pulse">
                  💓
                </span>
                .
              </p>
              {/* ------- para -------- */}
            </div>

            {/* ------- hero -------- */}

            {/* ----- tags ------- */}
            <div className="hidden text-gray-500 lg:block">
              <Link href={{ pathname: "/", hash: "experience" }}>
                <a className="inline-flex items-center w-full">
                  1.
                  <div className="w-1/4 h-0.5 bg-gray-500 mx-3"></div>
                  Experience
                </a>
              </Link>

              <Link href={{ pathname: "/", hash: "skills" }}>
                <a className="inline-flex items-center w-full">
                  2.
                  <div className="w-1/4 h-0.5 bg-gray-500 mx-3"></div>
                  Skills
                </a>
              </Link>
            </div>
            {/* ----- tags ------- */}

            {/* ------------- handlers ------------- */}
            <div className="flex items-center mb-14 lg:block">
              {/* ------- image ------- */}
              <img
                src="/logo.jpg"
                className="w-10 h-10 rounded-full lg:w-16 lg:h-16 lg:mb-6"
                alt="profile image"
              />
              {/* ------- image ------- */}

              {/* ----- links ------ */}
              <div className="flex items-center ml-12 space-x-6 lg:ml-0 lg:flex-col lg:items-start lg:space-y-4 lg:space-x-0">
                {/* ----------- GitHub ---------- */}
                <a
                  className="flex items-baseline md:space-x-3 hover:text-gray-500"
                  href="https://github.com/shihabus"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-6 h-6 fill-current md:w-4 md:h-4"
                  >
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                  <span className="hidden md:block">GitHub</span>
                  <div className="hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="flex-none w-3 h-3 stroke-current"
                    >
                      <title>External link icon</title>
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                </a>
                {/* ----------- GitHub ---------- */}

                {/* -------- linkedIn ------------ */}
                <a
                  className="flex items-baseline md:space-x-3 hover:text-gray-500"
                  href="https://www.linkedin.com/in/shihabus/"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 310 310"
                    aria-hidden="true"
                    className="w-6 h-6 fill-current md:w-4 md:h-4"
                  >
                    <title>LinkedIn</title>
                    <path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" />
                  </svg>
                  <span className="hidden md:block">LinkedIn</span>
                  <div className="hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="flex-none w-3 h-3 stroke-current"
                    >
                      <title>External link icon</title>
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                </a>
                {/* -------- linkedIn ------------ */}

                {/* -------- devto -------- */}
                <a
                  className="flex items-center tbaseline md:space-x-3 hover:text-gray-500"
                  href="https://dev.to/codermonkey/"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="fill-current w-7 h-7 md:w-5 md:h-5"
                  >
                    <title>Dev.to icon</title>
                    <path d="M0 49.6V14.4c0-.5.1-1 .3-1.4.2-.5.5-.9.8-1.2.4-.4.8-.6 1.2-.8.5-.2.9-.3 1.4-.3h56.5c.5 0 1 .1 1.4.3.5.2.9.5 1.2.8.4.4.6.8.8 1.2.2.5.3.9.3 1.4v35.1c0 .5-.1 1-.3 1.4-.2.5-.5.9-.8 1.2-.4.4-.8.6-1.2.8-.5.2-.9.3-1.4.3H3.8c-.5 0-1-.1-1.4-.3-.5-.2-.9-.5-1.2-.8-.4-.4-.6-.8-.8-1.2-.3-.4-.4-.8-.4-1.3z" />
                    <path
                      d="M39.8 27.2c.7 2.5 1.7 6.5 2.4 9 1 3.9 1.3 4.7 2.2 5.6.6.6 1.3 1 1.8 1 1 0 2.2-1 2.7-2.1.3-.8 4.8-17.4 4.8-17.8 0-.1-.9-.2-1.9-.1l-2 .1-1.8 6.7c-1.1 4.3-1.8 6.5-1.9 6.1-.3-.7-3.4-12.7-3.4-12.8s-.9-.1-2-.1h-2zM27 23.6c-.6.8-.7 1.2-.7 9.3v8.4l.8.8c.7.8.9.8 5 .8h4.2v-3.4l-3.2-.1-3.1-.2v-4.7l2-.1 1.9-.1v-3.4h-4.1v-4.7h6.6v-3.5H32c-4.3 0-4.4 0-5 .9zm-7.2 3.2c.7.6.8.7.8 5.8 0 4.9 0 5.2-.7 5.9-.5.5-1.1.7-2.2.7h-1.5l-.1-6.5-.1-6.5h1.5c1.1 0 1.8.2 2.3.6zm-7.3 6v10H16c3.9 0 5.6-.5 6.7-2 1.2-1.5 1.4-2.8 1.3-8.8-.1-5.3-.2-5.7-.8-6.8-1.2-1.9-2.5-2.4-6.9-2.4h-3.8z"
                      fill="#0a0a0a"
                    />
                  </svg>
                  <span className="hidden md:block">Dev.to</span>
                  <div className="hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="flex-none w-3 h-3 stroke-current"
                    >
                      <title>External link icon</title>
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                </a>
                {/* -------- devto -------- */}
              </div>
              {/* ----- links ------ */}
            </div>
            {/* --------- handlers----------- */}
          </div>
          {/* --------- left --------- */}

          {/* ====================================================== */}

          {/* ---------- right --------- */}
          <div className="flex-1 lg:py-20 lg:h-screen lg:overflow-y-scroll">
            {/* ------ experience ------- */}
            <h1 className="lg:hidden">Experience</h1>
            <div id="experience" ref={experienceRef}></div>
            <div className="flex-col items-center mb-20 space-y-8 lg:flex lg:mb-24">
              {/* ----- dunzo ---- */}
              <div className="p-6 my-3 text-gray-200 transition duration-300 transform rounded-lg bg-dusk lg:w-2/3 lg:hover:scale-110">
                <p className="text-xl font-medium">
                  <span>SDE II</span> @{" "}
                  <a
                    href="https://www.dunzo.com/"
                    target="_blank"
                    className="text-green-400 underline"
                  >
                    Dunzo
                  </a>
                </p>
                <p className="text-sm text-gray-400">2020-Present</p>
                <div className="mt-4 space-y-2 tracking-wide text-justify lg">
                  <p>
                    <span role="img" alt="voltage emoji">
                      ⚡
                    </span>{" "}
                    Dunzo is the new name for India's hyper local delivery
                    platform. We help people to get things dun!{" "}
                    <span role="img" alt="thumbs up emoji">
                      👍
                    </span>
                    .
                  </p>
                  <p>
                    With a growing network of delivery partners, currently we
                    operate in 7 major Indian cities. And monthly we see +1.5Mn
                    transactions in our platform.
                  </p>
                  <p>
                    I mostly work on Dunzo web, the design system and Google
                    Spot apps. Being India's first Google backed startup, I was
                    able to work on a lot of{" "}
                    <span role="img" alt="smile emoji">
                      😎
                    </span>{" "}
                    Google stuff.
                  </p>
                </div>
              </div>
              {/* ----- dunzo ---- */}

              {/* ----- bounce ---- */}
              <section className="p-6 my-3 text-gray-200 transition duration-300 transform rounded-lg bg-dusk lg:w-2/3 lg:hover:scale-110">
                <p className="text-xl font-medium">
                  <span>Frontend developer</span> @{" "}
                  <a
                    href="https://bounceshare.com/"
                    target="_blank"
                    className="text-red-400 underline"
                  >
                    Bounce
                  </a>
                </p>
                <p className="text-sm text-gray-400">2019-2020</p>
                <div className="mt-4 space-y-2 tracking-wide text-justify lg">
                  <p>
                    Bounce{" "}
                    <span role="img" alt="scooter emoji">
                      🛵
                    </span>{" "}
                    is a Bangalore-based startup that operates more than 50K
                    electric and gasoline dock-less bikes and scooters in nearly
                    three dozen cities in India.
                  </p>
                  <p>
                    At Bounce, we were trying to build a task engine to monitor
                    and manage cluster level operations. I was also working on
                    internal dashboards and monitoring tools for Operations
                    team.
                  </p>
                </div>
              </section>
              {/* ----- bounce ---- */}

              {/* ----- quest ---- */}
              <section className="p-6 my-3 text-gray-200 transition duration-300 transform rounded-lg bg-dusk lg:w-2/3 lg:hover:scale-110">
                <p className="text-xl font-medium">
                  <span>Software engineer</span> @{" "}
                  <a
                    href="https://www.quest-global.com/"
                    target="_blank"
                    className="text-blue-400 underline"
                  >
                    QuEST Global
                  </a>
                </p>
                <p className="text-sm text-gray-400">2017-2019</p>
                <div className="mt-4 space-y-2 tracking-wide text-justify lg">
                  <p>
                    QuEST Global{" "}
                    <span role="img" alt="scooter emoji">
                      🌐
                    </span>{" "}
                    is a pioneer in engineering services sector. We served many
                    engineering verticals, from Defence to Aerospace, from
                    Mechanical to Electrical. QuEST has a vivid customer base,
                    which includes bigger names in the market like GE, Pratt &
                    Whitney, Airbus and Bombardier, to name a few.
                  </p>
                  <p>
                    The plethora of projects helped me learn and explore a lot.
                  </p>
                </div>
              </section>
              {/* ----- quest ---- */}
            </div>
            {/* ------ experience ------- */}
            {/* ------ skills ------- */}
            <h1 className="lg:hidden">Skills</h1>
            <div id="skills" ref={skillsRef}></div>
            <div className="flex flex-wrap items-baseline justify-center mx-auto mb-20 space-y-6 lg:space-y-8 md:justify-start lg:mt-20 lg:w-3/4 lg:mb-24">
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>

                  {/*  */}
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">
                  JavaScript
                </p>
              </div>
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">Next.js</p>
              </div>
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">
                  React.js
                </p>
              </div>
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>

                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">
                  Tailwind css
                </p>
              </div>
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">
                  Storybook
                </p>
              </div>
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">Redux</p>
              </div>
              <div className="py-2 md:w-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                <p className="mt-2 text-sm text-gray-400 lg:text-lg">Webpack</p>
              </div>
            </div>
            {/* ------ skills ------- */}

            {/* ------ contact me ------- */}
            <h1 className="lg:hidden">Contact me</h1>
            <div className="pb-14">
              <p className="text-lg leading-loose text-dawn">
                If you find my work interesting feel free to ping. Let's us stay
                connected on LinedIn. I don't mind a few{" "}
                <span role="img">⭐️ </span> on GitHub. I am some articles on
                Dev.to, I would love to hear your comments on them.
              </p>

              <p className="text-xs text-center mt-9">
                Build using{" "}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="text-gray-400 underline"
                >
                  Tailwind css
                </a>{" "}
                and{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  className="text-gray-400 underline"
                >
                  Next.js
                </a>
              </p>
            </div>
            {/* ------ contact me ------- */}
          </div>
          {/* ---------- right --------- */}
        </div>
      </div>
    </>
  );
}
