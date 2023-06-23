function ButtonPrimary({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="px-2 py-1 rounded-lg bg-primary text-white text-sm hover:bg-primary-dark"
      >
        {text}
      </button>
    </>
  );
}

export default ButtonPrimary;
