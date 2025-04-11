import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import { deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import { useEffect, useState } from "react";
import DeleteQuizPopUp from "./DeleteQuizPopup";
import QuizActions from "./contextMenu";
import { v4 as uuidv4 } from "uuid";




export default function Quizzes() {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const filteredQuizzes = currentUser?.role === "STUDENT"
        ? quizzes.filter((quiz: any) => quiz.published)
        : quizzes;

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

    const updateQuizHandler = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };

    const togglePublishHandler = async (quiz: any) => {
        const updatedQuiz = { ...quiz, published: !quiz.published };
        await updateQuizHandler(updatedQuiz);
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return "Invalid Date";

        const parts = dateString.split("-");
        if (parts.length !== 3) return "Invalid Date";

        const [yearStr, monthStr, dayStr] = parts;
        const year = parseInt(yearStr, 10);
        const month = parseInt(monthStr, 10);
        const day = parseInt(dayStr, 10);

        if (isNaN(year) || isNaN(month) || isNaN(day)) return "Invalid Date";

        const localDate = new Date(year, month - 1, day);

        return localDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const getAvailability = (availableFrom: string, availableUntil: string): string => {
        const now = new Date();
        const fromDate = new Date(availableFrom);
        const untilDate = new Date(availableUntil);

        if (now > untilDate) {
            return "Closed";
        } else if (now < fromDate) {
            return `Not Available Until ${formatDate(availableFrom)}`;
        } else {
            return "Available";
        }
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
                        <Button
                            className="btn-danger text-white mb-2 me-3"
                            onClick={() => {
                                const newQuizId = uuidv4();
                                navigate(`/Kambaz/Courses/${cid}/Quizzes/${newQuizId}/editor`);
                            }}>
                            + Quiz
                        </Button>
                    </div>
                </>)
            }
            <ListGroup id="wd-quiz-list">

                {filteredQuizzes.map((quiz: any) => (
                    <ListGroup.Item key={quiz._id} className="wd-lesson p-3 ps-1">
                        <BsGripVertical className=" me-2 fs-2" />
                        <LuClipboardPen className="text-success fs-4 me-2" />
                        <div className="float-end">
                            {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                                {quiz.published ? (
                                    <FaCheckCircle
                                        className="text-success me-2"
                                        onClick={() => togglePublishHandler(quiz)}
                                    />
                                ) : (
                                    <MdOutlineDoNotDisturb
                                        className="me-2"
                                        onClick={() => togglePublishHandler(quiz)}
                                    />
                                )}
                                <QuizActions
                                    onPublish={() => togglePublishHandler(quiz)}
                                    onEdit={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`)}
                                    onDelete={() => handleShow(quiz._id)}
                                    quiz={quiz}
                                />
                            </>)}
                        </div>
                        <Link to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`} className="text-black text-decoration-none">
                            {quiz.title}<br />
                            <div className="wd-assignment-offset">
                                <p>
                                    <strong>Due: </strong>{formatDate(quiz.dueDate)}
                                    <strong> Availability: </strong> {getAvailability(quiz.availableFrom, quiz.availableUntil)}
                                    <strong> Points: </strong>{quiz.points}
                                    <strong> Questions: </strong> {quiz.numberOfQuestions}
                                    <br />{quiz.description}
                                </p>
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