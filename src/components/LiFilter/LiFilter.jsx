export const LiFilter = ({ array, filter, className }) => {
  const addClass = (e) => {
    const li = e.target;

    const allLi = [...li.parentNode.children];

    li.className.includes("liActive")
      ? li.classList.remove("liActive")
      : allLi.map((list) =>
          list.className.includes("liActive")
            ? list.classList.remove("liActive")
            : ""
        );
    li.classList.add("liActive");

    filter(e.target.innerText);
  };

  return array.map((arr, index) => {
    arr !== "Todos" ? (className = "font-w600") : (className += " liActive");
    return (
      <li key={index} onClick={addClass} className={className}>
        {arr}
      </li>
    );
  });
};
