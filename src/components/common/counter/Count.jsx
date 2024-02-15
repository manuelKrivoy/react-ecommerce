const Count = ({ count, add, odd }) => {
  return (
    <div>
      <button onClick={add}>+</button>
      <h4>{count}</h4>
      <button onClick={odd} disabled={count === 1 ? true : false}>
        -
      </button>
    </div>
  );
};

export default Count;
