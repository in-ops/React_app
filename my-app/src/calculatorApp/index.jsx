

import Addition from "./addition";
import Subtraction from "./subtraction";
import Multiplication from "./multiplication";
import Division from "./division";

function CalculatorApp() {
  return (
    <div>
      <Addition />
      <Subtraction />
      <Multiplication />
      <Division />
    </div>
  );
}

export default CalculatorApp;