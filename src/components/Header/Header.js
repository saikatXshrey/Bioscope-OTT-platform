import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Bioscope 🎥
      {/* <button>speak</button> */}
    </span>
  );
};

export default Header;
