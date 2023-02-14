import Link from "next/link";
import { useAuth } from "../../context/ProvideContext";
import { optionNavbar } from "../../form/dropdown-user";

const DropDown = () => {
  const { logOut } = useAuth();

  const logout = async () => {
    try {
      await logOut();
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <>
      {optionNavbar.map((item) => {
        if ("#".endsWith(item.href)) {
          return (
            <li key={item.label}>
              <div
                className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={logout}
              >
                {item.label}
              </div>
            </li>
          );
        } else {
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          );
        }
      })}
    </>
  );
};

export default DropDown;
