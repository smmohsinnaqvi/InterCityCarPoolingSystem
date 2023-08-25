import React, { useState, useEffect } from 'react';

const StatusUpdate = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/statusUpdate?login_id:user.login_id")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (<div>
    alert("status updated");</div>
  );
};

export default StatusUpdate;
