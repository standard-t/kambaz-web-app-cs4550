import { Button, Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { MdNotInterested } from "react-icons/md";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function ModulesControls({
    moduleName,
    setModuleName,
    addModule
}: {
    moduleName: string;
    setModuleName: (name: string) => void;
    addModule: () => void;
}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser } = useSelector((state: any) => state.accountReducer);


    return (
        <div>
            <Button variant="secondary me-1">Expand All</Button>
            <Button variant="secondary me-1">View Progress</Button>
            {(currentUser.role === "ADMIN" || currentUser.role === "FACULTY") &&
                <>
                    <Dropdown className="d-inline me-1">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Publishing
                        </Dropdown.Toggle >
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"> <FaCheckCircle className="text-success" />Publish all</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><FaCheckCircle className="text-success" />Publish modules only</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><MdNotInterested />Unpublish all</Dropdown.Item>
                            <Dropdown.Item href="# /action-3"><MdNotInterested />Unpublish modules only</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="danger"
                        onClick={handleShow}>+ Module</Button>
                    <ModuleEditor
                        dialogTitle="Add New Module"
                        show={show}
                        handleClose={handleClose}
                        moduleName={moduleName}
                        setModuleName={setModuleName}
                        addModule={addModule}
                    />
                </>
            }
        </div>
    );
}

