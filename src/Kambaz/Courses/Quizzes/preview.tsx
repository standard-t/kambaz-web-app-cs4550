import * as quizzesClient from "./client";
import { setQuestions } from "./Questions/reducer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

export default function QuizPreview() {
    const { qid, cid } = useParams();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);


    const fetchQuestionsForQuiz = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(qid!);
        dispatch(setQuestions(questions));
    };

    useEffect(() => {
        fetchQuestionsForQuiz();
    }, []);

    return (
        <div>
            <h3>Quiz Preview: {currentQuiz.title}</h3>
            <div>
                {currentUser.role != "STUDENT" &&
                    <div className="form-group d-flex justify-content-end">
                        <Link className="btn bg-danger text-white me-2" to={`/Kambaz/Courses/${cid}/Quizzes/${currentQuiz._id}`} >Done</Link>
                    </div>
                }
            </div>
            {questions.map((question: any) => (
                <Col>
                    <Card className="p-3 m-3 shadow-sm">
                        <h5>{question.title}</h5>
                    </Card>
                </Col>
            ))}

        </div>
    )
}