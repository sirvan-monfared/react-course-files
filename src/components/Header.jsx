import MenuItem from "./MenuItem.jsx";
import Button from './Button.jsx'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Dashboard</h1>
          </div>
          <nav className="nav">
            <MenuItem className="active">Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>

          </nav>
          <div className="header-actions">
            <Button className="btn-secondary">Sign In</Button>
            <Button className="btn-primary">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
