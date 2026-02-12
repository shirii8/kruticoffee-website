import { useContext, useState } from "react";
import crossIcon from "../../assets/frontend_assets/cross_icon.png";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const {url, setToken} = useContext(StoreContext)
  
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value }); // FIXED: use name/value variables
  };

  const onLogin = async (e) => {
  e.preventDefault();

  try {
    const endpoint =
      currState === "Login"
        ? "/api/user/login"
        : "/api/user/register";

    const response = await axios.post(url + endpoint, data);

    if (response.data.token) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message || "Invalid credentials");
    }
  } catch (err) {
    console.error("LOGIN ERROR:", err.response || err.message);
    alert("Backend not reachable or CORS error");
  }
};


  return (
    <div className="login-popup fixed inset-0 z-50 bg-[#00000090] flex justify-center items-center">
      <form
        onSubmit={onLogin}
        className="login-popup-container relative bg-[#221512] shadow-2xl border border-[#4c2b23] p-8 rounded-lg w-96 text-white"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="login-popup-title text-2xl font-semibold">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={crossIcon}
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="login-inputs">
          {currState !== "Login" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              className="mb-1 rounded-2xl px-4 py-2"
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            className="mb-1 rounded-2xl px-4 py-2"
            type="email"
            placeholder="Your Mail"
            required
          />

          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            className="rounded-2xl px-4 py-2"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="mt-4 text-[18px] w-full bg-[#b49e94] rounded-full px-4 py-2">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="mt-4 flex gap-2 text-sm">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>

        {currState === "Login" ? (
          <p className="mt-3">
            Create a new account?
            <span
              className="ml-2 text-neutral-400 cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="mt-3">
            Already have an account?
            <span
              className="ml-2 text-neutral-400 cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
