import React, { useState } from "react";

import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: ""
    }
  ]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <div className="App">
      <h1>List of Team Members</h1>
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
