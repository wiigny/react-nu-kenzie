export const Select = ({ array, setType }) => {
  return (
    <select onChange={(e) => setType(e.target.value)}>
      <option
        value="selecione o tipo"
        selected={true}
        hidden={true}
        disabled={true}
      >
        Selecione o tipo
      </option>
      {array.map((opt, index) => (
        <option key={index} value={opt.toLowerCase()}>
          {opt}
        </option>
      ))}
    </select>
  );
};
