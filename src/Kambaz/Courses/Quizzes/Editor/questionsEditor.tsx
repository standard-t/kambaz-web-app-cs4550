export default function QuestionsEditor({ quiz, setQuiz }: { quiz: any; setQuiz: (quiz: any) => void; }) {
    return (
        <div className="m-5">
            <h3>Edit Quiz Questions</h3>
            <p>{quiz.title}</p>

        </div>
    )
}