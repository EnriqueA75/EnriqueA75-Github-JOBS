import React, { useEffect, useState } from 'react';

import { JobsContext } from '../contexts';

import { jobs as jobsData } from '../data';

export const JobsProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState(jobsData);
  const [isRequesting, setIsRequesting] = useState(false);

  const onQueryChange = (query) => {
    setIsRequesting(true);
    setQuery(query);
  };

  useEffect(() => {
    if (query !== '') {
      const jobsFiltered = jobsData.filter((job) => job.title?.includes(query));
      setTimeout(() => {
        setJobs(jobsFiltered);
        setIsRequesting(false);
      }, 500);
    } else {
      setJobs(jobsData);
      setIsRequesting(false);
    }
  }, [query]);

  const value = {
    jobs,
    onQueryChange,
    isRequesting,
    query,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};
