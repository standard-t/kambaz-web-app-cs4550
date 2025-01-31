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
            <ul>
                <li>
                    <div>
                        <h4>Module 1</h4>
                        <ul>
                            <li>Lesson 1</li>
                            <ul>
                                <li>LEARNING OBJECTIVES</li>
                                <li>RESOUCRCES</li>
                                <li>DISCUSSION</li>
                            </ul>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                            <li>Lesson 4</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Module 2</h4>
                        <ul>
                            <li>Lesson 1</li>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                            <li>Lesson 4</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Module 3</h4>
                        <ul>
                            <li>Lesson 1</li>
                            <li>Lesson 2</li>
                            <li>Lesson 3</li>
                            <li>Lesson 4</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}