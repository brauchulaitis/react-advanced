function DessertsList({ data }) {
  const filteredDesserts = data.filter(dessert => dessert.calories <= 500);

  const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);

  const dessertItems = sortedDesserts.map((dessert, index) => (
    <li key={index}>
      {dessert.name} - {dessert.calories} cal
    </li>
  ));

  return <ul>{dessertItems}</ul>;
}

export default DessertsList;

