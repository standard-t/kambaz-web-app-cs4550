import { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { setAttempts } from "./Attempts/reducer";
import * as quizzesClient from "./client";
import { setQuestions } from "./Questions/reducer";

export default function ReviewSubmission() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { attempts } = useSelector((state: any) => state.attemptsReducer);
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState({
        "_id": "example-quiz1",
        "course": "RS101",
        "title": "Example Quiz 1",
        "description": "Take this quiz to practice your knowledge!",
        "quizType": "Graded quiz",
        "points": 100,
        "assignmentGroup": "Exams",
        "shuffleAnswers": true,
        "timeLimit": 20,
        "multipleAttempts": false,
        "numberOfAttempts": 1,
        "showCorrectAnswers": false,
        "accessCode": "",
        "oneAtATime": true,
        "webcam": false,
        "lockQuestions": false,
        "dueDate": "2025-04-05",
        "published": true,
        "availableDate": "2025-04-01",
        "availableUntilDate": "2025-04-15",
        "score": 99
    });


    const fetchQuestionsForQuiz = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(qid!);
        dispatch(setQuestions(questions));
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


    const fetchAttemptsForQuiz = async () => {
        const attempts = await quizzesClient.findAttemptsForQuiz(qid!);
        dispatch(setAttempts(attempts));
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
        const quiz = quizzes.find((q: any) => q._id === qid);
        if (quiz) {
            setQuiz(quiz);
        }
    }, [quizzes, qid]);

    useEffect(() => {
        fetchAttemptsForQuiz();
        fetchQuestionsForQuiz();
    }, [cid, currentUser]);




    return (
        <div>
            <h3>Review Submission: {quiz.title}</h3>
            <h6>Submitted: {latestSubmissionDate}</h6>
            <h5><strong>Score: </strong>{latestScore} </h5>
            <br />
            <Col>
                {questions.map((question: any) => {
                    const userAnswer = latestAttempt?.answers.find(
                        (ans: any) => ans.question === question._id
                    );

                    const isCorrect = userAnswer?.isCorrect;
                    const icon = isCorrect ? <FaCheckCircle className="text-success fs-4" /> : <FaTimesCircle className="text-danger fs-4" />;
                    const score = isCorrect ? question.points : 0;

                    return (
                        <Col key={question._id} className="m-3" style={{ width: "600px" }}>
                            <Card
                                className={`p-3 shadow-sm position-relative 
                                    ${isCorrect ? " border-success" : " border-danger"}`}
                                style={{ borderWidth: "2px", borderStyle: "solid" }}>

                                <div className="position-absolute top-0 end-0 m-3 d-flex align-items-center">
                                    <span className="me-2 fw-bold">{score}/{question.points}</span>
                                    {icon}
                                </div>

                                <h5 className="mb-2"><strong>{question.title}</strong></h5>
                                <p><strong>Question Type:</strong> {question.questionType}</p>
                                <p><strong>Points:</strong> {question.points}</p>
                                <p><strong>Question:</strong> {question.question}</p>

                                {question.questionType === "Multiple choice" && (
                                    <>
                                        <strong>Your Answer:</strong>
                                        <ul>
                                            {question.choices.map((choice: string, index: number) => {
                                                const isSelected = userAnswer?.answer === choice;
                                                return (
                                                    <li key={index} className={isSelected ? "fw-bold" : ""}>
                                                        {choice}
                                                        {isSelected && (
                                                            <span className="text-primary ms-2">(Your answer)</span>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </>
                                )}

                                {question.questionType === "True or false" && (
                                    <p>
                                        <strong>Your Answer:</strong> {userAnswer?.answer}
                                    </p>
                                )}

                                {question.questionType === "Fill in the blank" && (
                                    <p>
                                        <strong>Your Answer:</strong> {userAnswer?.answer}
                                    </p>
                                )}
                            </Card>
                        </Col>
                    );
                })}
            </Col>
            <div className="d-flex mb-5 mt-5" style={{ marginLeft: '43%' }}>
                <div>
                    <div className="form-group d-flex justify-content-end">
                        <Button className="btn-danger text-white" onClick={() => { navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}`) }}>Done</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}