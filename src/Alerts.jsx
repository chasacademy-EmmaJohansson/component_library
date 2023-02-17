const alerts = {
  size: {
    small: "text-sm px-4 py-2 w-fit",
    medium: "text-md px-6 py-4 w-fit",
    large: "text-lg px-8 py-6 -w-fit",
  },
  color: {
    warning: "bg-red-300 text-red-500",
    info: "bg-blue-200 text-blue-400",
    success: "bg-green-300 text-green-700",
  },
};
export default function Alerts(props) {
  const { title, size, color, onDismiss, icon } = props;
  const colorClass = alerts.color[color];
  const sizeClass = alerts.size[size];
  return (
    <div className={`flex rounded-lg  ${colorClass} ${sizeClass}`}>
      <span className="bg-transparent text-3xl mr-1">{icon}</span>
      {title}
      <button
        onClick={onDismiss}
        className="ml-3 pr-2 pl-2 border-2 border-gray-500 hover:bg-gray-600 "
      >
        X
      </button>
    </div>
  );
}
