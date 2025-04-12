import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoArrowBackSharp } from "react-icons/io5";


export default function QuizDetails() {
    const { qid, cid } = useParams();
    const navigate = useNavigate();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState({
        _id: Math.random().toString(),
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

    useEffect(() => {
        const q = quizzes.find((q: any) => q._id === qid);
        if (q) {
            setQuiz(q);
        }
    }, [qid, cid, quizzes]);


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex"> <IoArrowBackSharp className="fs-2 me-3" onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes`)} /><h3 className="me-3">{quiz?.title}</h3></div>
                {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
                    <>
                        <div>
                            <Link className="btn bg-warning text-black me-2" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/editor`} >Edit</Link>
                            <Link className="btn bg-primary text-white me-5" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/take-quiz`}>Preview</Link>
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
            {(currentUser.role === "STUDENT") && (
                <>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link className="btn bg-danger text-white me-5" to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/take-quiz`}>Start Quiz</Link>
                    </div>
                </>
            )}
        </div>
    )
}