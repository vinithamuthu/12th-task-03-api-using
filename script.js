async function getJobs() {
  try {
    const response = await fetch('https://jobs.github.com/positions.json?description=javascript', {
      method: 'GET',
    });
    const jobs = await response.json();

    // Display job information
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';

    jobs.forEach(job => {
      const listItem = document.createElement('li');
      listItem.textContent = `${job.title} - ${job.company}`;
      jobList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching job information:', error);
  }
}