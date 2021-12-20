import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNotes.css";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [isDeleted, setisDeleted] = useState(false);

  const deleteHandler = async (id) => {
    const config = {
      "Content-type": "application/json",
    };
    const res = await axios.post(
      "/api/users/delete",
      {
        id,
      },
      config
    );
    return setisDeleted(true);
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/users/list");
    console.log(data);
    setNotes(data.notes);
  };
  console.log(notes);

  useEffect(() => {
    fetchNotes();
  });

  return (
    <MainScreen title="Welcome Back Mahima Katakwar...">
      <Link to="adddetails">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Add Details
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Header>
              </span>
              <div>
                <Button href={`/notes/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
