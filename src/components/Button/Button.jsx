export const Button = ({
  name,
  delet,
  nameObj,
  click = "",
  boolean = "",
  children,
  className,
  type,
  id,
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={() => (delet ? delet(nameObj) : click ? click() : "")}
      className={className}
    >
      {name}
      {children}
    </button>
  );
};
