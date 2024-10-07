// import React, { useState, useEffect } from 'react';
// import EmployeeTable from './EmployeeTable';
// import AddEmployee from './AddEmployee';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Home = () => {
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       setError('No token available. Please log in.');
//       navigate('/login');
//     } else {
//       fetchEmployees();
//     }
//   }, [navigate, token]);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/employees', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       setEmployees(response.data);
//     } catch (error) {
//       setError('Failed to fetch employees.');
//     }
//   };

//   const handleAdd = async (employee) => {
//     try {
//       await axios.post('http://localhost:5000/api/employees', employee, {
//         headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
//       });
//       fetchEmployees();
//       setError('');
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to add employee');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/employees/${id}`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       fetchEmployees();
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to delete employee');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="container">
//       <h1 className="mt-4 text-center ">Employee Management</h1>
//       <button className='btn btn-danger float-end mt-n9' onClick={handleLogout}>Logout</button>
//       <AddEmployee onAdd={handleAdd} />
//       {error && <p className="text-center text-danger" style={{ fontSize: "1.2rem" }}>{error}</p>}
//       <EmployeeTable employees={employees} onDelete={handleDelete} token={token} fetchEmployees={fetchEmployees}/>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import EmployeeTable from './EmployeeTable';
// import AddEmployee from './AddEmployee';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AppBar, Toolbar, Button, Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const Home = () => {
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState('');
//   const [open, setOpen] = useState(false);  // State to handle MUI Dialog visibility
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       setError('No token available. Please log in.');
//       navigate('/login');
//     } else {
//       fetchEmployees();
//     }
//   }, [navigate, token]);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/employees', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       setEmployees(response.data);
//     } catch (error) {
//       setError('Failed to fetch employees.');
//     }
//   };

//   const handleAdd = async (employee) => {
//     try {
//       await axios.post('http://localhost:5000/api/employees', employee, {
//         headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
//       });
//       fetchEmployees();
//       setError('');
//       setOpen(false);  // Close the modal after adding the employee
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to add employee');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/employees/${id}`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       fetchEmployees();
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to delete employee');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const openDialog = () => setOpen(true);   // Open Dialog
//   const closeDialog = () => setOpen(false); // Close Dialog

//   return (
//     <div className="container">
//       {/* MUI Navbar with AppBar */}
//       <AppBar position="static">
//   <Toolbar container sx={{ width: '100%' }}>
//     <Typography variant="h6" style={{ flexGrow: 1 }}>
//       Employee Management
//     </Typography>
//     <Button color="inherit" onClick={openDialog}>Add Employee</Button>
//     <Button color="inherit" onClick={handleLogout}>Logout</Button>
//   </Toolbar>
// </AppBar>

//       {/* Employee Table */}
//       <EmployeeTable employees={employees} onDelete={handleDelete} token={token} fetchEmployees={fetchEmployees} />

//       {/* MUI Dialog for Adding Employees */}
//       <Dialog open={open} onClose={closeDialog}>
//         <DialogTitle>
//           Add Employee
//           <IconButton
//             aria-label="close"
//             onClick={closeDialog}
//             style={{ position: 'absolute', right: 8, top: 8 }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent dividers>
//           <AddEmployee onAdd={handleAdd} />
//         </DialogContent>
//         {error && <p className="text-center text-danger" style={{ fontSize: "1.2rem" }}>{error}</p>}

//       </Dialog>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false); // State to handle MUI Dialog visibility
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setError("No token available. Please log in.");
      navigate("/login");
    } else {
      fetchEmployees();
    }
  }, [navigate, token]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(response.data);
    } catch (error) {
      setError("Failed to fetch employees.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEmployees();
    } catch (error) {
      setError(error.response?.data?.error || "Failed to delete employee");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const openDialog = () => setOpen(true); // Open Dialog
  const closeDialog = () => setOpen(false); // Close Dialog

  return (
    <div>
      {/* MUI Navbar with AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#386f6e', width: "100%" }}>
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      Employee Management
    </Typography>
    <Button sx={{backgroundColor: '#ca447c' ,color: '#fff' }} onClick={openDialog}> {/* Keep text white for contrast */}
      Add Employee
    </Button>
    &nbsp;
    &nbsp;
    &nbsp;
    <Button sx={{ backgroundColor: '#ff0000',color: '#fff' }} onClick={handleLogout}> {/* Keep text white for contrast */}
      Logout
    </Button>
  </Toolbar>
</AppBar>


      {/* Employee Table */}
      <div className="container">
        <EmployeeTable
          employees={employees}
          onDelete={handleDelete}
          token={token}
          fetchEmployees={fetchEmployees}
        />
      </div>

      {/* MUI Dialog for Adding Employees */}
      <Dialog open={open} onClose={closeDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          Add Employee
          <IconButton
            aria-label="close"
            onClick={closeDialog}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <AddEmployee
            token={token}
            fetchEmployees={fetchEmployees}
            setOpen={setOpen}
          />
        </DialogContent>
        {error && (
          <p className="text-center text-danger" style={{ fontSize: "1.2rem" }}>
            {error}
          </p>
        )}
      </Dialog>
    </div>
  );
};

export default Home;
