import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import bgImage from '../assets/Forex Trading.jpeg';
import logo from '../assets/logo.png';
import './Auth.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-container" style={{ backgroundImage: `url('${bgImage}')` }}>
            <div className="auth-overlay"></div>
            <AnimationWrapper variant="scaleUp" delay={0.2} className="auth-box-wrapper">
                <div className="auth-box glass-card">
                    <div className="auth-header">
                        <Link to="/" className="auth-logo">
                            <img src={logo} alt="Galaxy Financial Services" />
                        </Link>
                        <h3>Sign In</h3>
                    </div>

                    <form className="auth-form">
                        <div className="form-group">
                            <label>Email Address <sup>*</sup></label>
                            <input type="email" placeholder="abc@mail.com" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Password <sup>*</sup></label>
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

                        <div className="form-options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>

                        <div className="form-action">
                            <button type="submit" className="btn-auth">
                                Sign In
                            </button>
                            <div className="auth-back-home">
                                <Link to="/">Back to Home</Link>
                            </div>
                        </div>
                    </form>

                    <div className="auth-footer">
                        <p>Don't have an Account? <Link to="/register">Sign Up</Link></p>
                    </div>
                </div>
            </AnimationWrapper>
        </div>
    );
};

export default Login;
