import React, { useState, useEffect } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    if (props.memberToEdit) {
      setTeamMember(props.memberToEdit);
    }
  }, [props.memberToEdit]);

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    if (props.memberToEdit) {
      props.editMember(teamMember);
    } else {
      props.addNewTeamMember(teamMember);
    }
    setTeamMember({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={teamMember.name}
        onChange={handleChanges}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={teamMember.email}
        onChange={handleChanges}
      />
      <br />
      <label htmlFor="role">Role</label>
      <select
        id="role"
        type="select"
        name="role"
        value={teamMember.role}
        onChange={handleChanges}
      >
        <option value="">--Choose a role</option>
        <option value="Backend-Engineer">Backend Engineer</option>
        <option value="Frontend-Engineer">Frontend Engineer</option>
        <option value="UX-Designer">UX Design</option>
      </select>
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
