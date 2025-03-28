import { Modal, Button } from "react-bootstrap";


export default function DeleteAssignmentPopUp({ deleteAssignment, show,
    handleClose, dialogTitle, assignmentId }: {
        deleteAssignment: (assignmentId: string) => void;
        show: boolean; handleClose: () => void;
        dialogTitle: string;
        assignmentId: string;
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
                    <Button variant="primary" onClick={() => { deleteAssignment(assignmentId); handleClose(); }}>Confirm</Button>
                </Modal.Footer>
            </Modal></div >);
}
