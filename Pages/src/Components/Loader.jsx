import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container flex items-center justify-center min-h-screen">
      <div className="loader relative w-20 aspect-square rounded-full">
        <img src="loader_logo.png" alt="Loader" className="loader-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
