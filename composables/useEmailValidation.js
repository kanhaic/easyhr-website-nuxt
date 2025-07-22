// List of free email domains to block
const FREE_EMAIL_DOMAINS = [
  // Gmail domains
  'gmail.com',
  'googlemail.com',
  
  // Yahoo domains
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.co.uk',
  'yahoo.ca',
  'yahoo.com.au',
  'ymail.com',
  
  // Microsoft domains
  'hotmail.com',
  'outlook.com',
  'outlook.co.in',
  'outlook.co.uk',
  'live.com',
  'live.co.in',
  'live.co.uk',
  'msn.com',
  
  // Apple
  'icloud.com',
  'me.com',
  'mac.com',
  
  // AOL
  'aol.com',
  'aim.com',
  
  // Mail services
  'mail.com',
  'protonmail.com',
  'proton.me',
  'tutanota.com',
  'tutanota.de',
  'pm.me',
  
  // India specific
  'rediffmail.com',
  'rediff.com',
  'sify.com',
  
  // Other common free providers
  'zoho.com',
  'yandex.com',
  'yandex.ru',
  'gmx.com',
  'gmx.de',
  'web.de',
  't-online.de',
  '1und1.de',
  'freenet.de',
  
  // Temp/disposable email services
  '10minutemail.com',
  'guerrillamail.com',
  'mailinator.com',
  'tempmail.org',
  'temp-mail.org',
  'throwaway.email',
  'getnada.com',
  '33mail.com',
  'spamgourmet.com',
  
  // Social media platforms that offer email
  'facebook.com',
  'twitter.com',
  
  // Regional free email providers
  'mail.ru',
  'inbox.ru',
  'bk.ru',
  'list.ru',
  'rambler.ru',
  'ukr.net',
  'bigmir.net',
  'i.ua',
  'meta.ua',
  'naver.com',
  'daum.net',
  'hanmail.net',
  'qq.com',
  '163.com',
  '126.com',
  'sina.com',
  'sina.com.cn',
  'sohu.com',
  'yeah.net',
  'foxmail.com',
  'aliyun.com',
  
  // Add more as needed
];

/**
 * Nuxt composable for business email validation
 * @returns {Object} - Validation functions and utilities
 */
export const useEmailValidation = () => {
  /**
   * Validates if an email address uses a business/company domain
   * @param {string} email - The email address to validate
   * @returns {Object} - Validation result with isValid boolean and error message
   */
  const validateBusinessEmail = (email) => {
    if (!email || typeof email !== 'string') {
      return {
        isValid: false,
        error: 'Email is required'
      };
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        isValid: false,
        error: 'Please enter a valid email address'
      };
    }

    // Extract domain from email
    const domain = email.toLowerCase().split('@')[1];
    
    if (!domain) {
      return {
        isValid: false,
        error: 'Please enter a valid email address'
      };
    }

    // Check if domain is in the free email list
    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      return {
        isValid: false,
        error: 'Please use your company email address instead of a personal email'
      };
    }

    return {
      isValid: true,
      error: null
    };
  };

  /**
   * Checks if an email domain is a free email provider
   * @param {string} email - The email address to check
   * @returns {boolean} - True if it's a free email domain
   */
  const isFreeEmailDomain = (email) => {
    if (!email || typeof email !== 'string') return false;
    
    const domain = email.toLowerCase().split('@')[1];
    return FREE_EMAIL_DOMAINS.includes(domain);
  };

  /**
   * Gets the domain from an email address
   * @param {string} email - The email address
   * @returns {string} - The domain part of the email
   */
  const getEmailDomain = (email) => {
    if (!email || typeof email !== 'string') return '';
    return email.toLowerCase().split('@')[1] || '';
  };

  /**
   * Reactive email validation with error state management
   * @param {Ref} emailRef - Reactive email reference
   * @returns {Object} - Reactive validation state and functions
   */
  const useReactiveEmailValidation = (emailRef) => {
    const emailError = ref('');
    const isValidating = ref(false);

    const validateEmail = () => {
      if (!emailRef.value) {
        emailError.value = '';
        return true;
      }

      const validation = validateBusinessEmail(emailRef.value);
      emailError.value = validation.error || '';
      return validation.isValid;
    };

    const clearError = () => {
      emailError.value = '';
    };

    // Watch for changes and clear errors when user starts typing
    watch(emailRef, () => {
      if (emailError.value) {
        emailError.value = '';
      }
    });

    return {
      emailError: readonly(emailError),
      isValidating: readonly(isValidating),
      validateEmail,
      clearError
    };
  };

  return {
    validateBusinessEmail,
    isFreeEmailDomain,
    getEmailDomain,
    useReactiveEmailValidation,
    // Export the domains list for potential custom validation
    FREE_EMAIL_DOMAINS: readonly(FREE_EMAIL_DOMAINS)
  };
};