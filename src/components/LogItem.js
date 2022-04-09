import React from "react";

const LogItem = ({ item }) => {
  return (
    <tr>
      <td>{item.priority}</td>
      <td>{item.text}</td>
      <td>{item.user}</td>
      <td>{item.created}</td>
      <td>{item.id}</td>
    </tr>
  );
};

export default LogItem;
