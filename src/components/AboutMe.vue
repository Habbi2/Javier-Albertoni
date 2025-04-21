<template>
  <div class="about-me-container">
    <div class="profile-section">
      <div class="profile-image">
        <div class="image-container">
          <img src="https://i.imgur.com/VadR86r.png" alt="Javier Albertoni" />
          <div class="image-border"></div>
        </div>
        <div class="floating-badge resume">
          <a href="https://drive.google.com/file/d/1-sJtqwehpClbh9ZgUA3OI-KNoZX0AB_v/view?usp=drive_link" @click.prevent="downloadResume" class="resume-link">
            <span class="icon">📄</span>
            <span class="text">Resume</span>
            <span class="download-icon">↓</span>
          </a>
        </div>
      </div>
      <div class="profile-info">
        <div class="info-header">
          <h2 class="name">Javier Albertoni</h2>
          <h3 class="title">Full-Stack Developer</h3>
        </div>
        <div class="info-detail">
          <p class="location">
            <span class="icon">📍</span>
            <span>Buenos Aires, Argentina</span>
          </p>
          <p class="experience">
            <span class="icon">⏳</span>
            <span>5+ Years of Experience</span>
          </p>
          <p class="availability">
            <span class="icon">🟢</span>
            <span>Available for Freelance</span>
          </p>
        </div>
        <div class="social-links">
          <a href="https://github.com/Habbi2" target="_blank" rel="noopener noreferrer" class="social-link github">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/javier-albertoni-464b98141" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="bio-section">
      <div class="section-heading">
        <h3 class="section-title">About Me</h3>
        <div class="section-divider"></div>
      </div>
      <div class="bio-content">
        <p>I'm a passionate Full-Stack Developer with over 5 years of experience creating modern web applications. I specialize in Vue.js, React, TypeScript, and Node.js, with a strong focus on building responsive, user-friendly interfaces and robust backend systems.</p>
        <p>My journey in web development began when I built my first website for a local business while studying Computer Science. Since then, I've worked with startups, agencies, and established companies to deliver impactful digital solutions.</p>
        <p>I'm particularly interested in performance optimization, clean architecture, and creating intuitive user experiences. When I'm not coding, you can find me hiking in nature, playing guitar, or exploring new technologies through side projects.</p>
      </div>
    </div>

    <div class="timeline-section">
      <div class="section-heading">
        <h3 class="section-title">Experience</h3>
        <div class="section-divider"></div>
      </div>
      <div class="timeline">
        <div class="timeline-item" v-for="(job, index) in experience" :key="index">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">{{ job.period }}</div>
            <h4 class="timeline-title">{{ job.role }} @ <span class="company">{{ job.company }}</span></h4>
            <p class="timeline-description">{{ job.description }}</p>
            <div class="timeline-tags">
              <span class="tag" v-for="(tag, tagIndex) in job.technologies" :key="tagIndex">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="education-section">
      <div class="section-heading">
        <h3 class="section-title">Education</h3>
        <div class="section-divider"></div>
      </div>
      <div class="education-items">
        <div class="education-item" v-for="(edu, index) in education" :key="index">
          <div class="edu-icon">
            <span class="icon">🎓</span>
          </div>
          <div class="edu-content">
            <div class="edu-years">{{ edu.years }}</div>
            <h4 class="edu-degree">{{ edu.degree }}</h4>
            <div class="edu-school">{{ edu.school }}</div>
            <p class="edu-description">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="interests-section">
      <div class="section-heading">
        <h3 class="section-title">Interests & Hobbies</h3>
        <div class="section-divider"></div>
      </div>
      <div class="interests-grid">
        <div class="interest-item" v-for="(interest, index) in interests" :key="index">
          <div class="interest-icon">{{ interest.icon }}</div>
          <div class="interest-name">{{ interest.name }}</div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h3>Interested in working together?</h3>
      <p>I'm currently available for freelance projects or full-time positions.</p>
      <div class="cta-buttons">
        <router-link to="/contact" class="cta-btn primary">Contact Me</router-link>
        <router-link to="/projects" class="cta-btn secondary">View Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
  data() {
    return {
      experience: [
        {
          period: '2022 - Present',
          role: 'Senior Full-Stack Developer',
          company: 'TechInnovate Solutions',
          description: 'Lead development of enterprise web applications using Vue.js and Node.js. Architected and implemented scalable solutions for clients across finance, healthcare, and e-commerce sectors.',
          technologies: ['Vue.js', 'TypeScript', 'Node.js', 'AWS', 'Docker']
        },
        {
          period: '2020 - 2022',
          role: 'Web Developer',
          company: 'DigitalCraft Agency',
          description: 'Developed responsive websites and web applications for clients, focusing on performance optimization and modern UI/UX practices.',
          technologies: ['React', 'Vue.js', 'JavaScript', 'WordPress', 'Netlify']
        },
        {
          period: '2018 - 2020',
          role: 'Frontend Developer',
          company: 'WebSphere Inc.',
          description: 'Created interactive user interfaces and implemented frontend architecture for various web applications.',
          technologies: ['JavaScript', 'HTML/CSS', 'Sass', 'jQuery', 'Bootstrap']
        }
      ],
      education: [
        {
          years: '2014 - 2018',
          degree: 'Bachelor of Science in Computer Science',
          school: 'University of Technology',
          description: 'Focused on web development, algorithms, and data structures. Graduated with honors.'
        },
        {
          years: '2020',
          degree: 'Advanced Web Development Certification',
          school: 'Frontend Masters',
          description: 'Specialized training in modern JavaScript frameworks and architecture.'
        }
      ],
      interests: [
        { name: 'Hiking & Nature', icon: '🏔️' },
        { name: 'Guitar Playing', icon: '🎸' },
        { name: 'Photography', icon: '📷' },
        { name: 'Reading', icon: '📚' },
        { name: 'Travel', icon: '✈️' },
        { name: 'Open Source', icon: '💻' }
      ]
    };
  },
  methods: {
    downloadResume() {
      alert('Resume download would start here. Replace with actual download functionality.');
      // In a real implementation, you would have:
      // window.open('/path-to-resume.pdf', '_blank');
    },
    animateOnScroll() {
      const sections = document.querySelectorAll('.bio-section, .timeline-section, .education-section, .interests-section, .cta-section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.15 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
    }
  },
  mounted() {
    this.animateOnScroll();
  }
});
</script>

