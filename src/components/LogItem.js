import React from "react";

const LogItem = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.priority}</td>
      {item.text}
      <td>
        <td>{item.user}</td>
        {item.created}
      </td>
      <td>{item.id}</td>
    </tr>
  );
};

export default LogItem;
