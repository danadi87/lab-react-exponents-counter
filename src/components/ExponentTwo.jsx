const ExponentTwo = ({ count }) => {
  console.log("ExponentTwo received count:", count);
  const result = Math.pow(count, 2);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
