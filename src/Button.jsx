const styles = {
  size: {
    small: "text-sm px-4 w-fit py-2",
    medium: "text-md px-6 w-fit py-2",
    large: "text-lg px-8 w-fit py-2",
  },
  color: {
    light: "bg-gray-500 text-white font-bold hover:bg-gray-600",
    default: "bg-blue-500 text-white hover:bg-blue-600",
    gray: "bg-[#202938] text-gray-200 hover:bg-gray-400 hover:text-white",
    dark: "bg-[#202938] text-white hover:bg-gray-400",
    sucess: "bg-green-700 text-white hover:bg-green-800",
    failure: "bg-red-600 text-white font-bold hover:bg-red-700",
    warning: "bg-amber-400 text-white hover:bg-amber-700",
    purple: "bg-purple-400 text-white hover:bg-purple-500",
  },
  disabled: {
    true: " cursor-not-allowed text-gray-300 font-bold bg-blue-500 opacity-80",
    false: " ",
  },
};
export default function Button(props) {
  const { size, color, disabled, title } = props;
  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = styles.disabled[disabled];

  return (
    <button
      className={`border-2 p-2 border-white-400 rounded-lg ${colorClass} ${sizeClass}${disabledClass}
 `}
    >
      {title}
    </button>
  );
}
