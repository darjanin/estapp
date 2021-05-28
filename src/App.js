import { useEffect, useState } from "react";

const cells = {
  en: [
    "depending on management?",
    "depending on another team?",
    "depending on teammates?",
    "complex?",
    "time intesive?"
  ],
  de: [
    "DE depending on management?",
    "DE depending on another team?",
    "DE depending on teammates?",
    "DE complex?",
    "DE time intesive?"
  ]
};

const est = values => {
  if (values[0]) return 13;
  if (values[1]) return 8;
  if (values[2] && values[3] && values[4]) return 8;
  if (values[2] && values[3]) return 5;
  if (values[2] && values[4]) return 5;
  if (values[2]) return 5;
  if (values[3]) return 2;
  if (values[4]) return 2;
  return 1;
};

function App() {
  const [values, setValues] = useState(cells["en"].map(() => false));
  const [lng, setLng] = useState("en");
  useEffect(() => {
    console.log("hello world");
  }, []);
  return (
    <div>
      <header className="bg-blue-500 border-blue-700 border-b-2 text-white py-4 text-center text-2xl font-semibold relative flex justify-between px-8">
        EST: {est(values)}
        <button
          className="block"
          onClick={() => {
            setLng(lng === "en" ? "de" : "en");
          }}
        >
          {lng === "de" && (
            <span role="img" aria-label="DE">
              🇩🇪
            </span>
          )}
          {lng === "en" && (
            <span role="img" aria-label="EN">
              🇬🇧
            </span>
          )}
        </button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
        {cells[lng].map((cell, index) => (
          <button
            onClick={() => {
              const oldValues = [...values];
              oldValues[index] = !values[index];
              setValues(oldValues);
            }}
            className={`h-20 bg-gray-200 text-xl border-2 ${
              values[index]
                ? "bg-green-700 text-white border-green-800"
                : "bg-gray-200 border-gray-400"
            }`}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
