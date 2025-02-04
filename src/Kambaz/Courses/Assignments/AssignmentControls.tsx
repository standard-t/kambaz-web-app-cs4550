import { Button, Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { MdNotInterested } from "react-icons/md";

export default function ModulesControls() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-start">
                        <input className="m-2" placeholder="Search" />
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary me-1">+ Group</Button>
                        <Button variant="danger">+ Assignment</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}