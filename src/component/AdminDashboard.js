import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

function AdminDashboard() {
  const [activeEmployees, setActiveEmployees] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [approvedTasks, setApprovedTasks] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Firestore or Realtime Database
    const fetchDashboardData = async () => {
      const activeEmployeesData = await firebase.firestore().collection('employees').where('status', '==', 'active').get();
      const pendingTasksData = await firebase.firestore().collection('tasks').where('status', '==', 'pending').get();
      const approvedTasksData = await firebase.firestore().collection('tasks').where('status', '==', 'approved').get();

      setActiveEmployees(activeEmployeesData.docs.map(doc => doc.data()));
      setPendingTasks(pendingTasksData.docs.map(doc => doc.data()));
      setApprovedTasks(approvedTasksData.docs.map(doc => doc.data()));
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Active Employees: {activeEmployees.length}</h2>
        {/* Display active employees data */}
      </div>
      <div>
        <h2>Pending Tasks: {pendingTasks.length}</h2>
        {/* Display pending tasks data */}
      </div>
      <div>
        <h2>Approved Tasks: {approvedTasks.length}</h2>
        {/* Display approved tasks data */}
      </div>
    </div>
  );
}

export default AdminDashboard;
