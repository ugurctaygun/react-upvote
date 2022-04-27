import { sortDescending, sortAscending } from "../../Features/LinkSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    if (event.target.value === "descending") {
      dispatch(sortDescending());
    }
    if (event.target.value === "ascending") {
      dispatch(sortAscending());
    }
  };
  return (
    <select className="c-filter" onChange={handleFilter}>
      <option value="">Order By</option>
      <option value="descending">Most Voted</option>
      <option value="ascending">Least Voted</option>
    </select>
  );
};

export default Filter;
