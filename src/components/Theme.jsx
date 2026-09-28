 function Theme({ theme, setTheme }) {

  const toggleTheme = () => {

     const newTheme = theme === "light" ? "dark" : "light";

     setTheme(newTheme);

   localStorage.setItem("theme", newTheme);
  };

   return (
     <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
 };

 export default Theme;
