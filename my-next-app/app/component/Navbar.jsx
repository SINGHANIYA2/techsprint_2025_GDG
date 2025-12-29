function Navbar() {
    return (
        <nav className="bg-purple-950 h-[75px] flex items-center justify-between px-6 border-b-2 border-gray-300">
            <div className="flex items-center gap-5 justify-baseline ml-[80px]">
                <img
                    src="/bus.jpg"
                    alt=""
                    className="h-[35px] w-[35px] rounded-2xl"
                />
                <span className="text-white font-bold font-sans">Mytrip</span>
            </div>

            <button className="text-white bg-purple-900 rounded px-4 py-1 mr-[100px] cursor-pointer hover:bg-purple-800 transition-all duration-400">
                Sign up
            </button>
        </nav>
    );
}
export default Navbar;
