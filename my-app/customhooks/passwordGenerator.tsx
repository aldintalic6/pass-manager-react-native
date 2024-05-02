import { useState } from 'react';

function usePasswordGenerator() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const passwordLength = Math.floor(Math.random() * 10) + 5; 
    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword = newPassword + characters[randomIndex];
    }
    setPassword(newPassword);
    setStrength(calculateStrength(newPassword));
  };

  const calculateStrength = (password : any) => {
    const length = password.length;
    if (length < 6) return 'Weak';
    if (length < 10) return 'Medium';
    return 'Strong';
  };

  return { password, strength, generatePassword };
}

export default usePasswordGenerator;
