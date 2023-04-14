import { Link } from "react-router-dom";
import Basket from "./Basket";

function Home({ user, setUser }) {
  if (user === "") {
    return (
      <p>
        <Link to={`/users`}>Please login</Link>{" "}
      </p>
    );
  }
  return (
    <div>
      <h1>Welcome {user}!</h1>
      <p>
        <Link to={`/users/${user}/basket`}>View your basket</Link>{" "}
      </p>
    </div>
  );
}
export default Home;
