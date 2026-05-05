"use client";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* 🎬 HERO SECTION */}
      <section className="h-screen flex items-center justify-center relative text-center">
        <div className="absolute inset-0">
          <img
            src="/nataraja.jpg"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            Sree Gurukrupa Sangeetha
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mt-2">
            Nruthya Kalanikethan
          </h2>

          <p className="mt-6 italic text-lg">
            Where Devotion Transforms into Dance
          </p>

          <a
            href="#guru"
            className="inline-block mt-8 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
          >
            Begin the Journey
          </a>
        </div>
      </section>

      {/* 👨‍🏫 GURU SECTION */}
      <section id="guru" className="p-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/sir.jpg"
          className="rounded-xl shadow-lg w-full"
        />

        <div>
          <h2 className="text-4xl font-bold text-yellow-500">
            Dr. Sri Patnam Shiva Prasad
          </h2>

          <p className="mt-4 italic">
            A Legacy of Discipline, Devotion, and Dance
          </p>

          <p className="mt-4">
            With over 37 years of dedication to classical arts, Sri Patnam Shiva
            Prasad has trained more than 1800 students and preserved the rich
            tradition of Kuchipudi.
          </p>

          <ul className="mt-4 space-y-2">
            <li>🎓 Master’s in Kuchipudi (1989)</li>
            <li>🎓 Master’s in Sanskrit (1987)</li>
            <li>🎓 Diploma in Bharatanatyam (1991)</li>
          </ul>

          {/* Add your number here manually */}
          <p className="mt-6 text-yellow-400">
            📞 Admissions Open — Contact Now +91 9849208840
          </p>
        </div>
      </section>

      {/* 🏆 ACHIEVEMENTS */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
          A Journey of Excellence
        </h2>

        <div className="space-y-10">

          <div>
            <h3 className="text-xl font-semibold">🎓 Academic Foundation</h3>
            <p>1987 – Sanskrit | 1989 – Kuchipudi | 1991 – Bharatanatyam</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🏫 Teaching Legacy</h3>
            <p>37+ years of teaching | 1800+ students trained</p>
          </div>

          <div>
            <img src="/students.jpg" className="rounded-lg mb-4" />
            <p>
              Students trained under Sri Patnam Shivaprasad have consistently
              secured First Prize at National and State-level competitions.
            </p>
          </div>

          <div>
            <img src="/award.jpg" className="rounded-lg mb-4" />
            <p>
              Honoured for contributions to classical dance and cultural
              education.
            </p>
          </div>

          <div>
            <img src="/certificate.jpg" className="rounded-lg mb-4" />
            <p>
              Recognized for excellence in preserving traditional dance forms.
            </p>
          </div>
        </div>
      </section>

      {/* 🌸 KUCHIPUDI SECTION */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">
          About Kuchipudi
        </h2>

        <p className="max-w-3xl mx-auto">
          Kuchipudi is one of the most graceful classical dance forms of India,
          originating from Andhra Pradesh. It blends rhythmic footwork,
          expressive storytelling, and devotion, making it a spiritual and
          artistic experience.
        </p>
      </section>

      {/* 📸 GALLERY */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/gallery1.jpg" className="rounded-lg" />
          <img src="/gallery2.jpg" className="rounded-lg" />
          <img src="/gallery3.jpg" className="rounded-lg" />
          <img src="/gallery4.jpg" className="rounded-lg" />
        </div>
      </section>

      {/* 📞 FOOTER */}
      <footer className="text-center p-6 border-t border-gray-700">
        <p>© Sree Gurukrupa Sangeetha Nruthya Kalanikethan</p>
      </footer>

    </main>
  );
}