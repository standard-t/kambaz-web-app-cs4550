import { Button, Form, ListGroup } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [assignment, setAssignment] = useState({
        title: "New Assignment",
        description: "New Assignment description",
        course: cid,
        _id: Math.random().toString(),
        points: "",
        availableFrom: "",
        availableUntil: "",
        dueDate: ""
    });

    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = {
            title: assignment.title,
            description: assignment.description,
            points: assignment.points,
            dueDate: assignment.dueDate,
            availableFrom: assignment.availableFrom,
            availableUntil: assignment.availableUntil,
            course: cid
        };
        const funcAssignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(funcAssignment));
    };

    const saveChanges = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };





    useEffect(() => {
        if (aid === 'New') {
            // For new assignment, generate a temporary unique ID
            setAssignment({
                title: "New Assignment",
                description: "New Assignment description",
                course: cid,
                _id: Math.random().toString(),  // Unique temporary ID for new assignment
                points: "100",
                availableFrom: "2025-01-01",
                availableUntil: "2025-01-01",
                dueDate: "2025-01-01"
            });
        } else {
            const a = assignments.find((a: any) => a._id === aid);
            if (a) {
                setAssignment(a);
            }
        }
    }, [aid, cid, assignments]);

    const save = () => {
        if (aid === 'New') {
            createAssignmentForCourse()
        } else {
            saveChanges(assignment)
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    }

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") {
        return (
            <div>
                <ListGroup className="wd-assignment-editor-form">
                    <ListGroup.Item className="wd-assignment-editor-question">
                        <label htmlFor="wd-assignment-name">Assignment Name</label>
                        <Form.Control id="wd-assignment-name"
                            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                            value={assignment?.title} />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-assignment-editor-question">
                        <textarea id="wd-password"
                            placeholder="password"
                            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                            className="form-control"
                            value={assignment?.description}></textarea>
                    </ListGroup.Item>
                    <div className="d-flex justify-content-end me-3 mt-3">
                        <p className="me-3">Points</p>
                        <Form.Control className="wd-assignment-editor-question2" id="wd-assignment-type"
                            onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
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
                                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                                value={assignment?.dueDate}
                                id="wd-dob"
                                className="mb-2 wd-assignment-editor-question2" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div>
                            <h5 className="mt-3"><strong>Available from</strong></h5>
                            <div className="form-group d-flex justify-content-end me-3">
                                <Form.Control type="date"
                                    onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                                    value={assignment?.availableFrom}
                                    id="wd-dob"
                                    className="mb-2" />
                            </div>
                        </div>
                        <div>
                            <h5 className=" mt-3"><strong>Until</strong></h5>
                            <div className="form-group d-flex justify-content-end me-3">
                                <Form.Control type="date"
                                    onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                                    value={assignment?.availableUntil}
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
                                    to={`/Kambaz/Courses/${cid}/Assignments`}
                                    className="btn bg-light w-100 mb-2 me-2">
                                    Cancel</Link>
                            </div>
                        </div>
                        <div>
                            <div className="form-group d-flex justify-content-end">
                                <Button id="wd-cancel-btn"
                                    onClick={save}
                                    className="btn bg-danger text-white w-100 mb-2 me-3">
                                    Save</Button>
                            </div>
                        </div>
                    </div>
                </ListGroup>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="d-flex">
                    <h3 className="me-3">{assignment?.title}</h3>
                    <div className="float-end">
                        <Button className="btn-danger text-white">Start Assignment</Button>
                    </div>
                </div>
                <hr />
                <p>
                    <strong>Due </strong> {assignment?.dueDate}       <strong>Points </strong> {assignment?.points}  <br /> <strong>Available from</strong> {assignment?.availableFrom} <strong> to </strong> {assignment?.availableUntil}
                </p>
                <hr />
                <p>{assignment?.description}</p>
            </div>
        )
    }
}
