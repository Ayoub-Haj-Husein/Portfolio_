export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          Experience
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Professional Experience
        </h2>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Eqra Tech
              </h3>

              <p className="mt-1 text-gray-300">
                Back-End Laravel PHP Developer — Training
              </p>
            </div>

            <p className="text-sm text-gray-500">
              Jul 2024 – Sep 2024
            </p>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-gray-400">
            Completed a three-month training program focused on Laravel and PHP
            development. During the training, I contributed to a Maritime
            Services Management System for the Jordan Maritime Commission,
            working on the front end with React.js and the back end with Laravel
            and PHP.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Laravel", "PHP"].map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <a
            href="/certificates/eqra-tech-certificate.png"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg border border-white/20 px-5 py-2 font-medium transition hover:bg-white/10"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}