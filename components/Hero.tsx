export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-lg text-gray-400">
          Hello, I&apos;m Ayoub
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Front-End Developer
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          I build responsive and modern web applications using React,
          TypeScript, Next.js, and Tailwind CSS.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="text-center rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            download
            className="rounded-lg border border-white/20 px-6 py-3 text-center font-medium transition hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}