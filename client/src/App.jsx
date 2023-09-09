import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, loginWithPopup, user } =
    useAuth0();

  // Convert user object to a JSON string
  const userJSON = JSON.stringify(user, null, 2);

  // Log user JSON to the console
  console.log(user);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
          <p>
            Picture: <img src={user.picture} alt={user.name} />
          </p>
          <p>User JSON:</p>
          <pre>{userJSON}</pre> {/* Display user JSON in a pre element */}
          <button onClick={() => logout()}>Logout</button>
        </div>
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
