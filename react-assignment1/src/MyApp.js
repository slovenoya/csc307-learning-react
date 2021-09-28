import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import FetchDemo from "./FetchDemo";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />

      <FetchDemo subreddit="calpoly" />
    </div>
  );
}

export default MyApp;
