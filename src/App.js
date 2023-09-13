import React, { useState } from "react";
import "./App.css";
import Container from "./Container";
import Form from "./Form";
import { currencies } from "./currencies";
import Timer from "./Timer";

function App() {
  const [result, setResult] = useState(undefined);

  const calcResult = (currency, number) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      fromAmount: +number,
      toAmount: number / rate,
      currency,
    });
  };

  return (
    <Container>
      <Timer />
      <h1>Currency Converter in React</h1>
      <Form result={result} calcResult={calcResult} />
    </Container>
  );
}

export default App;
