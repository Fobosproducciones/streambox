import React, { useEffect } from "react";
import "../styles/Loginstyles.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { loginWithGitHub } from "../firebase/Client";
import useUser, { USER_STATES } from "../hooks/useUsers";

const Login = () => {
  const user = useUser();
  const history = useHistory();
  useEffect(() => {
    user && history.push("/home");
  }, [user]);

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err);
    });
  };

  const handleGuest = () => {
    history.push("/home");
  };
  return (
    <section>
      <Typography variant="h2" id="glitch">
        StreamBox
      </Typography>
      <div className="login-container">
        {user === USER_STATES.NOT_LOGGED && (
          <>
            <Button onClick={handleClick}>
              <GitHubIcon className="githublogo" />
              Login with GitHub
            </Button>
            <button onClick={handleGuest} className="guest">
              Login as guest
            </button>
          </>
        )}
        {user === USER_STATES.NOT_KNOWN && <span>Loading...</span>}
      </div>
    </section>
  );
};

export default Login;
