<template>
  <div class="contact-form-container">
    <div class="form-header">
      <h3 class="form-title">Get In Touch</h3>
      <p class="form-subtitle">I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.</p>
    </div>
    
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group" :class="{ 'has-error': errors.name, 'is-focused': focused === 'name' }">
        <label for="name">Your Name</label>
        <div class="input-container">
          <span class="input-icon">👤</span>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            @focus="setFocus('name')" 
            @blur="clearFocus"
            :class="{ 'is-valid': isFieldValid('name') }"
            placeholder="Enter your full name"
            required
          />
          <span class="valid-icon" v-if="isFieldValid('name')">✓</span>
        </div>
        <p class="error-message" v-if="errors.name">{{ errors.name }}</p>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.email, 'is-focused': focused === 'email' }">
        <label for="email">Email Address</label>
        <div class="input-container">
          <span class="input-icon">✉️</span>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            @focus="setFocus('email')" 
            @blur="clearFocus"
            :class="{ 'is-valid': isFieldValid('email') }"
            placeholder="Enter your email address"
            required
          />
          <span class="valid-icon" v-if="isFieldValid('email')">✓</span>
        </div>
        <p class="error-message" v-if="errors.email">{{ errors.email }}</p>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.subject, 'is-focused': focused === 'subject' }">
        <label for="subject">Subject</label>
        <div class="input-container">
          <span class="input-icon">📝</span>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            @focus="setFocus('subject')" 
            @blur="clearFocus"
            :class="{ 'is-valid': isFieldValid('subject') }"
            placeholder="What is this regarding?"
            required
          />
          <span class="valid-icon" v-if="isFieldValid('subject')">✓</span>
        </div>
        <p class="error-message" v-if="errors.subject">{{ errors.subject }}</p>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.message, 'is-focused': focused === 'message' }">
        <label for="message">Message</label>
        <div class="input-container textarea-container">
          <span class="input-icon textarea-icon">💬</span>
          <textarea 
            id="message" 
            v-model="form.message" 
            rows="5" 
            @focus="setFocus('message')" 
            @blur="clearFocus"
            :class="{ 'is-valid': isFieldValid('message') }"
            placeholder="Tell me about your project or inquiry"
            required
          ></textarea>
        </div>
        <div class="textarea-footer">
          <p class="error-message" v-if="errors.message">{{ errors.message }}</p>
          <p class="char-count" :class="{ 'near-limit': form.message.length > 900 }">
            {{ form.message.length }}/1000
          </p>
        </div>
      </div>
      
      <div class="form-actions">
        <button 
          type="submit" 
          class="submit-btn" 
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="spinner"></span>
          <span v-else>{{ submitButtonText }}</span>
        </button>
      </div>
    </form>
    
    <div class="form-success" v-if="formSubmitted">
      <div class="success-icon">✓</div>
      <h3>Message Sent Successfully!</h3>
      <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
      <button class="reset-btn" @click="resetForm">Send Another Message</button>
    </div>
    
    <div class="form-error" v-if="formError">
      <div class="error-icon">!</div>
      <h3>Message Failed to Send</h3>
      <p>There was an error sending your message. Please try again or contact me directly at javieralbertoni@gmail.com</p>
      <button class="reset-btn" @click="retryForm">Try Again</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Configure EmailJS with your service ID, template ID and public key
// Using EmailJS's built-in email service to avoid Gmail API authentication issues
const EMAILJS_SERVICE_ID = 'service_swvkgjr'; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_huspw8c'; // Create this template in EmailJS
const EMAILJS_USER_ID = 'V9EF7LaENOBJNwFaS'; // Your EmailJS User ID (public key)

