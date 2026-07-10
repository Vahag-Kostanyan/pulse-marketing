import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    color: isActive ? 'black' : 'gray',
  });

  return (
    <nav style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
      <div>
        <NavLink to="/" style={linkStyle} title="Hero Page">
          <span style={{ fontSize: '1.5rem', role: 'img', ariaLabel: 'logo' }}>🌟</span>
        </NavLink>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <NavLink to="/about-us" style={linkStyle}>About Us</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/portfolio" style={linkStyle}>Portfolio</NavLink>
        <NavLink to="/work" style={linkStyle}>Work</NavLink>
        <NavLink to="/process" style={linkStyle}>Process</NavLink>
        <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
        <NavLink to="/contact" style={linkStyle}>Let's Talk Together</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
