import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails(props) {
  const params = useParams()


  const project = props.listItems.find((r) => r.fields.name === params.name)

  return (
    <div>
      <h1>Project Details</h1>
      <h2 className='proj-name'>{project && project.fields.name}</h2>
      <p className='proj-description'>{project && project.fields.description}</p>
    </div>
  );
}

export default ProjectDetails;