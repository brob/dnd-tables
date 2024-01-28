import { useEffect, useState } from "react";

export default function Navigation({ pages }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <button
        onClick={handleClick}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal mt-5 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-1"
        type="button"
      >
        Pick a table{" "}
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="currentColor" d="M5 6.5H19V8H5V6.5Z" />
<path fill="currentColor" d="M5 16.5H19V18H5V16.5Z" />
<path fill="currentColor" d="M5 11.5H19V13H5V11.5Z" />
</svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          open ? "visible" : "hidden"
        } bg-white divide-y px-3 absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {pages.lootTables.map((page) => (
            <li>
              <a href={`/tables/${page.slug}`}>{page.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
