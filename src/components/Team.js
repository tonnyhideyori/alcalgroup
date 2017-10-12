import React from "react";

const Team = () => {
  return (
    <div>
      <h3>Our Amazing Team</h3>
      <table className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th> Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MR. ALBERT N. MTESIGWA</td>
            <td>MANAGING DIRECTOR</td>
          </tr>
          <tr>
            <td>ENG. CALVIN L.M MASANJA</td>
            <td>TECHNICAL DIRECTOR</td>
          </tr>
          <tr>
            <td>ENG. BENJAMIN C. CHAULA</td>
            <td>HEAD OF SOFTWARE DEVELOPMENT</td>
          </tr>
          <tr>
            <td>MR. LAWRENCE D. NZWAMUKI</td>
            <td>HEAD HUMAN RESOURCES</td>
          </tr>
          <tr>
            <td>ENG. FRANCISCO KISUKA</td>
            <td>GENERAL MANAGER</td>
          </tr>
          <tr>
            <td>MR. HONEST EDSON</td>
            <td>CHIEF ACCOUNTS AND FINANCE</td>
          </tr>
          <tr>
            <td>ADV. FABIAN KISUKA</td>
            <td>HEAD OF LAWS AND ENFORCEMENT</td>
          </tr>
          <tr>
            <td>SARAH JACKSON</td>
            <td>CHIEF SALES AND MARKETING</td>
          </tr>
          <tr>
            <td>MR.EDWIN ISMAIL</td>
            <td>LEADING IT AND SOFTWARE ENGINEER</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Team;
