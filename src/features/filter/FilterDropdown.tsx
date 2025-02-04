import React from "react";
import styles from "./FilterDropdown.module.css";

interface IFilterDropdownProps {
  setCategory: (category: string) => void;
}

export const FilterDropdown: React.FC<IFilterDropdownProps> = ({
  setCategory,
}) => {
  return (
    <div className={styles.select_wrapper}>
      <select
        onChange={(e) => setCategory(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled hidden>
          Filters
        </option>
        <option value="All">All Categories</option>
        <option value="chair">Chairs</option>
        <option value="vase">Vases</option>
        <option value="lamp">Lamps</option>
        <option value="bed">Beds</option>
      </select>
    </div>
  );
};
