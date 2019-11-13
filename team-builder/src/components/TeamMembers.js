import React from "react";

const TeamMembers = props => {
  return (
    <>
      {props.teamMembers.map(teamMember => (
        <ul key={props.teamMembers.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
          {teamMember.name ? (
            <button onClick={() => props.setMemberToEdit(teamMember)}>
              Edit
            </button>
          ) : null}
        </ul>
      ))}
    </>
  );
};

export default TeamMembers;
