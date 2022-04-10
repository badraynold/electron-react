import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export const AddLogItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState();

  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addItem({
              text,
              user,
              priority,
            });
            setText("");
            setUser("");
            setPriority();
          }}
        >
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Log"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                placeholder="User"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="0">Select Priority</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="d-grid">
              <Button type="submit" variant="secondary">
                Add Log
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLogItem;
