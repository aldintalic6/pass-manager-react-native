import { useState } from 'react';

function usePasswordValidator() {
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (password : any) => {
    const minLength = 8;
    let hasNumber = false;
    let hasUppercase = false;
    let hasLowercase = false;
  
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      if (!isNaN(parseInt(char))) {
        hasNumber = true;
      }
  
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUppercase = true;
      }
  
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