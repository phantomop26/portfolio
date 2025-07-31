import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
              Sahil
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            from concept to deployment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
              All Projects
            </button>
            <button className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              Web Apps
            </button>
            <button className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              Mobile Apps
            </button>
            <button className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              APIs
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Featured Projects
          </h2>
          
          {/* Project 1 - E-Commerce Platform */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-80 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">🛒</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  E-Commerce Platform
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  A comprehensive e-commerce solution built with Next.js and Stripe integration. 
                  Features include user authentication, product management, shopping cart, 
                  payment processing, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    Stripe
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Live Demo
                  </a>
                  <a href="#" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Task Management App */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Task Management App
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  A collaborative task management application with real-time updates using Socket.io. 
                  Features team collaboration, progress tracking, file sharing, and mobile-responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    Socket.io
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Live Demo
                  </a>
                  <a href="#" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Code
                  </a>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-500 to-teal-600 h-80 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">📋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Portfolio Website */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-80 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">🎨</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Personal Portfolio
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  A modern, responsive portfolio website built with Next.js and Tailwind CSS. 
                  Features smooth animations, dark mode support, and optimized performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    Framer Motion
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Live Demo
                  </a>
                  <a href="#" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Real-time analytics dashboard with interactive charts and data visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    D3.js
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Demo
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🤖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  AI Chat Bot
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Intelligent chatbot using natural language processing and machine learning.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    TensorFlow
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Demo
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Mobile App
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Cross-platform mobile application for fitness tracking and goal setting.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    React Native
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Firebase
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Demo
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🔐</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Authentication API
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Secure authentication system with JWT tokens and role-based access control.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    JWT
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Demo
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Game Engine
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  2D game engine built with WebGL for browser-based gaming experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    WebGL
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Demo
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">☁️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Cloud Storage
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  File storage and sharing platform with cloud synchronization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    AWS S3
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Demo
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new and challenging projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Sahil Kumar Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 