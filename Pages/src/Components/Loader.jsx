


function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-l from-[#005C97] to-[#363795] flex justify-center items-center font-['Oswald'] tracking-[6px] overflow-hidden">
      <img src="loader_logo.png" alt="Loading..." className="w-16 h-16 animate-[wave_0.7s_infinite_linear,_fill-up_10s_infinite_ease-out_alternate]" />
    </div>
  );
}

export default Loader;