export default function Message() {
  function handlClick() {
    console.log("Button Clicked!");
  }
  return (
    <div>
      <button onClick={handlClick}>Click</button>
    </div>
  );
}
