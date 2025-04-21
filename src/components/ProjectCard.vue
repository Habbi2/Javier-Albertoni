<template>
  <div class="project-card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="project-image-container">
      <div class="category-label">{{ project.category }}</div>
      <div class="project-image" :style="{ backgroundImage: `url(${project.image})` }">
        <div class="project-overlay" :class="{ active: isHovered }">
          <div class="project-actions">
            <a :href="project.liveUrl" class="project-btn primary" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <span class="icon">↗</span>
            </a>
            <a :href="project.repoUrl" class="project-btn secondary" target="_blank" rel="noopener noreferrer" v-if="project.repoUrl">
              <span>Source Code</span>
              <span class="icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
    </div>
    <div class="project-tech-wrapper">
      <div class="project-tech">
        <span class="tech-item" v-for="(tech, index) in project.technologies" :key="index">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl?: string;
  tags: string[];
  technologies: string[];
  category: string;
}

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  },
  data() {
    return {
      isHovered: false
    };
  }
});
</script>

<style scoped>
.project-card {
  background-color: #171b21;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  border: 1px solid #30363d;
  position: relative;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  border-color: #58a6ff;
}

.project-image-container {
  position: relative;
}

.category-label {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(13, 17, 23, 0.85);
  color: #58a6ff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 5;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(88, 166, 255, 0.2);
}

.project-image {
  height: 220px;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  background-color: #0d1117;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 17, 23, 0.85);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.project-overlay.active {
  opacity: 1;
}

.project-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease;
}

.project-overlay.active .project-actions {
  transform: translateY(0);
  opacity: 1;
}

.project-btn {
  padding: 10px 18px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-btn.primary {
  background-color: #1f6feb;
  color: white;
}

.project-btn.primary:hover {
  background-color: #388bfd;
}

.project-btn.secondary {
  background-color: #21262d;
  color: #e6edf3;
  border: 1px solid #30363d;
}

.project-btn.secondary:hover {
  background-color: #30363d;
  border-color: #8b949e;
}

.icon {
  font-size: 0.8em;
  transition: transform 0.3s ease;
}

.project-btn:hover .icon {
  transform: translateX(3px) translateY(-3px);
}

.project-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  margin: 0 0 15px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e6edf3;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: #58a6ff;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8b949e;
  margin: 0;
  flex-grow: 1;
}

.project-tech-wrapper {
  padding: 0 24px 24px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-top: 1px solid #30363d;
  padding-top: 16px;
}

.tech-item {
  padding: 4px 10px;
  background-color: #21262d;
  border-radius: 20px;
  font-size: 0.7rem;
  color: #8b949e;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .project-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .project-image {
    height: 180px;
  }
  
  .project-content {
    padding: 20px;
  }
  
  .project-tech-wrapper {
    padding: 0 20px 20px;
  }
  
  .project-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 640px) {
  .project-image {
    height: 220px;
  }
}

@media (max-width: 414px) {
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 375px) {
  .project-image {
    height: 180px;
  }
  
  .project-content,
  .project-tech-wrapper {
    padding: 16px;
  }
  
  .project-tech-wrapper {
    padding-top: 0;
  }
}
</style>