import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Plans from "./components/Plans";
import UploadForm from "./components/UploadForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Plans />
        <UploadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
