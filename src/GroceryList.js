// GroceryList.js
function GroceryList({ items }) {
    // Way 1.
    // return (
    //   <ul>
    //     {items.map((item) => (
    //       <li>{item}</li>
    //     ))}
    //   </ul>
    // );

    // Way 2.
    // const list = items.map((item, index) => <li key={index}>{item}</li>);
    // return <ul>{list}</ul>;

    // Way 3.
    const rows = items.map(({ quantity, item }, index) => (
      <tr key={index}>
        <td>{quantity}</td>
        <td>{item}</td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

export default GroceryList;