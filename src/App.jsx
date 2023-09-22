import { About, Creations, Footer, Hero, Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Creations />
      <Footer />
    </div>
  );
};

export default App;
