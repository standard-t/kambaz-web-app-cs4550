import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { deleteQuiz, setQuizzes } from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import { useEffect, useState } from "react";
import DeleteQuizPopUp from "./DeleteQuizPopup";



export default function Quizzes() {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer)

    const [show, setShow] = useState(false);
    const [selectedQuizId, setSelectedQuizId] = useState("");

    const handleShow = (quizId: string) => {
        setSelectedQuizId(quizId);
        setShow(true);
    };

    const handleClose = () => {
        setSelectedQuizId("");
        setShow(false);
    };

    const fetchQuizzesForCourse = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid!);
        dispatch(setQuizzes(quizzes));
    };

    const deleteQuizHandler = async (quizId: string) => {
        await quizzesClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };

    useEffect(() => {
        fetchQuizzesForCourse();
    }, [cid]);


    return (
        <div>
            <h4>Quizzes</h4>
            {
                currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                    <div className="d-flex justify-content-end">
                        <Link className="btn bg-danger text-white mb-2 me-3" to={`/Kambaz/Courses/${cid}/Quizzes/New/editor`} >+ Quiz</Link>
                    </div>
                </>)
            }
            <ListGroup id="wd-quiz-list">

                {quizzes.map((quiz: any) => (<ListGroup.Item key={quiz._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className=" me-2 fs-2" />
                    <LuClipboardPen className="text-success fs-4 me-2" />
                    <div className="float-end">
                        {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                            {quiz.published ? <FaCheckCircle className="text-success me-2" /> : <MdOutlineDoNotDisturb className="me-2" />}
                            <FaTrash className="text-danger me-2 delete-btn" onClick={(e) => {
                                e.preventDefault();
                                handleShow(quiz._id);

                            }} />
                        </>)}
                        <IoEllipsisVertical className="fs-4" />
                    </div>
                    <Link to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`} className="text-black text-decoration-none">
                        {quiz.title}<br />
                        <div className="wd-assignment-offset">
                            <p><strong>Due: </strong>{new Date(quiz.dueDate).toLocaleDateString('en-US', {
                                timeZone: 'UTC',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })} <strong>Points: </strong>{quiz.points}
                                <br />{quiz.description}</p>


                        </div>
                    </Link>
                    <DeleteQuizPopUp
                        deleteQuiz={(quizId) => deleteQuizHandler(quizId)}
                        dialogTitle="Are you sure you want to delete this quiz?"
                        show={show}
                        handleClose={handleClose}
                        quizId={selectedQuizId}
                    />
                </ListGroup.Item>))}
            </ListGroup>
        </div>

    )
}