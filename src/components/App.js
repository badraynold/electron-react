import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import LogItem from "./LogItem";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [logs, setLogs] = useState([
    {
      id: 1,
      text: "This is log one",
      priority: "low",
      user: "Brad",
      created: new Date().toString(),
    },
    {
      id: 1,
      text: "This is log two",
      priority: "low",
      user: "Kate",
      created: new Date().toString(),
    },
  ]);

  return (
    <Container>
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
            <LogItem item={item} />
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
