export default function HeaderButton({children}) {
  return (
    <button className="py-2 px-2.5 text-sm font-semibold text-white uppercase bg-gradient-to-r from-[#e052a0] to-[#f15c41] hover:bg-gradient-to-r hover:from-[#3ec7e0] hover:to-[#526bf4] rounded-sm">
      {children}
    </button>
  );
}
