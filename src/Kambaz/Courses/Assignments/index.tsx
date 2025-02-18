import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import db from "../../Database"
import { Link, useParams } from "react-router-dom";



export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <ListGroup id="wd-assignment-list">
                {assignments.map((assignment) => (<ListGroup.Item as={Link} to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className=" me-2 fs-2" />
                    <LuClipboardPen className="text-success fs-4 me-2" />
                    <LessonControlButtons />
                    {assignment.title}<br />
                    <div className="wd-assignment-offset">
                        <p>{assignment.description}</p>
                    </div>
                </ListGroup.Item>))}
            </ListGroup>
        </div>
    );
}

