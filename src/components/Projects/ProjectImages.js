import React from "react";

const ProjectImages = ({ src, url, title }) => {
  return (
    <figure style={{ textAlign: "center" }}>
      <a href={url} rel="noopener noreferrer" target="_blank">
        <img
          style={{
            border: "1px solid #ececec",
            marginBottom: "2%",
            boxShadow: "10px 5px 8px #888888",
          }}
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
