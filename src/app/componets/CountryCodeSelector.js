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
    { code: "ZA", label: "South Africa", dialCode: "+27" },
    { code: "JP", label: "Japan", dialCode: "+81" },
    { code: "CN", label: "China", dialCode: "+86" },
    { code: "RU", label: "Russia", dialCode: "+7" },
    { code: "MX", label: "Mexico", dialCode: "+52" },
    { code: "NG", label: "Nigeria", dialCode: "+234" },
    { code: "PH", label: "Philippines", dialCode: "+63" },
    { code: "EG", label: "Egypt", dialCode: "+20" },
    { code: "KR", label: "South Korea", dialCode: "+82" },
    { code: "SE", label: "Sweden", dialCode: "+46" },
    { code: "NO", label: "Norway", dialCode: "+47" },
    { code: "FI", label: "Finland", dialCode: "+358" },
    { code: "DK", label: "Denmark", dialCode: "+45" },
    { code: "AE", label: "United Arab Emirates", dialCode: "+971" },
    { code: "AR", label: "Argentina", dialCode: "+54" },
    { code: "CL", label: "Chile", dialCode: "+56" },
    { code: "CO", label: "Colombia", dialCode: "+57" },
    { code: "PE", label: "Peru", dialCode: "+51" },
    { code: "KR", label: "South Korea", dialCode: "+82" },
    { code: "PK", label: "Pakistan", dialCode: "+92" },
    { code: "EG", label: "Egypt", dialCode: "+20" },
    { code: "SG", label: "Singapore", dialCode: "+65" },
    { code: "SA", label: "Saudi Arabia", dialCode: "+966" },
    { code: "TH", label: "Thailand", dialCode: "+66" },
    { code: "NZ", label: "New Zealand", dialCode: "+64" },
    { code: "UA", label: "Ukraine", dialCode: "+380" },
    { code: "IL", label: "Israel", dialCode: "+972" },
    { code: "MY", label: "Malaysia", dialCode: "+60" },
    { code: "KW", label: "Kuwait", dialCode: "+965" },
    { code: "QA", label: "Qatar", dialCode: "+974" },
    { code: "OM", label: "Oman", dialCode: "+968" },
    { code: "KW", label: "Kuwait", dialCode: "+965" },
    { code: "KH", label: "Cambodia", dialCode: "+855" },
    { code: "VN", label: "Vietnam", dialCode: "+84" },
    { code: "LT", label: "Lithuania", dialCode: "+370" },
    { code: "LV", label: "Latvia", dialCode: "+371" },
    { code: "EE", label: "Estonia", dialCode: "+372" },
    { code: "RO", label: "Romania", dialCode: "+40" },
    { code: "PL", label: "Poland", dialCode: "+48" },
    { code: "HU", label: "Hungary", dialCode: "+36" },
    { code: "SK", label: "Slovakia", dialCode: "+421" },
    { code: "BG", label: "Bulgaria", dialCode: "+359" },
    { code: "HR", label: "Croatia", dialCode: "+385" },
    { code: "RS", label: "Serbia", dialCode: "+381" },
    { code: "BY", label: "Belarus", dialCode: "+375" },
    { code: "AM", label: "Armenia", dialCode: "+374" },
    { code: "AZ", label: "Azerbaijan", dialCode: "+994" },
    { code: "GE", label: "Georgia", dialCode: "+995" },
    { code: "MD", label: "Moldova", dialCode: "+373" },
    { code: "AL", label: "Albania", dialCode: "+355" },
    { code: "MK", label: "North Macedonia", dialCode: "+389" },
    { code: "BA", label: "Bosnia and Herzegovina", dialCode: "+387" },
  ];

  const options = countries.map((country) => ({
    value: country.code,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Flag
          code={country.code}
          style={{ width: 20, height: 15, marginRight: 10 }}
        />
        {country.label} ({country.dialCode})
      </div>
    ),
    dialCode: country.dialCode,
  }));

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState(""); // Added phone state
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true);

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (value && value.trim() !== "") {
      setIsPhoneEmpty(false);
    } else {
      setIsPhoneEmpty(true);
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  // Styles for custom dropdown
  const customSelectStyles = {
    control: (base) => ({
      ...base,
      height: "36px", // Smaller height for the input field
      minWidth: "160px", // Set a fixed width for the dropdown
      backgroundColor: "transparent", // Transparent background
      borderWidth: "0", // Remove the border
      fontSize: "14px", // Font size adjustment
      color: "#1f2937", // Default text color for light mode
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white", // Transparent background for the dropdown
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Add shadow if needed
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#3b82f6" : "transparent", // Highlight selected option
      color: state.isSelected ? "white" : "#1f2937", // Text color for light mode
      padding: "8px", // Padding around options
      fontSize: "14px", // Font size adjustment
      backgroundColor: state.isSelected
        ? "#3b82f6"
        : state.isFocused
        ? "#e5e7eb"
        : "transparent", // For light mode focus
      color: state.isSelected
        ? "white"
        : state.isFocused
        ? "#1f2937"
        : "#6b7280", // Focused text color
    }),
    singleValue: (base) => {
      // Check if the page is in dark mode
      const isDarkMode = document.documentElement.classList.contains("dark");

      return {
        ...base,
        color: isDarkMode ? "#e5e7eb" : "#1f2937", // Use light color for light mode and light text for dark mode
      };
    },
    // dropdownIndicator: (base) => ({
    //   ...base,
    //   color: "#1f2937", // Color for dropdown indicator
    //   border: "none", // Remove any border from the dropdown indicator
    // }),
  };

  return (
    <div>
      <div className="mb-4 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
        <div className="relative bg-transparent flex">
          <Select
            options={options}
            onChange={handleChange}
            value={selectedCountry}
            placeholder="Select Country"
            getOptionLabel={(e) => e.label}
            className="peer h-10 w-25 rounded-l-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-slate-200 dark:ring-gray-700 dark:focus:border-indigo-600 dark:bg-slate-900"
            styles={customSelectStyles} // Apply custom styles here
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#3b82f6", // Color for selected option
                primary25: "#e5e7eb", // Color for hover/focused option
                neutral0: "white", // Background color for dropdown
                neutral5: "white", // Background color for selected option
              },
            })}
          />
          <label
            htmlFor="phone"
            className="absolute left-2 -top-3 text-sm bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400 px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:focus:border-indigo-600"
          >
            Phone Number :
          </label>

          <input
            id="phone"
            type="number"
            className="peer h-10 w-full rounded-r-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
          {/* <label
            htmlFor="phone"
            className="absolute left-2 -top-3 text-sm bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400 px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:focus:border-indigo-600"
          >
            Phone Number :
          </label> */}
        </div>

        {/* Error message for empty phone */}
        {isPhoneEmpty && (
          <p className="text-red-600 text-xs bg-transparent">
            Phone is required
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryCodeSelector;
