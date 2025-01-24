
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/design.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> ARTG 1220 </Link>
                        <p className="wd-dashboard-course-title">
                            Design Thinking </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/webdev.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> CS 4550 </Link>
                        <p className="wd-dashboard-course-title">
                            Web Development </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/history.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> ARTH1400 </Link>
                        <p className="wd-dashboard-course-title">
                            Design History </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/fundies.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> CS2500 </Link>
                        <p className="wd-dashboard-course-title">
                            Fundies 2 </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/info.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> DS4200 </Link>
                        <p className="wd-dashboard-course-title">
                            Information Visualization </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/ood.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> CS3500 </Link>
                        <p className="wd-dashboard-course-title">
                            Object Oriented Design </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/interactive.jpg" width={200} height={150} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/1234/Home"> ARTF 1250 </Link>
                        <p className="wd-dashboard-course-title">
                            Interactive Experiences </p>
                        <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
