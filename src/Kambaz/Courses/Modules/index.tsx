import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
        <div>
            <ModulesControls />
            <ListGroup className="rounded-0 mt-5">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        Week 1</div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className=" me-2 fs-2" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className=" me-2 fs-2" />
                            Introduction to the course
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className=" me-2 fs-2" />
                            Learn what is web development
                            <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        Week 2</div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className=" me-2 fs-2" />
                            LESSON 1
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className=" me-2 fs-2" />
                            LESSON 2
                            <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}