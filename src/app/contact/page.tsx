import Link from "next/link";

export default function ContactPage() {
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
              <Link href="/projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Send Me a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Let's Connect
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">sks9379@nyu.edu</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      I'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">linkedin.com/in/sahilkumarsingh</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Connect with me professionally
                    </p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 text-xl">🐙</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">GitHub</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">github.com/sahilkumarsingh</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Check out my open source work
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">San Francisco, CA</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Current Availability</h3>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 dark:text-slate-300">Available for new projects</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  I'm currently accepting new freelance opportunities and full-time positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                What types of projects do you work on?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                I specialize in full-stack web development, including e-commerce platforms, 
                web applications, APIs, and mobile-responsive websites. I'm also experienced 
                with cloud deployment and database design.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                What's your typical project timeline?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Project timelines vary depending on complexity. A simple website might take 1-2 weeks, 
                while a complex web application could take 2-3 months. I always provide detailed 
                timelines during the initial consultation.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Yes! I offer various support packages including maintenance, updates, and technical support. 
                I believe in building long-term relationships with my clients.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                What technologies do you use?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                My tech stack includes React, Next.js, Node.js, TypeScript, Python, PostgreSQL, 
                and various cloud services. I choose the best technology for each specific project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. I'm excited to hear about your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
                              href="mailto:sks9379@nyu.edu"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </Link>
            <Link 
              href="/projects"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </Link>
          </div>
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