import { Form, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import db from "../../Database"

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    return (
        <div>
            <ListGroup className="wd-assignment-editor-form">
                <ListGroup.Item className="wd-assignment-editor-question">
                    <label htmlFor="wd-assignment-name">Assignment Name</label>
                    <Form.Control id="wd-assignment-name"
                        value={assignment?.title} />
                </ListGroup.Item>
                <ListGroup.Item className="wd-assignment-editor-question">
                    <textarea id="wd-password"
                        placeholder="password"
                        className="form-control"
                        value={assignment?.description}></textarea>
                </ListGroup.Item>
                <div className="d-flex justify-content-end me-3 mt-3">
                    <p className="me-3">Points</p>
                    <Form.Control className="wd-assignment-editor-question2" id="wd-assignment-type"
                        value={assignment?.points} />
                </div>
                <div className="form-group mt-3 d-flex justify-content-end me-3">
                    <label htmlFor="sel1" className="me-3">Assignment Group</label>
                    <select className="form-control wd-assignment-editor-question2" id="sel1">
                        <option>ASSIGNMENTS</option>
                        <option>EXAMS</option>
                        <option>DISCUSSIONS</option>
                        <option>OTHER</option>
                    </select>
                </div>
                <div className="form-group mt-3 d-flex justify-content-end me-3">
                    <label htmlFor="sel1" className="me-3">Display Grade as</label>
                    <select className="form-control wd-assignment-editor-question2" id="sel1">
                        <option>Percentage</option>
                        <option>Decimal</option>
                        <option>Points</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group mt-3 d-flex justify-content-end me-3">
                    <label htmlFor="sel1" className="me-3">Submission Type</label>
                    <select className="form-control wd-assignment-editor-question2" id="sel1">
                        <option>Online</option>
                        <option>In person</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="d-flex justify-content-end push-left">
                    <div className="form-group mt-3 me-3">
                        <p><strong>Online Entry Options</strong></p>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" /> Text Entry</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" /> Website URL</label>
                        </div>
                        <div className="checkbox disabled">
                            <label><input type="checkbox" value="" /> Media Recording</label>
                        </div>
                        <div className="checkbox disabled">
                            <label><input type="checkbox" value="" /> Student Annotation</label>
                        </div>
                        <div className="checkbox disabled">
                            <label><input type="checkbox" value="" /> Media Recording</label>
                        </div>
                        <div className="checkbox disabled">
                            <label><input type="checkbox" value="" /> File Upload</label>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <h5 className="push-right"><strong>Assign to</strong></h5>
                    <div className="form-group d-flex justify-content-end me-3">
                        <select className="form-control wd-assignment-editor-question2" id="sel1">
                            <option>Everyone</option>
                            <option>Select Group</option>
                            <option>Custom Group</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h5 className="push-right mt-3"><strong>Due</strong></h5>
                    <div className="form-group d-flex justify-content-end me-3">
                        <Form.Control type="date"
                            value="2025-02-05"
                            id="wd-dob"
                            className="mb-2 wd-assignment-editor-question2" />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div>
                        <h5 className="mt-3"><strong>Available from</strong></h5>
                        <div className="form-group d-flex justify-content-end me-3">
                            <Form.Control type="date"
                                value="2025-02-05"
                                id="wd-dob"
                                className="mb-2" />
                        </div>
                    </div>
                    <div>
                        <h5 className=" mt-3"><strong>Until</strong></h5>
                        <div className="form-group d-flex justify-content-end me-3">
                            <Form.Control type="date"
                                value="2025-02-05"
                                id="wd-dob"
                                className="mb-2" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                    <div>
                        <div className="form-group d-flex justify-content-end">
                            <Link id="wd-cancel-btn"
                                to="/Kambaz/Courses/1234/Assignments"
                                className="btn bg-light w-100 mb-2 me-2">
                                Cancel</Link>
                        </div>
                    </div>
                    <div>
                        <div className="form-group d-flex justify-content-end">
                            <Link id="wd-cancel-btn"
                                to="/Kambaz/Courses/1234/Assignments"
                                className="btn bg-danger text-white w-100 mb-2 me-3">
                                Save</Link>
                        </div>
                    </div>
                </div>
            </ListGroup>
        </div>
    );
}
