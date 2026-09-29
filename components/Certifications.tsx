const certificates = [
  {
    title: "Front-End Web Development",
    issuer: "Hsoub Academy",
    year: "2021",
    link: "/certificates/hsoub-front-end-certificate.png",
  },
  {
    title: "Back-End Laravel PHP Developer Training",
    issuer: "Eqra Tech",
    year: "2024",
    link: "/certificates/eqra-tech-certificate.png",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          Certifications
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Courses & Certifications
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-bold">
                {certificate.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {certificate.issuer}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {certificate.year}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-lg border border-white/20 px-4 py-2 font-medium transition hover:bg-white/10"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}