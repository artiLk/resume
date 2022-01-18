import React from "react";

const SchoolEducation = () => {
  return (
    <div className="container-fluid dark_theme">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col p-0">
            <p className="sec_heading">EDUCATION</p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col p-0" style={{ fontSize: 14 }}>
            <table className="timeline-table">
              <tbody>
                <tr>
                  <td>2009</td>
                  <td>
                    <p className="qual">GCE Ordinary Level (O/L)</p>
                    <p className="institute">President Collage, Kotte</p>
                    <p
                      className="mt-3 mb-0"
                      style={{ fontSize: 14, fontWeight: 300 }}
                    >
                      3 A's, 2 B's and 4 C's (Mathematics: A, English: C)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>2012</td>
                  <td>
                    <p className="qual">GCE Advanced Level (A/L)</p>
                    <p className="institute">
                      D S Senanayake College, Colobmo 07
                    </p>
                    <p className="mb-1 mt-3" style={{ fontSize: 14 }}>
                      Island Rank : 119
                    </p>
                    <p className="mb-3" style={{ fontSize: 14 }}>
                      District Rank : 55 (Colombo)
                    </p>
                    <p style={{ marginBottom: 0, fontWeight: 300 }}>
                      Accounting: A
                    </p>
                    <p style={{ marginBottom: 0, fontWeight: 300 }}>
                      Economics: A
                    </p>
                    <p style={{ marginBottom: 0, fontWeight: 300 }}>
                      Statistics: A
                    </p>
                    <p style={{ marginBottom: 0, fontWeight: 300 }}>
                      General English: B
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

export default SchoolEducation;
