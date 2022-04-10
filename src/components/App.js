import React, { useEffect, useState, useRef } from "react";
import { Container, Alert, Table } from "react-bootstrap";
import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";

const App = () => {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef();
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    variant: "success",
  });
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: "This is log one",
      priority: "low",
      user: "Brad",
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: "This is log two",
      priority: "moderate",
      user: "Kate",
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: "This is log three",
      priority: "high",
      user: "Tom",
      created: new Date().toString(),
    },
  ]);

  const showAlert = (message, variant = "success") => {
    setAlert({
      show: true,
      message,
      variant,
    });
  };

  const addItem = (item) => {
    if (item.text === "" || item.user === "" || item.priority === "") {
      showAlert("Please enter all fields", "danger");
    } else {
      item._id = Math.max(...logs.map((item) => item._id)) + 1;
      item.created = new Date().toString();
      setLogs([...logs, item]);
      showAlert("Item just added");
    }
  };

  useEffect(() => {
    if (alert.show) {
      timerRef.current = setTimeout(() => setAlert({ show: false }), 4000);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, [alert]);

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((item) => (
            <LogItem key={item._id} item={item} />
          ))}
        </tbody>
      </Table>
      <button onClick={() => setCounter((data) => data + 1)}>
        Counter: {counter}
      </button>
    </Container>
  );
};

export default App;
