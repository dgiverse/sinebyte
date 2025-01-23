import React, { useState } from "react";
import Select from "react-select";
import Flag from "react-world-flags";

const CountryCodeSelector = () => {
  const countries = [
    { code: "IN", label: "India", dialCode: "+91" },
    { code: "US", label: "United States", dialCode: "+1" },
    { code: "GB", label: "United Kingdom", dialCode: "+44" },
    { code: "CA", label: "Canada", dialCode: "+1" },
    { code: "AU", label: "Australia", dialCode: "+61" },
    { code: "FR", label: "France", dialCode: "+33" },
    { code: "DE", label: "Germany", dialCode: "+49" },
    { code: "IT", label: "Italy", dialCode: "+39" },
    { code: "ES", label: "Spain", dialCode: "+34" },
    { code: "BR", label: "Brazil", dialCode: "+55" },
    // Add other countries...
  ];

  const options = countries.map((country) => ({
    value: country.code,
    label: (
      <div
        style={{ display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        <Flag
          code={country.code}
          style={{ width: 20, height: 15, marginRight: 10 }}
        />
        <span
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {country.label} ({country.dialCode})
        </span>
      </div>
    ),
    dialCode: country.dialCode,
  }));

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState(""); // Added phone state

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      height: "36px", // Smaller height for the input field
      minWidth: "150px", // Adjust dropdown width for better fit
      backgroundColor: "transparent",
      borderWidth: "1px", // Ensure the border is present
      borderColor: "#ccc",
      fontSize: "14px",
      color: "#1f2937",
      padding: "0 10px",
      display: "flex",
      alignItems: "center",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#3b82f6" : "transparent",
      color: state.isSelected ? "white" : "#1f2937",
      padding: "8px",
      fontSize: "14px",
      backgroundColor: state.isSelected
        ? "#3b82f6"
        : state.isFocused
        ? "#e5e7eb"
        : "transparent",
      color: state.isSelected
        ? "white"
        : state.isFocused
        ? "#1f2937"
        : "#6b7280",
    }),
    singleValue: (base) => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      return {
        ...base,
        color: isDarkMode ? "#e5e7eb" : "#1f2937",
      };
    },
  };

  return (
    <div>
      <div className="mb-5">
        <div className="text-start">
          <label htmlFor="mobile" className="font-semibold">
            Phone :
          </label>
          <div className="form-icon relative mt-2 flex items-center gap-2">
            <Select
              options={options}
              onChange={handleChange}
              value={selectedCountry}
              getOptionLabel={(e) => e.label}
              className="form-input w-1/4 py-2 px-3 h-7 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-l-lg border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
              styles={customSelectStyles} // Apply custom styles here
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "#3b82f6",
                  primary25: "#e5e7eb",
                  neutral0: "white",
                  neutral5: "white",
                },
              })}
            />
            <input
              name="phone"
              id="mobile"
              type="text"
              className="form-input w-full py-2 px-3 h-7 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-r-lg border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
              placeholder="Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCodeSelector;
