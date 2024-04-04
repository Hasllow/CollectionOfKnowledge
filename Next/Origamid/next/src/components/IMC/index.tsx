"use client";

import { useState } from "react";

interface DataState {
  height: string;
  weight: string;
}

export default function IMC() {
  const [formData, setFormData] = useState<DataState>({
    height: "",
    weight: "",
  });

  const [imc, setImc] = useState<null | string>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const heightInMeter = Number(formData.height) / 100;
    const total = (
      Number(formData.weight) /
      (heightInMeter * heightInMeter)
    ).toFixed(2);

    setImc(total);
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto">
      <form className="flex flex-col">
        <label htmlFor="height">Altura:</label>
        <input
          type="text"
          name="height"
          id="height"
          value={formData.height}
          onChange={handleInputChange}
          className="text-black p-1 rounded"
        />
        <label htmlFor="weight">Peso:</label>
        <input
          type="text"
          name="weight"
          id="weight"
          value={formData.weight}
          onChange={handleInputChange}
          className="text-black p-1 rounded"
        />
        <button
          className="bg-sky-200 p-2 rounded text-gray-800 font-bold"
          onClick={handleSubmit}
        >
          Calcular
        </button>
      </form>

      {imc && (
        <div>
          <h2 className="text-[#668800] font-bold">IMC: {imc}</h2>
        </div>
      )}
    </div>
  );
}
