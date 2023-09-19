"use client";
import React, { ChangeEvent, useState } from "react";
import { Song } from "../interfaces/song";
import { handleSort } from "../utils/handleSort";

interface Props {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortBy = ({ handleChange }: Props) => {
  const options = ["Artist", "Title", "Album", "Song length"];
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <form>
      <label htmlFor="dropdown">Sort by:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SortBy;
