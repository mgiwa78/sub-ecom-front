import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/home/home.component";
import SignInSignUp from "./routes/signin-signup/signin-signup.component";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<SignInSignUp />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
