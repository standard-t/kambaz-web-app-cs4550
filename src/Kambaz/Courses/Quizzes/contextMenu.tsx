import { useState, useRef, useEffect } from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizActions({
    onPublish,
    onEdit,
    onDelete,
    quiz
}: {
    onPublish: () => void;
    onEdit: () => void;
    onDelete: () => void;
    quiz: any;
}) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="position-relative d-inline-block" ref={menuRef}>
            <IoEllipsisVertical
                className="fs-4"
                onClick={() => setShowMenu(!showMenu)}
                style={{ cursor: "pointer" }}
            />
            {showMenu && (
                <div className="dropdown-menu show p-0 mt-2 shadow" style={{ position: "absolute", right: 0 }}>
                    <button className="dropdown-item" onClick={() => { onPublish(); setShowMenu(false); }}>
                        {quiz.published ? "Unpublish" : "Publish"}
                    </button>
                    <button className="dropdown-item" onClick={() => { onEdit(); setShowMenu(false); }}>
                        Edit
                    </button>
                    <button className="dropdown-item text-danger" onClick={() => { onDelete(); setShowMenu(false); }}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
