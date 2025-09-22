'use client'
import Image from "next/image";
export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Ziyu Liu</h1>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="/resume" className="text-blue-600 font-medium">CV</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CV</h2>
          <p className="text-gray-600 mb-6">Computer Science + Mathematics Double Major | 4.06 GPA | Colgate University</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => alert('PDF download functionality would be implemented here. For now, you can print this page or contact me directly for a PDF version.')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <a href="/contact" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 relative overflow-hidden rounded-full">
                <Image
                  src="/profile-photo.jpg"
                  alt="Your Name"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold mb-2">Ziyu (Matthew) Liu</h1>
              <p className="text-blue-100 text-lg mb-4">Computer Science + Mathematics Student</p>
              <div className="flex justify-center flex-wrap gap-4 text-blue-100">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  zliu1@colgate.edu
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Hamilton, NY
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  315-273-9667
                </span>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/Matt-Liu0" className="text-blue-100 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/ziyu-liu-3001572b4" className="text-blue-100 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Summary */}
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Professional Summary</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Highly motivated Computer Science and Mathematics double major with a 4.06 GPA, combining strong 
                  theoretical foundations with practical software development experience. Proven track record in 
                  full-stack development, research in AI/ML and mathematical modeling, and leadership in academic 
                  and professional settings. Seeking opportunities to apply technical skills and research experience 
                  in innovative software engineering or research roles.
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Colgate University</h3>
                    <p className="text-lg text-blue-600 font-medium">Bachelor of Arts, Double Major: Computer Science + Mathematics</p>
                    <p className="text-gray-600">Hamilton, New York</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">May 2027</p>
                    <p className="text-sm text-gray-600">Expected Graduation</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600">4.07</p>
                    <p className="text-sm text-gray-600">Computer Science GPA</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-green-600">4.08</p>
                    <p className="text-sm text-gray-600">Mathematics GPA</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-purple-600">4.06</p>
                    <p className="text-sm text-gray-600">Cumulative GPA</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Data Structures & Algorithms</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Linear Algebra</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Discrete Structures</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Differential Equations</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Combinatorics</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Programming Languages
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">JavaScript/TypeScript</span>
                        <span className="text-sm text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Python</span>
                        <span className="text-sm text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Java</span>
                        <span className="text-sm text-gray-500">Proficient</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">C/C++</span>
                        <span className="text-sm text-gray-500">Proficient</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">HTML/CSS</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">MATLAB</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">SQL</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Frameworks & Tools
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-blue-800">React</div>
                      <div className="text-xs text-blue-600">Frontend</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-blue-800">Next.js</div>
                      <div className="text-xs text-blue-600">Full-stack</div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-green-800">Vue.js</div>
                      <div className="text-xs text-green-600">Frontend</div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-green-800">Django</div>
                      <div className="text-xs text-green-600">Backend</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-purple-800">PostgreSQL</div>
                      <div className="text-xs text-purple-600">Database</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-purple-800">Firebase</div>
                      <div className="text-xs text-purple-600">BaaS</div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-orange-800">Tableau</div>
                      <div className="text-xs text-orange-600">Analytics</div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                      <div className="font-medium text-orange-800">Prisma</div>
                      <div className="text-xs text-orange-600">ORM</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Experience */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Research Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Research Assistant – GKC-CI Policy Annotation</h3>
                      <p className="text-blue-600 font-medium">Computer Science | Colgate University & University of Iowa</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Current</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Sept 2025 – Present</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Coordinate cross-institution GKCCI privacy policy labeling project, aligning guidelines with Iowa law students and designing a statistical comparison system to streamline iterative data labeling and improve dataset reliability
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advance analysis of policy parameters by developing and fine-tuning LLM-based models to investigate relationships between parameters, transforming expert annotations into scalable, reproducible workflows
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Research Assistant – Homogenization Theory</h3>
                      <p className="text-blue-600 font-medium">Mathematics | Colgate University</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Completed</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">May 2025 – Aug 2025</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Investigated homogenization theory on wave equations under certain microstructure and boundary conditions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Conducted asymptotic expansion techniques and two-scale convergence validation to rigorously derive the homogenized equation of the wave equation system, and presented research outcomes in campus poster sessions and research conferences
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v5.25A2.25 2.25 0 0113.75 16H10.5A2.25 2.25 0 018.25 13.75V8m8 0V7a2 2 0 00-2-2H10a2 2 0 00-2 2v1m8 0h2a2 2 0 012 2v5.25a2.25 2.25 0 01-2.25 2.25H12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Writing Center Consultant</h3>
                      <p className="text-blue-600 font-medium">Writing and Speaking Center | Colgate University</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Current</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Aug 2024 – Present</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Engage with 50+ students per semester from various academic years, majors, and language backgrounds on their writing pieces, providing support in successive writing phases to help them build confidence in completing college-level writing
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborate with writing center directors to promote the goals and culture of the Writing and Speaking Center by managing social media and pitching Writing Center values
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Software Development Engineer Intern</h3>
                      <p className="text-blue-600 font-medium">Shanghai Qingning Recycling Design Company</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Internship</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Jun 2024 – Aug 2024</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed and enhanced an intelligent digital pollution statistics surveillance system, utilizing frontend frameworks and Spring Boot with SQL for backend database management, improving recycling data collection efficiency by 30%
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Researched the integration of blockchain technology into the backend data management system to strengthen data security
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Improved data visualization for pollution metrics from aerial detection stations by implementing dynamic graphs and synchronizing monthly reports with the website, ensuring real-time updates
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Math Center Tutor</h3>
                      <p className="text-blue-600 font-medium">Math Center | Colgate University</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Academic Year</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Aug 2024 – May 2025</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Guided students across various Calculus levels by fostering critical thinking and a problem-solving mindset, enhancing their understanding and confidence in mathematics
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Leadership Experience */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Leadership Experience</h2>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">International Student Orientation Group Leader</h3>
                    <p className="text-blue-600 font-medium">Office of International Student | Colgate University</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Leadership</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">May 2024 – Aug 2024</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Led a group of 11 newly arriving international students from 6 different countries in transitioning smoothly to Colgate by guiding them through immigration check-in, organizing shopping trips, and providing ongoing support during their adjustment
                  </li>
                </ul>
              </div>
            </section>

            {/* Software Engineering Projects */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Software Engineering Projects</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Colgate Event Calendar</h3>
                      <p className="text-blue-600 font-medium">Software Engineering | Colgate University</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live & Maintained</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Feb 2024 – Present</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built, deployed, and continue to maintain a full-stack event discovery platform using Next.js, NestJS, and PostgreSQL, enhancing campus event visibility and student engagement
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integrated Supabase for user login and live event management with role-based access
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Next.js</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">NestJS</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Supabase</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">CryptoEd</h3>
                      <p className="text-blue-600 font-medium">Software Engineering | International Student Initiative</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">In Development</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Aug 2025 – Present</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Launch a self-initiated online platform with peers from multiple U.S. universities to promote cryptocurrency and decentralized finance (DeFi) education for undergraduates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lead website development, implementing course-style learning modules, interactive discussion forums (Reddit-style), and user authentication to support structured learning and peer collaboration
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Build technical foundation with React, Next.js, Firebase, ensuring smooth integration of learning content with community interaction
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Next.js</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Firebase</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Awards & Achievements */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Key Achievements</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Academic Excellence</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 4.06/4.0 Cumulative GPA</li>
                    <li>• 4.07/4.0 Computer Science GPA</li>
                    <li>• 4.08/4.0 Mathematics GPA</li>
                    <li>• Dean's List Recognition</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Impact & Results</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 30% improvement in data collection efficiency</li>
                    <li>• 50+ students tutored per semester</li>
                    <li>• Cross-institutional research collaboration</li>
                    <li>• Conference presentations & poster sessions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Languages</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>English</span>
                      <span className="text-sm">Fluent</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mandarin Chinese</span>
                      <span className="text-sm">Native</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Interests</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Machine Learning & AI</li>
                    <li>• Mathematical Modeling</li>
                    <li>• Web Development</li>
                    <li>• Open Source Contribution</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Availability</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Summer 2026 Internships</li>
                    <li>• Part-time during academic year</li>
                    <li>• Remote/Hybrid work</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Footer Call-to-Action */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm actively seeking internship opportunities and research collaborations. 
                Let's connect and explore how I can contribute to your team!
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
                <a 
                  href="/projects" 
                  className="border border-blue-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Projects
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}