"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

export default function CustomSelect() {
  const [selected, setSelected] = useState("All");
  const [open, setOpen] = useState(false);

  const options = ["All", "option-1", "option-2", "option-3"];

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className={styles.select}>
      {/* Selected value */}
      <div className={styles.selected} onClick={() => setOpen(!open)}>
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className={styles.arrow}
        >
          <path
            d="M233.4 406.6c12.5 12.5 
            32.8 12.5 45.3 0l192-192c12.5-12.5 
            12.5-32.8 0-45.3s-32.8-12.5-45.3 
            0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 
            0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </div>

      {/* Options */}
      {open && (
        <div className={styles.options}>
          {options.map((opt) => (
            <div key={opt} onClick={() => handleSelect(opt)}>
              <input
                id={opt}
                name="option"
                type="radio"
                checked={selected === opt}
                readOnly
              />
              <label
                className={styles.option}
                htmlFor={opt}
                data-txt={opt}
              ></label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
