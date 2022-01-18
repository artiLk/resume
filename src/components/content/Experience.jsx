import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";

const Experience = () => {
  return (
    <div className="container-fluid light_theme">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col p-0">
            <p className="sec_heading mb-5">WORK EXPERIENCE</p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col p-0">
            <Timeline className="exp-timeline">
              <TimelineEvent
                title="Software Engineer"
                createdAt="July 2021 - Present"
                subtitle="Eyepax IT Consulting Pvt Ltd"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <p>
                  Eyepax founded in 2006, with offices in Colombo and Stockholm,
                  Eyepax collectively employs 140+ IT professionals. Services
                  cover the entire Software Development Lifecycle with a wide
                  range of client-server, web, IOT, Machine Learning,
                  Blockchain, and mobile technologies.
                </p>
                <ul>
                  <li>
                    I am working as a full-stack software engineer (React and
                    Node)
                  </li>
                  <li>
                    Directly communicate with the client (Singaporean company).
                  </li>
                  <li>
                    Develop web features based on the client requirement using
                    React, node, Typescript, RestAPIs, couchbase, ElasticSearch,
                    etc.
                  </li>
                  <li>
                    Front-end development according to designs using React,
                    material UI and SASS, etc.
                  </li>
                  <li>
                    Developing mobile responsive sites that look nice at any
                    size; desktop, laptop, tablet and phone.
                  </li>
                  <li>
                    Modifying websites according to client’s specifications.
                  </li>
                  <li>
                    User interface designs using ‘Figma’ interface design
                    application.
                  </li>
                  <li>Testing and debugging web applications.</li>
                  <li>
                    Working with JIRA for managing tasks and version control
                    with bitBucket, and SourceTree.
                  </li>
                </ul>

                <p className="mb-0">
                  <a href="https://gritsearch.com/" target="_blank">
                    https://gritsearch.com/
                  </a>
                </p>
                <p className="mb-0">
                  <a
                    href="https://app.gritsearch.com/auth/login"
                    target="_blank"
                  >
                    https://app.gritsearch.com/auth/login
                  </a>
                </p>
                <p className="mb-0">
                  <a
                    href="https://play.google.com/store/apps/details?id=nz.co.orix.driverapp&hl=en_US&gl=US"
                    target="_blank"
                  >
                    Orix driver app
                  </a>
                </p>
              </TimelineEvent>
              <TimelineEvent
                title="Senior Software Engineer"
                createdAt="May 2021 - June 2021"
                subtitle="Serendib Systems Pty Ltd"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <p>
                  Serendib Systems Pty Ltd is a startup Australian based
                  company. I am handling all front-end tasks alone.
                </p>
                <ul>
                  <li>
                    Directly communicate with the client (Australian client) and
                    grab requirements.
                  </li>
                  <li>
                    Front-end development according to designs using React,
                    bootstrap, material UI and SASS, etc.
                  </li>
                  <li>
                    Developing mobile responsive sites that look nice at any
                    size; desktop, laptop, tablet and phone.
                  </li>
                  <li>
                    Modifying websites according to client’s specifications.
                  </li>
                  <li>
                    User interface designs using ‘Figma’ interface design
                    application.
                  </li>
                  <li>Testing and debugging web applications.</li>
                  <li>
                    Working with JIRA for managing tasks and version control
                    with GitLab
                  </li>
                </ul>

                <p className="mb-0">
                  <a href="https://www.poruwa.lk" target="_blank">
                    https://www.poruwa.lk/
                  </a>
                </p>
                <p className="mb-0">
                  <a href="https://kahabathgedara.lk" target="_blank">
                    https://kahabathgedara.lk/
                  </a>
                </p>
                <p className="mb-0">
                  <a href="https://www.spritzer.app" target="_blank">
                    https://www.spritzer.app/
                  </a>
                </p>
                <p className="mb-0">
                  <a href="https://admin.poruwa.lk" target="_blank">
                    https://admin.poruwa.lk/
                  </a>
                </p>
                <p className="mb-0">
                  <a href="https://dashboard.spritzer.app" target="_blank">
                    https://dashboard.spritzer.app/
                  </a>
                </p>
                <p className="mb-0">
                  <a href="https://agent.poruwa.lk" target="_blank">
                    https://agent.poruwa.lk/
                  </a>
                </p>
                <p className="mb-0">
                  <a href="https://www.pix.lk" target="_blank">
                    https://www.pix.lk/
                  </a>
                </p>
              </TimelineEvent>
              <TimelineEvent
                title="Software Engineer"
                createdAt="May 2020 - April 2021"
                subtitle="Serendib Systems Pty Ltd"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              ></TimelineEvent>
              <TimelineEvent
                title="Associate Software Engineer"
                createdAt="Dec 2019 - April 2020"
                subtitle="Serendib Systems Pty Ltd"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              ></TimelineEvent>
              <TimelineEvent
                title="Web Developer"
                createdAt="May 2019 - Nov 2019"
                subtitle="The Future Net USA Pvt Ltd"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <ul>
                  <li>
                    Directly communicate with the client (USA client) and grab
                    requirements.
                  </li>
                  <li>
                    Front-end development according to designs using HTML, CSS,
                    javaScript, jQuery, bootstrap and already developed plugins
                    such as data tables, photo slider etc.
                  </li>
                  <li>
                    Developing mobile responsive sites that look nice at any
                    size; desktop, laptop, tablet or phone.
                  </li>
                  <li>
                    Modifying websites according to client’s specifications.
                  </li>
                  <li>
                    User interface designs using ‘Figma’ interface design
                    application.
                  </li>
                  <li>Testing and debugging web applications.</li>
                  <li>
                    Working with JIRA for managing tasks and version control
                    with GitLab
                  </li>
                </ul>

                <p className="mb-0">
                  <a href="https://www.aerolifeaviation.com/" target="_blank">
                    https://www.aerolifeaviation.com/
                  </a>
                </p>
              </TimelineEvent>
              <TimelineEvent
                title="Trainee Web Developer"
                createdAt="Feb 2019 - April 2019"
                subtitle="The Future Net USA Pvt Ltd"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              ></TimelineEvent>
              <TimelineEvent
                title="Accounting Intern (8 months)"
                // createdAt="Feb 2019 - April 2019"
                subtitle="Aitken Spence PLC"
                icon={<i className="fas fa-suitcase"></i>}
                titleStyle={{ fontWeight: 500, fontSize: "16px" }}
                subtitleStyle={{ fontWeight: 400, fontSize: "14px" }}
                contentStyle={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <ul>
                  <li>Accounts payable(AP) role</li>
                  <li>Petty cash handling</li>
                  <li>Help to prepare monthly financial statements</li>
                  <li>Administration tasks and stock maintenance, etc.</li>
                </ul>
              </TimelineEvent>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
