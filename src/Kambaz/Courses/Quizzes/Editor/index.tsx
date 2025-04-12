import { Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailsEditor from "./detailsEditor";
import QuestionsEditor from "../Questions/questionsEditor";
import { addQuiz, updateQuiz } from "../reducer";
import * as coursesClient from "../../client";
import * as quizzesClient from "../client";




export default function QuizEditor() {
    const { qid, cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { questions } = useSelector((state: any) => state.questionsReducer);
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
        score: 0,
        numberOfQuestions: 0
    });


    const updateQuizHandler = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };

    // const fetchQuestionsForQuiz = async () => {
    //     const questions = await quizzesClient.findQuestionsForQuiz(qid!);
    //     dispatch(setQuestions(questions)); // reloads from backend
    // };


    // const save = async () => {
    //     if (qid === 'New') {
    //         await addQuizHandler();
    //         navigate(`/Kambaz/Courses/${cid}/Quizzes`);
    //     } else {
    //         await updateQuizHandler(quiz);
    //         navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}`);
    //     }
    //     console.log(quizzes)
    // };

    const save = async () => {
        // Step 1: Filter questions that belong to this quiz
        const quizQuestions = questions.filter((q: any) => q.quiz === quiz._id);

        // Step 2: Calculate total points
        const totalPoints = quizQuestions.reduce((sum: number, q: any) => sum + Number(q.points || 0), 0);

        const numberOfQuestions = quizQuestions.length

        // Step 3: Create updated quiz object
        const updatedQuiz = { ...quiz, points: totalPoints, numberOfQuestions: numberOfQuestions };

        // Step 4: Determine if it's a new quiz
        const isNew = !quizzes.find((q: any) => q._id === quiz._id);

        // Step 5: Save appropriately
        if (isNew) {
            await coursesClient.createQuizForCourse(cid!, updatedQuiz);
            dispatch(addQuiz(updatedQuiz));
            navigate(`/Kambaz/Courses/${cid}/Quizzes`);
            console.log(updatedQuiz);
        } else {
            await updateQuizHandler(updatedQuiz);
            dispatch(updateQuiz(updatedQuiz));
            navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
        }
    };

    const saveAndPublish = async () => {
        // Step 1: Get all questions associated with this quiz
        const quizQuestions = questions.filter((q: any) => q.quiz === quiz._id);


        const numberOfQuestions = quizQuestions.length

        // Step 2: Calculate total points
        const totalPoints = quizQuestions.reduce((sum: number, q: any) => sum + Number(q.points || 0), 0);

        // Step 3: Build updated quiz object with published = true
        const updatedQuiz = {
            ...quiz,
            points: totalPoints,
            numberOfQuestions: numberOfQuestions,
            published: true
        };

        setQuiz(updatedQuiz); // Optional UI update

        // Step 4: Determine if this is a new quiz
        const isNew = !quizzes.find((q: any) => q._id === quiz._id);

        // Step 5: Save and update Redux
        if (isNew) {
            await coursesClient.createQuizForCourse(cid!, updatedQuiz);
            dispatch(addQuiz(updatedQuiz));
            console.log(updatedQuiz);
        } else {
            await updateQuizHandler(updatedQuiz);
            dispatch(updateQuiz(updatedQuiz));
        }

        // Step 6: Navigate back to quiz list
        navigate(`/Kambaz/Courses/${cid}/Quizzes`);
    };

    const totalPoints = questions
        .filter((q: any) => q.quiz === quiz._id)
        .reduce((sum: number, q: any) => sum + Number(q.points || 0), 0);




    useEffect(() => {
        if (!qid || !cid || !currentUser) return;

        const existingQuiz = quizzes.find((q: any) => q._id === qid);

        if (existingQuiz) {
            setQuiz(existingQuiz);
        } else {
            // This means it's a new quiz with a generated UUID
            setQuiz({
                _id: qid,
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
                score: totalPoints,
                numberOfQuestions: 0
            });
        }
    }, [qid, cid, quizzes, currentUser]);


    return (
        <div>
            <h3>Quiz Editor: {quiz.title}</h3>
            <h5 >Points: {totalPoints}</h5>
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