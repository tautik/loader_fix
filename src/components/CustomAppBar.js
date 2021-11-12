const CustomAppBar = ({ label, onSearch }) => {
  return (
    <nav>
      <div>
        <img src="../../logo.svg" alt="logo" height={100} />
      </div>
      <a href="/license"><button>License</button></a>
      <br />
      <input type="text" placeholder={label} onChange={onSearch} />
    </nav>
  );
};

export default CustomAppBar;
