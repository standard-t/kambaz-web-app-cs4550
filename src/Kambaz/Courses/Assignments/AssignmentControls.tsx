import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export default function AssignmentControls() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
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
                            <Button className="mb-2 me-2" variant="secondary me-1">+ Group</Button>
                            <Link className="btn bg-danger text-white mb-2 me-3" to={`/Kambaz/Courses/${cid}/Assignments/New`} >+ Assignment</Link>
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    );
}