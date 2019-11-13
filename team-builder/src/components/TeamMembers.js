import React from "react";

const TeamMembers = ({ teamMembers, deleteMember, setMemberToEdit }) => {
  return (
    <>
      {teamMembers.map(teamMember => (
        <ul key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>

          {teamMember.name ? (
            <>
              <button onClick={() => setMemberToEdit(teamMember)}>Edit</button>
              <button onClick={() => deleteMember(teamMember)}>Delete</button>
            </>
          ) : null}
        </ul>
      ))}
    </>
  );
};

export default TeamMembers;
