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
    <div className={`relative ${className} mr-2`}>
      <button
        onClick={onToggle}
        className="flex items-center justify-start gap-2 px-2 py-2 bg-[#080808] text-white text-xs rounded-2xl"
      >
        <span>{selected || label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-[#1D1D1D] rounded-2xl shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700  "
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
