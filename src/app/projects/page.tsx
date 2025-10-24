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
          
          {/* Project 1 - Poker Analyst */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-red-500 to-orange-600 h-80 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">♠️</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Poker Analyst - Win Percentage Calculator
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  A sophisticated poker win percentage calculator with opponent behavior analysis. 
                  Calculate your chances of winning based on your hand, community cards, and opponent playing styles.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    Algorithm Design
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    Probability Theory
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    Vercel
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="https://poker-analyst-p13prjkux-sahils-projects-eaea9cba.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Live Demo
                  </a>
                  <a href="https://github.com/phantomop26/Poker-Analyst" target="_blank" rel="noopener noreferrer" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Smart Travel App */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Smart Road Trip Planner
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Developed a smart travel app in Swift that suggests stops based on ETA, user mood, and group input. 
                  Integrates real-time data from Google Maps API and OpenStreetMap with features like EV charging, 
                  toll estimates, weather alerts, and AI-generated trip journals.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    Swift
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    SwiftUI
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    Google Maps API
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    OpenStreetMap
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/phantomop26/travel-app" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Code
                  </a>
                  <span className="border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 px-6 py-3 rounded-lg font-semibold">
                    iOS App
                  </span>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-500 to-teal-600 h-80 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">🗺️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Deep Recurrent Factor Model */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-80 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">🧠</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Deep Recurrent Factor Model (LSTM + LRP)
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  An interpretable non-linear and time-varying multi-factor model based on LSTM and Layer-wise 
                  Relevance Propagation. Extends traditional linear multi-factor models by capturing non-linear 
                  relationships and time dependencies between factors and stock returns.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    LSTM
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    TensorFlow
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    Financial Modeling
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/phantomop26/Deep-Recurrent-Factor-Model-LSTM-LRP-" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Code
                  </a>
                  <span className="border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 px-6 py-3 rounded-lg font-semibold">
                    Research Project
                  </span>
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
            {/* Project Card 1 - TaskMan */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">📋</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  TaskMan
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A simple, lightweight task & project management web application with Python backend and static frontend.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    HTML/CSS
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/phantomop26/TaskMan" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 - SwiftUI 2048 Game */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  SwiftUI 2048 Game
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A fully featured 2048 puzzle game with swipe gestures, animations, undo functionality, and persistent high scores.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Swift
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    SwiftUI
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    Combine
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/phantomop26/2048" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Blackjack */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🃏</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Blackjack Game
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A simple, readable, and extensible Blackjack (21) implementation in Python with command-line interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Game Logic
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    CLI
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/phantomop26/Blackjack" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 - Coming Soon Projects */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow opacity-75">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  AI-Powered Portfolio Tracker
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Machine learning-driven investment tracker with real-time market analysis and automated portfolio rebalancing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    TensorFlow
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    Finance
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    In Development
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 5 - Coming Soon */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow opacity-75">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">🔗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Blockchain Voting System
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Secure voting platform built on Ethereum blockchain with smart contracts for transparent elections.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Solidity
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Ethereum
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    Web3
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 6 - Coming Soon */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow opacity-75">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">⚛️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Quantum Computing Simulator
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Educational quantum computing simulator with visual qubit manipulation and quantum gate operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Qiskit
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    Quantum
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Coming Soon
                  </span>
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