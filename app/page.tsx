import './styles/page.css';
import Projects from './projects'; // Update the path based on your folder structure

export default function Home() {
  return (
    <main className="main-content">
      <header className="header-content">
        <h1 className="title">Daniel Medina</h1>
        <div className="subtitle-container">
          <p className="subtitle">Hi, I&apos;m Daniel. I love building data-driven products that solve meaningful problems. Here are some of the things I&apos;ve worked on.</p>
        </div>
      </header>
      <Projects />
    </main>
  );
}
