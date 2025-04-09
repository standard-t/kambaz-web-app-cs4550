
import { Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
import { setQuestions } from "./reducer"; // delete update and add need to be imported as well 
import * as quizzesClient from "../client";
//import * as questionsClient from "./client";
import { useEffect } from "react";

// maybe change to pass in this later on { quiz, setQuiz }: { quiz: any; setQuiz: (quiz: any) => void; }
export default function QuestionsEditor() {
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const { qid } = useParams();
    const dispatch = useDispatch();

    const fetchQuestionsForQuiz = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(qid!);
        dispatch(setQuestions(questions));
    };

    // const deleteQuestionHandler = async (questionId: string) => {
    //     await questionsClient.deleteQuestion(questionId);
    //     dispatch(deleteQuestion(questionId));
    // };

    // const updateQuestionHandler = async (question: any) => {
    //     await questionsClient.updateQuestion(question);
    //     dispatch(updateQuestion(question));
    // };



    useEffect(() => {
        fetchQuestionsForQuiz();
    }, [qid]);

    return (
        <div className="m-5">
            <h3>Edit Quiz Questions</h3>
            {questions.map((question: any) => (
                <Col className="wd-dashboard-course m-3" style={{ width: "600px" }}>
                    <Card>
                        {question.title}
                    </Card>
                </Col>))

            }

        </div>
    )
}