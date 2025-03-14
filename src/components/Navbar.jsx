import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="JobTrackr Logo" width="40" height="40" />
          <span className="app-name">JobTrackr</span>
        </Link>
        {!isHomePage && (
          <div className="nav-links">
            <Link to="/add-job">Add Job</Link>
            <Link to="/view-jobs">View Jobs</Link>
            <Link to="/statistics">Statistics</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;