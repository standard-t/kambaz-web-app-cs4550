import { Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailsEditor from "./detailsEditor";
import QuestionsEditor from "../Questions/questionsEditor";
import { addQuiz, updateQuiz } from "../reducer";
import { setQuestions } from "../Questions/reducer";
import * as coursesClient from "../../client";
import * as quizzesClient from "../client";



export default function QuizEditor() {
    const { qid, cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [editorComponent, setEditorComponent] = useState("Details");



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
        score: 0
    });


    const addQuizHandler = async () => {
        try {
            const newQuiz = await coursesClient.createQuizForCourse(cid!, {
                _id: quiz._id,
                creator: currentUser._id,
                course: cid,
                title: quiz.title,
                description: quiz.description,
                quizType: quiz.quizType,
                points: quiz.points,
                assignmentGroup: quiz.assignmentGroup,
                shuffleAnswers: quiz.shuffleAnswers,
                timeLimit: quiz.timeLimit,
                multipleAttempts: quiz.multipleAttempts,
                numberOfAttempts: quiz.numberOfAttempts,
                showCorrectAnswers: quiz.showCorrectAnswers,
                accessCode: quiz.accessCode,
                oneAtATime: quiz.oneAtATime,
                webcam: quiz.webcam,
                lockQuestions: quiz.lockQuestions,
                dueDate: quiz.dueDate,
                published: quiz.published,
                availableFrom: quiz.availableFrom,
                availableUntil: quiz.availableUntil,
                score: quiz.score
            });
            dispatch(addQuiz(newQuiz));
        } catch (err) {
            console.error("Error creating assignment:", err);
            throw err;
        }
    };

    const updateQuizHandler = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };



    const save = async () => {
        if (qid === 'New') {
            await addQuizHandler();
            navigate(`/Kambaz/Courses/${cid}/Quizzes`);
        } else {
            await updateQuizHandler(quiz);
            navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}`);
        }
        console.log(quizzes)
    };

    const saveAndPublish = async () => {
        const updatedQuiz = { ...quiz, published: true }; // create updated copy
        setQuiz(updatedQuiz); // optional, updates UI
        if (qid === 'New') {
            await coursesClient.createQuizForCourse(cid!, updatedQuiz); // use updatedQuiz here too
            dispatch(addQuiz(updatedQuiz));
        } else {
            await updateQuizHandler(updatedQuiz); // send updated quiz with published: true
        }
        navigate(`/Kambaz/Courses/${cid}/Quizzes`);
    };



    useEffect(() => {
        if (qid === 'New') {
            // For new assignment, generate a temporary unique ID
            setQuiz({
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
                score: 0
            });
        } else {
            const q = quizzes.find((q: any) => q._id === qid);
            if (q) {
                setQuiz(q);
            }
        }
    }, [qid, cid, quizzes]);


    return (
        <div>
            <h3>Quiz Editor: {quiz.title}</h3>
            <div className="d-flex justify-content-center align-items-center">
                <Button className={
                    editorComponent === "Details"
                        ? "btn-danger text-white me-5"
                        : "btn-light text-danger me-5"
                } onClick={() => setEditorComponent("Details")}>Details</Button>
                <Button className={
                    editorComponent === "Details"
                        ? "btn-light text-danger me-5"
                        : "btn-danger text-white me-5"
                } onClick={() => setEditorComponent("Questions")}>Questions</Button>
            </div>
            <div>
                {(editorComponent === "Details") && (
                    <>
                        <DetailsEditor quiz={quiz} setQuiz={setQuiz} />
                    </>
                )}
                {(editorComponent === "Questions") && (
                    <>

                        <QuestionsEditor />
                    </>
                )}
            </div>
            <div className="d-flex mb-5" style={{ marginLeft: '29%' }}>
                <div>
                    <div className="form-group d-flex justify-content-end">
                        <Link id="wd-cancel-btn"
                            to={`/Kambaz/Courses/${cid}/Quizzes`}
                            className="btn bg-light w-100 mb-2 me-2">
                            Cancel</Link>
                    </div>
                </div>
                <div>
                    <div className="form-group d-flex justify-content-end">
                        <Button id="wd-save-btn"
                            className="btn text-white w-100 mb-2 me-2"
                            onClick={save}>
                            Save</Button>
                    </div>
                </div>
                <div>
                    <div className="form-group d-flex justify-content-end">
                        <Button id="wd-saveandpublish-btn"
                            className="btn-danger text-white w-100 mb-2 me-3"
                            onClick={saveAndPublish}>
                            Save and Publish</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}