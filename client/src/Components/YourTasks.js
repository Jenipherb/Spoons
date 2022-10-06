import { Button, Card, Row, Col, Container } from "react-bootstrap";

function YourTasks({ title, description, priority, due, task }) {
  console.log(title);
  console.log(description);
  console.log(due);

  function handleDelete() {
    fetch(`/task_delete/${task.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  return (
    <div>
      <Container fluid>
        <Row xs={1} md={2} className="g-4">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>Description: {description}</Card.Text>
            <Card.Text>Priority: {priority}</Card.Text>
            <Card.Text>Due: {due}</Card.Text>
            <Button onClick={handleDelete}>Task Complete</Button>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default YourTasks;
