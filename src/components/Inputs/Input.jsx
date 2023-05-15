export const Input = ({ type, id, setValue, setDescrip, placeHolder }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeHolder}
      onChange={(e) =>
        setValue ? setValue(e.target.value) : setDescrip(e.target.value)
      }
      className={"text4"}
    />
  );
};
