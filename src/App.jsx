import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"dark");
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]); 
  return (
    <div>
      
      <Hero />
    </div>
  )
}

export default App
