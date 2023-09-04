// App.js (Main component)
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Login from './component/Login';
import AdminDashboard from './component/AdminDashboard';
import EmployeeList from './component/EmployeeList';
import EmployeeProfile from './component/EmployeeProfile';
import PendingTasks from './component/PendingTasks';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/employees" component={EmployeeList} />
        <Route path="/employee/:id" component={EmployeeProfile} />
        <Route path="/tasks/pending" component={PendingTasks} />
      </Switch>
    </Router>
  );
}

export default App;

// Login.js
// Implement Firebase login functionality here

// AdminDashboard.js
// Display an overview of active employees, pending tasks, and approved tasks

// EmployeeList.js
// Display a list of employees fetched from Firebase

// EmployeeProfile.js
// Display and edit individual employee details

// PendingTasks.js
// Display a list of pending tasks and allow HR admin to approve/reject them
