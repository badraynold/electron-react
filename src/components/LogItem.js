import React from "react";
import { Button, Badge } from "react-bootstrap";

const LogItem = ({ item }) => {
  const getVariant = (priority) => {
    let ret = "danger";
    console.log(priority);
    switch (priority) {
      case "high":
        return "danger";
      case "moderate":
        return "warning";
      default:
        return "success";
    }
  };
  return (
    <tr>
      <td>
        <Badge bg={getVariant(item.priority)} className="p-2">
          {item.priority.charAt(0).toUpperCase() + item.priority.substring(1)}
        </Badge>
      </td>
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
