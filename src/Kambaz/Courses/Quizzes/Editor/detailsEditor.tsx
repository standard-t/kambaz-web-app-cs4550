import { Button, Form, ListGroup } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function DetailsEditor({ quiz, setQuiz }: { quiz: any; setQuiz: (quiz: any) => void; }) {
    return (
        <div className="m-5">
            <h4>Edit Quiz Details</h4>
            <div>
                <div className="wd-quiz-editor-form">
                    <div className="wd-quiz-editor-detail mb-3">
                        <label htmlFor="wd-quiz-name" className="form-label"><h6 >Quiz Title:</h6></label>
                        <Form.Control
                            id="wd-quiz-name"
                            className="w-50"
                            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                            value={quiz?.title}
                        />
                    </div>
                    <div className="wd-assignment-editor-question mb-3">
                        <label htmlFor="wd--quiz-description" className="form-label"><h6>Description:</h6></label>
                        <textarea
                            id="wd-quiz-description"
                            placeholder="password"
                            onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                            className="form-control w-50"
                            value={quiz?.description}
                        ></textarea>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label htmlFor="wd-quiz-type"><h6>Quiz Type:</h6></Form.Label>
                        <Form.Select
                            className="w-25"
                            id="wd-quiz-type"
                            value={quiz?.quizType}
                            onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}
                        >
                            <option value="Graded Quiz">Graded Quiz</option>
                            <option value="Practice Quiz">Practice Quiz</option>
                            <option value="Graded Survey">Graded Survey</option>
                            <option value="Ungraded Survey">Ungraded Survey</option>
                        </Form.Select>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <label htmlFor="wd-quiz-points" className="form-label"><h6>Points:</h6></label>
                        <Form.Control
                            className="w-25"
                            type="number"
                            id="wd-quiz-points"
                            onChange={(e) => setQuiz({ ...quiz, points: e.target.value })}
                            value={quiz?.points}
                        />
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label htmlFor="wd-quiz-group"><h6>Assignment Group:</h6></Form.Label>
                        <Form.Select
                            className="w-25"
                            id="wd-quiz-group"
                            value={quiz?.assignmentGroup}
                            onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}
                        >
                            <option value="Quizzes">Quizzes</option>
                            <option value="Exams">Exams</option>
                            <option value="Assignments">Assignments</option>
                            <option value="Project">Project</option>
                        </Form.Select>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label><h6>Shuffle Answers:</h6></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="shuffleAnswers"
                                id="shuffleAnswers-yes"
                                checked={quiz?.shuffleAnswers === true}
                                onChange={() => setQuiz({ ...quiz, shuffleAnswers: true })}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="shuffleAnswers"
                                id="shuffleAnswers-no"
                                checked={quiz?.shuffleAnswers === false}
                                onChange={() => setQuiz({ ...quiz, shuffleAnswers: false })}
                            />
                        </div>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <label htmlFor="wd-time-limit" className="form-label"><h6>Time Limit in Minutes:</h6></label>
                        <Form.Control
                            className="w-25"
                            type="number"
                            id="wd-time-limit"
                            onChange={(e) => setQuiz({ ...quiz, timeLimit: e.target.value })}
                            value={quiz?.timeLimit}
                        />
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label><h6>Multiple Attempts Allowed:</h6></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="multipleAttempts"
                                id="multipleAttempts-yes"
                                checked={quiz?.multipleAttempts === true}
                                onChange={() => setQuiz({ ...quiz, multipleAttempts: true })}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="multipleAttempts"
                                id="multipleAttempts-no"
                                checked={quiz?.multipleAttempts === false}
                                onChange={() => setQuiz({ ...quiz, multipleAttempts: false })}
                            />
                        </div>
                    </div>
                    {(quiz.multipleAttempts) && (
                        <>
                            <div className="wd-quiz-editor-detail mb-3">
                                <label htmlFor="wd-numberOfAttempts" className="form-label"><h6>Number of Attempts:</h6></label>
                                <Form.Control
                                    className="w-25"
                                    type="number"
                                    id="wd-numberOfAttempts"
                                    onChange={(e) => setQuiz({ ...quiz, numberOfAttempts: e.target.value })}
                                    value={quiz?.numberOfAttempts}
                                />
                            </div>
                        </>
                    )}
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label><h6>Show Correct Answers:</h6></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="showCorrectAnswers"
                                id="showCorrectAnswers-yes"
                                checked={quiz?.showCorrectAnswers === true}
                                onChange={() => setQuiz({ ...quiz, showCorrectAnswers: true })}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="showCorrectAnswers"
                                id="showCorrectAnswers-no"
                                checked={quiz?.showCorrectAnswers === false}
                                onChange={() => setQuiz({ ...quiz, showCorrectAnswers: false })}
                            />
                        </div>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <label htmlFor="wd-access-code" className="form-label"><h6>Access Code:</h6></label>
                        <Form.Control
                            className="w-25"
                            id="wd-access-code"
                            onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}
                            value={quiz?.accessCode}
                        />
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label><h6>One Question at a Time:</h6></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="oneAtATime"
                                id="oneAtATime-yes"
                                checked={quiz?.oneAtATime === true}
                                onChange={() => setQuiz({ ...quiz, oneAtATime: true })}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="oneAtATime"
                                id="oneAtATime-no"
                                checked={quiz?.oneAtATime === false}
                                onChange={() => setQuiz({ ...quiz, oneAtATime: false })}
                            />
                        </div>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label><h6>Webcam Required:</h6></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="webcam"
                                id="webcam-yes"
                                checked={quiz?.webcam === true}
                                onChange={() => setQuiz({ ...quiz, webcam: true })}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="webcam"
                                id="webcam-no"
                                checked={quiz?.webcam === false}
                                onChange={() => setQuiz({ ...quiz, webcam: false })}
                            />
                        </div>
                    </div>
                    <div className="wd-quiz-editor-detail mb-3">
                        <Form.Label><h6>Lock Questions After Answering:</h6></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="lockQuestions"
                                id="lockQuestions-yes"
                                checked={quiz?.lockQuestions === true}
                                onChange={() => setQuiz({ ...quiz, lockQuestions: true })}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="lockQuestions"
                                id="lockQuestions-no"
                                checked={quiz?.lockQuestions === false}
                                onChange={() => setQuiz({ ...quiz, lockQuestions: false })}
                            />
                        </div>
                    </div>
                    <div>
                        <h6 className="mt-3">Due:</h6>
                        <div className="form-group me-3">
                            <Form.Control type="date"
                                onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
                                value={quiz?.dueDate}
                                id="wd-due"
                                className="mb-2 wd-assignment-editor-question2" />
                        </div>
                    </div>
                    <div>
                        <h6 className="mt-3">Available From:</h6>
                        <div className="form-group me-3">
                            <Form.Control type="date"
                                onChange={(e) => setQuiz({ ...quiz, availableFrom: e.target.value })}
                                value={quiz?.availableFrom}
                                id="wd-availableFrom"
                                className="mb-2 wd-assignment-editor-question2" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <h6 className="mt-3">Available Until:</h6>
                        <div className="form-group me-3">
                            <Form.Control type="date"
                                onChange={(e) => setQuiz({ ...quiz, availableUntil: e.target.value })}
                                value={quiz?.availableUntil}
                                id="wd-due"
                                className="mb-2 wd-assignment-editor-question2" />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}