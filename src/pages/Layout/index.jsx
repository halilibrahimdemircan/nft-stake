import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="text-white px-8 py-4 border border-white border-t-0 border-l-0 border-r-0 border-b-1">
        <ul className="flex gap-2">
          {links.map((item, index) => {
            return (
              <li
                className="border px-4 py-2 rounded hover:bg-slate-100 hover:text-black cursor-pointer"
                key={index}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
