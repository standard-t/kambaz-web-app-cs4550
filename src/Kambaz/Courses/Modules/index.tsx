import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import { useSelector, useDispatch }
    from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer"

export default function Modules() {
    const [moduleName, setModuleName] = useState("");
    const { cid } = useParams();
    const { modules } = useSelector(
        (state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };

    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };



    return (
        <div>
            <ModulesControls addModule={createModuleForCourse} moduleName={moduleName} setModuleName={setModuleName} />
            <ListGroup className="rounded-0 mt-5">
                {modules
                    .map((module: any) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className=" me-2 fs-2" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                        onChange={(e) => dispatch(
                                            updateModule({ ...module, name: e.target.value }))
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name} />)}
                                {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                                    <ModuleControlButtons moduleId={module._id}
                                        deleteModule={(moduleId) => removeModule(moduleId)}
                                        editModule={(moduleId) =>
                                            dispatch(editModule(moduleId))} />
                                </>)}
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson: any) => (<ListGroup.Item className="wd-lesson p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-2" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </ListGroup.Item>))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </div >
    );
}