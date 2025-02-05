import { Col, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    return (
        <div>
            <ListGroup className="wd-assignment-editor-form">
                <ListGroup.Item className="wd-assignment-editor-question">
                    <label htmlFor="wd-assignment-name">Assignment Name</label>
                    <Form.Control id="wd-assignment-name"
                        value="A1" />
                </ListGroup.Item>
                <ListGroup.Item className="wd-assignment-editor-question">
                    <textarea id="wd-password"
                        placeholder="password"
                        className="form-control"
                        value="Complete all the Lab exercises and Kambaz exercises described in Chapter 1. Submit a link to the landing page of your Web application running on Netlify. The landing page should be the Kambaz application with a link to the Lab exercises. The Kambaz application should include a link to navigate back to the landing page."></textarea>
                </ListGroup.Item>
                <div className="d-flex justify-content-end me-3 mt-3">
                    <p className="me-3">Points</p>
                    <Form.Control className="wd-assignment-editor-question2" id="wd-assignment-type"
                        value="100" />
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







            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <div id="wd-assignments-editor">
                <label htmlFor="wd-name">Assignment Name</label>
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
                <textarea id="wd-description">
                    The assignment is available online Submit a link to the landing page of your website
                </textarea>
                <br />
                <br />
                <table>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" value={100} />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right">
                            <label htmlFor="wd-group"> Assignment Group: </label>
                        </td>
                        <td valign="top">
                            <select id="wd-group">
                                <option value="DISCUSSIONS">DISCUSSIONS</option>
                                <option value="EXAMS">EXAMS</option>
                                <option selected value="ASSIGNMENTS">
                                    ASSIGNMENTS</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right">
                            <label htmlFor="wd-display-grade-as"> Display Grade as:</label>
                        </td>
                        <td valign="top">
                            <select id="wd-display-grade-as">
                                <option value="POINTS">POINTS</option>
                                <option value="DECIMAL">DECIMAL</option>
                                <option selected value="PERCENTAGE">
                                    PERCENTAGE</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right">
                            <label htmlFor="wd-submission-type"> Assignment Group: </label>
                        </td>
                        <td valign="top">
                            <select id="wd--submission-type">
                                <option value="IN PERSON">IN PERSON</option>
                                <option selected value="ONLINE">
                                    ONLINE</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <br />
                        <td valign="top">

                            <label htmlFor="wd-online-entry"> Online Entry Options: </label> <br />

                            <input type="checkbox" name="entry-type" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox" name="entry-type" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input type="checkbox" name="entry-type" id="wd-media-recording" />
                            <label htmlFor="wd-media-recording">Media Recording</label><br />

                            <input type="checkbox" name="entry-type" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label> <br />


                            <input type="checkbox" name="entry-type" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Upload</label> <br />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign to:</label>
                        </td>
                        <td>
                            <input id="wd-assign-to" value={"Everyone"} />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-due-date"> Due: </label>
                        </td>
                        <td>
                            <input type="date"
                                value="2024-05-13"
                                id="wd-due-date" /><br />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td></td>
                        <td valign="top">
                            <label htmlFor="wd-available-from"> Available from: </label> <br />
                            <input type="date"
                                value="2024-05-06"
                                id="wd-available-from" />
                        </td>
                        <td valign="top">
                            <label htmlFor="wd-available-until"> Available until: </label> <br />
                            <input type="date"
                                value="2024-05-20"
                                id="wd-available-until" /><br />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} align="right">
                            <button>Cancel</button>
                            <button>Save</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
