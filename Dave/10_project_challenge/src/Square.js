const Square = ({ color }) => {
  return (
    <div
      className="square"
      style={color ? { backgroundColor: `${color}` } : {}}
    >
      <p> {color ? `${color}` : 'Empty Value'}</p>
    </div>
  );
};

export default Square;
