// QuestionCard.tsx
import { useState } from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { editQuestion, updateQuestion, deleteQuestion } from "./reducer";
import * as questionsClient from "./client";

export default function QuestionCard({ question }: { question: any }) {
    const [editedQuestion, setEditedQuestion] = useState({ ...question });
    const dispatch = useDispatch();



    const handleEditChange = (field: string, value: any) => {
        if (field === "questionType") {
            let resetFields: any = {};
            if (value === "Multiple choice") {
                resetFields = { choices: ["", ""], correctAnswer: "" };
            } else if (value === "True or false") {
                resetFields = { correctAnswer: "True" };
            } else if (value === "Fill in the blank") {
                resetFields = { correctAnswer: "" };
            }
            setEditedQuestion((prev: any) => ({ ...prev, questionType: value, ...resetFields }));
        } else {
            setEditedQuestion({ ...editedQuestion, [field]: value });
        }
    };

    const cancelEdit = () => {
        setEditedQuestion({ ...question }); // discard changes
        dispatch(updateQuestion({ ...question, editing: false })); // exit edit mode
    };

    const handleChoiceChange = (index: number, value: string) => {
        const newChoices = [...editedQuestion.choices];
        newChoices[index] = value;
        setEditedQuestion({ ...editedQuestion, choices: newChoices });
    };

    const addChoice = () => {
        setEditedQuestion({
            ...editedQuestion,
            choices: [...editedQuestion.choices, ""],
        });
    };

    const removeChoice = (index: number) => {
        const newChoices = editedQuestion.choices.filter((_: any, i: any) => i !== index);
        setEditedQuestion({
            ...editedQuestion,
            choices: newChoices,
        });
    };

    const deleteQuestionHandler = async (questionId: string) => {
        await questionsClient.deleteQuestion(questionId);
        dispatch(deleteQuestion(questionId));
    };


    const saveQuestion = async () => {
        await questionsClient.updateQuestion(editedQuestion);
        dispatch(updateQuestion({ ...editedQuestion, editing: false }));
    };

    return (
        <Col className="m-3" style={{ width: "600px" }}>
            <Card className="p-3 shadow-sm">
                <div className="mb-3 d-flex align-items-center">
                    {question.editing ? (
                        <div>
                            <h5>Name:</h5>
                            <Form.Control
                                type="text"
                                value={editedQuestion.title}
                                onChange={(e) => handleEditChange("title", e.target.value)}
                            />
                        </div>
                    ) : (
                        <h5 className="mb-0">
                            <strong>{question.title}</strong>
                        </h5>
                    )}
                    {!question.editing &&
                        <div className="ms-auto">
                            <FaTrash
                                className="text-danger me-3 cursor-pointer"
                                onClick={() => deleteQuestionHandler(question._id)}
                            />
                            <FaPencil
                                className="text-primary me-3 cursor-pointer"
                                onClick={() => dispatch(editQuestion(question._id))}
                            />
                        </div>
                    }
                </div>

                {question.editing ? (
                    <>
                        <strong>Question Type:</strong>
                        <Form.Select
                            className="mb-3"
                            value={editedQuestion.questionType}
                            onChange={(e) => handleEditChange("questionType", e.target.value)}
                        >
                            <option value="Multiple choice">Multiple choice</option>
                            <option value="True or false">True or false</option>
                            <option value="Fill in the blank">Fill in the blank</option>
                        </Form.Select>
                    </>
                ) :
                    <p>
                        <strong>Question Type:</strong> {question.questionType}
                    </p>}


                <p>
                    <strong>Points:</strong>{" "}
                    {question.editing ? (
                        <Form.Control
                            type="number"
                            value={editedQuestion.points}
                            onChange={(e) => handleEditChange("points", Number(e.target.value))}
                        />
                    ) : (
                        question.points
                    )}
                </p>

                <p>
                    <strong>Question:</strong>{" "}
                    {question.editing ? (
                        <Form.Control
                            type="text"
                            value={editedQuestion.question}
                            onChange={(e) => handleEditChange("question", e.target.value)}
                        />
                    ) : (
                        question.question
                    )}
                </p>

                {/* Render per question type */}
                {question.editing ? (
                    <>
                        {editedQuestion.questionType === "Multiple choice" && (
                            <>
                                <strong>Choices:</strong>
                                <ul className="list-unstyled">
                                    {editedQuestion.choices.map((choice: string, index: number) => (
                                        <li key={index} className="d-flex align-items-center mb-2">
                                            <Form.Control
                                                type="text"
                                                value={choice}
                                                onChange={(e) => handleChoiceChange(index, e.target.value)}
                                            />
                                            <Form.Check
                                                className="ms-2"
                                                type="radio"
                                                checked={choice === editedQuestion.correctAnswer}
                                                onChange={() => handleEditChange("correctAnswer", choice)}
                                            />
                                            <FaTrash className="fs-5 ms-2 text-danger" onClick={() => removeChoice(index)} />
                                        </li>
                                    ))}
                                </ul>
                                <Button size="sm" onClick={addChoice}>
                                    + Add Choice
                                </Button>
                            </>
                        )}

                        {editedQuestion.questionType === "True or false" && (
                            <>
                                <strong>Correct Answer:</strong>
                                <div>
                                    <Form.Check
                                        type="radio"
                                        label="True"
                                        checked={editedQuestion.correctAnswer === "True"}
                                        onChange={() => handleEditChange("correctAnswer", "True")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="False"
                                        checked={editedQuestion.correctAnswer === "False"}
                                        onChange={() => handleEditChange("correctAnswer", "False")}
                                    />
                                </div>
                            </>
                        )}

                        {editedQuestion.questionType === "Fill in the blank" && (
                            <>
                                <strong>Correct Answer:</strong>
                                <Form.Control
                                    type="text"
                                    value={editedQuestion.correctAnswer}
                                    onChange={(e) => handleEditChange("correctAnswer", e.target.value)}
                                />
                            </>
                        )}

                        <div className="d-flex justify-content-end mt-3">
                            <Button variant="secondary"
                                onClick={cancelEdit}>Cancel</Button>
                            <Button variant="success" className="ms-2" onClick={saveQuestion}>
                                Save
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {editedQuestion.questionType === "Multiple choice" ? (
                            <div>
                                <strong>Choices:</strong>
                                <ul>
                                    {question.choices.map((choice: string, index: number) => (
                                        <li key={index}>
                                            {choice}
                                            {choice === question.correctAnswer && (
                                                <span className="text-success fw-bold"> - Correct Answer</span>
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
                    </>
                )}
            </Card>
        </Col>
    );
} 