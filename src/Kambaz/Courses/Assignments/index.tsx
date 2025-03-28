import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import AssignmentControls from "./AssignmentControls";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import DeleteAssignmentPopUp from "./DeleteAssignmentPopUp";
import { setAssignments } from "./reducer"
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer)
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);


    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <ListGroup id="wd-assignment-list">
                {assignments.map((assignment: any) => (<ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className=" me-2 fs-2" />
                    <LuClipboardPen className="text-success fs-4 me-2" />
                    <div className="float-end">
                        {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                            <FaCheckCircle className="text-success me-2" />
                            <FaTrash className="text-danger me-2 delete-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleShow();

                                }} />
                        </>)}
                        <IoEllipsisVertical className="fs-4" />
                    </div>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="text-black text-decoration-none">
                        {assignment.title}<br />
                        <div className="wd-assignment-offset">
                            <p>{assignment.description}</p>
                        </div>
                    </Link>
                    <DeleteAssignmentPopUp
                        deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}
                        dialogTitle="Are you sure you want to delete this assignment?"
                        show={show}
                        handleClose={handleClose}
                        assignmentId={assignment._id}
                    />
                </ListGroup.Item>))}
            </ListGroup>

        </div>
    );
}

