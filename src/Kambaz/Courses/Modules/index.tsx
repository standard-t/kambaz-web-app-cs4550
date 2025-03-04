import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import db from "../../Database";
import { useParams } from "react-router";
import { useState } from "react";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    const { cid } = useParams();
    const _modules = db.modules.filter((module) => module.course === cid);
    const [modules, setModules] = useState(_modules);
    const deleteModule = (moduleId: string) => {
        const updatedModules = modules.filter((module) => module._id !== moduleId);
        setModules(updatedModules);
    };
    const setModuleEditMode = (moduleId: string, editing: boolean) => {
        const updatedModules = modules.map((module) => {
            if (module._id === moduleId) {
                return { ...module, editing: editing };
            }
            return module;
        });
        setModules(updatedModules)
    };
    const editModule = (moduleId: string, newName: string) => {
        const newModules = modules.map((module) => {
            if (module._id === moduleId) {
                return { ...module, name: newName, editing: true };
            }
            return module;
        })
        setModules(newModules);
    };

    return (
        <div>
            <ModulesControls />
            <ListGroup className="rounded-0 mt-5">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className=" me-2 fs-2" />
                                {module.editing ? (
                                    <input onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            setModuleEditMode(module._id, false)
                                        }
                                    }}
                                        onChange={(e) => { editModule(module._id, e.target.value) }} className="w-50" value={module.name} />) : module.name}
                                <ModuleControlButtons moduleId={module._id} deleteModule={deleteModule} setModuleEditMode={setModuleEditMode} />
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson) => (<ListGroup.Item className="wd-lesson p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-2" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </ListGroup.Item>))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </div>
    );
}