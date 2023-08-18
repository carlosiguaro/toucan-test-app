import Layout from "../components/layout/layout";
import ProtectedRoute from "../components/auth/protected-route";
import Advertisement from "../components/advertisement/advertisement";

export default function Services() {
    return (
        <ProtectedRoute authenticated={false}>
            <Layout section="Services">
                <div id="services-section">
                    <div>
                        <h1>We offer a wide range of software development services</h1>
                        <div>
                            <div>
                                <div>
                                    <p>We are passionate about software development 
                                        and thrive on meeting the needs of our clients.</p>

                                    <p>We deliver quality software solutions only from 
                                        experienced and vetted software engineers 
                                        and project managers.</p>

                                    <p>We've got you covered whether you need two extra developers 
                                        to extend your team to meet a deadline or 20 developers 
                                        for an extended project.</p>

                                    <p>It starts with a conversation.</p>
                                    
                                    <p>Call us today or send us an email, and we will set up a time 
                                        for a call to learn more about you and how we can best
                                        fill your need.</p>

                                    <p>Let us know your requirements, and we will 
                                        work with you to strategize the best solution.</p>
                                </div>
                                <div>
                                    <h4>We have experts in:</h4>
                                    <ul>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>React.js</li>
                                        <li>Ruby</li>
                                        <li>Angular</li>
                                        <li>React Native</li>
                                        <li>Data Engineering</li>
                                        <li>Odoo</li>                            
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4>Our Services:</h4>
                                <ul>
                                    <li>App Design</li>
                                    <li>App Development</li>
                                    <li>Customer Portals</li>
                                    <li>Web-Based Customer Dashboards</li>
                                    <li>Content Management Systems</li>
                                    <li>API Integrations</li>
                                    <li>Application Architecture</li>
                                    <li>Web-Based Mobile Design</li>
                                    <li>Responsive Design</li>
                                    <li>Front End Development</li>
                                    <li>Back End Development</li>
                                    <li>Technical Maintenance</li>
                                    <li>Custom software development</li>
                                    <li>UI / UX Design</li>
                                    <li>Application Testing</li>
                                    <li>Technology consulting</li>
                                    <li>Enterprise modernization</li>
                                    <li>Enterprise applications</li>
                                    <li>PHP, Node, Java, and .NET, VueJS, React, and Angular</li>
                                    <li>Sass, Less, and CSS</li>
                                    <li>Laravel development</li>
                                    <li>Cloud architectures</li>
                                    <li>Cloud application development</li>
                                    <li>3rd party integrations</li>
                                    <li>Software-as-a-Service (SaaS) development</li>
                                    <li>Market research and analysis</li>
                                    <li>Creative strategy</li>
                                    <li>Product design</li>
                                    <li>Prototypes and testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Advertisement />
            </Layout>
        </ProtectedRoute>
    )
}