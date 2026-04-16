import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Welcome, {user.name}!</h1>
      <p>Current Language: {lang}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
        Toggle Language
      </button>
    </div>
  );
};