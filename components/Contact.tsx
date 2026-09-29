export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s work together
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I&apos;m currently open to Front-End Developer opportunities in the
          UAE. Feel free to contact me by email or connect with me on LinkedIn
          and GitHub.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:ayoubabdulrahmanhusein@gmail.com"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/ayoub-haj-hussien-659b54254/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Ayoub-Haj-Husein"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}