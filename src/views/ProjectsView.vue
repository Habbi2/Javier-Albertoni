<template>
  <div class="projects-view">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">My Projects</h1>
        <p class="page-subtitle">Explore my latest work and side projects</p>
      </div>
    </div>

    <div class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <div class="search">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search projects..." 
              @input="filterProjects"
              class="search-input"
            />
            <div class="search-icon">🔍</div>
          </div>
          <div class="filter-tags">
            <button 
              class="filter-tag" 
              :class="{ active: selectedCategory === 'all' }"
              @click="selectCategory('all')"
            >
              All
            </button>
            <button 
              v-for="category in categories" 
              :key="category"
              class="filter-tag" 
              :class="{ active: selectedCategory === category }"
              @click="selectCategory(category)"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="projects-container">
      <div class="container">
        <transition-group name="project-grid" tag="div" class="projects-grid">
          <div class="project-item" v-for="project in filteredProjects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </transition-group>

        <div class="no-results" v-if="filteredProjects.length === 0">
          <div class="no-results-icon">🔍</div>
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button class="reset-btn" @click="resetFilters">Reset Filters</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl?: string;
  category: string;
  tags: string[];
  technologies: string[];
}

export default defineComponent({
  name: 'ProjectsView',
  components: {
    ProjectCard
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      projects: [
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
      ] as Project[],
      filteredProjects: [] as Project[]
    };
  },
  computed: {
    categories(): string[] {
      const categoriesSet = new Set(this.projects.map(project => project.category));
      return Array.from(categoriesSet);
    }
  },
  mounted() {
    // Initialize with all projects
    this.filteredProjects = [...this.projects];
    
    // Add fade-in animation on page load
    const projectsView = document.querySelector('.projects-view');
    if (projectsView) {
      setTimeout(() => {
        projectsView.classList.add('loaded');
      }, 100);
    }
    
    // Add staggered animation to project cards
    this.initProjectAnimations();
  },
  methods: {
    filterProjects() {
      // Apply category filter first
      let filtered = this.projects;
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(project => project.category === this.selectedCategory);
      }
      
      // Then apply search query filter
      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(project => {
          return (
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.tags.some(tag => tag.toLowerCase().includes(query)) ||
            project.technologies.some(tech => tech.toLowerCase().includes(query))
          );
        });
      }
      
      this.filteredProjects = filtered;
      
      // Re-initialize animations after filtering
      this.$nextTick(() => {
        this.initProjectAnimations();
      });
    },
    selectCategory(category: string) {
      this.selectedCategory = category;
      this.filterProjects();
    },
    resetFilters() {
      this.searchQuery = '';
      this.selectedCategory = 'all';
      this.filteredProjects = [...this.projects];
      
      // Re-initialize animations after reset
      this.$nextTick(() => {
        this.initProjectAnimations();
      });
    },
    initProjectAnimations() {
      // Add staggered animation to project cards
      const projectItems = document.querySelectorAll('.project-item');
      projectItems.forEach((item, index) => {
        // Set custom property for staggered delay
        (item as HTMLElement).style.setProperty('--index', index.toString());
      });
    }
  }
});
</script>

<style scoped>
.projects-view {
   min-height: 100vh;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  background-color: #0a0c10;
  color: #e6edf3;
  padding-bottom: 80px;
}

.projects-view.loaded {
  opacity: 1;
  transform: translateY(0);
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
}

