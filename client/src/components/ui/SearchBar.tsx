// components/SearchBar.js

const SearchBar = () => {
  return (
    <div className="my-4 p-4 border border-gray-300 rounded-xl bg-gray-50 flex items-center justify-between shadow-sm">
      <input
        type="text"
        placeholder="بحث / تصفية"
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  );
};

export default SearchBar;