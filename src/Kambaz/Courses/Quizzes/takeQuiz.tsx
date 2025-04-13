import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { setQuestions } from "./Questions/reducer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import TakeQuestionCard from "./takeQuestionCard";
import { setAttempts, addAttempt } from "./Attempts/reducer";
import { setQuizzes } from "./reducer";



export default function TakeQuiz() {
    const { qid, cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { attempts } = useSelector((state: any) => state.attemptsReducer);
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [currentQuiz, setCurrentQuiz] = useState({
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

    const previousAttempts = attempts.filter(
        (a: any) => a.quiz === qid && a.user === currentUser._id
    );

    const [newAttempt, setNewAttempt] = useState(
        {
            _id: Math.random().toString(),
            quiz: qid,
            user: currentUser._id,
            answers: [],
            score: "",
            attemptNumber: previousAttempts.length + 1,
            timestamp: new Date()
        }
    );

    const fetchQuizzesForCourse = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid!);
        dispatch(setQuizzes(quizzes));
    };

    const fetchQuestionsForQuiz = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(qid!);
        dispatch(setQuestions(questions));
    };

    const fetchAttemptsForQuiz = async () => {
        const attempts = await quizzesClient.findAttemptsForQuiz(qid!);
        dispatch(setAttempts(attempts));
    };

    const handleSubmit = async () => {

        const totalPoints = questions.reduce((sum: number, q: any) => sum + (q.points || 0), 0);

        const earnedPoints = newAttempt.answers.reduce((sum: number, answer: any) => {
            const question = questions.find((q: any) => q._id === answer.question);
            return sum + (answer.isCorrect ? (question?.points || 0) : 0);
        }, 0);

        const score = `${earnedPoints}/${totalPoints}`;

        const attemptToStore = {
            ...newAttempt,
            score,
            timestamp: new Date(),
        };

        const savedAttempt = await quizzesClient.createAttemptForQuiz(qid!, attemptToStore);
        dispatch(addAttempt(savedAttempt));
    };




    useEffect(() => {
        fetchQuestionsForQuiz();
        fetchAttemptsForQuiz();
        fetchQuizzesForCourse();
    }, []);

    useEffect(() => {
        const quiz = quizzes.find((q: any) => q._id === qid);
        if (quiz) {
            setCurrentQuiz(quiz);
        }
    }, [quizzes, qid]);


    useEffect(() => {
        if (!qid || !currentUser?._id || !attempts) return;

        const userAttempts = attempts.filter(
            (a: any) => a.quiz === qid && a.user === currentUser._id
        );
        const nextAttemptNumber = userAttempts.length + 1;

        setNewAttempt({
            _id: Math.random().toString(),
            quiz: qid,
            user: currentUser._id,
            answers: [],
            score: "",
            attemptNumber: nextAttemptNumber,
            timestamp: new Date()
        });
    }, [qid, currentUser?._id, attempts]);


    return (
        <div>
            <h3>Quiz Preview: {currentQuiz?.title}</h3>
            <div>
                {currentUser.role != "STUDENT" &&
                    <div className="d-flex mb-2 mt-2" style={{ marginLeft: '42%' }}>
                        <div>
                            <div className="form-group d-flex justify-content-end">
                                <Button variant="warning" className="text-black me-5" onClick={() => { navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}/editor`); }}>Edit Quiz</Button>
                            </div>

                        </div>
                    </div>
                }
            </div>
            {questions.map((question: any) => (
                <TakeQuestionCard
                    key={question._id}
                    question={question}
                    newAttempt={newAttempt}
                    setNewAttempt={setNewAttempt}
                />
            ))}
            <div className="d-flex mb-5 mt-5" style={{ marginLeft: '43%' }}>
                <div>
                    <div className="form-group d-flex justify-content-end">
                        <Button
                            variant="danger"
                            className="text-white"
                            onClick={() => {
                                handleSubmit();
                                const path =
                                    currentUser.role === 'STUDENT'
                                        ? `/Kambaz/Courses/${cid}/Quizzes/${qid}`
                                        : `/Kambaz/Courses/${cid}/Quizzes/${qid}/review`;
                                navigate(path);
                            }}
                        >
                            Submit
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}


