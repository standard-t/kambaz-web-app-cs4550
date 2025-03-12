import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function DeleteAssignmentPopUp({ show,
    handleClose, dialogTitle, assignmentId }: {
        show: boolean; handleClose: () => void;
        dialogTitle: string;
        assignmentId: string;
    }) {
    const dispatch = useDispatch();

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dialogTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={() => {
                        dispatch(deleteAssignment(assignmentId));
                        handleClose();
                    }}>Confirm</Button>
                </Modal.Footer>
            </Modal></div>);
}
