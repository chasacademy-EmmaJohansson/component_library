const style = {
  size: {
    small: "text-sm p-2",
    large: "text-lg p-8",
  },
};
export default function Modal(props) {
  const { show, onClose, size, children } = props;
  const sizeClass = style.size[size];
  function handleOnClose(e) {
    if (e.target.id === "modal") onClose();
  }
  if (!show) return null;
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ${sizeClass}`}
      onClick={handleOnClose}
      id="modal"
    >
      <div className="flex justify-center">
        <div className="relative self-center p-1 rounded-lg place-items-center bg-blue-500">
          <div className="p-6 ">
            <button
              className="absolute top-0 right-0 p-2 hover:text-gray-800"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
          <div className="flex gap-2 justify-center ">
            <button
              className=" justify-center border-2 border-gray-800 rounded-xl p-3 bg-blue-500 hover:bg-blue-800 "
              onClick={onClose}
            >
              Yes
            </button>
            <button
              className="justify-center border-2 border-gray-800 rounded-xl p-3 bg-blue-500 hover:bg-blue-800"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  const { children } = props;

  return <div className="border-2 border-black mb-6 text-2xl">{children}</div>;
}
Modal.Header = Header;

function Body(props) {
  const { children } = props;
  return <div>{children}</div>;
}
Modal.Body = Body;

function Footer(props) {
  const { children } = props;
  return <div>{children}</div>;
}
Modal.Footer = Footer;
