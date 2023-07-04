import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(id, title, content) {
    setNotes((prevnote) => {
      return [
        ...prevnote,
        <Note
          onDelete={deleteNote}
          key={id}
          id={id}
          title={title}
          content={content}
        />
      ];
    });
  }

  function deleteNote(toDelete) {
    setNotes((prev) => {
      const filtered = prev.filter((note, index) => {
        console.log(note);
        const { id } = note.props;

        return toDelete !== id;
      });
      return filtered;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes}
      <Footer />
    </div>
  );
}

export default App;
