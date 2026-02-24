

function Button(props) {
  return (
    <button onClick={props.onClick} style={{ padding: "10px 20px", margin: "10px" }}>
      {props.text}
    </button>
  );
}
export default Button;