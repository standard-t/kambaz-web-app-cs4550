import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical }
    from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons(
    { moduleId, deleteModule, editModule }: {
        moduleId: string;
        deleteModule: (moduleId: string) => void;
        editModule: (moduleId: string) => void;
    }) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-2" />
            <FaTrash className="text-danger me-2 mb-1"
                onClick={() => deleteModule(moduleId)} />
            <FaCheckCircle className="text-success" />
            <BsPlus className="fs-1" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
