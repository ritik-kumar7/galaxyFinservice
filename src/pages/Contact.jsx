import { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/Forex Trading.jpeg';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Pages.css';
import AnimationWrapper from '../components/animations/AnimationWrapper';
import StaggerWrapper from '../components/animations/StaggerWrapper';
import HoverWrapper from '../components/animations/HoverWrapper';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', number: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="page-wrapper" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)', minHeight: '100vh', width: '100%' }}>
                <TopBar />
                <Navbar />


                <section className="page-section">
                    <div className="container">
                        <AnimationWrapper variant="fadeUp" delay={0.2}>
                            <div className="section-title reveal-anim">
                                <h2>Contact</h2>
                                <h3>Get In <span>Touch</span></h3>
                                <p>Have questions? We're here to help. Contact our team for professional assistance.</p>
                            </div>
                        </AnimationWrapper>

                        <StaggerWrapper staggerDelay={0.2} variant="fadeUp">
                            <div className="row mb-5 g-4 reveal-anim" style={{ animationDelay: '0.2s' }}>
                                <div className="col-lg-4 col-md-6">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box text-center h-100">
                                            <div className="icon mx-auto"><Mail size={30} color="#000" /></div>
                                            <h4 className="title">Email Us</h4>
                                            <p className="description mb-0"><a href="mailto:support@galaxyfinservices.com" className="text-decoration-none text-light">support@galaxyfinservices.com</a></p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box text-center h-100">
                                            <div className="icon mx-auto"><Phone size={30} color="#000" /></div>
                                            <h4 className="title">Call Us</h4>
                                            <p className="description mb-0"><a href="tel:971509822363" className="text-decoration-none text-light">+971 50 982 2363</a></p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <HoverWrapper scale={1.05} y={-8}>
                                        <div className="icon-box text-center h-100">
                                            <div className="icon mx-auto"><MapPin size={30} color="#000" /></div>
                                            <h4 className="title">Visit Us</h4>
                                            <p className="description mb-0 text-white-50">Ground Floor, The Sotheby Building, Rodney Bay, Saint Lucia</p>
                                        </div>
                                    </HoverWrapper>
                                </div>
                            </div>
                        </StaggerWrapper>

                        <AnimationWrapper variant="fadeUp" delay={0.4}>
                            <div className="row g-4 reveal-anim" style={{ animationDelay: '0.4s' }}>
                                <div className="col-lg-5">
                                    <div className="content-box h-100 p-4 p-lg-5">
                                        <div className="mb-5">
                                            <h4 className="text-gold mb-3"><i className="bi bi-geo-alt-fill me-2"></i> Registered Address</h4>
                                            <p className="text-white mb-2" style={{ lineHeight: '1.7' }}>Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia P.O. Box 838, Castries, Saint Lucia.</p>
                                            <span className="badge bg-dark border border-secondary text-aqua py-2 px-3">Reg. No: 2025-00598</span>
                                        </div>

                                        <div className="pt-4 border-top border-secondary border-opacity-25">
                                            <h4 className="text-gold mb-3"><i className="bi bi-building-fill me-2"></i> Physical Address</h4>
                                            <p className="text-white mb-0" style={{ lineHeight: '1.7' }}>26 Nikoloz Baratashvili Street, Office 78. Batumi 6000 Georgia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="content-box p-4 p-lg-5">
                                        <h4 className="text-white mb-4"><i className="bi bi-envelope-paper-fill me-2"></i> Send us a Message</h4>
                                        <form onSubmit={handleSubmit} className="calculator-wrapper">
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <label className="form-label">Full Name</label>
                                                    <input type="text" name="name" className="form-control" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Email Address</label>
                                                    <input type="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Phone Number</label>
                                                    <input type="tel" name="number" className="form-control" placeholder="Enter phone number" value={formData.number} onChange={handleChange} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Subject</label>
                                                    <input type="text" name="subject" className="form-control" placeholder="Message subject" value={formData.subject} onChange={handleChange} required />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Your Message</label>
                                                    <textarea name="message" className="form-control" placeholder="How can we help you?" rows="5" value={formData.message} onChange={handleChange} style={{ height: 'auto' }}></textarea>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button type="submit" className="btn btn-calc-submit w-100 py-3">
                                                        <i className="bi bi-send-fill me-2"></i> Send Message
                                                    </button>
                                                </div>
                                            </div>
                                            {submitted && (
                                                <div className="alert alert-success mt-4 mb-0 border-0 bg-success bg-opacity-10 text-success text-center">
                                                    <i className="bi bi-check-circle-fill me-2"></i> Your message has been sent. Thank you!
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Contact;
