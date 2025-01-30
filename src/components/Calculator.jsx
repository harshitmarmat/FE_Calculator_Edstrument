import { useState } from "react";

const KeyButton = ({ data, cal }) => {
  const { bg, name } = data;
  return (
    <div onClick={() => cal(name)} className="btn" style={{ background: bg }}>
      {name}
    </div>
  );
};
const keypad = [
  {
    name: "AC",
    bg: "grey",
  },
  {
    name: "+/-",
    bg: "grey",
  },
  {
    name: "%",
    bg: "grey",
  },
  {
    name: "/",
    bg: "orange",
  },
  {
    name: "7",
  },
  {
    name: "8",
  },
  {
    name: "9",
  },
  {
    name: "*",
    bg: "orange",
  },
  {
    name: "4",
    bg: "",
  },
  {
    name: "5",
    bg: "",
  },
  {
    name: "6",
    bg: "",
  },
  {
    name: "-",
    bg: "orange",
  },
  {
    name: "1",
    bg: "",
  },
  {
    name: "2",
    bg: "",
  },
  {
    name: "3",
    bg: "",
  },
  {
    name: "+",
    bg: "orange",
  },
  {
    name: "C",
    bg: "",
  },
  {
    name: "0",
    bg: "",
  },
  {
    name: ".",
    bg: "",
  },
  {
    name: "=",
    bg: "orange",
  },
];

const Calculator = () => {
  const [cal, setCal] = useState("");

  const calHandler = (keyType) => {
    if (keyType === "AC") {
      setCal("");
    } else {
      if (keyType === "=") {
        try {
          setCal(eval(cal).toString());
        } catch (error) {
          alert("Invalid expression");
        }
      } else {
        setCal((prev) => prev + keyType);
      }
    }
  };

  return (
    <div className="cal-contanier">
      <div>{cal || 0}</div>
      <div className="cal-keypad">
        {keypad.map((k, ind) => (
          <KeyButton key={ind} cal={calHandler} data={k} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
