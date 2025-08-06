import { useEffect, useState } from "react";

const useHeaderColor = (): string => {
  const [headerColor, setHeaderColor] = useState<string>("none");
  
  // to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 8) {
        setHeaderColor("#302e2e");
      } else {
        setHeaderColor("none");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerColor;
};

export default useHeaderColor;
