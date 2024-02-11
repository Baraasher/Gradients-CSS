import SearchBar from "@/components/common/search_bar/SearchBar";

function Header() {
  return (
    <div className="w-full flex justify-center items-center flex-col  text-center gap-4 py-20 ">
      <h1 className=" font-bold text-3xl bg-gradient-to-r from-[#bf5ae0] via-[#9400D3] to-[#a811da] inline-block text-transparent bg-clip-text">
        Gradients CSS
      </h1>

      <p className="text-[var(--color-paragraph)] text-base max-w-xl w-full">
        The collection of CSS gradients. Simply click the 'Copy' button to
        acquire and seamlessly integrate these gradients into your project
      </p>
      <SearchBar />
    </div>
  );
}

export default Header;
