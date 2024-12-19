import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    if (pwd.length < 6) return "Weak";
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return "Strong";
    return "Moderate";
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  return (
    <>
      <div>
        <h1>Password Strength Checker</h1>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />
        <p>Strength : {strength}</p>
      </div>
    </>
  );
}

export default App;
