<template>
  <div class="home">
    <div class="hero">
      <div class="particles-container" ref="particles"></div>
      <div class="container">
        <div class="hero-content">
          <div class="animated-intro">
            <h1 class="hero-title">Javier Albertoni</h1>
            <p class="hero-subtitle">Full-Stack Developer & Netlify Expert</p>
            <p class="hero-description">
              Building modern web applications with cutting-edge technologies.
              Specializing in creating responsive, performant sites deployed on Netlify.
            </p>
          </div>
          <div class="hero-buttons">
            <router-link to="/projects" class="btn primary">
              <span class="btn-text">View My Projects</span>
              <span class="btn-icon">→</span>
            </router-link>
            <router-link to="/about" class="btn secondary">About Me</router-link>
            <a href="https://drive.google.com/file/d/1-sJtqwehpClbh9ZgUA3OI-KNoZX0AB_v/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn resume" 
              @click.prevent="downloadResume">
              <span>Download Resume</span>
              <span class="btn-icon">↓</span>
            </a>
          </div>
        </div>
        <div class="hero-image">
          <div class="floating-elements" ref="floatingElements">
            <div class="floating-icon netlify" data-depth="0.6">
              <img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" alt="Netlify" />
            </div>
            <div class="floating-icon vue" data-depth="0.4">
              <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" alt="Vue" />
            </div>
            <div class="floating-icon js" data-depth="0.2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
            <div class="floating-icon ts" data-depth="0.3">
              <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" />
            </div>
            <div class="floating-icon react" data-depth="0.5">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" />
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToNextSection">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div class="arrow">
          <span></span>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <div class="container">
        <div class="skills-header">
          <h2 class="section-heading">Skills & Experience</h2>
          <p class="section-subheading">Years of expertise in modern web technologies</p>
        </div>
        <div class="skills-grid">
          <div class="skill-card" v-for="(skill, index) in skills" :key="index">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
            <p class="skill-level">{{ skill.level }}%</p>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-section">
      <div class="container">
        <h2 class="section-heading">Featured Projects</h2>
        <p class="section-subheading">Showcasing some of my best work</p>
        <div class="featured-projects">
          <div class="featured-project" v-for="project in featuredProjects" :key="project.id" @mouseenter="hoverProject(project.id)" @mouseleave="unhoverProject()">
            <div class="project-preview" :style="{ backgroundImage: `url(${project.image})` }">
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-actions">
                  <a :href="project.liveUrl" class="project-link" target="_blank" rel="noopener noreferrer">
                    <span>View Live Site</span>
                    <span class="icon">↗</span>
                  </a>
                  <a :href="project.github" class="project-link github" v-if="project.github" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                    <span class="icon">↗</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-tags">
              <span class="tag" v-for="(tag, index) in project.tags" :key="index">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="view-all">
          <router-link to="/projects" class="btn outline">
            <span>View All Projects</span>
            <span class="btn-icon">→</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="tech-stack">
      <div class="container">
        <h2 class="section-heading">My Tech Stack</h2>
        <p class="section-subheading">Technologies I work with</p>
        <div class="tech-list">
          <div class="tech-item" v-for="(tech, index) in technologies" :key="index" @mouseenter="animateTech($event)">
            <div class="tech-icon">{{ tech.icon }}</div>
            <span class="tech-name">{{ tech.name }}</span>
            <div class="tech-tooltip">{{ tech.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonials-section">
      <div class="container">
        <h2 class="section-heading">Client Testimonials</h2>
        <p class="section-subheading">What others say about working with me</p>
        <div class="testimonials-slider" ref="testimonialsSlider">
          <div class="testimonial-slide" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <div class="author-avatar" :style="{ backgroundImage: `url(${testimonial.avatar})` }"></div>
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-title">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to work together?</h2>
          <p class="cta-text">Let's create something amazing for your business</p>
          <router-link to="/contact" class="btn primary">
            <span>Get in Touch</span>
            <span class="btn-icon">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      currentTestimonial: 0,
      hoveredProject: null,
      featuredProjects: [
      {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A fully responsive e-commerce site with user authentication, product search, and payment processing.',
          image: 'https://media.licdn.com/dms/image/v2/D4D2DAQH0KptID1P88A/profile-treasury-image-shrink_1280_1280/B4DZZFTqlIGgAY-/0/1744919506027?e=1745794800&v=beta&t=pY0b8sFF2tk_cYSK37r8uLMVQyxhYDhiP5JhFOq-Vuk',
          liveUrl: 'https://exampleecommerce.netlify.app/',
          repoUrl: 'https://github.com/Habbi2/E-Commerce',
          category: 'Web Development',
          tags: ['E-commerce', 'Featured'],
          technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Stripe']
        },
        {
          id: 2,
          title: 'Crypto Dashboard',
          description: 'A productivity tool for teams to manage tasks with real-time updates and progress tracking.',
          image: 'https://media.licdn.com/dms/image/v2/D4D22AQFODGUPzRhuzw/feedshare-shrink_480/B4DZZKWOQpGkAY-/0/1745004062201?e=1747872000&v=beta&t=RAxril_SUMWY4AMWke_-l7ftJrk4Tv8gC9C6vupU1Yc',
          liveUrl: 'https://dshaboardcrypto.netlify.app/',
          repoUrl: 'https://github.com/Habbi2/Crypto-Dashboard',
          category: 'Web Development',
          tags: ['Productivity', 'SaaS'],
          technologies: ['Vue.js', 'Typescript', 'Node.js', 'WebSocket', 'Chart.js']
        },
        {
          id: 3,
          title: 'Viverplast',
          description: 'Interactive agroindustry app with beautiful visualizations.',
          image: 'https://i.imgur.com/9zvbQ2x.png',
          liveUrl: 'https://viverplast.netlify.app/',
          repoUrl: 'https://github.com/Habbi2/Viverplast',
          category: 'Frontend',
          tags: ['API Integration', 'Dashboard'],
          technologies: ['React.js', 'Netlify']
        },
        {
          id: 4,
          title: 'IO Puzzle',
          description: 'A multiplayer puzzle game where players solve challenges together.',
          image: 'https://media.licdn.com/dms/image/v2/D4D22AQEhUh3jX6Lwyw/feedshare-shrink_800/B4DZZR_tpFHwAg-/0/1745132379769?e=1747872000&v=beta&t=nite8GE5fX_ymoba3hvBfMycmXjCJ1zzOVFzXCnH7Jg',
          liveUrl: 'https://iopuzzle.netlify.app/',
          repoUrl: 'https://github.com/Habbi2/Puzzle.io',
          category: 'Community',
          tags: ['Social'],
          technologies: ['Vue.js', 'Node.js', 'Websockets', 'Socket.io']
        }
      ],
      skills: [
        { name: 'Front-end Development', icon: '🌐', level: 95 },
        { name: 'Responsive Design', icon: '📱', level: 90 },
        { name: 'Back-end Development', icon: '⚙️', level: 85 },
        { name: 'API Integration', icon: '🔄', level: 92 },
        { name: 'Performance Optimization', icon: '⚡', level: 88 },
        { name: 'SEO & Analytics', icon: '📊', level: 80 },
      ],
      technologies: [
        { name: 'Vue.js', icon: '⚡', description: 'Building reactive user interfaces' },
        { name: 'React', icon: '⚛️', description: 'Creating component-based UIs' },
        { name: 'JavaScript', icon: '🟨', description: 'Core programming language' },
        { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript development' },
        { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
        { name: 'Netlify', icon: '🚀', description: 'Continuous deployment platform' },
        { name: 'GraphQL', icon: '📊', description: 'Efficient API queries' },
        { name: 'Docker', icon: '🐳', description: 'Container-based deployment' },
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          title: 'CEO at TechStart Inc.',
          text: 'Working with Javier was an absolute pleasure. He delivered our project on time and exceeded our expectations with his attention to detail and expertise.',
          avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        {
          name: 'Michael Chen',
          title: 'Founder of DataViz',
          text: 'Javier transformed our complex requirements into an elegant, easy-to-use interface. His technical knowledge and communication skills made the process seamless.',
          avatar: 'https://randomuser.me/api/portraits/men/44.jpg'
        },
        {
          name: 'Emily Rodriguez',
          title: 'Marketing Director',
          text: 'The website Javier created for us generated a 40% increase in leads within the first month. His strategic approach to UX design made all the difference.',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
      ]
    };
  },
  mounted() {
    this.initParticles();
    this.initParallax();
    
    // Auto-rotate testimonials
    setInterval(() => {
      this.nextTestimonial();
    }, 8000);
    
    // Animate skills on scroll
    this.initScrollAnimations();
  },
  methods: {
    initParticles() {
      // Implementation would use a library like particles.js
      // This is a placeholder for the actual implementation
      console.log('Particles initialized');
    },
    initParallax() {
      if (this.$refs.floatingElements) {
        // Track mouse movement for parallax effect
        document.addEventListener('mousemove', (e) => {
          const elements = this.$refs.floatingElements.querySelectorAll('[data-depth]');
          elements.forEach(el => {
            const depth = parseFloat(el.getAttribute('data-depth'));
            const moveX = (e.clientX - window.innerWidth / 2) * depth / 10;
            const moveY = (e.clientY - window.innerHeight / 2) * depth / 10;
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });
        });
      }
    },
    initScrollAnimations() {
      // This would use Intersection Observer to trigger animations
      // Placeholder for actual implementation
      console.log('Scroll animations initialized');
    },
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    },
    prevTestimonial() {
      this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
    },
    goToTestimonial(index: number) {
      this.currentTestimonial = index;
    },
    hoverProject(id: number) {
      this.hoveredProject = id;
    },
    unhoverProject() {
      this.hoveredProject = null;
    },
    animateTech(event: MouseEvent) {
      const target = event.currentTarget as HTMLElement;
      target.classList.add('tech-pulse');
      setTimeout(() => {
        target.classList.remove('tech-pulse');
      }, 1000);
    },
    scrollToNextSection() {
      const nextSection = document.querySelector('.skills-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    downloadResume() {
      // Google Drive direct download URL conversion
      const fileId = '1-sJtqwehpClbh9ZgUA3OI-KNoZX0AB_v';
      const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = directDownloadUrl;
      link.setAttribute('download', 'Javier_Albertoni_Resume.pdf');
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      
      // Append to the document, trigger click, and remove
      document.body.appendChild(link);
      link.click();
      
      // Small timeout before removing the element
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    }
  },
});
</script>

<style scoped>
/* Base styles */
.home {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero section with modern design */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1419 0%, #1a2129 50%, #222c37 100%);
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  z-index: 2;
}

/* Animated introduction */
.animated-intro {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #ffffff, #64B6FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  letter-spacing: -1px;
  animation: titleGradient 8s ease infinite;
}

@keyframes titleGradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 10px 0 0;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 25px 0;
  max-width: 500px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.6s forwards;
}

