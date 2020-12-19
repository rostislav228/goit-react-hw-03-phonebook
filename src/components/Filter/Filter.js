import PropTypes from "prop-types";

export default function Filter({ onChange }) {
  return (
    <label>
      Filter:
      <input type="text" name="filter" onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
