

function Division({ num1, num2 }) {
  const result = num2 != 0 ? Number(num1) / Number(num2) : "Cannot divide by zero";

  return <h3>Division: {result}</h3>;
}

export default Division;