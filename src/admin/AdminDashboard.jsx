import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
// import { UserList } from './components/Users'; 
// import './admin.css'



const AdminDashboard = () => {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px', height:'100vh'}}>        
    <Link href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4 text-success">MG-Store</span>
    </Link>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link to='' class="nav-link" id='active' aria-current="page">
          <svg class="bi me-2" width="16" height="16"></svg>
          Home
        </Link>
      </li>
      <li>
        <Link to='' class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to='' class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          OrderLinLink
        </Link>
      </li>
      <li>
        <Link to='' class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Products
        </Link>
      </li>
      <li>
        <Link to='' class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"></svg>
          Customers
        </Link>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a to='' class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>Admin</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><Link class="dropdown-item" to=''>New project...</Link></li>
        <li><Link class="dropdown-item" to=''>Settings</Link></li>
        <li><Link class="dropdown-item" to=''>Profile</Link></li>
        <li><hr class="dropdown-divider"/></li>
        <li><Link class="dropdown-item" to=''>Sign out</Link></li>
      </ul>
    </div>
  </div>
    )
}

export default AdminDashboard;
