import { useState } from 'react';

function usePasswordValidator() {
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (password : any) => {
    const minLength = 8;
    let hasNumber = false;
    let hasUppercase = false;
    let hasLowercase = false;
  
    // Check each character of the password
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      // Check if character is a number
      if (!isNaN(parseInt(char))) {
        hasNumber = true;
      }
  
      // Check if character is an uppercase letter
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUppercase = true;
      }
  
      // Check if character is a lowercase letter
      if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        hasLowercase = true;
      }
    }
  
    setIsValid(
      password.length >= minLength &&
      hasNumber &&
      hasUppercase &&
      hasLowercase
    );
  };

  return { isValid, validatePassword };
}

export default usePasswordValidator;