import Logo from "./svg/Logo";

function Header() {
  return (
    <div className="relative flex items-center p-2 px-x_w w-full h-header_h bg-transparent z-50">
      <div className="flex-grow">
        <Logo className="w-24 max-w-sm fill-netflix_red" />
      </div>

      <div>
        <select className="w-20 border border-white rounded-sm bg-transparent text-white py-1 px-2">
          <option>English</option>
          <option>Chinese(Traditional)</option>
        </select>
        <button className="btn ml-4">Sign In</button>
      </div>
    </div>
  );
}

export default Header;
