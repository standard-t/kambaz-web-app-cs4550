import { Link } from "react-router";
export default function TOC() {
    return (
        <div>
            <h2>Table of Contents</h2>
            <h4>Tara Standard <br />
                CS4550 Sec 02 <br />
                <a href="https://github.com/standard-t/kambaz-web-app-cs4550" id="wd-neu-link" target="_blank">Github Repo</a></h4>
            <ul>
                <li>
                    <Link to="/Kambaz/Labs/Lab1">Lab 1</Link>
                </li>
                <li>
                    <Link to="/Kambaz/Labs/Lab2">Lab 2</Link>
                </li>
                <li>
                    <Link to="/Kambaz/Labs/Lab3">Lab 3</Link>
                </li>
                <li>
                    <Link to="/Kambaz">Kambaz</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>

            </ul>
        </div>
    );
}
