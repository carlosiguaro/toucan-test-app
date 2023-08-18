import Link from "next/link";
import Layout from "../components/layout/layout";
import ProtectedRoute from "../components/auth/protected-route";
import Advertisement from "../components/advertisement/advertisement";

export default function Home() {
    return (
        <ProtectedRoute authenticated={false}>
            <Layout section="We Engineer Opportunity">
                <div id="home-section">
                    <div>
                        <div>
                            <h4>What We Do</h4>
                            <p>Toucan is a U.S.-based company using on-shore and near-shore software developers.
                                We engineer world-class software to meet the real-world needs of our clients. 
                                All our teams and projects are managed in the U.S., and we never compromise quality.</p>
                        </div>

                        <div>
                            <img src="assets/images/america-map.jpg" width="100%" />
                        </div>
                        
                        <div>
                            <h4>Our "Why"</h4>
                            <p>Our “why” can be summed up in one word, <strong>empowerment</strong>.
                                We build extraordinary software that empowers our clients to achieve their business objectives. 
                                And, at the same time make a profound, positive difference that empowers the lives of our employees and their families.</p>
                            <p>We hire amazingly talented developers that don't have the opportunity to find employment in their home countries of Latin America. 
                                Governments and other influences beyond their control have taken that from them, making it almost impossible to earn a 
                                living doing what they love to do most - build software. We provide them with that opportunity.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h4>Why Chose Toucan?</h4>
                            <div>
                                <div>
                                    <label><span>1.</span> We only hire A+ developers.</label>
                                    <p>Most of our developers live and work in Venezuela. 
                                        They are some of the best and most experienced 
                                        developers on the planet. They are wonderful 
                                        people with an amazing work ethic and are excited to
                                        have the opportunity to work with U.S. companies! </p>
                                </div>
                                <img src="assets/images/idea.png" />
                            </div>

                            <div>
                                <img src="assets/images/us-map.png" />
                                <div>
                                    <label><span>2.</span> All projects are U.S.-managed.</label>
                                    <p>Unlike most of our competitors, all our 
                                        near-shore developers and projects are managed 
                                        exclusively from the U.S.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><span>3.</span> Same time zone as the U.S.</label>
                                    <p>It may not seem like a big deal but when it comes to scheduling
                                        meetings that include our development teams it makes 
                                        communication so much easier and the project runs much smoother.</p>
                                </div>
                                <img src="assets/images/clock.png" />
                            </div>

                            <div>
                                <img src="assets/images/painter.png" />
                                <div>
                                    <label><span>4.</span> Bi-lingual developers</label>
                                    <p>When it comes to software, development communication is a key element. 
                                        Without a clear understanding on both sides, a project can run off 
                                        the rails quickly. No "lost in translation" with us.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><span>5.</span> Safety and Security!</label>
                                    <ul>
                                        <li>Background checks on all associates</li>
                                        <li>Data security guarantee</li>
                                        <li>Secure U.S. based hosting</li>
                                        <li>Practice compliance, both technological and legal</li>
                                        <li>Ongoing QA quality checks</li>
                                    </ul>
                                </div>
                                <img src="assets/images/security.png" />
                            </div>

                            <div>
                                <img src="assets/images/sheet.png" />
                                <div>
                                    <label><span>6.</span> Better value!</label>
                                    <p>Since our developer's cost of living is much lower 
                                        than the U.S., we can offer the best quality 
                                        development at a much better value!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>Services & Technology</h1>
                            <div>
                                <div>
                                    <p>We are passionate about software development and thrive on meeting 
                                        the needs of our clients. We deliver software solutions from 
                                        vetted and experienced software engineers and project managers. 
                                        We have experts in:</p>
                                    <p>Whether you need two extra developers to extend your team or 20 
                                        developers to complete a project, we've got you covered. 
                                        Tell us what you are looking for, and we’ll take care of the rest.</p>
                                    <div>
                                        <Link href="#">See All Services</Link>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src="assets/images/tecnologies.png" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src="assets/images/lang-programming.png" width="100%" />
                                <Link href="#">See All Services</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <div>
                                    <img src="assets/images/steps.jpg" />
                                    <div>
                                        <div>
                                            <label>Step-1</label>
                                            <label>Initial Discussion - Phone or Zoom</label>
                                        </div>
                                        <div>
                                            <label>Step-2</label>
                                            <label>Discovery Meeting</label>
                                        </div>
                                        <div>
                                            <label>Step-3</label>
                                            <label>Project Estimate</label>
                                        </div>
                                        <div>
                                            <label>Step-4</label>
                                            <label>Collect resources and<br/>identify the team</label>
                                        </div>
                                        <div>
                                            <label>Step-5</label>
                                            <label>Begin Development</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1>Our Engagement Process</h1>
                                <p>Starting an engagement with us is a simple, stress-free process. 
                                    We’ve broken the process into 5 steps so you know what you can expect. 
                                    The graphic on the left illustrates the steps, Click "Read More" 
                                    to show the details involved in each step.</p>
                                <div>
                                    <Link href="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>

                    <Advertisement />
                </div>
            </Layout>
        </ProtectedRoute>
    )
}