"use client";

import Link from "next/link";

export default function Biodata() {
  return (
    <main className="bg-black text-white font-sans">

      {/* BACK LINK */}
      <div className="px-8 pt-6">
        <Link href="/" className="text-yellow-500 hover:underline text-sm tracking-widest uppercase">
          ← Back to Home
        </Link>
      </div>

      {/* HEADER */}
      <section className="px-8 pt-10 pb-6 border-b border-yellow-500/30">
        <p className="text-yellow-500 tracking-[0.3em] uppercase text-xs mb-3">Bio Data</p>
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 leading-tight">
          Dr. Patnam<br />Siva Prasad
        </h1>
        <p className="mt-3 italic text-gray-400 text-lg">Natya Guru · Kuchipudi Exponent · Choreographer</p>
      </section>

      {/* PERSONAL INFO + PHOTO */}
      <section className="px-8 py-10 grid md:grid-cols-3 gap-10 border-b border-yellow-500/20">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-4">Personal Details</h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div>
              <p className="text-gray-500 uppercase text-xs tracking-wider"> Father's Name</p>
              <p className="text-white mt-1">Late Sri P Chandramouleeswara Rao</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase text-xs tracking-wider">Date of Birth</p>
              <p className="text-white mt-1">02 December 1967</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase text-xs tracking-wider">Age</p>
              <p className="text-white mt-1">58 Years</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase text-xs tracking-wider">Contact</p>
              <p className="text-yellow-400 mt-1">+91 9849208840</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/sir.jpg"
            alt="Dr. Patnam Siva Prasad"
            className="rounded-xl w-full object-cover shadow-lg border border-yellow-500/20"
          />
        </div>
      </section>

      {/* EDUCATIONAL QUALIFICATIONS */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Educational Qualifications</h2>
        <ul className="space-y-3">
          {[
            "B.A., M.A. (Sanskrit)",
            "Masters Training in Kuchipudi",
            "Master in Performing Arts",
            "Diploma in Bharatha Natyam",
            "Honorary Doctorate in Religion and Kuchipudi Dance — Berkeley University, California",
          ].map((q, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">◆</span>
              <span className="text-gray-200">{q}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* GURUS */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Gurus</h2>
        <ul className="space-y-3">
          {[
            "Smt. G. Sandhya Murthy Garu",
            "Subramanyam Garu",
            "Padmabhushan Dr. Sri. Vempati Chinasatyam Garu",
          ].map((g, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">◆</span>
              <span className="text-gray-200">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Experience</h2>
        <ul className="space-y-4">
          {[
            "Founded Sri Gurukrupa Sangeetha Nrityakala Nikethan in 1989 at Anantapur.",
            "Over 30 years of immersion in Natya Kalaradhana, training more than 16,000 students who have received rich accolades wherever they performed.",
            "Nearly 100 performances by students of this dance school in the last two years alone.",
          ].map((e, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">◆</span>
              <span className="text-gray-200">{e}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* STUDENT PRIZES */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Performances & Prizes as Student</h2>
        <ul className="space-y-3">
          {[
            "AP Balala Academy, Hyderabad (1982–83) — 1st Prize in both Bharatha Natyam & Kuchipudi (State Level).",
            "State Level Competitions, Kadapa (1982) — 1st Prize in Kuchipudi, 2nd Prize in Bharatha Natyam, Rolling Trophy in Folk Dance.",
            "All India Music & Dance Competitions, Zymkhana Grounds, Bangalore — 1st Prize in Kuchipudi, 3rd Prize in Bharatha Natyam.",
            "All India Dance Festival, Eluru (1984).",
            "NEFZA, Nellore (1985) — 1st Prize in Kuchipudi & Cinema Dance.",
            "Geethopadesam Dance Ballet (choreographed by Smt. G. Sandhya Murthy Garu) — received rave reviews for portraying the character Arjuna.",
            "Performed at TTD Brahmotsavams, Hampi Festival, and Mysore Festival (1986–87).",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">◆</span>
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* AWARDS */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Awards Received</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { year: "1994", award: "Utthama Natyacharya", venue: "Nehru Festival, Public Gardens, Hyderabad" },
            { year: "1997", award: "Rayalaseema Rathnam", venue: "SV Subba Reddy Foundation, Kurnool" },
            { year: "2004", award: "Rajahamsa Award", venue: "Kalanilayam, Chilakaluripet" },
            { year: "2005", award: "Deva Parijatha Award", venue: "Kalanilayam, Chilakaluripet" },
            { year: "2006", award: "Rajaranjani Award", venue: "Radhamadhava Rasaranjani, Guntur" },
            { year: "2007", award: "Natya Vignan Award", venue: "Kalanilayam, Chilakaluripet" },
            { year: "2008", award: "Abhinava Nrutyakala Samrat", venue: "Ananthakalavahini, Anantapur" },
            { year: "2010", award: "Chittor Nagaiah Award (Utthama Guru)", venue: "Chennai" },
            { year: "2013", award: "Abhinava Siddendrayogi Award", venue: "Somanatha Natya Kalamandali, Vijayawada" },
            { year: "2014", award: "Nruthya Shrestha Award", venue: "All India Artist Association, Bhilai, Chhattisgarh" },
            { year: "2014", award: "Nruthya Vishista Award", venue: "Vijayawada Cultural Academy" },
            { year: "2015", award: "Nruthya Prashasthi Award", venue: "Kannada Cultural Department, Bellary" },
            { year: "2016", award: "Nruthya Ratna Award", venue: "All The Best Arts Academy, Hyderabad" },
            { year: "2016", award: "Kuchipudi Excellence Award", venue: "Shikaram Arts, New Delhi" },
            { year: "2016", award: "Ugadi Puraskaram", venue: "Government of Andhra Pradesh (by CM Sri Chandrababu Naidu)" },
            { year: "2016", award: "NTR Excellence Award", venue: "Shikaram Arts, Hyderabad" },
            { year: "2016", award: "Seva Tapaswi Award", venue: "Abhinaya Nruthya Kalabharathi, Eluru" },
            { year: "2018", award: "Natya Ranjitha Award", venue: "Rayalaseema Rangasthali, Tirupathi" },
            { year: "2018", award: "Nryuthya Praveena Award", venue: "Sai Veda Cultural Academy, Tirupathi" },
            { year: "2018", award: "Rayalaseema Ratna Award", venue: "Vrushunka Dance Academy, Hyderabad" },
            { year: "2018", award: "Seva Thapasvi Koraada Narshima Rao Memorial Award", venue: "Abhinaya Nruthya Kala Bharathi, Eluru" },
            { year: "2018", award: "Nryuthya Sheela Samman Award", venue: "Nateswar Kalautsav, Kolkata" },
            { year: "2018", award: "Nryuthya Bhushan Award", venue: "Tara Arts Academy, Vijayawada (by Smt Urvasi Sarada)" },
            { year: "2018", award: "Natya Sikhamani Award", venue: "Sree Rama Seva Sangeetha Kala Samithi, Anaparthi" },
            { year: "2025", award: "Uttama Natyacharya Award", venue: "Shikaram Association, Hyderabad" },
            { year: "2026", award: "Bhargava Puraskaram", venue: "AP Brahmin Association" },
          ].map((a, i) => (
            <div key={i} className="border border-yellow-500/20 rounded-lg p-4 hover:border-yellow-500/60 transition">
              <p className="text-yellow-500 text-xs font-bold tracking-widest">{a.year}</p>
              <p className="text-white font-semibold mt-1">{a.award}</p>
              <p className="text-gray-400 text-sm mt-0.5">{a.venue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BALLETS COMPOSED */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Ballets Composed</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Mohini Bhasmasura",
            "Poojaphalam",
            "Sri Krishna Parijatham",
            "Brindavanam",
            "Sri Krishnaleelalu",
            "Lavakusa",
            "Kamsavadha",
            "Varudhini Pravarakya",
            "Sree Thrayam",
          ].map((b, i) => (
            <div key={i} className="border border-yellow-500/20 rounded-lg px-4 py-3 text-center text-sm text-gray-200 hover:border-yellow-500/60 transition">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* STUDENTS ACHIEVEMENTS */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Students' Achievements</h2>
        <ul className="space-y-3">
          {[
            "For 14+ years, students have been winning 1st and 2nd prizes in Kuchipudi & Bharatha Natyam at All India Music & Dance Competitions by Navya Nataka Samithi, Hyderabad.",
            "Several students are recipients of HRD, CCRT & National Scholarships.",
            "Many students have pursued M.A., M.Phil., and Ph.D. in Dance.",
            "Performed across India — Kadapa, Chittoor, Nellore, Tirumala, Tirupathi, Chennai, Bangalore, Pune, Delhi, Gorakhpur, Warangal, Vijayawada, Kanipakam, Hampi, Cochin, and Mumbai.",
            "Students Mounika & Moukthika toured 14 countries as part of the Children's Festival Programme, Delhi.",
            "Kum. Bhagavathula Nagalakshmi performed at TANA, USA (1995, 1998) and holds a Guinness World Record certificate for her stellar performance.",
            "36 students participated in Mahabrinda Natyam — a Guinness Record event at Gachibowli Stadium, Hyderabad (2010).",
            "Students have taught Kuchipudi in the US, UK, and other countries worldwide.",
          ].map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">◆</span>
              <span className="text-gray-200">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* LETTERS OF APPRECIATION */}
      <section className="px-8 py-10 border-b border-yellow-500/20">
        <h2 className="text-yellow-500 tracking-widest uppercase text-xs mb-6">Letters of Appreciation</h2>
        <ul className="space-y-3">
          {[
            "Padmabhushan Dr. Sri. Vempati China Satyam Garu — Guru par excellence.",
            "Bharatha Natyam exponents Dhanunjayan & Shantha Dhanunjayan.",
            "Senior Kuchipudi Guru Sri. Vedantam Radhe Syam Garu (Kendra Sahitya Nataka Academy Awardee).",
            "Sri. Pasumarthi Seshu Babu — Senior Kuchipudi Guru.",
          ].map((l, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">◆</span>
              <span className="text-gray-200">{l}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT CTA */}
      <section className="px-8 py-12 text-center">
        <p className="text-gray-400 mb-2">Admissions Open</p>
        <p className="text-yellow-400 text-2xl font-bold">📞 +91 9849208840</p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 border-t border-gray-700 text-sm text-gray-500">
        <p>© Sree Gurukrupa Sangeetha Nruthya Kalanikethan</p>
      </footer>

    </main>
  );
}