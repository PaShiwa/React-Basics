function Hello({ props }) {
  return (
    <div>
      {props.message}
      {props.name}
      {props.emoji}
      {props.seatNumbers}
    </div>
  );
}

export default Hello;
