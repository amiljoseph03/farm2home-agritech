import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User,
  ShieldCheck,
  UserCheck,
  Mail,
  Lock,
  Phone,
  MapPin,
  Building,
  ArrowRight,
} from 'lucide-react';
import './AuthContainer.css';

export default function AuthContainer({ mode }) {
  const navigate = useNavigate();
  const isLogin = mode === 'login';

  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    farmName: '',
    farmLocation: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? 'login' : 'register';

    // Payload formatted conditionally
    const payload = isLogin
      ? { email: formData.email, password: formData.password, role }
      : {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role,
          farmName: role === 'farmer' ? formData.farmName : undefined,
          farmLocation: role === 'farmer' ? formData.farmLocation : undefined,
        };

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/${endpoint}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (result.success) {
        if (isLogin) {
          localStorage.setItem('authToken', result.token);
          localStorage.setItem('userContext', JSON.stringify(result.user));

          // Dynamic dashboard routing
          if (result.user.role === 'admin') navigate('/admin-dashboard');
          else if (result.user.role === 'farmer') navigate('/farmer-dashboard');
          else navigate('/marketplace');
        } else {
          alert('Registration successful! Redirecting to login page...');
          navigate('/login');
        }
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Connection error to server:', error);
      alert('Could not connect to the authentication server.');
    }
  };

  return (
    <section className="auth-section py-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="auth-card shadow-lg bg-white p-4 p-md-5 rounded-5 border-0">
              <div className="text-center mb-4">
                <h2 className="fw-black text-dark tracking-tight mb-2">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-muted small">
                  {isLogin
                    ? 'Access your dynamic tracking panel'
                    : 'Join our high-end resource matrix'}
                </p>
              </div>

              {/* Dynamic Role Switcher */}
              <div className="role-switcher-wrapper d-flex p-1 bg-light rounded-4 mb-4">
                <button
                  type="button"
                  className={`btn w-33 rounded-3 py-2 fw-bold d-flex align-items-center justify-content-center gap-1 small border-0 transition-all ${
                    role === 'user'
                      ? 'bg-white shadow-sm text-success'
                      : 'text-muted'
                  }`}
                  onClick={() => setRole('user')}
                >
                  <User size={14} /> User
                </button>
                <button
                  type="button"
                  className={`btn w-33 rounded-3 py-2 fw-bold d-flex align-items-center justify-content-center gap-1 small border-0 transition-all ${
                    role === 'farmer'
                      ? 'bg-white shadow-sm text-success'
                      : 'text-muted'
                  }`}
                  onClick={() => setRole('farmer')}
                >
                  <ShieldCheck size={14} /> Farmer
                </button>
                <button
                  type="button"
                  className={`btn w-33 rounded-3 py-2 fw-bold d-flex align-items-center justify-content-center gap-1 small border-0 transition-all ${
                    role === 'admin'
                      ? 'bg-white shadow-sm text-danger'
                      : 'text-muted'
                  }`}
                  onClick={() => setRole('admin')}
                >
                  <UserCheck size={14} /> Admin
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
              >
                {!isLogin && (
                  <div className="form-group">
                    <label className="small text-muted fw-bold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      required
                      className="form-control rounded-3"
                      placeholder="John Doe"
                      onChange={handleInputChange}
                    />
                  </div>
                )}

                <div className="form-group">
                  <label className="small text-muted fw-bold mb-1">
                    Email Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <Mail size={16} className="text-muted" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      required
                      className="form-control border-start-0"
                      placeholder="name@example.com"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="form-group">
                    <label className="small text-muted fw-bold mb-1">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <Phone size={16} className="text-muted" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        required
                        className="form-control border-start-0"
                        placeholder="Phone"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {!isLogin && role === 'farmer' && (
                  <div className="farmer-extended-fields d-flex flex-column gap-3 pt-2 border-top mt-2">
                    <div className="form-group">
                      <label className="small text-muted fw-bold mb-1">
                        Farm / Estate Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Building size={16} className="text-muted" />
                        </span>
                        <input
                          type="text"
                          name="farmName"
                          value={formData.farmName}
                          required
                          className="form-control border-start-0"
                          placeholder="Green Valley Estate"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="small text-muted fw-bold mb-1">
                        Farm Location
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <MapPin size={16} className="text-muted" />
                        </span>
                        <input
                          type="text"
                          name="farmLocation"
                          value={formData.farmLocation}
                          required
                          className="form-control border-start-0"
                          placeholder="City, State"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label className="small text-muted fw-bold mb-1">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <Lock size={16} className="text-muted" />
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      required
                      className="form-control border-start-0"
                      placeholder="••••••••"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn rounded-4 py-3 fw-bold mt-3 d-flex align-items-center justify-content-center gap-2 shadow-sm ${
                    role === 'admin' ? 'btn-danger' : 'btn-success'
                  }`}
                >
                  <span>{isLogin ? 'Secure Log In' : 'Register Account'}</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="text-center mt-4 pt-2 border-top">
                {isLogin ? (
                  <Link
                    to="/register"
                    className="text-success text-decoration-none small fw-bold"
                  >
                    Don't have an account? Sign Up
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-success text-decoration-none small fw-bold"
                  >
                    Already have an account? Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}