<template>
  <div class="contact-view">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">Contact Me</h1>
        <p class="page-subtitle">Let's discuss your project or opportunity</p>
      </div>
    </div>

    <div class="contact-content">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-info">
            <h2 class="section-title">Get In Touch</h2>
            <p class="contact-description">
              I'm currently available for freelance work and full-time opportunities.
              Feel free to reach out if you have a project in mind or just want to connect.
            </p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div class="contact-text">
                  <h3>Email</h3>
                  <p><a href="mailto:javieralbertoni@gmail.com">javieralbertoni@gmail.com</a></p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div class="contact-text">
                  <h3>Phone</h3>
                  <p><a href="tel:+54113059-9215">+54 (11) 3059-9215</a></p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <h3>Location</h3>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://github.com/Habbi2" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/javier-albertoni-464b98141" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div class="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/ContactForm.vue';

export default defineComponent({
  name: 'ContactView',
  components: {
    ContactForm
  }
});
</script>

<style scoped>
.contact-view {
  padding-top: 80px;
  background-color: #121212; /* Dark background */
  min-height: 100vh;
  color: #e0e0e0; /* Lighter text for dark background */
}

.hero-section {
  padding: 80px 0 60px;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Add a subtle pattern overlay to the hero section */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 20px;
  background: linear-gradient(90deg, #ffffff, #64B6FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
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

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  padding: 80px 0;
  position: relative;
}

/* Add subtle animated background elements */
.contact-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 10% 20%, rgba(30, 144, 255, 0.03) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(30, 144, 255, 0.03) 0%, transparent 40%);
  pointer-events: none;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: start;
  max-width: 100%; /* Ensure container doesn't exceed viewport width */
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 20px;
  color: #e0e0e0; /* Lighter text color for dark background */
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 4px;
  background-color: #3498db;
  border-radius: 2px;
}

.contact-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #aaa; /* Lighter gray for dark mode */
  margin: 30px 0;
}

.contact-details {
  margin: 40px 0;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(52, 152, 219, 0.15); /* More visible background */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 20px;
  color: #3498db;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  background-color: rgba(52, 152, 219, 0.25);
  transform: scale(1.05);
}

.contact-text h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 5px;
  color: #e0e0e0; /* Lighter text color */
}

.contact-text p {
  margin: 0;
  color: #aaa; /* Lighter gray text */
  font-size: 1rem;
}

.contact-text a {
  color: #64B6FF; /* Brighter blue for better visibility on dark background */
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.contact-text a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #64B6FF;
  transition: width 0.3s ease;
}

.contact-text a:hover {
  color: #3498db;
}

.contact-text a:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #2a2a2a; /* Darker background for social links */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(52, 152, 219, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link svg {
  width: 22px;
  height: 22px;
  fill: #aaa; /* Lighter fill color */
  transition: fill 0.3s ease, transform 0.3s ease;
  z-index: 1;
  position: relative;
}

.social-link:hover {
  transform: translateY(-5px);
  background-color: #333; /* Slightly lighter on hover */
}

.social-link:hover::before {
  opacity: 1;
}

.social-link:hover svg {
  fill: #3498db;
  transform: scale(1.1);
}

.form-wrapper {
  position: relative;
  max-width: 100%;
  width: 100%;
  overflow: visible; /* Allow form to be fully visible */
}

.form-wrapper > :deep(.contact-form-container) {
  max-width: 100%; /* Override the max-width in ContactForm component */
  width: 100%;
}

/* Enhanced Responsive Styles */
@media (max-width: 1200px) {
  .container {
    max-width: 90%;
  }
}

@media (max-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .contact-info {
    order: 1;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-wrapper {
    order: 0;
  }

  .contact-content {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0 40px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-content {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    text-align: center;
  }
  
  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-description {
    text-align: center;
    font-size: 1rem;
  }
  
  .contact-details {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .hero-section {
    padding: 50px 0 30px;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .contact-text h3 {
    font-size: 1.1rem;
  }

  .contact-text p {
    font-size: 0.9rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
  }

  .social-link svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .contact-view {
    padding-top: 60px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .page-subtitle {
    font-size: 0.9rem;
    max-width: 100%;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .contact-description {
    margin: 20px 0;
  }

  .contact-details {
    margin: 30px 0;
  }

  .contact-item {
    margin-bottom: 20px;
  }

  .contact-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    margin-right: 15px;
  }

  .contact-content {
    padding: 40px 0;
  }
}

/* Optimize for touch devices and better interactions */
@media (hover: hover) {
  .social-link:active {
    transform: scale(0.95);
  }
}

/* Optimize for print layout */
@media print {
  .contact-view {
    background-color: white;
    color: black;
    padding-top: 20px;
  }

  .hero-section {
    background: none;
    padding: 20px 0;
  }

  .page-title {
    color: black;
    -webkit-text-fill-color: black;
    font-size: 24pt;
  }

  .social-links, .form-wrapper {
    display: none;
  }

  .contact-layout {
    display: block;
  }

  .contact-icon {
    border: 1px solid #ccc;
  }

  .contact-info {
    width: 100%;
  }
}

/* Fix for landscape mode on mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-section {
    padding: 30px 0;
  }

  .page-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .contact-content {
    padding: 30px 0;
  }

  .contact-layout {
    gap: 30px;
  }
}

/* Ensure better accessibility for keyboard navigation */
.social-link:focus-visible {
  outline: 2px solid #3498db;
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.3);
}

/* Better iOS support */
@supports (-webkit-touch-callout: none) {
  .page-title {
    /* Use a simpler effect for iOS devices that might struggle with gradient animation */
    background: linear-gradient(90deg, #ffffff, #64B6FF);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>