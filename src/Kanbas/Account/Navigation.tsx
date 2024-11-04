import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div className="account-navigation">
      <ul>
        {links.map((link) => (
          <li key={link} className={pathname.includes(link) ? "active" : ""}>
            <Link to={`/Kanbas/Account/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
