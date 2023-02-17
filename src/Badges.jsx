const badges = {
  color: {
    default: "bg-blue-500 text-blue-100",
    failure: "bg-red-300 text-red-700",
  },
  size: {
    small: "w-fit pr-2 text-sm",
    medium: "w-fit pr-3 p-1 text-md",
  },
};
export default function Badges(props) {
  const { color, size, icon, title } = props;
  const colorClass = badges.color[color];
  const sizeClass = badges.size[size];

  return (
    <div>
      <div
        className={`flex gap-2 rounded-sm font-medium cursor-pointer ${colorClass} ${sizeClass}`}
      >
        <span className="text-xl text-white bg-white">{icon}</span>
        {title}
      </div>
    </div>
  );
}
