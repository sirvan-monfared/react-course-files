export default function MenuItem({children, className}) {

  return (
    <a href="#" className={`nav-link ${className ? className : ''}`}>
      {children}
    </a>
  );
}
