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
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  // const editMember = memberEditted => {
  //   const edittedTeam = teamMembers.filter(
  //     teamMember => teamMember.id !== memberEditted.id
  //   );

  //   setTeamMembers([...edittedTeam, memberEditted]);
  //   setMemberToEdit(null);
  // };

  const editMember = memberEditted => {
    const edittedTeam = teamMembers.map(teamMember => {
      if (teamMember.id === memberEditted.id) {
        return memberEditted;
      } else {
        return teamMember;
      }
    });

    setTeamMembers([...edittedTeam]);
    setMemberToEdit(null);
  };

  const deleteMember = memberToDelete => {
    const newTeam = teamMembers.filter(
      teamMember => teamMember.id !== memberToDelete.id
    );

    setTeamMembers([...newTeam]);
  };

  return (
    <div className="App">
      <h1>List of Team Members</h1>
      <Form
        addNewTeamMember={addNewTeamMember}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <TeamMembers
        teamMembers={teamMembers}
        setMemberToEdit={setMemberToEdit}
        deleteMember={deleteMember}
      />
    </div>
  );
}

export default App;