.hero-section {
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(125deg, #0c1016 0%, #0d1117 100%);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(30,144,255,0.1) 1px, transparent 1px),
    linear-gradient(0deg, rgba(30,144,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.15;
  animation: gridMove 25s linear infinite;
  z-index: 0;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, transparent 0%, #0a0c10 80%);
  z-index: 1;
}

@keyframes gridMove {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 40px 40px;
  }
}

.hero-section .container {
  position: relative;
  z-index: 2;
  text-align: center;
}

.page-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0 0 20px;
  background: linear-gradient(90deg, #1f6feb, #58a6ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
  text-shadow: 0 4px 20px rgba(0, 100, 255, 0.1);
  position: relative;
}

.page-title::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  color: transparent;
  filter: blur(12px);
}

.page-subtitle {
  font-size: 1.25rem;
  color: #8b949e;
  max-width: 650px;
  margin: 0 auto;
  font-weight: 400;
}

.filter-section {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(10, 12, 16, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(48, 54, 61, 0.5);
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.search {
  position: relative;
  max-width: 360px;
  width: 100%;
}

.search-input {
  width: 100%;
  height: 48px;
  padding: 0 20px 0 48px;
  border: 1px solid #30363d;
  border-radius: 6px;
  background-color: #0d1117;
  color: #e6edf3;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #1f6feb;
  box-shadow: 0 0 0 3px rgba(31, 111, 235, 0.3);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #8b949e;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-tag {
  background-color: #161b22;
  border: 1px solid #30363d;
  color: #8b949e;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.filter-tag:hover {
  background-color: #1c2128;
  border-color: #8b949e;
}

.filter-tag.active {
  background-color: #1f6feb;
  color: white;
  border-color: #1f6feb;
}

.projects-container {
  padding-top: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
  margin-bottom: 40px;
}

.project-item {
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
  animation-delay: calc(0.1s * var(--index, 0));
  will-change: transform, opacity;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition group animations */
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.project-grid-move {
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.no-results {
  text-align: center;
  padding: 100px 20px;
  color: #8b949e;
  background-color: #0d1117;
  border-radius: 10px;
  border: 1px solid #30363d;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.6;
}

.reset-btn {
  margin-top: 24px;
  background-color: #1f6feb;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background-color: #388bfd;
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(31, 111, 235, 0.2);
}

/* Responsive Design */
@media (min-width: 1600px) {
  .container {
    max-width: 1500px;
  }
  
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .page-title {
    font-size: 5rem;
  }
}

@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .hero-section {
    height: 350px;
  }
  
  .page-title {
    font-size: 4rem;
  }
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-section {
    height: 300px;
  }
  
  .page-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .search {
    max-width: 100%;
  }
  
  .hero-section {
    height: 250px;
  }
  
  .page-title {
    font-size: 3rem;
  }
}

@media (max-width: 576px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .hero-section {
    height: 220px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .filter-tags {
    justify-content: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 8px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .filter-tags::-webkit-scrollbar {
    display: none;
  }
  
  .filter-tag {
    white-space: nowrap;
    flex-shrink: 0;
  }
}

@media (max-width: 400px) {
  .container {
    padding: 0 16px;
  }
  
  .hero-section {
    height: 200px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .search-input {
    height: 44px;
    font-size: 0.9rem;
  }
  
  .filter-tag {
    padding: 8px 14px;
    font-size: 0.85rem;
  }
}

/* Theme and animation enhancements */
@media (prefers-reduced-motion: reduce) {
  .projects-view,
  .project-item,
  .filter-tag,
  .reset-btn {
    transition: none !important;
    animation: none !important;
  }
  
  .hero-section::before {
    animation: none !important;
  }
}

/* Dark mode refinements */
@media (prefers-color-scheme: dark) {
  .projects-view {
    background-color: #0a0c10;
  }
  
  .search-input::placeholder {
    color: #8b949e;
  }
}

/* High contrast mode */
@media (forced-colors: active) {
  .filter-tag.active {
    border: 2px solid;
  }
}

/* Print styles */
@media print {
  .projects-view {
    background: white;
    color: black;
  }
  
  .hero-section {
    background: none;
    height: auto;
    padding: 40px 0;
  }
  
  .hero-section::before,
  .hero-section::after {
    display: none;
  }
  
  .filter-section {
    display: none;
  }
  
  .page-title {
    color: black;
    background: none;
    -webkit-text-fill-color: initial;
  }
  
  .projects-grid {
    gap: 20px;
  }
}
</style>