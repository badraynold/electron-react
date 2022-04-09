import React from "react";
import { Button } from "react-bootstrap";

const LogItem = ({ item }) => {
  return (
    <tr>
      <td>{item.priority}</td>
      <td>{item.text}</td>
      <td>{item.user}</td>
      <td>{item.created}</td>
      <td>
        <Button variant="danger" size="sm">
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
