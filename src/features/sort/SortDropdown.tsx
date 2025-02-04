import React from "react";
import styles from "./SortDropdonw.module.css"

interface ISortDropdownProps {
  setSort: (sort: string) => void;
}

export const SortDropdown: React.FC<ISortDropdownProps> = ({ setSort }) => {
  return (
    <div className={styles.select_wrapper}>
      <select onChange={(e) => setSort(e.target.value)} defaultValue="">
        <option value="" disabled hidden>
          Sorting
        </option>
        <option value="default">Default</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
      </select>
    </div>
  );
};
