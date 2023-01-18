import { Link } from "react-router-dom";

export function Nav({ currentURL }: NavProps) {
  console.log(currentURL);
  return (
    // <ul className="nav">
    //   <li className="nav-item">
    //     <Link
    //       className={`nav-link ${currentURL === "/" ? "active" : ""} `}
    //       aria-current="page"
    //       to="/"
    //     >
    //       Search Symbols
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       className={`nav-link ${currentURL === "/saved" ? "active" : ""} `}
    //       aria-current="page"
    //       to="/saved"
    //     >
    //       Saved Charts
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <a className="nav-link disabled" href="#">
    //       Charts
    //     </a>
    //   </li>
    // </ul>
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3 ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${currentURL === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Search Symbols
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentURL === "/saved" ? "active" : ""
                }`}
                to="/saved"
              >
                Saved Charts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface NavProps {
  currentURL: string;
}
