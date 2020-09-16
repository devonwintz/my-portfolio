import React from "react";

const ProjectImages = ({ src, url, title }) => {
  return (
    <figure style={{ textAlign: "center" }}>
      <a href={url} rel="noopener noreferrer" target="_blank">
        <img
          style={{ border: "1px solid #A8A8A8", marginBottom: "2%" }}
          src={src}
          alt="project"
          width="80%"
        />
      </a>
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default ProjectImages;
