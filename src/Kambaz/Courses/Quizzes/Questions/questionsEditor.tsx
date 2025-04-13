import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
import { setQuestions, addQuestion } from "./reducer"; // delete update and add need to be imported as well 
import * as quizzesClient from "../client";
import { useEffect } from "react";
import QuestionCard from "./questionCard";



export default function QuestionsEditor() {
    const { qid } = useParams();
    const dispatch = useDispatch();
    const { questions } = useSelector((state: any) => state.questionsReducer);
    const addQuestionHandler = async () => {
        try {
            const newQuestion = await quizzesClient.createQuestionForQuiz(qid!, {
                _id: Math.random().toString(),
                quiz: qid,
                title: "New Question",
                question: "Ask your question",
                questionType: "Multiple choice",
                points: 10,
                choices: [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4"
                ],
                correctAnswer: "Option 3",
                editing: true
            });
            dispatch(addQuestion(newQuestion));
        } catch (err) {
            console.error("Error creating question:", err);
            throw err;
        }
    };

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
                <QuestionCard key={question._id} question={question} />
            ))}
            <div style={{ marginLeft: '23%' }}>
                <Button variant="danger" onClick={addQuestionHandler}>+ Question</Button>
            </div>
            <br /><br /><br />
        </div >
    )
}