import { Card, Col, Form } from "react-bootstrap";

export default function TakeQuestionCard({
    question,
    newAttempt,
    setNewAttempt,
}: {
    question: any;
    newAttempt: any;
    setNewAttempt: (attempt: any) => void;
}) {
    const existingAnswer = newAttempt.answers.find(
        (a: any) => a.question === question._id
    );

    const handleAnswerChange = (answerValue: string) => {
        const isCorrect = answerValue === question.correctAnswer;

        const newAnswers = [...newAttempt.answers];
        const index = newAnswers.findIndex((a: any) => a.question === question._id);

        const answerObj = {
            question: question._id,
            answer: answerValue,
            isCorrect,
        };

        if (index >= 0) {
            newAnswers[index] = answerObj;
        } else {
            newAnswers.push(answerObj);
        }

        setNewAttempt({ ...newAttempt, answers: newAnswers });
    };

    return (
        <Col className="m-3" style={{ width: "600px" }}>
            <Card className="p-3 shadow-sm">
                <h5>{question.title}</h5>
                <p>
                    <strong>Question:</strong> {question.question}
                </p>
                <p>
                    <strong>Points:</strong> {question.points}
                </p>

                {/* Render input based on question type */}
                {question.questionType === "Multiple choice" && (
                    <Form>
                        {question.choices.map((choice: string, index: number) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                label={choice}
                                name={`mcq-${question._id}`}
                                value={choice}
                                checked={existingAnswer?.answer === choice}
                                onChange={(e) => handleAnswerChange(e.target.value)}
                            />
                        ))}
                    </Form>
                )}

                {question.questionType === "True or false" && (
                    <Form>
                        {["True", "False"].map((val) => (
                            <Form.Check
                                key={val}
                                type="radio"
                                label={val}
                                name={`tof-${question._id}`}
                                value={val}
                                checked={existingAnswer?.answer === val}
                                onChange={() => handleAnswerChange(val)}
                            />
                        ))}
                    </Form>
                )}

                {question.questionType === "Fill in the blank" && (
                    <Form.Control
                        type="text"
                        placeholder="Your answer"
                        value={existingAnswer?.answer || ""}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                    />
                )}
            </Card>
        </Col>
    );
}