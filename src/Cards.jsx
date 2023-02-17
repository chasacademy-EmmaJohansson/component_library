const buttonStyles = {
  buttonOne: {
    download: "bg-blue-100 text-gray-600 hover:bg-blue-200 ",
  },
  buttonTwo: {
    download: "bg-blue-100 text-gray-600 hover:bg-blue-200 ",
  },
  buttonTree: {
    readMore: "bg-blue-500 text-white hover:bg-blue-600",
  },
};
export default function Cards(props) {
  const {
    href,
    imgSrc,
    imgAlt,
    cardTitle,
    cardText,
    buttonOne,
    buttonTwo,
    buttonTree,
    buttonTextOne,
    buttonTextTwo,
    buttonTextTree,
    iconOne,
    iconTwo,
  } = props;
  const buttonClassOne = buttonStyles.buttonOne[buttonOne];
  const buttonClassTwo = buttonStyles.buttonTwo[buttonTwo];
  const buttonClassTree = buttonStyles.buttonTree[buttonTree];

  return (
    <div className="flex border-2 rounded-lg w-80 h-92 ">
      <a className="flex flex-col justify-between" href={href}>
        <img className="rounded-lg " src={imgSrc} alt={imgAlt} />
        <h2 className=" p-2 font-bold">{cardTitle}</h2>
        <h6 className=" text-sm">{cardText}</h6>
        <div className="flex flex-col justify-center items-center gap-4 mt-2 pt-10">
          <button
            className={`bg-blue-100 gap-1 p-4 rounded-lg font-bold flex flex-row items-center w-fit${buttonClassOne}`}
          >
            {iconOne}
            {buttonTextOne}
          </button>
          <button
            className={`p-4 rounded-lg font-bold gap-1 flex flex-row items-center w-fit ${buttonClassTwo}`}
          >
            {iconTwo}
            {buttonTextTwo}
          </button>
          <button className={`w-72 rounded-lg p-2 mb-8 ${buttonClassTree}`}>
            {buttonTextTree}
          </button>
        </div>
      </a>
    </div>
  );
}
