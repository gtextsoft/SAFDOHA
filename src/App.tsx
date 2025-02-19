import {
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  DollarSign,
  Globe,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./App.css"; // Add this import
import drStephen from "./Dr Stephen.png"; // Add this import at the top
import logo from "./Stephen logo.png";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: Building2, text: "How to Build Wealth Through Real Estate" },
    { icon: DollarSign, text: "Proven High-ROI Strategies" },
    { icon: Rocket, text: "Passive Income & Financial Freedom" },
    {
      icon: Globe,
      text: "How to Invest Smartly in Dubai & Other Booming Markets",
    },
    { icon: Target, text: "Exclusive Real Estate Opportunities" },
    { icon: BookOpen, text: "Investment Mistakes to Avoid" },
  ];

  const attendees = [
    "Business professionals & entrepreneurs looking to expand their wealth",
    "First-time & seasoned investors seeking high-yield opportunities",
    "Diaspora Nigerians & Africans looking to invest back home",
    "High-net-worth individuals interested in property investment",
    "Anyone looking to quadruple their income through strategic investments",
  ];

  const highlights = [
    { icon: Users, text: "Exclusive Access to global investment expert" },
    {
      icon: Trophy,
      text: "Limited Free Seats - Only 100 FREE spots available!",
    },
    {
      icon: Building2,
      text: "Networking Opportunities with like-minded investors",
    },
    { icon: Rocket, text: "Practical Wealth-Building Insights that work" },
  ];

  return (
    <div className="min-h-screen bg-[#011627]">
      {/* Hero Section */}
      <div className="h-screen relative bg-cover bg-center bg-fixed hero-background">
        <nav className="absolute top-0 left-0 right-0 z-20 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="glass-card rounded-full py-4 px-6 flex justify-between items-center">
              <div className="flex items-center space-x-2 text-white">
                <img src={logo} alt="Stephen Logo" className="h-12" />
              </div>
              <div className="hidden md:flex items-center space-x-8 text-white">
                <a
                  href="tel:+2348110180000"
                  className="flex items-center space-x-2 hover:text-[#03A9F4] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 816 790 1719</span>
                </a>
                <a
                  href="tel:+2348149491632"
                  className="flex items-center space-x-2 hover:text-[#03A9F4] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 818 000 0618</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <br/>
            <br/>
        <br/>
        {/* Hero Content */}
        <div className="relative z-10 h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Doha Investment</span>
              <br />
              <span className="text-white">Masterclass</span>
            </h1>
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0276B1]/20 to-[#03A9F4]/20 blur-2xl transform -skew-x-12 scale-150"></div>
              <p className="text-3xl md:text-5xl bg-gradient-to-r from-[#0276B1] via-[#03A9F4] to-[#0276B1] text-transparent bg-clip-text font-extrabold relative z-10 animate-pulse tracking-wide">
                with <br />
                <br />
                <span className="text-4xl md:text-6xl">
                  Dr. Stephen Akintayo
                </span>
              </p>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn the Secrets of Wealth Creation & Smart Investments!
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a
                href="https://app.mailingboss.com/lists/67b35e76967a6/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#0276B1] rounded-full overflow-hidden hover-scale"
              >
                <span className="relative z-10 font-semibold flex items-center gap-2">
                  Register FREE <ChevronDown className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-[#03A9F4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <div className="animate-pulse">
                <div className="bg-[#0276B1]/10 backdrop-blur-sm border-2 border-[#0276B1] rounded-xl px-6 py-3">
                  <p className="text-[#03A9F4] font-bold text-xl md:text-2xl">
                    Event Value:
                    <span className="text-white ml-2">1,000 QAR</span>
                    <span className="block text-green-400 text-lg md:text-xl mt-1">
                      FREE for first 100 people!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="section-gradient py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="content-fade-in">
            <h2 className="section-title text-center text-white">
              What You Will Learn
            </h2>
            <p className="section-description text-center text-gray-300">
              Join us for an exclusive and highly impactful Investment
              Masterclass in Doha—designed to give you insider knowledge on real
              estate, wealth-building strategies, and smart investments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="w-12 h-12 text-[#03A9F4]" />
                  <p className="text-lg font-medium text-white">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Attend Section */}
      <div className="py-32 px-4 bg-[#011627]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Who Should Attend?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 glass-effect rounded-2xl hover-scale"
              >
                <CheckCircle2 className="w-6 h-6 text-[#0276B1] flex-shrink-0 mt-1" />
                <p className="text-lg">{attendee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div id="masterclass" className="section-gradient py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-[#011627] to-[#0276B1] rounded-[2rem] overflow-hidden shadow-2xl border border-[#03A9F4]/20">
            <div className="md:flex items-stretch">
              <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <div className="content-fade-in space-y-8">
                  <h2 className="text-4xl font-bold mb-2 text-white">
                    Event Details
                  </h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                      <Calendar className="w-6 h-6 text-[#0276B1] flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Date</div>
                        <div className="text-gray-400">
                          Monday, 7th April 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                      <Clock className="w-6 h-6 text-[#0276B1] flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Time</div>
                        <div className="text-gray-400">
                          6:00 PM - 9:00 PM (Doha time)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                      <MapPin className="w-6 h-6 text-[#0276B1] flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Venue</div>
                        <div className="text-gray-400">W Hotel Doha</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://app.mailingboss.com/lists/67b35e76967a6/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#0276B1] rounded-full overflow-hidden hover-scale"
                  >
                    <span className="relative z-10 font-semibold">
                      Secure Your Free Spot NOW!
                    </span>
                    <ChevronDown className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform" />
                    <div className="absolute inset-0 bg-[#03A9F4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </a>
                </div>
              </div>

              <div
                className="md:w-1/2 h-50 md:h-auto bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${drStephen})`,
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-32 px-4 bg-[#011627]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Why You Must Not Miss This
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 glass-effect rounded-2xl hover-scale"
              >
                <highlight.icon className="w-6 h-6 text-[#0276B1] flex-shrink-0 mt-1" />
                <p className="text-lg">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section-gradient py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="content-fade-in">
            <h2 className="section-title text-center text-white text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="section-description text-center text-gray-300 mb-16 max-w-2xl mx-auto">
              Our team of expert consultants is ready to guide you through your
              investment journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group p-8 rounded-2xl glass-effect hover:bg-[#011627]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#011627]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0276B1]/20 transition-colors">
                  <Phone className="w-8 h-8 text-[#03A9F4] group-hover:scale-110 transition-transform" />
                </div>
                <p className="font-semibold text-xl text-center mb-4 text-white">
                  Sales Inquiries
                </p>
                <a
                  href="tel:+2348167901719"
                  className="block text-center text-[#03A9F4] hover:text-white transition-colors text-lg"
                >
                  +234 816 790 1719
                </a>
              </div>

              <div className="group p-8 rounded-2xl glass-effect hover:bg-[#011627]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#011627]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0276B1]/20 transition-colors">
                  <Phone className="w-8 h-8 text-[#03A9F4] group-hover:scale-110 transition-transform" />
                </div>
                <p className="font-semibold text-xl text-center mb-4 text-white">
                  General Inquiries
                </p>
                <a
                  href="tel:+2348180000618"
                  className="block text-center text-[#03A9F4] hover:text-white transition-colors text-lg"
                >
                  +234 818 000 0618
                </a>
              </div>

              <div className="group p-8 rounded-2xl glass-effect hover:bg-[#011627]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#011627]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0276B1]/20 transition-colors">
                  <Mail className="w-8 h-8 text-[#03A9F4] group-hover:scale-110 transition-transform" />
                </div>
                <p className="font-semibold text-xl text-center mb-4 text-white">
                  Email Us
                </p>
                <a
                  href="mailto:products@stephenakintako.com"
                  className="block text-center text-[#03A9F4] hover:text-white transition-colors text-lg break-all"
                >
                  products@stephenakintako.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
