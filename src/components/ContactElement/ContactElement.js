import PropTypes from "prop-types";
import s from "./ContactListItem.module.css";

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={s.li}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
