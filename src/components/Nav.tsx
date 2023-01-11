import { Link } from "react-router-dom";

export function Nav({ currentURL }: NavProps) {
  console.log(currentURL);
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          className={`nav-link ${currentURL === "/" ? "active" : ""} `}
          aria-current="page"
          to="/"
        >
          Search Symbols
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          Charts
        </a>
      </li>
    </ul>
  );
}

interface NavProps {
  currentURL: string;
}
