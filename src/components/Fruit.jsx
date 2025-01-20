export default function ({ fruit }) {
  return (
    <>
      {fruit.price > 10 ? (
        <li>
          {fruit.emoji}
          {fruit.name}
          {fruit.price}
          {fruit.soldout ? " SoldOut!" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
