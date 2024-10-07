import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/home');
      return;
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });

      if (response.status === 201) {
        navigate('/login');
      } else {
        setError(response.data.message || 'Registration failed.');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'An error occurred during registration.');
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 col-lg-5" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', color: '#007bff' }}>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label style={{ fontSize: '1.1rem' }}>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label style={{ fontSize: '1.1rem' }}>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger text-center" style={{ fontSize: '1.2rem' }}>{error}</p>}
            <button type="submit" className="btn btn-success d-block mx-auto">
              Submit
            </button>
          </form>
          <div className="mt-3 text-center" style={{ fontSize: '1rem' }}>
            <p className="text-muted">
              If you already have an account, please <a href="/login">login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
