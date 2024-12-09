import { useState } from 'react';

function useMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return { isMenuOpen, toggleMenu };
}

export default useMenuToggle;