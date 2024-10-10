function Cycle(...props) {
  let index = 0;
  return function () {
    const result = props[index];
    index = (index + 1) % props.length;
    return result;
  };
}

export default Cycle;
