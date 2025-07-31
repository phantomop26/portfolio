"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from 'emailjs-com';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const [visibleContactCards, setVisibleContactCards] = useState(false);
  const [visibleContactForm, setVisibleContactForm] = useState(false);
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    animationDelay: string;
    animationDuration: string;
    opacity: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Generate particles once on mount (reduced for performance)
    const generatedParticles = Array.from({ length: 60 }, () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.5, // Random velocity between -0.25 and 0.25
        vy: (Math.random() - 0.5) * 0.5,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${8 + Math.random() * 10}s`,
        opacity: 0.6 + Math.random() * 0.4
      };
    });
    setParticles(generatedParticles);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
      
      // Update particle positions based on mouse
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const maxDistance = 100;
      const force = 50;
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const dx = mouseX - particle.baseX;
          const dy = mouseY - particle.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const strength = (1 - distance / maxDistance) * force;
            const angle = Math.atan2(dy, dx);
            
            return {
              ...particle,
              x: particle.baseX + Math.cos(angle) * strength,
              y: particle.baseY + Math.sin(angle) * strength
            };
          } else {
            // Smoothly return to base position
            return {
              ...particle,
              x: particle.x + (particle.baseX - particle.x) * 0.1,
              y: particle.y + (particle.baseY - particle.y) * 0.1
            };
          }
        })
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Optimized animation with throttling
    let animationId: number;
    let lastTime = 0;
    const throttleDelay = 100; // Update every 100ms for better performance
    
    const animateParticles = (currentTime: number) => {
      if (currentTime - lastTime >= throttleDelay) {
        setParticles(prevParticles => 
          prevParticles.map(particle => {
            let newBaseX = particle.baseX + particle.vx;
            let newBaseY = particle.baseY + particle.vy;
            let newVx = particle.vx;
            let newVy = particle.vy;
            
            // Bounce off edges
            if (newBaseX <= 0 || newBaseX >= window.innerWidth) {
              newVx = -particle.vx;
              newBaseX = Math.max(0, Math.min(window.innerWidth, newBaseX));
            }
            if (newBaseY <= 0 || newBaseY >= window.innerHeight) {
              newVy = -particle.vy;
              newBaseY = Math.max(0, Math.min(window.innerHeight, newBaseY));
            }
            
            return {
              ...particle,
              baseX: newBaseX,
              baseY: newBaseY,
              x: particle.x,
              y: particle.y,
              vx: newVx,
              vy: newVy
            };
          })
        );
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(animateParticles);
    };
    
    // Delay particle animation by 3 seconds to let text animations complete
    setTimeout(() => {
      animationId = requestAnimationFrame(animateParticles);
    }, 3000);

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
          setVisibleProjects(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }
      });
    }, observerOptions);

    const contactCardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'contact-cards') {
          setVisibleContactCards(true);
        }
      });
    }, observerOptions);

    const contactFormObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'contact-form') {
          setVisibleContactForm(true);
        }
      });
    }, observerOptions);

    // Observe elements after a short delay to ensure they're rendered
    setTimeout(() => {
      document.querySelectorAll('[data-project-index]').forEach(el => {
        projectObserver.observe(el);
      });
      
      const contactCards = document.getElementById('contact-cards');
      const contactForm = document.getElementById('contact-form');
      
      if (contactCards) contactCardsObserver.observe(contactCards);
      if (contactForm) contactFormObserver.observe(contactForm);
    }, 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      projectObserver.disconnect();
      contactCardsObserver.disconnect();
      contactFormObserver.disconnect();
    };
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("LLJlqsuY3Yp3zwirW");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Sending email with data:', {
        service: 'service_8a61qvt',
        template: 'template_qywar24',
        data: formData,
        userID: 'LLJlqsuY3Yp3zwirW'
      });

      const result = await emailjs.send(
        'service_8a61qvt',
        'template_qywar24',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sahil',
          to_email: 'sahiilsingh26012004@gmail.com',
        },
        'LLJlqsuY3Yp3zwirW'
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error: any) {
      console.error('Email send error:', error);
      // Log more details for debugging
      console.error('Error details:', {
        message: error?.message,
        status: error?.status,
        text: error?.text
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚡" },
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "🌳" },
    { name: "AWS", icon: "☁️" },
    { name: "Swift", icon: "🍎" },
    { name: "Flask", icon: "🔥" }
  ];

  const projects = [
    {
      title: "Smart Road Trip Planner",
      subtitle: "Cross-Platform Travel App",
      description: "Developed a smart travel app in Swift that suggests stops based on ETA, user mood, and group input. Integrates real-time data from Google Maps API and OpenStreetMap with features like EV charging, toll estimates, weather alerts, and AI-generated trip journals.",
      liveLink: "#",
      codeLink: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SwiftUI 2048 Game",
      subtitle: "Mobile Puzzle Game", 
      description: "Built a fully featured 2048 puzzle game in SwiftUI with swipe gesture support, smooth merging animations, undo functionality, and persistent high score storage. Features reactive state management with Combine and full dark/light mode support.",
      liveLink: "#",
      codeLink: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ETL Data Pipeline",
      subtitle: "Data Engineering Project",
      description: "Engineered scalable ETL pipelines using Dagster and Python, coordinating asynchronous scraping, enrichment, and validation across 10M+ business records from platforms like Google, Yelp, and TikTok.",
      liveLink: "#",
      codeLink: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real Estate CRM",
      subtitle: "Business Management System",
      description: "Developed a custom CRM integrated with Compass Real Estate tools, automating outreach via email/SMS campaigns and building internal tools including sentiment analysis and tenant management systems.",
      liveLink: "#",
      codeLink: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const placeholderProjects = [
    {
      title: "AI-Powered Portfolio Tracker",
      subtitle: "Investment Analytics Platform",
      description: "Machine learning-driven investment tracker with real-time market analysis, risk assessment, and automated portfolio rebalancing using Python and TensorFlow.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Voting System",
      subtitle: "Decentralized Democracy",
      description: "Secure voting platform built on Ethereum blockchain with smart contracts, ensuring transparency and immutability in electoral processes.",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Neural Network Visualizer",
      subtitle: "Educational AI Tool",
      description: "Interactive web application for visualizing neural network architectures and training processes, built with React and D3.js for educational purposes.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud Infrastructure Monitor",
      subtitle: "DevOps Dashboard",
      description: "Real-time monitoring dashboard for cloud infrastructure with automated scaling, cost optimization, and performance analytics using AWS and Docker.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Social Impact Tracker",
      subtitle: "Non-Profit Management",
      description: "Comprehensive platform for tracking social impact metrics, volunteer management, and donation processing for non-profit organizations.",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Quantum Computing Simulator",
      subtitle: "Research Tool",
      description: "Educational quantum computing simulator with visual qubit manipulation, quantum gate operations, and algorithm demonstrations using Python and Qiskit.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

    return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Ben Scott Style Background - Full Page Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Interactive Constellation */}
        <div className="absolute inset-0">
          {mounted && (
            <svg className="absolute inset-0 w-full h-full">
              {/* Connection Lines */}
              {particles.map((particle, i) => 
                particles.slice(i + 1).map((otherParticle, j) => {
                  const distance = Math.sqrt(
                    Math.pow(particle.x - otherParticle.x, 2) + 
                    Math.pow(particle.y - otherParticle.y, 2)
                  );
                  const maxDistance = 120; // Reduced for performance
                  
                  if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.3;
  return (
                      <line
                        key={`${i}-${j}`}
                        x1={particle.x}
                        y1={particle.y}
                        x2={otherParticle.x}
                        y2={otherParticle.y}
                        stroke="rgb(59, 130, 246)"
                        strokeWidth="2"
                        opacity={opacity}
                      />
                    );
                  }
                  return null;
                })
              )}
              
              {/* Particles */}
              {particles.map((particle, i) => (
                <circle
                  key={i}
                  cx={particle.x}
                  cy={particle.y}
                  r="3"
                  fill="rgb(59, 130, 246)"
                  opacity={particle.opacity}
                  className="drop-shadow-lg"
                />
              ))}
            </svg>
          )}
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
              style={{
                top: `${15 + i * 10}%`,
                left: '0%',
                width: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>

        {/* Large Floating Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all duration-300">
              
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              {["About", "Projects", "Contact"].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group font-serif"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <a 
                href="/finalresume.pdf"
                download="Sahil_Kumar_Singh_Resume.pdf"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 text-sm flex items-center font-serif"
              >
                📄 Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-end justify-center px-6 relative z-10 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <div>
            <h1 className={`text-5xl md:text-7xl font-light mb-8 leading-tight font-serif transition-all duration-1000 delay-300 text-white ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}>
              Hello, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Sahil</span>
            </h1>
            <p className={`text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-extralight font-serif transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}>
              I'm a Computer Science student passionate about software engineering and data science.
            </p>

                        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  href="#projects"
                  className="group relative px-12 py-5 bg-black/20 backdrop-blur-md text-white rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-400/40 hover:border-blue-300/60 text-lg font-serif hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30"
                >
                  <span className="relative z-10 flex items-center">
                    View my work
                    <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 group-hover:text-blue-300 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                </Link>
                <Link 
                  href="#contact"
                  className="group relative px-12 py-5 bg-black/20 backdrop-blur-md text-white rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/40 hover:border-cyan-300/60 text-lg font-serif hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30"
                >
                  <span className="relative z-10 flex items-center">
                    Get in touch
                    <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 group-hover:text-cyan-300 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                </Link>
              </div>
          </div>
        </div>
        

      </section>

      {/* Large Gap */}
      <div className="h-32"></div>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed font-serif">
                  I'm a Computer Science student at New York University, passionate about software engineering and data science. Currently pursuing my Bachelor's with a minor in Mathematics and Finance, I'm deeply interested in algorithms, data structures, and building scalable applications.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed font-serif">
                  My experience spans from full-stack development to data engineering, with expertise in Python, Swift, and modern web technologies. Beyond coding, I'm actively involved in leadership roles and have a strong background in mathematics competitions.
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className={`bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl text-center border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-blue-400/50`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-bold text-white font-serif">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  data-project-index={index}
                  className={`group relative bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:border-blue-400/50 hover:shadow-blue-500/20 ${
                    visibleProjects[index] 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${index % 2 === 0 ? 'translate-x-32' : '-translate-x-32'}`
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <span className="text-3xl text-white font-bold">{project.title.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-serif">
                          {project.title}
                        </h3>
                        <p className="text-xl text-blue-400 font-semibold mb-4 font-serif">
                          {project.subtitle}
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg font-serif">
                          {project.description}
                        </p>
                        <div className="flex space-x-4">
                          <a 
                            href={project.liveLink}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 font-serif"
                          >
                            Live
        </a>
        <a
                            href={project.codeLink}
                            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-black transition-all duration-300 font-serif"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Placeholder projects with random content */}
              {placeholderProjects.map((project, i) => (
                <div 
                  key={`placeholder-${i}`}
                  data-project-index={projects.length + i}
                  className={`group relative bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:border-blue-400/50 hover:shadow-blue-500/20 ${
                    visibleProjects[projects.length + i] 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${(projects.length + i) % 2 === 0 ? 'translate-x-32' : '-translate-x-32'}`
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <span className="text-3xl text-white font-bold">{project.title.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-serif">
                          {project.title}
                        </h3>
                        <p className="text-xl text-blue-400 font-semibold mb-4 font-serif">
                          {project.subtitle}
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg font-serif">
                          {project.description}
                        </p>
                        <div className="flex space-x-4">
                          <div className="px-6 py-3 bg-gray-700 text-gray-400 rounded-lg font-medium cursor-not-allowed font-serif">
                            In Development
                          </div>
                          <div className="px-6 py-3 border border-gray-600 text-gray-500 rounded-lg font-medium cursor-not-allowed font-serif">
                            Coming Soon
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/60 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-serif">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact</span>
            </h2>
                                    <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto font-serif">
                          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
                        </p>
                        
                        {/* Contact Information */}
                        <div id="contact-cards" className="text-center mb-12">
                          <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
                            <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 transition-all duration-700 ${
                              visibleContactCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
                            }`}>
                              <div className="text-2xl mb-2">📧</div>
                              <h3 className="font-semibold text-white mb-1 font-serif">Email</h3>
                              <p className="text-blue-400 font-serif">sks9379@nyu.edu</p>
                            </div>
                            <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 transition-all duration-700 ${
                              visibleContactCards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
                            }`}>
                              <div className="text-2xl mb-2">📍</div>
                              <h3 className="font-semibold text-white mb-1 font-serif">Location</h3>
                              <p className="text-blue-400 font-serif">New York, NY</p>
                            </div>
                          </div>
                        </div>
            
            <div id="contact-form" className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl p-10 border border-blue-500/40 transition-all duration-700 overflow-hidden ${
              visibleContactForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Floating particles in form */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-blue-400 text-sm font-semibold mb-2 transition-all duration-300 group-focus-within:text-cyan-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-6 py-4 border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60 hover:bg-black/60 focus:bg-black/60 placeholder-gray-400"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-blue-400 text-sm font-semibold mb-2 transition-all duration-300 group-focus-within:text-cyan-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-6 py-4 border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60 hover:bg-black/60 focus:bg-black/60 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-blue-400 text-sm font-semibold mb-2 transition-all duration-300 group-focus-within:text-cyan-400">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      required
                      className="w-full px-6 py-4 border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 bg-black/40 text-white backdrop-blur-sm resize-none transition-all duration-300 hover:border-blue-400/60 hover:bg-black/60 focus:bg-black/60 placeholder-gray-400"
                    ></textarea>
                  </div>
                  
                  {/* Enhanced Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 text-green-300 px-6 py-4 rounded-2xl backdrop-blur-sm animate-pulse">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🎉</span>
                        <div>
                          <p className="font-semibold">Message sent successfully!</p>
                          <p className="text-sm text-green-400">I'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/50 text-red-300 px-6 py-4 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">⚠️</span>
                        <div>
                          <p className="font-semibold">Failed to send message</p>
                          <p className="text-sm text-red-400">Please try again or email me directly at sks9379@nyu.edu</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                      isSubmitting 
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-500 text-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/30 bg-black/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto text-center">
                              <p className="text-gray-400 font-medium font-serif">
                      SAHIL KUMAR SINGH ©2025
                    </p>
        </div>
      </footer>
    </div>
  );
}