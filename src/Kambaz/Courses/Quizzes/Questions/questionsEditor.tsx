import { Col, Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
import { setQuestions } from "./reducer"; // delete update and add need to be imported as well 
import * as quizzesClient from "../client";
//import * as questionsClient from "./client";
import { useEffect } from "react";
import { FaPencil } from "react-icons/fa6";



export default function QuestionsEditor() {
    const { qid } = useParams();
    const dispatch = useDispatch();
    const { questions } = useSelector((state: any) => state.questionsReducer);

    // const deleteQuestionHandler = async (questionId: string) => {
    //     await questionsClient.deleteQuestion(questionId);
    //     dispatch(deleteQuestion(questionId));
    // };

    // const updateQuestionHandler = async (question: any) => {
    //     await questionsClient.updateQuestion(question);
    //     dispatch(updateQuestion(question));
    // };



    const fetchQuestionsForQuiz = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(qid!);
        dispatch(setQuestions(questions));
    };

    useEffect(() => {
        fetchQuestionsForQuiz();
    }, []);

    return (
        <div className="m-5">
            <h4>Edit Quiz Questions</h4>
            {questions.map((question: any) => (
                <Col className="wd-dashboard-course m-3" style={{ width: "600px" }} key={question._id}>
                    <Card className="p-3 shadow-sm">
                        <div className="mb-3 d-flex align-items-center">
                            <h5 className="mb-0"><strong>{question.title}</strong></h5>
                            <div className="ms-auto">
                                <FaTrash className="text-danger me-3 cursor-pointer" />
                                <FaPencil className="text-primary me-3 cursor-pointer" />
                            </div>
                        </div>
                        <p><strong>Type:</strong> {question.questionType}</p>
                        <p><strong>Points:</strong> {question.points}</p>
                        <p><strong>Question:</strong> {question.question}</p>

                        {question.questionType === "Multiple choice" ? (
                            <div>
                                <strong>Choices:</strong>
                                <ul>
                                    {question.choices.map((choice: string, index: number) => (
                                        <li key={index}>
                                            {choice}
                                            {choice === question.correctAnswer && (
                                                <span className="text-success fw-bold">  - Correct Answer</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>
                                <strong>Correct Answer:</strong> {question.correctAnswer}
                            </p>
                        )}
                    </Card>
                </Col>
            ))}
            <div style={{ marginLeft: '23%' }}>
                <Button variant="danger">+ Question</Button>
            </div>
            <br /><br /><br />
        </div >
    )
}