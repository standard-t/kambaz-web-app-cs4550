import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { LuClipboardPen } from "react-icons/lu";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";


export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <ListGroup className="rounded-0 mt-5">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className=" me-2 fs-2" />
                        ASSIGNMENTS
                        <div className="d-flex float-end">
                            <h6 className="me-2">40% of Total</h6>
                            <GoPlus className="fs-4" />
                            <IoEllipsisVertical className="fs-4" />
                        </div></div>
                    <ListGroup className="wd-lessons rounded-0">
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                A1 - ENV + HTML <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item> </a>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                A2 - CSS + BOOTSTRAP <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item> </a>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                A3 - JAVASCRIPT + REACT <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item>
                        </a>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className=" me-2 fs-2" />
                        EXAMS
                        <div className="d-flex float-end">
                            <h6 className="me-2">25% of Total</h6>
                            <GoPlus className="fs-4" />
                            <IoEllipsisVertical className="fs-4" />
                        </div></div>
                    <ListGroup className="wd-lessons rounded-0">
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                EXAM1 - MIDTERM <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item></a>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                EXAM2 - FINAL <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item>
                        </a>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className=" me-2 fs-2" />
                        DISCUSSIONS<div className="d-flex float-end">
                            <h6 className="me-2">40% of Total</h6>
                            <GoPlus className="fs-4" />
                            <IoEllipsisVertical className="fs-4" />
                        </div></div>
                    <ListGroup className="wd-lessons rounded-0">

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                DISCUSS1 - ENV + HTML <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </a>
                        </ListGroup.Item>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                DISCUSS2 - CSS + BOOTSTRAP <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item> </a>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-reset">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className=" me-2 fs-2" />
                                <LuClipboardPen className="text-success fs-4 me-2" />
                                <LessonControlButtons />
                                DISCUSS3 - JAVASCRIPT + REACT <br />
                                <div className="wd-assignment-offset">
                                    Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                            </ListGroup.Item> </a>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

