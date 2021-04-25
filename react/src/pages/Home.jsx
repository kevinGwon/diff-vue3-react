import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/custom-hook-params">Params</Link>
      </li>
      <li>
        <Link to="/custom-hook-inputs">Inputs</Link>
      </li>
    </ul>
  );
};

export default Home;