<style scoped>
.about-me-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  color: #e0e0e0; /* Updated text color for dark theme */
}

/* Profile Section */
.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}

.profile-image {
  position: relative;
  flex: 0 0 auto;
  margin-right: 40px;
}

.image-container {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); /* Added shadow for depth */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-border {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 3px solid #3498db;
  border-radius: 50%;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.floating-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #1e272e; /* Updated for dark theme */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.floating-badge.resume {
  padding: 0;
}

.resume-link {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #e0e0e0; /* Updated for dark theme */
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.resume-link:hover {
  background-color: #3498db;
  color: white;
}

.resume-link .icon {
  margin-right: 8px;
}

.resume-link .download-icon {
  margin-left: 5px;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.resume-link:hover .download-icon {
  transform: translateY(3px);
}

.profile-info {
  flex: 1;
}

.info-header {
  margin-bottom: 20px;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 5px;
  color: #ffffff; /* Updated for dark theme */
  position: relative;
}

.name::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 40px;
  height: 4px;
  background-color: #3498db;
  border-radius: 2px;
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 15px 0 0;
  color: #a0a0a0; /* Updated for dark theme */
}

.info-detail {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 25px;
}

.info-detail p {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1rem;
}

.info-detail .icon {
  margin-right: 8px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1e272e; /* Updated for dark theme */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link svg {
  width: 20px;
  height: 20px;
  fill: #a0a0a0; /* Updated for dark theme */
  transition: fill 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
}

.social-link.github:hover {
  background-color: #333;
}

.social-link.linkedin:hover {
  background-color: #0077b5;
}

.social-link.twitter:hover {
  background-color: #1da1f2;
}

.social-link:hover svg {
  fill: white;
}

/* Section Styling */
.section-heading {
  margin-bottom: 30px;
  position: relative;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #ffffff; /* Updated for dark theme */
  position: relative;
  display: inline-block;
}

.section-divider {
  height: 3px;
  width: 60px;
  background-color: #3498db;
  margin-top: 15px;
  border-radius: 2px;
}

/* Bio Section */
.bio-section {
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.bio-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

.bio-content p {
  margin-bottom: 20px;
  color: #c0c0c0; /* Updated for dark theme */
}

.bio-content p:last-child {
  margin-bottom: 0;
}

/* Timeline Section */
.timeline-section {
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  transition-delay: 0.2s;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 5px;
  bottom: 5px;
  width: 2px;
  background-color: #333; /* Updated for dark theme */
}

.timeline-item {
  position: relative;
  padding-left: 30px;
  margin-bottom: 40px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -5px;
  top: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #3498db;
  background-color: #1a1a1a; /* Updated for dark theme */
  z-index: 1;
}

.timeline-date {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 5px;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px;
  color: #e0e0e0; /* Updated for dark theme */
}

.company {
  color: #3498db;
}

.timeline-description {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 15px;
  color: #b0b0b0; /* Updated for dark theme */
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #222933; /* Updated for dark theme */
  color: #a0a0a0; /* Updated for dark theme */
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Education Section */
.education-section {
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  transition-delay: 0.4s;
}

.education-items {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.education-item {
  display: flex;
  gap: 20px;
}

.edu-icon {
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  background-color: #222933; /* Updated for dark theme */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.edu-content {
  flex: 1;
}

.edu-years {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 5px;
}

.edu-degree {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 5px;
  color: #e0e0e0; /* Updated for dark theme */
}

.edu-school {
  font-size: 1rem;
  color: #a0a0a0; /* Updated for dark theme */
  margin-bottom: 5px;
}

.edu-description {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  color: #b0b0b0; /* Updated for dark theme */
}

/* Interests Section */
.interests-section {
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
}

.interest-item {
  background-color: #1e272e; /* Updated for dark theme */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.interest-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  background-color: #222933; /* Updated hover state for dark theme */
}

.interest-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.interest-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #c0c0c0; /* Updated for dark theme */
}

/* CTA Section */
.cta-section {
  background-color: #181f27; /* Updated for dark theme */
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  transition-delay: 0.8s;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
}

.cta-section h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 15px;
  color: #ffffff; /* Updated for dark theme */
}

.cta-section p {
  font-size: 1.1rem;
  margin: 0 0 25px;
  color: #a0a0a0; /* Updated for dark theme */
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.cta-btn {
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-btn.primary {
  background: linear-gradient(90deg, #3498db, #2980b9);
  color: white;
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

.cta-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(52, 152, 219, 0.5);
}

.cta-btn.secondary {
  background-color: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.cta-btn.secondary:hover {
  background-color: rgba(52, 152, 219, 0.1);
  transform: translateY(-3px);
}

/* Animation class */
.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .profile-image {
    margin-right: 0;
    margin-bottom: 30px;
  }
  
  .name::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .info-detail {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .section-divider {
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-heading {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .about-me-container {
    padding: 100px 15px 50px;
  }
  
  .image-container {
    width: 180px;
    height: 180px;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .timeline-title {
    font-size: 1.1rem;
  }
  
  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-section {
    padding: 30px 20px;
  }
  
  .cta-section h3 {
    font-size: 1.5rem;
  }
}
</style>