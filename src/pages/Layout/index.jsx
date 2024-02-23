import { Outlet, Link } from "react-router-dom";
import Sign from "../../components/Sign";

const Layout = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Inventory",
      link: "/inventory",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    // },
  ];
  return (
    <>
      <nav className="text-white px-8 py-4 border border-white border-t-0 border-l-0 border-r-0 border-b-1 flex justify-between">
        <ul className="flex gap-2">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>
                  <div className="border px-4 py-2 rounded hover:bg-slate-100 hover:text-black cursor-pointer">
                    {item.name}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Sign />
      </nav>

      <div className="h-full w-full flex items-center justify-center text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
