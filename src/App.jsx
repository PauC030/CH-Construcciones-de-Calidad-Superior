import './App.css'
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Hammer, 
  Building, 
  HardHat, 
  Palette, 
  Wrench, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Mail,
  Menu,
  X
} from 'lucide-react';

const ChConstrucciones = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMobileMenuOpen(false);
  };

  // Form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.telefono && formData.mensaje) {
      const whatsappMessage = `¡Hola Eduardo! Soy ${formData.nombre}. ${formData.mensaje}. Mi teléfono: ${formData.telefono} | Email: ${formData.email}`;
      const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(whatsappMessage)}`;
      
      alert('¡Gracias por tu mensaje! Te conectaremos con Eduardo Chapeño vía WhatsApp.');
      window.open(whatsappUrl, '_blank');
      
      setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-parallax');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Construcción de Viviendas",
      description: "Construcción completa de casas desde cimientos hasta acabados finales con materiales de primera calidad"
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Remodelaciones Integrales",
      description: "Renovamos y modernizamos tu hogar actual con diseños contemporáneos y funcionales"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Construcciones Comerciales",
      description: "Locales comerciales, oficinas y espacios de trabajo diseñados para el éxito de tu negocio"
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Dirección de Obra",
      description: "Supervisión profesional de tu proyecto garantizando calidad, tiempos y presupuesto"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Acabados de Lujo",
      description: "Acabados premium y detalles exclusivos que dan el toque final perfecto a tu construcción"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Mantenimiento Especializado",
      description: "Servicios de mantenimiento preventivo y correctivo para preservar tu inversión"
    }
  ];

  const projects = [
    {
      title: "Casa Familiar Moderna",
      description: "Construcción completa con acabados premium - 200m²",
      gradient: "from-gray-800 to-gray-600"
    },
    {
      title: "Remodelación Integral",
      description: "Renovación completa de apartamento - 140m²",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Local Comercial",
      description: "Construcción y diseño interior - 180m²",
      gradient: "from-gray-700 to-gray-800"
    },
    {
      title: "Casa Campestre de Lujo",
      description: "Construcción con acabados exclusivos - 300m²",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Ampliación Residencial",
      description: "Segunda planta y área social - 120m²",
      gradient: "from-gray-800 to-yellow-400"
    },
    {
      title: "Oficinas Ejecutivas",
      description: "Remodelación de espacios corporativos - 250m²",
      gradient: "from-gray-600 to-yellow-400"
    }
  ];

  return (
    <div style={{margin: 0, padding: 0, width: '100vw', minHeight: '100vh'}} className="bg-white text-gray-900 font-sans">

      {/* Header */}
      <header className="bg-gray-900 text-white py-4 fixed top-0 z-50 shadow-2xl" style={{width: '100vw', left: 0, right: 0, margin: 0}}>
        <div className="flex justify-between items-center" style={{maxWidth: 'none', width: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem', margin: 0}}>

          <div className="flex items-center gap-3">
            <div className="text-4xl font-black bg-gradient-to-br from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-tighter">
              CH
            </div>
            <div className="text-sm font-light leading-tight">
              <div>Construcciones</div>
              <div>Eduardo Chapeño</div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8">
            {['inicio', 'servicios', 'nosotros', 'proyectos', 'contacto'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium capitalize text-sm"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <ul className="py-4 px-6 space-y-3">
              {['inicio', 'servicios', 'nosotros', 'proyectos', 'contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left hover:text-yellow-400 transition-colors duration-300 font-medium capitalize py-2"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative flex items-center justify-center text-center text-white bg-gray-900" style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
        <div className="hero-parallax absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/85 to-gray-900/95" style={{width: '100vw', height: '100vh'}}></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.3" x="10" y="10" width="20" height="30"/><rect fill="none" stroke="#FFA500" stroke-width="0.5" opacity="0.3" x="40" y="20" width="15" height="25"/><rect fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.3" x="70" y="15" width="18" height="28"/></svg>')}")`,
            backgroundSize: '200px 200px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        
        <div className="relative z-10" style={{width: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: 'none'}}>
          <div className="animate-fadeInUp">
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              Construcciones de{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Calidad Superior
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-4xl mx-auto">
              Eduardo Chapeño - Maestro Constructor con más de 15 años de experiencia construyendo sueños con los más altos estándares de calidad y profesionalismo
            </p>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              Solicita tu Cotización Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gray-50" style={{width: '100vw', margin: 0}}>
        <div className="content-container">
          <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center hover:transform hover:-translate-y-3 transition-all duration-300 border-t-4 border-yellow-400 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="text-yellow-500 mb-6 flex justify-center relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-gray-900 text-white" style={{width: '100vw', margin: 0}}>
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-5xl font-black mb-8">
                Eduardo{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Chapeño
                </span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                Maestro constructor con más de 15 años de experiencia en el sector. Me especializo en brindar soluciones integrales de construcción, desde proyectos residenciales hasta comerciales, siempre con el compromiso de la excelencia.
              </p>
              <p className="text-lg mb-12 leading-relaxed text-gray-300">
                Mi filosofía de trabajo se basa en la calidad, la puntualidad y la transparencia. Cada proyecto es único y merece toda mi atención y dedicación para superar las expectativas del cliente.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "250+", label: "Proyectos Completados" },
                  { number: "15+", label: "Años de Experiencia" },
                  { number: "100%", label: "Clientes Satisfechos" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/20"
                  >
                    <div className="text-4xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-8xl font-black text-gray-900 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                CH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="proyectos" className="py-24 bg-gray-50" style={{width: '100vw', margin: 0}}>
        <div className="content-container">
          <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative h-72 bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-xl group`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-8 text-white">
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white" style={{width: '100vw', margin: 0}}>
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Contáctame
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                ¿Listo para comenzar tu proyecto? Solicita una cotización gratuita y sin compromiso.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", value: "+57 316 352 6486" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Ubicación", value: "Popayán, Colombia" },
                  { icon: <Clock className="w-6 h-6" />, label: "Horarios", value: "Lun - Sab: 7:00 AM - 5:00 PM" }
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-yellow-400/10 rounded-xl border-l-4 border-yellow-400"
                  >
                    <div className="text-yellow-400">{contact.icon}</div>
                    <div>
                      <div className="font-bold text-yellow-400">{contact.label}:</div>
                      <div className="text-gray-300">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full p-4 border-2 border-yellow-400/30 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Tu número de teléfono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="w-full p-4 border-2 border-yellow-400/30 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-yellow-400/30 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <textarea
                name="mensaje"
                rows="4"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                className="w-full p-4 border-2 border-yellow-400/30 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
              >
                Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-12 border-t border-yellow-400/20" style={{width: '100vw', margin: 0}}>
        <div className="content-container">
          <p className="text-gray-400">
            &copy; 2025 CH Construcciones Eduardo Chapeño. Todos los derechos reservados.<br />
            Construcciones de calidad superior en Popayán y alrededores
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/573163526486?text=¡Hola!%20Estoy%20interesado%20en%20sus%20servicios%20de%20construcción."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/40 z-50 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .content-container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .content-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ChConstrucciones;