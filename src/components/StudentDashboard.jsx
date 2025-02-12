import React, { useState } from "react";
import { useStore } from "../Store";
import { useNavigate } from "react-router-dom";
import "../App.css";

const subjectsList = ["Maths", "Physics", "Chemistry", "English", "Biology"];

const StudentDashboard = () => {
  const { user, setUser } = useStore();
  const [marksList, setMarksList] = useState([{}]); // Start with one row
  const navigate = useNavigate();

  // Handle marks input change
  const handleMarksChange = (rowIndex, subject, value) => {
    const newMarksList = [...marksList];
    newMarksList[rowIndex] = { ...newMarksList[rowIndex], [subject]: value };
    setMarksList(newMarksList);
  };

  // Add new row (up to 5 rows)
  const handleAddRow = () => {
    if (marksList.length < 5) {
      setMarksList([...marksList, {}]);
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
      
      <h3>Enter Your Marks</h3>
      <table className="marks-table">
        <thead>
          <tr>
            {subjectsList.map((subject, index) => (
              <th key={index}>{subject}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {marksList.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {subjectsList.map((subject, index) => (
                <td key={index}>
                  <input
                    type="number"
                    placeholder=""
                    value={row[subject] || ""}
                    onChange={(e) => handleMarksChange(rowIndex, subject, e.target.value)}
                    min="0"
                    max="100"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <button className="add-row-btn" onClick={handleAddRow} disabled={marksList.length >= 5}>
        Add 
      </button>
    </div>
  );
};

export default StudentDashboard;
