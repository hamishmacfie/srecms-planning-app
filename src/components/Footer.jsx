import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] p-2 text-xs text-center bg-neutral-200">
      <NavLink to="https://srecms.co.uk" target="_blank">
        SRECMS
      </NavLink>
    </footer>
  );
};
export default Footer;
