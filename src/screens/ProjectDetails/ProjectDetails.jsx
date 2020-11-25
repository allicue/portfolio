import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import NavBar from '../../components/NavBar/NavBar';
import GitHub from '../../assets/github.png';
import ExternalLink from '../../assets/external-link.png';

function ProjectDetails(props) {
  const params = useParams()
  const project = props.listItems.find((r) => r.fields.name === params.name)

  return (
    <div>
      <NavBar />

      <div className='project-details'>
        <h2 className='proj-name'>{project && project.fields.name}</h2>
        <h3>Description</h3>
        <p className='proj-description'>{project && project.fields.description}</p>
      <a rel="noreferrer" target="_blank" href={project && project.fields.github}>See Code <img src={GitHub} alt="github"/></a>
        <a rel="noreferrer" target="_blank" href={project && project.fields.website}>Visit Website <img src={ExternalLink} alt="website" /></a>
      </div>
      
    </div>
  );
}

export default ProjectDetails;