/* Enhanced buttons */
.hero-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.9s forwards;
}

.btn {
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: 10px;
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
}

.btn:hover::after {
  width: 300px;
  height: 300px;
}

.btn:active {
  transform: scale(0.96);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(5px);
}

.primary {
  background: linear-gradient(90deg, #3498db, #2980b9);
  color: white;
  box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(52, 152, 219, 0.5);
}

.secondary {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.outline {
  background-color: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.outline:hover {
  background-color: #3498db;
  color: white;
  transform: translateY(-3px);
}

.resume {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  color: white;
  box-shadow: 0 8px 20px rgba(46, 204, 113, 0.3);
}

.resume:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(46, 204, 113, 0.5);
}

.resume .btn-icon {
  font-weight: bold;
}

.resume:hover .btn-icon {
  transform: translateY(3px);
}

/* Enhanced floating elements with parallax */
.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.floating-elements {
  position: relative;
  width: 400px;
  height: 400px;
}

.floating-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease;
}

.floating-icon:hover {
  transform: scale(1.15) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.floating-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.netlify {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float1 6s infinite ease-in-out;
}

.vue {
  top: 20%;
  right: 15%;
  animation: float2 8s infinite ease-in-out;
}

.floating-icon.js {
  bottom: 25%;
  left: 15%;
  animation: float3 7s infinite ease-in-out;
  z-index: 2;
  /* Adding specific styles for JS icon to ensure proper rendering */
  background-color: rgba(240, 219, 79, 0.15);
  border: 1px solid rgba(240, 219, 79, 0.2);
}

.ts {
  top: 65%;
  right: 25%;
  animation: float2 9s infinite ease-in-out;
  z-index: 2;
  /* Enhance TypeScript icon styling */
  background-color: rgba(49, 120, 198, 0.15);
  border: 1px solid rgba(49, 120, 198, 0.2);
}

.react {
  top: 30%;
  left: 20%;
  animation: float1 7.5s infinite ease-in-out;
  z-index: 2;
  /* Enhance React icon styling */
  background-color: rgba(97, 218, 251, 0.15);
  border: 1px solid rgba(97, 218, 251, 0.2);
}

@keyframes float1 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-5deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(8deg);
  }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s;
  z-index: 3;
}

