import React, { useState } from "react";
import { useStore } from "../Store";
import { useNavigate } from "react-router-dom";
import "../App.css";

const StudentDashboard = () => {
  const { user, setUser } = useStore();
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const handleAddSubject = () => {
    if (subject && marks && subjects.length < 5) {
      setSubjects([...subjects, { subject, marks: parseInt(marks) }]);
      setSubject("");
      setMarks("");
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome, {user}!</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <h3>Enter Your Subjects and Marks </h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={subjects.length >= 5}
        />
        <input
          type="number"
          placeholder="Enter marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          disabled={subjects.length >= 5}
        />
        <button onClick={handleAddSubject} disabled={subjects.length >= 5}>
          Add Subject
        </button>
      </div>
      <h3>Subjects and Marks</h3>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((s, index) => (
            <tr key={index}>
              <td>{s.subject}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
