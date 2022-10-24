import { BiSearch } from "react-icons/bi";


  return (
    <div
      className={`absolute z-30 shadow-md left-6 right-6 top-7 group bg-dark-lighten rounded-full ${
         "!rounded-3xl"
      }`}
    >
      <form className="relative" >
        <button className="absolute top-1/2 -translate-y-1/2 left-5">
          <BiSearch
            className="hover:text-white transition duration-300"
            size={25}
          />
        </button>
        <input
          className="w-full pl-14 pr-7 outline-none bg-transparent py-3 placeholder-gray-500 text-white"
          type="text"
          placeholder="Search..."
          
        />
      </form>

      { (
        <ul className="hidden group-focus-within:flex flex-col gap-3 py-3 relative after:absolute after:top-0 after:h-[2px]  after:bg-gray-darken after:left-[5%] after:right-[5%]">
         
            <li
              key={index}
              className="focus:bg-red-500 outline-none"
              tabIndex={index - 1}
            >
              <button
                onClick={() => {
                }}
                className="flex items-center gap-3 ml-5 hover:text-white transition duration-300"
              >
                <BiSearch size={25} />
                
              </button>
            </li>
        
        </ul>
      )}
    </div>
  );

export default SearchBox;
