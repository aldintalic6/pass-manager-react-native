// hibpService.ts
import sha1 from 'js-sha1';

const HIBP_API_URL = 'https://api.pwnedpasswords.com/range/';

export const checkPasswordPwned = async (password: string): Promise<boolean> => {
  const sha1Hash = sha1(password).toUpperCase();
  const prefix = sha1Hash.slice(0, 5);
  const suffix = sha1Hash.slice(5);

  try {
    const response = await fetch(`${HIBP_API_URL}${prefix}`);
    const text = await response.text();
    const hashes = text.split('\r\n');

    for (const hash of hashes) {
      const [hashSuffix, count] = hash.split(':');
      if (hashSuffix === suffix) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Error checking password with HIBP API', error);
    throw new Error('Failed to check password');
  }
};
