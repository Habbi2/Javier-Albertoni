<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled, 'nav-open': mobileNavOpen }">
    <div class="container">
      <div class="header-inner">
        <div class="logo" @click="scrollToTop">
          <span class="logo-text">J<span class="accent">.</span>A</span>
        </div>
        <nav class="main-nav">
          <ul>
            <li v-for="(item, index) in navItems" :key="index">
              <router-link :to="item.path" @click="closeNavIfMobile" :class="{ active: isCurrentRoute(item.path) }">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <div class="contact-btn">
            <router-link to="/contact" class="btn primary-btn" @click="closeNavIfMobile">
              Get In Touch
            </router-link>
          </div>
        </nav>
        <button class="mobile-menu-toggle" @click="toggleMobileNav" aria-label="Toggle navigation menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      isScrolled: false,
      mobileNavOpen: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
      document.body.style.overflow = this.mobileNavOpen ? 'hidden' : '';
    },
    closeNavIfMobile() {
      if (this.mobileNavOpen) {
        this.mobileNavOpen = false;
        document.body.style.overflow = '';
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    isCurrentRoute(path: string): boolean {
      return this.$route.path === path;
    }
  }
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background-color: transparent;
  text-align: center;
}

.header-scrolled {
  background-color: rgba(15, 32, 39, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

/* Apply the same background as the mobile menu when nav is open */
.nav-open {
  background: linear-gradient(135deg, #0f2027 0%, #203a43 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  letter-spacing: -1px;
}

.accent {
  color: #3498db;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.main-nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 40px;
  justify-content: center;
}

.main-nav a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.main-nav a:hover {
  color: white;
}

.main-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.main-nav a:hover::after,
.main-nav a.active::after {
  width: 100%;
}

.main-nav a.active {
  color: white;
}

.contact-btn {
  margin-left: 40px;
}

.primary-btn {
  background: linear-gradient(90deg, #3498db, #2980b9);
  color: white;
  padding: 12px 30px;
  border-radius: 35px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  min-width: 160px;
  text-align: center;
  display: inline-block;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(52, 152, 219, 0.5);
}

/* Mobile Navigation */
.mobile-menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1100;
}

.mobile-menu-toggle .bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: white;
  transition: all 0.3s ease;
  border-radius: 3px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .header {
    padding: 15px 0;
  }
  
  .header-inner {
    justify-content: space-between;
  }

  .mobile-menu-toggle {
    display: block;
    position: relative;
    z-index: 1200; /* Ensure toggle is above the navigation overlay */
  }

  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Full viewport height */
    background: linear-gradient(135deg, #0f2027 0%, #203a43 100%);
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center items horizontally */
    padding: 0; /* Remove padding to ensure full coverage */
    transition: opacity 0.4s ease, visibility 0.4s ease;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    z-index: 1100;
  }

  .nav-open .main-nav {
    opacity: 1;
    visibility: visible;
  }
  
  /* Hide logo when navigation is open */
  .nav-open .logo {
    opacity: 0;
    visibility: hidden;
  }

  .nav-open .mobile-menu-toggle .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-open .mobile-menu-toggle .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-open .mobile-menu-toggle .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .main-nav ul {
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-items: center; /* Center items horizontally */
    justify-content: center;
    margin-bottom: 30px; /* Add space between menu items and contact button */
    padding: 0;
  }

  .main-nav li {
    width: 100%;
    text-align: center; /* Center text in list items */
  }

  .main-nav a {
    display: block;
    font-size: 1.2rem;
    padding: 10px 0;
    text-align: center; /* Center text in links */
    width: 100%; /* Ensure links take full width */
  }

  .contact-btn {
    margin: 10px 0 0;
    width: 100%;
    max-width: 200px; /* Limit width to prevent overflow */
    text-align: center; /* Center text in button container */
  }

  .primary-btn {
    display: block;
    padding: 12px;
    width: 100%; /* Take full width of parent */
    text-align: center; /* Center text in button */
    box-sizing: border-box; /* Include padding in width calculation */
  }
}

/* Chrome device-specific responsive styles */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
  
  .main-nav ul {
    gap: 50px;
  }
}

/* Large screens and desktops */
@media (max-width: 1280px) {
  .container {
    max-width: 1100px;
  }
  
  .main-nav ul {
    gap: 35px;
  }
}

/* Medium screens (laptops) */
@media (max-width: 1024px) {
  .main-nav ul {
    gap: 30px;
  }
}

/* Medium-small screens (tablets, iPad Air/Pro) */
@media (max-width: 834px) {
  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Full viewport height */
    background: linear-gradient(135deg, #0f2027 0%, #203a43 100%);
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center items horizontally */
    padding: 0; /* Remove padding to ensure full coverage */
    transition: opacity 0.4s ease, visibility 0.4s ease;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    z-index: 1100;
  }
  
  .mobile-menu-toggle {
    display: block;
    position: relative;
    z-index: 1200;
  }
  
  .nav-open .logo {
    opacity: 0;
    visibility: hidden;
  }
  
  .main-nav ul {
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-items: center; /* Center items horizontally */
    justify-content: center;
    margin-bottom: 30px;
    padding: 0;
  }

  .main-nav li {
    width: 100%;
    text-align: center; /* Center text in list items */
  }

  .main-nav a {
    display: block;
    font-size: 1.2rem;
    padding: 10px 0;
    text-align: center; /* Center text in links */
    width: 100%; /* Ensure links take full width */
  }
  
  .contact-btn {
    margin: 10px 0 0;
    width: 100%;
    max-width: 200px; /* Limit width to prevent overflow */
    text-align: center; /* Center text in button container */
  }

  .primary-btn {
    display: block;
    padding: 12px;
    width: 100%; /* Take full width of parent */
    text-align: center; /* Center text in button */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .header {
    height: 60px;
    padding: 0;
  }
  
  .header-scrolled {
    height: 55px;
  }
  
  .logo-text {
    font-size: 1.8rem;
  }
}

/* Small phones (iPhone X, SE) */
@media (max-width: 375px) {
  .logo-text {
    font-size: 1.6rem;
  }
  
  .mobile-menu-toggle .bar {
    width: 22px;
    height: 2px;
    margin: 4px 0;
  }
}

/* Extra small phones */
@media (max-width: 320px) {
  .logo-text {
    font-size: 1.4rem;
  }
  
  .container {
    padding: 0 12px;
  }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .main-nav a, .logo-text {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>