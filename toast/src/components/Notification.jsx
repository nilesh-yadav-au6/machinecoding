/* eslint-disable react/prop-types */

const Notification = ({ type, message, onClose }) => {
  return (
    <div className={`notification ${type} `}>
      {type}
      {message}
      <button onClick={onClose}>close</button>
    </div>
  );
};

export default Notification;
