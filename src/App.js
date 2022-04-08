import "./styles.css";

export default function App() {
  const menu = ["Learn", "Upload", "Download"];
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <h2>
            {" "}
            <span> React-Master </span>{" "}
          </h2>
        </div>
        {/* menulink */}
        <div>
          {menu.map((e) => {
            return (
              <ul className="menubar">
                <p className="menulink">{e}</p>
              </ul>
            );
          })}
        </div>

        {/* button starts */}
        <div>
          <button className="button">Contact</button>
        </div>
      </nav>
    </div>
  );
}
