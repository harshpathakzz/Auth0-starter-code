import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, loginWithPopup } =
    useAuth0();

  return (
    <div className="App">
      <h1>Hello World</h1>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
          <button onClick={() => loginWithPopup()}>Login with Popup</button>
        </div>
      )}
    </div>
  );
}

export default App;
