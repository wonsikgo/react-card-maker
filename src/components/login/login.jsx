import React from "react";
import Header from "../header/header";

const Login = () => {
  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button>Google</button>
          </li>
          <li>
            <button>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
