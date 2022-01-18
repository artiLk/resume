import React from "react";

const UniEducation = () => {
  return (
    <div className="container-fluid light_theme">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col p-0">
            <p className="sec_heading">UNIVERSITY EDUCATION</p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col p-0" style={{ fontSize: 14 }}>
            <table className="timeline-table">
              <tbody>
                <tr>
                  <td>2017</td>
                  <td>
                    <p className="qual">
                      BSc. Accounting (Sp) 2nd Class Lower Division
                    </p>
                    <p className="institute">
                      University of Sri Jayewardene pura (USJP)
                    </p>
                    <p className="mt-2 mb-0" style={{ fontSize: 14 }}>
                      GPA : 3.39 / 4.00
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>2019</td>
                  <td>
                    <p className="qual">
                      Bachelor Of Information Technology (BIT) 2nd Class Lower
                      Division
                    </p>
                    <p className="institute">
                      University of Colombo School of Computing (UCSC)
                    </p>
                    <p className="mt-2 mb-0" style={{ fontSize: 14 }}>
                      GPA : 3.28 / 4.00
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniEducation;
