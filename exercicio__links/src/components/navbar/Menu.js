import NavHeader from "./NavHeader";

export default function Menu() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
      <div className="container">
        <NavHeader />
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Gallery</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
