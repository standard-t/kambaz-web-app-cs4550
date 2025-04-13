import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackSharp } from "react-icons/io5";
import * as quizzesClient from "./client";
import { setAttempts } from "./Attempts/reducer";

export default function QuizDetails() {
    const { qid, cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { attempts } = useSelector((state: any) => state.attemptsReducer);

    const [quiz, setQuiz] = useState({
        _id: qid,
        creator: currentUser._id,
        course: cid,
        title: "New Quiz",
        description: "New Quiz Description",
        quizType: "Graded quiz",
        points: 0,
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        numberOfAttempts: 1,
        showCorrectAnswers: false,
        accessCode: "",
        oneAtATime: true,
        webcam: false,
        lockQuestions: false,
        dueDate: "2025-04-05",
        published: false,
        availableFrom: "2025-04-01",
        availableUntil: "2025-04-15",
        score: 0,
        numberOfQuestions: 0
    });

    const fetchAttemptsForQuiz = async () => {
        const attempts = await quizzesClient.findAttemptsForQuiz(qid!);
        dispatch(setAttempts(attempts));
    };

    const formatSubmissionDate = (timestamp: string | Date) => {
        const date = new Date(timestamp);

        return date.toLocaleString("en-US", {
            month: "long",        // "April"
            day: "numeric",       // "13"
            hour: "numeric",      // "3"
            minute: "2-digit",    // "46"
            hour12: true,         // "PM"
        }).replace(",", " at");
    };

    const userAttemptsForQuiz = attempts
        .filter((a: any) => a.quiz === qid && a.user === currentUser._id)
        .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    const latestAttempt = userAttemptsForQuiz[0];
    const latestScore = latestAttempt?.score;
    const latestSubmissionDate = latestAttempt?.timestamp
        ? formatSubmissionDate(latestAttempt.timestamp)
        : "";


    useEffect(() => {
        const q = quizzes.find((q: any) => q._id === qid);
        if (q) {
            setQuiz(q);
        }
    }, [qid, cid, quizzes]);

    useEffect(() => {
        fetchAttemptsForQuiz();
    }, [cid, currentUser]);



    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex"> <IoArrowBackSharp className="fs-2 me-3" onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes`)} /><h3 className="me-3">{quiz?.title}</h3></div>
                {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
                    <>
                        <div>
                            <Link className="btn bg-warning text-black me-2" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/editor`} >Edit</Link>
                            <Link className="btn bg-danger text-white me-5" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/take-quiz`}>Preview</Link>
                        </div>
                    </>
                )}
            </div>
            <hr />
            <p>
                <strong>Due </strong> {new Date(quiz.dueDate).toLocaleDateString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}   <strong>Available from</strong> {new Date(quiz.availableFrom).toLocaleDateString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })} <strong> Until </strong> {new Date(quiz.availableUntil).toLocaleDateString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </p>
            <hr />
            <p><strong>Description: </strong>{quiz?.description}</p>
            {latestAttempt &&
                <div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <p><strong>Submission: </strong> </p>
                            <div className="ms-5">
                                <p>
                                    Score: <span className="text-danger"><strong>{latestScore}</strong></span> <br />
                                    Submitted {latestSubmissionDate}
                                </p>
                            </div>
                        </div>
                        <div><Link className="btn bg-secondary text-black me-5" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/review`}>Review Submission</Link></div>
                    </div>
                </div>}
            <hr />



            <div className="d-flex justify-content-center align-items-center">
                <div >
                    <strong>Quiz Type: </strong> {quiz.quizType} <br />
                    <strong>Points: </strong> {quiz.points} <br />
                    <strong>Assignment Group: </strong> {quiz.assignmentGroup} <br />
                    <strong>Shuffle Answers: </strong> {quiz.shuffleAnswers ? "Yes" : "No"} <br />
                    <strong>Time Limit: </strong> {quiz.timeLimit} minutes<br />
                    <strong>Multiple Attempts: </strong> {quiz.multipleAttempts ? "Yes" : "No"} <br />
                    {quiz.multipleAttempts && (
                        <>
                            <strong>Attempts: </strong> {quiz.numberOfAttempts} <br />
                        </>
                    )}
                    <strong>Show Correct Answers: </strong> {quiz.showCorrectAnswers ? "Yes" : "No"} <br />
                    <strong>Access Code: </strong>{quiz.accessCode}<br />
                    <strong>One Question at a Time: </strong> {quiz.oneAtATime ? "Yes" : "No"} <br />
                    <strong>Webcam Required: </strong> {quiz.webcam ? "Yes" : "No"} <br />
                    <strong>Lock Questions After Answering: </strong> {quiz.lockQuestions ? "Yes" : "No"} <br />
                </div>
            </div>
            <hr />
            {(currentUser.role === "STUDENT") && (userAttemptsForQuiz.length < quiz.numberOfAttempts) && (
                <>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link className="btn bg-danger text-white me-5" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/take-quiz`}>Start Quiz</Link>
                    </div>
                </>
            )}
        </div>
    )
}