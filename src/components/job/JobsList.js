import React, { useContext } from 'react';
import { JobsContext } from '../../contexts';

import { JobItem } from './JobItem';

const JobsList = () => {
  const { jobs } = useContext(JobsContext);
  return jobs.map((job, i) => (
    <JobItem key={`${job.title.replace(' ', '-')}-${i}`} {...job} />
  ));
};

export default JobsList;
