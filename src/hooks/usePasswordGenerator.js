import { useState } from "react";

export const usePasswordGenerator = () => {
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";

    if (includeAlphabets) characterPool += alphabets;
    if (includeNumbers) characterPool += numbers;
    if (includeSpecial) characterPool += special;

    if (characterPool === "") {
      setError("Please select at least one password criteria!");
      return;
    }

    setError("")
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const clearPassword = () => {
    setPassword("");
    setError("");
  };

  return {
    includeAlphabets,
    setIncludeAlphabets,
    includeNumbers,
    setIncludeNumbers,
    includeSpecial,
    setIncludeSpecial,
    passwordLength,
    setPasswordLength,
    password,
    generatePassword,
    clearPassword,
    error,
  };
};