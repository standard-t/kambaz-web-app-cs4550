import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function AssignmentControls() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-start">
                        <input className="m-2" placeholder="Search" />
                    </div>
                </div>
                <div className="col">
                    {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary me-1">+ Group</Button>
                            <Button variant="danger" >+ Assignment</Button>
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    );
}