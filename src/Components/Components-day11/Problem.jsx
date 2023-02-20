const Problem = () => {
  const changePosition = () => {
    const [state, setState] = useState({ Y: "150px", X: "300px" });

    konum = ["+", "-"];
    let X = Math.random() * 300;
    let Y = Math.random() * 300;
    let topP = konum[Math.round(Math.random())].concat(X);
    let rightP = konum[Math.round(Math.random())].concat(Y);
  };
  return (
    <div>
      <div
        style={{ position: "absolute", top: state.Y, left: state.X }}
        onMouseOver={changePosition}
        className="problem"
      >
        30 Days of React
      </div>
    </div>
  );
};

export default Problem;
