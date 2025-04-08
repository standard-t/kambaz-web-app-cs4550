import { Modal, Button } from "react-bootstrap";


export default function DeleteQuizPopUp({ deleteQuiz, show,
    handleClose, dialogTitle, quizId }: {
        deleteQuiz: (quizId: string) => void;
        show: boolean; handleClose: () => void;
        dialogTitle: string;
        quizId: string;
    }) {


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dialogTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>Cancel</Button>
                    <Button variant="primary"
                        onClick={() => {
                            if (quizId) {
                                deleteQuiz(quizId);
                            }
                            handleClose();
                        }}>Confirm</Button>
                </Modal.Footer>
            </Modal></div >);
}

