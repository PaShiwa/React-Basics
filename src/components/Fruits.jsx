import Fruit from "./Fruit";
export default function () {
  // const fruits = ["apple", "mango", "orange", "pinapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Mango", price: 11, emoji: "🥭", soldout: true },
    { name: "Orange", price: 12, emoji: "🍊", soldout: false },
    { name: "Pienapple", price: 13, emoji: "🍍", soldout: true },
    { name: "Banana", price: 10, emoji: "🍌", soldout: false },
    { name: "Kiwi", price: 14, emoji: "🥝", soldout: true },
    { name: "Grapes", price: 15, emoji: "🍇", soldout: false },
  ];
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ol>
    </div>
  );
}
