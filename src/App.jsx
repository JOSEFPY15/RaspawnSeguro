import AvisoPrivacidad from "./Components/AvisoPrivacidad.jsx";
import Clientes from "./Components/Clientes.jsx";
import Contacto from "./Components/Contacto.jsx";
import Footer from "./Components/Footer.jsx";
import Galeria from "./Components/Galeria.jsx";
import Inicio from "./Components/Inicio.jsx";
import MisionVision from "./Components/MisionVision.jsx";
import Multimedia from "./Components/Multimedia.jsx";
import Navbar from "./Components/Navbar.jsx";
import RedesSociales from "./Components/RedesSociales.jsx";
import ServiciosProductos from "./Components/ServiciosProductos.jsx";
import SiteEffects from "./Components/SiteEffects.jsx";
import SobreNosotros from "./Components/SobreNosotros.jsx";
import Testimonios from "./Components/Testimonios.jsx";
import Ubicacion from "./Components/Ubicacion.jsx";

// App reúne las secciones y define su orden de lectura en la página.
function App() {
  return (
    <>
      <SiteEffects />
      <Navbar />
      <main>
        <Inicio />
        <SobreNosotros />
        <MisionVision />
        <ServiciosProductos />
        <Multimedia />
        <Clientes />
        <Galeria />
        <Testimonios />
        <Ubicacion />
        <Contacto />
        <RedesSociales />
        <AvisoPrivacidad />
      </main>
      <Footer />
    </>
  );
}

export default App;
