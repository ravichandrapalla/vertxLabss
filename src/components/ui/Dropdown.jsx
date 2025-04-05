import { ChevronDown } from "lucide-react";

const Dropdown = ({
  label,
  options,
  selected,
  onChange,
  isOpen,
  onToggle,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md"
      >
        <span>{selected || label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-gray-800 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => {
                onChange(option.value);
                onToggle();
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