export default defineComponent({
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      } as FormData,
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      touched: {
        name: false,
        email: false,
        subject: false,
        message: false
      },
      focused: '',
      isSubmitting: false,
      formSubmitted: false,
      formError: false,
      submitButtonText: 'Send Message'
    };
  },
  methods: {
    setFocus(field: string) {
      this.focused = field;
      this.touched[field as keyof typeof this.touched] = true;
    },
    clearFocus() {
      this.focused = '';
      this.validateForm();
    },
    validateForm() {
      let isValid = true;
      
      // Reset all errors
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Validate name
      if (this.touched.name && !this.form.name.trim()) {
        this.errors.name = 'Name is required';
        isValid = false;
      } else if (this.touched.name && this.form.name.trim().length < 2) {
        this.errors.name = 'Name must be at least 2 characters';
        isValid = false;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.touched.email && !this.form.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (this.touched.email && !emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      // Validate subject
      if (this.touched.subject && !this.form.subject.trim()) {
        this.errors.subject = 'Subject is required';
        isValid = false;
      } else if (this.touched.subject && this.form.subject.trim().length < 3) {
        this.errors.subject = 'Subject must be at least 3 characters';
        isValid = false;
      }
      
      // Validate message
      if (this.touched.message && !this.form.message.trim()) {
        this.errors.message = 'Message is required';
        isValid = false;
      } else if (this.touched.message && this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters';
        isValid = false;
      } else if (this.form.message.length > 1000) {
        this.errors.message = 'Message cannot be longer than 1000 characters';
        isValid = false;
      }
      
      return isValid;
    },
    isFieldValid(field: string) {
      const isTouched = this.touched[field as keyof typeof this.touched];
      const hasError = Boolean(this.errors[field as keyof typeof this.errors]);
      const hasValue = Boolean(this.form[field as keyof FormData].trim());
      
      return isTouched && !hasError && hasValue;
    },
    async submitForm() {
      // Validate all fields before submission
      this.touched = {
        name: true,
        email: true,
        subject: true,
        message: true
      };
      
      // If validation fails, don't submit
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      this.submitButtonText = 'Sending...';
      this.formError = false;
      
      try {
        // Prepare template parameters for EmailJS
        const templateParams = {
          to_name: 'Javier',
          to_email: 'javieralbertoni@gmail.com',
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          reply_to: this.form.email
        };
        
        // Send email using EmailJS - note we're using emailjs.sendForm instead of emailjs.send
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_USER_ID
        );
        
        // Form submission successful
        this.formSubmitted = true;
        this.isSubmitting = false;
        
        // Reset form data
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        // Reset touched states
        this.touched = {
          name: false,
          email: false,
          subject: false,
          message: false
        };
      } catch (error) {
        // Handle submission error
        this.isSubmitting = false;
        this.formError = true;
        this.submitButtonText = 'Try Again';
        console.error('Error submitting form:', error);
      }
    },
    resetForm() {
      this.formSubmitted = false;
      this.submitButtonText = 'Send Message';
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.touched = {
        name: false,
        email: false,
        subject: false,
        message: false
      };
    },
    retryForm() {
      this.formError = false;
      this.submitButtonText = 'Send Message';
    }
  }
});
</script>

<style scoped>
.contact-form-container {
  background-color: #1f1f1f;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 100%;
  max-width: 100%; /* Changed from 600px to 100% to prevent cutoff */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  box-sizing: border-box; /* Ensure padding is included in width calculation */
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 15px;
  color: #e0e0e0;
  position: relative;
  display: inline-block;
}

.form-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #3498db;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.form-subtitle {
  font-size: 1rem;
  color: #b0b0b0;
  margin: 0;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #d0d0d0;
  transition: color 0.3s ease;
}

.form-group.is-focused label {
  color: #3498db;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: #95a5a6;
  transition: color 0.3s ease;
}

.textarea-icon {
  top: 20px;
  transform: none;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 12px 15px 12px 45px;
  border: 1px solid #444444;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #2a2a2a;
  color: #e0e0e0;
  box-sizing: border-box; /* Ensure padding is included in width calculation */
}

.input-container textarea {
  resize: vertical;
  min-height: 120px;
}

.input-container input:focus,
.input-container textarea:focus {
  outline: none;
  border-color: #3498db;
  background-color: #333333;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.form-group.is-focused .input-icon {
  color: #3498db;
}

.form-group.has-error label {
  color: #e74c3c;
}

.form-group.has-error .input-container input,
.form-group.has-error .input-container textarea {
  border-color: #e74c3c;
  background-color: #2a2a2a;
}

.form-group.has-error .input-icon {
  color: #e74c3c;
}