.scroll-indicator:hover {
  opacity: 1;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.wheel {
  width: 4px;
  height: 10px;
  background-color: white;
  border-radius: 2px;
  animation: wheel 2s infinite;
}

@keyframes wheel {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}

.arrow {
  margin-top: 10px;
}

.arrow span {
  display: block;
  width: 10px;
  height: 10px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  animation: arrow 2s infinite;
  animation-delay: 1s;
}

@keyframes arrow {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

/* Skills section */
.skills-section {
  padding: 100px 0;
  background-color: #1a1a1a;
  position: relative;
}

.skills-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom right, #1a1a1a 0%, #1a1a1a 50%, transparent 50%);
  transform: translateY(-99px);
}

.skills-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-heading {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #e0e0e0;
  position: relative;
  font-weight: 700;
}

.section-subheading {
  text-align: center;
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
}

.section-heading::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 4px;
  background-color: #3498db;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.skill-card {
  background-color: #2a2a2a;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.skill-name {
  font-size: 1.4rem;
  margin: 0 0 20px;
  font-weight: 600;
  color: #e0e0e0;
}

.skill-bar {
  height: 8px;
  background-color: #3a3a3a;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 4px;
  transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  width: 0;
}

.skill-level {
  text-align: right;
  font-weight: 600;
  margin: 0;
  font-size: 0.9rem;
  color: #b0b0b0;
}

