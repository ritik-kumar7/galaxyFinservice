import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import bgImage from '../assets/Forex Trading.jpeg';
import logo from '../assets/logo.png'; // Assuming logo exists, verified in list_dir
import './Auth.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="auth-container" style={{ backgroundImage: `url('${bgImage}')` }}>
            <div className="auth-overlay"></div>
            <AnimationWrapper variant="scaleUp" delay={0.2} className="auth-box-wrapper">
                <div className="auth-box glass-card">
                    <div className="auth-header">
                        <Link to="/" className="auth-logo">
                            <img src={logo} alt="Galaxy Financial Services" />
                        </Link>
                        <h3>Sign Up</h3>
                    </div>

                    <form className="auth-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Enter your Email Address <sup>*</sup></label>
                                <input type="email" placeholder="abc@mail.com" className="form-control" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Enter your Name <sup>*</sup></label>
                                <input type="text" placeholder="Name" className="form-control" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Enter your Password <sup>*</sup></label>
                                <div className="password-input">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your Password"
                                        className="form-control"
                                    />
                                    <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Confirm your Password <sup>*</sup></label>
                                <div className="password-input">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Re-enter Password"
                                        className="form-control"
                                    />
                                    <button type="button" className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Country <sup>*</sup></label>
                                <select className="form-control">
                                    <option>Select country</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>India</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Phone <sup>*</sup></label>
                                <div className="phone-input">
                                    <input type="text" className="form-control phone-code" placeholder="+1" readOnly />
                                    <input type="number" className="form-control" placeholder="Phone" />
                                </div>
                            </div>
                        </div>

                        <div className="form-action">
                            <button type="submit" className="btn-auth">
                                Sign Up
                            </button>
                            <div className="auth-back-home">
                                <Link to="/">Back to Home</Link>
                            </div>
                        </div>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an Account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
            </AnimationWrapper>
        </div>
    );
};

export default Register;
