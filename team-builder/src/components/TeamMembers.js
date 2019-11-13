import React from "react";

const TeamMembers = props => {
  return (
    <>
      {props.teamMembers.map(teamMember => (
        <>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </>
      ))}
    </>
  );
};

export default TeamMembers;
