import DateDisplay from "./Date";

function Display({ input }) {
  if (!input) {
    return (
      <div>
        <h2>This is output for a falsy input</h2>
        <DateDisplay />
      </div>
    );
  }

  if (Array.isArray(input)) {
    return (
      <div>
        <h2>This is output for an array input</h2>
        <ul>
          {input.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>This is output for any other input</h2>
      {input}
    </div>
  );
}

export default Display;
