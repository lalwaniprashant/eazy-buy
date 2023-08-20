import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Certainly, here are five key points typically found in a privacy
            policy:
          </p>
          <ul>
            <li>
              <b>Data Collection</b>: We collect personal information such as
              name, email, and address solely for the purpose of providing
              services and improving user experience.
            </li>
            <li>
              <b>Usage Information</b>: We gather non-personal data like
              browsing behavior and device information to enhance our website
              functionality and tailor offerings.
            </li>
            <li>
              <b>Data Securit</b>y: Your data's security is our priority. We
              employ industry-standard measures to protect against unauthorized
              access, alteration, or disclosure.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
