import { IoEllipsisVertical }
    from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function LessonControlButtons() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="float-end">
            {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                <FaCheckCircle className="text-success" />
            </>)}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
