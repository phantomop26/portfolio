import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
              Funda
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                About
              </Link>
              <Link href="/projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating innovative solutions and building amazing user experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                My Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                My journey in software development began with a curiosity about how things work on the web. 
                What started as simple HTML pages has evolved into a passion for building complex, 
                scalable applications that solve real-world problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I believe in writing clean, maintainable code and creating user experiences that are 
                both beautiful and functional. Every project is an opportunity to learn something new 
                and push the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">Quality First</h4>
                    <p className="text-blue-100 text-sm">Writing clean, efficient, and maintainable code</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">User-Centered</h4>
                    <p className="text-blue-100 text-sm">Creating experiences that users love</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Learning</h4>
                    <p className="text-blue-100 text-sm">Always staying updated with latest technologies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold mb-1">Collaboration</h4>
                    <p className="text-blue-100 text-sm">Working effectively in teams and communities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Experience & Education
          </h2>
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Work Experience</h3>
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Senior Full-Stack Developer</h4>
                      <p className="text-blue-600 dark:text-blue-400">Tech Company Inc.</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">2022 - Present</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Leading development of enterprise web applications using React, Node.js, and cloud technologies. 
                    Mentoring junior developers and implementing best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                      AWS
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Frontend Developer</h4>
                      <p className="text-blue-600 dark:text-blue-400">Startup XYZ</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">2020 - 2022</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Built responsive user interfaces and implemented modern frontend architectures. 
                    Collaborated with design and backend teams to deliver high-quality products.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Education</h3>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Bachelor of Computer Science</h4>
                    <p className="text-blue-600 dark:text-blue-400">University of Technology</p>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">2016 - 2020</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Graduated with honors. Focused on software engineering, algorithms, and web development. 
                  Completed capstone project on machine learning applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Interests & Hobbies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Always exploring new technologies and frameworks to stay current with industry trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Open Source</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Contributing to open-source projects and sharing knowledge with the developer community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Problem Solving</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Enjoying coding challenges and algorithmic problems to sharpen problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on interesting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Projects
            </Link>
            <Link 
              href="/contact"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Funda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 