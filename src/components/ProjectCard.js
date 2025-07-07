import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <h6 style={{ cursor: "pointer", color: "#0d6efd" }}>See more ... </h6>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

