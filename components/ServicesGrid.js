import { FaBolt, FaTools, FaWifi } from "react-icons/fa";

const services = [
  { 
    title: 'Electrical repairs', 
    desc: 'Wiring, sockets, light fixtures, safety checks and circuit troubleshooting.',
    icon: <FaBolt className="text-primary text-3xl md:text-4xl" />
  },
  { 
    title: 'Appliance maintenance', 
    desc: 'Repair and service for refrigerators, washing machines, and heaters.',
    icon: <FaTools className="text-primary text-3xl md:text-4xl" />
  },
  { 
    title: 'Network & smart home', 
    desc: 'Home Wi-Fi setup, CCTV, smart devices and IoT integrations.',
    icon: <FaWifi className="text-primary text-3xl md:text-4xl" />
  }
];

export default function ServicesGrid() {
  return (
    <div id="services" className="mt-8 md:mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Our Services</h2>
      <p className="text-slate-600 mt-2 text-center text-sm sm:text-base">Quick, professional, and affordable.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 md:mt-8 max-w-6xl mx-auto">
        {services.map(s => (
          <div key={s.title} className="card text-center p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-3 sm:mb-4">{s.icon}</div>
            <h3 className="font-semibold text-lg sm:text-xl">{s.title}</h3>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