/* Featured projects section with enhanced design */
.featured-section {
  padding: 100px 0;
  background-color: #222222;
}

.featured-projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 50px;
}

.featured-project {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  background-color: #2a2a2a;
  position: relative;
  height: 350px;
}

.featured-project:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}

.project-preview {
  height: 100%;
  width: 100%;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #151515;
  transition: transform 0.8s ease;
}

.featured-project:hover .project-preview {
  transform: scale(1.05);
}

.project-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%);
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

.featured-project:hover .project-preview::before {
  opacity: 0.95;
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  transform: translateY(20px);
  opacity: 0.8;
  transition: all 0.5s ease;
}

.featured-project:hover .project-info {
  transform: translateY(0);
  opacity: 1;
}

.project-title {
  color: white;
  margin: 0 0 15px;
  font-size: 1.8rem;
  font-weight: 700;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 20px;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 90%;
}

.project-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 10px 20px;
  background-color: rgba(52, 152, 219, 0.8);
  border-radius: 25px;
  transition: all 0.3s ease;
}

.project-link .icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.project-link:hover {
  background-color: rgba(52, 152, 219, 1);
}

.project-link:hover .icon {
  transform: translateX(3px) translateY(-3px);
}

.project-link.github {
  background-color: rgba(36, 41, 46, 0.8);
}

.project-link.github:hover {
  background-color: rgba(36, 41, 46, 1);
}

.project-tags {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 2;
}

.tag {
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
}

.view-all {
  display: inline-flex;
  text-align: center;
  margin-top: 60px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.view-all .btn {
  display: inline-flex;
  min-width: 20px;
  justify-content: center;
  margin-right: 50px;
}

/* Enhanced tech stack section */
.tech-stack {
  padding: 100px 0;
  background-color: #1a1a1a;
  position: relative;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
}

.tech-item {
  text-align: center;
  transition: all 0.3s ease;
  padding: 25px;
  width: 120px;
  background-color: #2a2a2a;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
}

.tech-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.tech-icon {
  font-size: 3.2rem;
  margin-bottom: 15px;
}

.tech-name {
  font-size: 1rem;
  font-weight: 500;
  color: #e0e0e0;
}

.tech-tooltip {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%) translateY(100%) scale(0.8);
  background-color: #333333;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.85rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  width: max-content;
  max-width: 200px;
  z-index: 10;
}

.tech-tooltip::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #333333;
}

.tech-item:hover .tech-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(100%) scale(1);
}

.tech-pulse {
  animation: pulse 1s cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
}

/* Testimonials section */
.testimonials-section {
  padding: 100px 0;
  background-color: #222222;
}

.testimonials-slider {
  margin-top: 60px;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.testimonial-slide {
  width: 100%;
  padding: 0 30px;
}

.testimonial-content {
  background-color: #2a2a2a;
  border-radius: 20px;
  padding: 40px;
  margin: 40px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
}

.quote-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 5rem;
  color: rgba(52, 152, 219, 0.1);
  font-family: serif;
  line-height: 1;
  z-index: 0;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0 0 30px;
  position: relative;
  z-index: 1;
  font-style: italic;
  color: #e0e0e0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 3px solid #3498db;
}

.author-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #e0e0e0;
}

.author-title {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #b0b0b0;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
}

.slider-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-btn:hover {
  background-color: #2980b9;
  transform: scale(1.1);
}

.slider-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #444444;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: #3498db;
  transform: scale(1.2);
}

