import classNames from "classnames";

function ButtonOutline({ text, onClick, borderColor, textColor }) {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(
          "px-2 py-1 rounded-lg bg-white border text-sm hover:bg-gray-superlight",
          borderColor,
          textColor
        )}
      >
        {text}
      </button>
    </>
  );
}

ButtonOutline.defaultProps = {
  borderColor: "border-primary",
  textColor: "text-primary",
};

export default ButtonOutline;