.error-message {
  font-size: 0.8rem;
  color: #e74c3c;
  margin: 5px 0 0;
  padding-left: 10px;
  opacity: 0;
  transform: translateY(-5px);
  animation: showError 0.3s forwards;
}

@keyframes showError {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.valid-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #2ecc71;
  font-weight: bold;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.is-valid {
  border-color: #2ecc71 !important;
}

.textarea-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5px;
}

.char-count {
  font-size: 0.8rem;
  color: #95a5a6;
  margin: 5px 0 0;
  text-align: right;
  flex-shrink: 0;
}

.char-count.near-limit {
  color: #e67e22;
}

.form-actions {
  margin-top: 10px;
  text-align: center;
}

.submit-btn {
  background: linear-gradient(90deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-width: 180px;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.form-success {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  animation: slideIn 0.5s forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.success-icon {
  width: 80px;
  height: 80px;
  background-color: #2ecc71;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.form-success h3 {
  font-size: 1.6rem;
  margin: 0 0 10px;
  color: #e0e0e0;
}

.form-success p {
  color: #b0b0b0;
  margin: 0 0 25px;
}

.reset-btn {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

/* Improved responsiveness for medium screens */
@media (max-width: 768px) {
  .contact-form-container {
    padding: 30px;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .form-title {
    font-size: 1.6rem;
  }
  
  .form-subtitle {
    font-size: 0.95rem;
  }
}

/* Enhanced mobile responsiveness */
@media (max-width: 480px) {
  .contact-form-container {
    padding: 20px 15px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    width: 100%; /* Ensure full width on mobile */
    max-width: 100%;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .form-subtitle {
    font-size: 0.9rem;
  }
  
  .form-group label {
    font-size: 0.85rem;
  }
  
  .input-container input,
  .input-container textarea {
    padding: 10px 10px 10px 40px;
    font-size: 0.95rem;
  }
  
  .input-icon {
    left: 12px;
    font-size: 0.9rem;
  }
  
  .textarea-icon {
    top: 15px;
  }
  
  .input-container textarea {
    min-height: 100px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px 20px;
    font-size: 0.95rem;
    min-width: unset;
  }
  
  .textarea-footer {
    flex-direction: column;
  }
  
  .error-message {
    margin-bottom: 5px;
    padding-left: 5px;
  }
  
  .char-count {
    align-self: flex-end;
  }
  
  /* Fix for form success message on small screens */
  .form-success {
    padding: 20px 15px;
  }
  
  .success-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .form-success h3 {
    font-size: 1.3rem;
  }
  
  .form-success p {
    font-size: 0.9rem;
  }
}

/* Extra small devices */
@media (max-width: 360px) {
  .contact-form-container {
    padding: 15px 12px;
  }
  
  .form-title {
    font-size: 1.3rem;
  }
  
  .form-subtitle {
    font-size: 0.85rem;
    line-height: 1.4;
  }
  
  .contact-form {
    gap: 15px;
  }
  
  .input-container input,
  .input-container textarea {
    padding: 10px 8px 10px 35px;
    font-size: 0.9rem;
    border-radius: 6px;
  }
  
  .input-icon {
    left: 10px;
    font-size: 0.85rem;
  }
}

/* Ensure form inputs work well with iOS devices */
@supports (-webkit-touch-callout: none) {
  .input-container input,
  .input-container textarea {
    font-size: 16px; /* Prevents zoom on focus in iOS */
  }
  
  .submit-btn {
    -webkit-appearance: none; /* Fixes iOS default button styling */
    appearance: none;
  }
}

/* Fix for landscape mode on mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .contact-form-container {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  .form-header {
    margin-bottom: 15px;
  }
  
  .contact-form {
    gap: 12px;
  }
  
  .input-container textarea {
    min-height: 80px;
  }
}

.form-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  animation: slideIn 0.5s forwards;
}

.error-icon {
  width: 80px;
  height: 80px;
  background-color: #e74c3c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Responsive styles for the error state */
@media (max-width: 480px) {
  .form-error {
    padding: 20px 15px;
  }
  
  .error-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    margin-bottom: 15px;
  }
}

/* Fix for landscape mode on mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .form-error {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>