/* CTA section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #1a2737 0%, #293a4e 100%);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 20px;
}

.cta-text {
  font-size: 1.3rem;
  margin: 0 0 40px;
  opacity: 0.9;
}

/* Responsive design enhancements */
@media (max-width: 992px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image {
    display: none;
  }

  .featured-section, .tech-stack, .skills-section, .testimonials-section {
    padding: 60px 0;
  }

  .section-heading {
    font-size: 2.2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3.2rem;
  }

  .hero-subtitle {
    font-size: 1.6rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .featured-projects {
    grid-template-columns: 1fr;
  }

  .section-heading {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .tech-list {
    gap: 20px;
  }

  .tech-item {
    width: calc(33.333% - 20px);
    padding: 15px 10px;
  }

  .cta-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .hero {
    min-height: 80vh;
  }

  .btn {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
  }

  .tech-item {
    width: calc(50% - 20px);
  }

  .project-info {
    padding: 20px;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-actions {
    flex-direction: column;
    gap: 10px;
  }

  .cta-title {
    font-size: 2rem;
  }
}

@media (min-width: 1440px) {
  .hero .container {
    max-width: 1400px;
  }
  
  .hero-title {
    font-size: 4.5rem;
  }
  
  .hero-subtitle {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.3rem;
    max-width: 600px;
  }
  
  .floating-elements {
    width: 450px;
    height: 450px;
  }
  
  .floating-icon {
    width: 90px;
    height: 90px;
  }
}

/* Chrome device-specific styles */
@media (max-width: 1280px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .floating-elements {
    width: 380px;
    height: 380px;
  }
  
  .floating-icon {
    width: 75px;
    height: 75px;
  }
  
  .testimonials-section .container,
  .tech-stack .container,
  .skills-section .container,
  .featured-section .container,
  .cta-section .container {
    max-width: 1100px;
  }
  
  .skills-grid {
    gap: 25px;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.6rem;
  }
  
  .floating-elements {
    width: 320px;
    height: 320px;
  }
  
  .floating-icon {
    width: 65px;
    height: 65px;
  }
}

/* iPad Air/Pro */
@media (max-width: 834px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  
  .floating-elements {
    position: relative;
    width: 300px;
    height: 300px;
  }
  
  .featured-projects {
    grid-template-columns: 1fr;
  }
  
  .tech-list {
    gap: 20px;
  }
  
  .tech-item {
    width: calc(25% - 20px);
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* iPad Mini */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
    max-width: 500px;
  }
  
  .testimonials-section,
  .tech-stack,
  .skills-section,
  .featured-section,
  .cta-section {
    padding: 70px 0;
  }
  
  .section-heading {
    font-size: 2.2rem;
  }
  
  .cta-title {
    font-size: 2.5rem;
  }
}

/* Large phones (iPhone 12/13 Pro Max) */
@media (max-width: 640px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .hero-description {
    font-size: 1.05rem;
    max-width: 450px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    gap: 15px;
  }
  
  .btn {
    width: 100%;
  }
  
  .floating-elements {
    width: 280px;
    height: 280px;
  }
  
  .testimonial-content {
    padding: 30px;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .tech-item {
    width: calc(33.333% - 20px);
  }
  
  .section-heading {
    font-size: 2rem;
  }
}

/* Medium phones (iPhone X/11/12/13) */
@media (max-width: 414px) {
  .hero {
    min-height: 90vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .floating-elements {
    width: 240px;
    height: 240px;
  }
  
  .floating-icon {
    width: 55px;
    height: 55px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-content {
    padding: 25px;
  }
  
  .testimonial-text {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .quote-icon {
    font-size: 4rem;
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
  }
  
  .tech-item {
    width: calc(50% - 20px);
    padding: 20px 15px;
  }
  
  .cta-title {
    font-size: 2.2rem;
  }
  
  .cta-text {
    font-size: 1.1rem;
  }
}

/* Small phones (iPhone 8/SE) */
@media (max-width: 375px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 0.95rem;
  }
  
  .testimonial-content {
    padding: 20px;
  }
  
  .section-heading {
    font-size: 1.8rem;
  }
  
  .section-subheading {
    font-size: 1rem;
  }
  
  .floating-elements {
    width: 220px;
    height: 220px;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-text {
    font-size: 1rem;
  }
}

/* Extra small phones */
@media (max-width: 320px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-description {
    font-size: 0.9rem;
  }
  
  .floating-elements {
    width: 200px;
    height: 200px;
  }
  
  .floating-icon {
    width: 45px;
    height: 45px;
  }
  
  .section-heading {
    font-size: 1.7rem;
  }
  
  .tech-item {
    padding: 15px 10px;
  }
  
  .testimonial-text {
    font-size: 0.95rem;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
  
  .cta-text {
    font-size: 0.95rem;
  }
}
</style>