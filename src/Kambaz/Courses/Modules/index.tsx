import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import db from "../../Database";
import { useParams } from "react-router";

export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;
    return (
        <div>
            <ModulesControls />
            <ListGroup className="rounded-0 mt-5">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className=" me-2 fs-2" />
                                {module.name}
                                <LessonControlButtons />
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson) => (<ListGroup.Item className="wd-lesson p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-2" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </ListGroup.Item>))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </div>
    );
}