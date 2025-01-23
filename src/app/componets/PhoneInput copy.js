import React, { useState } from "react";
import "react-phone-number-input/style.css"; // Ensure you import the CSS
import PhoneInput from "react-phone-number-input";

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState("");
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true);

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (value && value.trim() !== "") {
      setIsPhoneEmpty(false);
    }
  };

  return (
    <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
      <div className="relative bg-inherit flex">
        <PhoneInput
          international
          defaultCountry="IN"
          onChange={handlePhoneChange}
          className="peer h-10 w-20 rounded-l-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-slate-200 dark:ring-gray-700 dark:focus:border-indigo-600 dark:bg-transparent"
        />

        {/* Phone Number Input Field */}
        <input
          id="phone"
          type="text"
          className="peer h-10 w-full rounded-r-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
          placeholder="Phone Number"
          onChange={(e) => handlePhoneChange(e.target.value)}
        />
        <label
          htmlFor="phone"
          className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
        >
          Phone
        </label>
      </div>

      {/* Error message for empty phone */}
      {isPhoneEmpty && (
        <p className="text-red-600 text-xs bg-transparent">Phone is required</p>
      )}
    </div>
  );
};

export default PhoneInputComponent;
