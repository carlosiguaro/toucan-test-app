import Advertisement from "../components/advertisement/advertisement";
import ProtectedRoute from "../components/auth/protected-route";
import Layout from "../components/layout/layout";

export default function OurProcess() {
    return (
        <ProtectedRoute authenticated={false}>
            <Layout section="Our Processes">
                <div id="our-process-section">
                    <div>
                        <h1>Engagement Process</h1>
                        <p>Our 5 step engagement process lets you know what you
                            can expect when you start a project with us.</p>

                        <div>
                            <div>
                                <div>
                                    <img src="assets/icons/step-1.jpg" />
                                </div>
                                <div>
                                    <h4>1. Initial Discussion - Phone or Zoom</h4>
                                    <ul>
                                        <li>Involve the appropriate people from each company.</li>
                                        <li>Gain a basic understanding of the client, their business, and the project.</li>
                                        <li>Discuss the project and objectives.</li>
                                        <li>Discuss our capabilities and resources and how they may best fit the project.</li>
                                        <li>Understand the timeline and expected project deliverables.</li>
                                        <li>Schedule the Discovery Meeting with the client.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="assets/icons/step-2.jpg" />
                                </div>
                                <div>
                                    <h4>2. Discovery Meeting</h4>
                                    <ul>
                                        <li>Review the project scope and deliverables.</li>
                                        <li>Ask questions and listen to make sure we understand the scope, project deliverables, and desired outcomes.</li>
                                        <li>Identify technologies and human resources needed.</li>
                                        <li>Discuss the software development process that may be best for the project.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="assets/icons/step-3.jpg" />
                                </div>
                                <div>
                                    <h4>3. Create Project Estimate</h4>
                                    <ul>
                                        <li>Send to the client for review. Answer any questions.</li>
                                        <li>Get approval, adjust, or negotiate.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="assets/icons/step-4.jpg" />
                                </div>
                                <div>
                                    <h4>4. Collect Resources and Identify the Team</h4>
                                    <ul>
                                        <li>Define and collect (or schedule collection) of any needed information, 
                                            resources, files, access credentials, and identify any other missing 
                                            but needed items.</li>
                                        <li>Identify team members and point of contact for each company along 
                                            with preferred methods of communication including phone 
                                            numbers and emails.</li>
                                        <li>Discuss timelines, deadlines, frequency of communication, 
                                            and project completion.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="assets/icons/step-5.jpg" />
                                </div>
                                <div>
                                    <h4>5. Begin the Development Process</h4>
                                    <ul>
                                        <li>Our software development process divides a project into 
                                            specific steps and helps to organize the project. 
                                            We have expertise in a variety of software (Our Tech Stack) 
                                            and development methodologies and are flexible with both.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h1>Development Process</h1>
                        <p>Our software development process usually follows these steps in the agile methodology. 
                            However, the process will vary depending on the methodology used.</p>
                        
                        <img src="assets/images/dev-process.jpg" width="100%" />
                    </div>
                </div>
                <Advertisement />
            </Layout>
        </ProtectedRoute>

    )
}