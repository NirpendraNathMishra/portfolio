import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Shutter = () => {
  const resumeLink = "https://drive.google.com/file/d/1AJYMUQzwQjCwKg7MKyADI-Tw8isW6fpS/view";

  useEffect(() => {
    window.location.href = resumeLink;
  }, [resumeLink]);

  return (
    <div className="redirecting-container">
      <Helmet>
        <title>Redirecting to Resume - Nirpendra Nath Mishra</title>
        <meta
          name="description"
          content="Redirecting to the resume of Nirpendra Nath Mishra."
        />
      </Helmet>
      <h1 className="text-center text-xl font-bold text-white">
        Redirecting to the resume...
      </h1>
    </div>
  );
};

export default Shutter;
