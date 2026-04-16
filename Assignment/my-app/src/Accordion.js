import React, { useState } from "react";

const data = [
  { question: "What is React?", answer: "React is a JS library." },
  { question: "What is Hook?", answer: "Hook is a React feature." },
  { question: "What is JSX?", answer: "JSX is HTML in JS." }
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => setOpenIndex(index)}>
            {item.question}
          </h3>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;