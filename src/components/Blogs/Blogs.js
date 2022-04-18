import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <div className="answer-container">
        <h3>1.Difference between authorization and authentication?</h3>
        <h4>Answer:</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Serial No:</th>
              <th scope="col">Authentication</th>
              <th scope="col">Authorization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                In authentication process, the identity of users are checked for
                providing the access to the system.
              </td>
              <td>
                While in authorization process, persons or users authorities are
                checked for accessing the resources.
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>In authentication process, users or persons are verified.</td>
              <td>While in this process, users or persons are validated.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>It is done before the authorization process.</td>
              <td>
                While this process is done after the authentication process.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="answer-container">
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <h4>Answer: </h4>
        <p>
          Firebase, you can focus your time and attention on developing the best
          app(s) possible for your business. Since the operations and internal
          functions are so solid, and taken care of by the Firebase interface,
          you can spend more time developing the high quality app that users are
          going to want to use.
        </p>
        <p>
          Yes we have implement facebook authentication and login our app with
          facebook and also use github and also email and password
          authentication.{" "}
        </p>
      </div>

      <div className="answer-container">
        <h3>
          What other services does firebase provide other than authentication
        </h3>
        <h4>Answer:</h4>
        <p>
          There are some alternate authentication system without google firebase
          authentication. There are:-
          <ul>
            <li>Parse – Open Source Backend Platform;</li>
            <li>Back4app – Parse Hosting Platform;</li>
            <li>
              Hoodie – Generic backend with a client API for Offline First
              applications;
            </li>
            <li>
              Deployd – Simple core library, with a modular API for your
              application;
            </li>
            <li>Heroku – Platform as a service backed by Salesforce.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
