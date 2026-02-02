import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, breadcrumbs }) => {
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbsBanner">
                    <h2>{title}</h2>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index}>
                                {crumb.link ? <Link to={crumb.link}>{crumb.name}</Link> : crumb.name}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
