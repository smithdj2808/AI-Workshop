export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>Dani</h1>
        <p className="tagline">
          A Master of Science in Marketing Management student at the University of Hawaii
        </p>
      </header>

      <main className="content">
        <section className="section">
          <h2>About</h2>
          <p>
            A Master of Science in Marketing Management student at the University
            of Hawaii.
          </p>
        </section>

        <section className="section">
          <h2>This semester</h2>
          <ul>
            <li>Coursework: Consumer Behavior &amp; Brand Strategy</li>
            <li>Internship: Marketing Analytics Assistant at a local startup</li>
            <li>Project: Go-to-market plan for a sustainable retail brand</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Dani. All rights reserved.</p>
      </footer>
    </>
  );
}
