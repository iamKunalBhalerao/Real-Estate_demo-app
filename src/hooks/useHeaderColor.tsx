import { useEffect, useState } from "react";

const useHeaderColor = (): string => {
  const [headerColor, setHeaderColor] = useState<string>("none");
  
  // to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (typeof window !== 'undefined' && window.scrollY > 8) {
        setHeaderColor("#302e2e");
      } else {
        setHeaderColor("none");
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return headerColor;
};

export default useHeaderColor;
