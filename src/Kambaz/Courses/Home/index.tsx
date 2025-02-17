import Modules from "../Modules";
import Status from "./Status";

export default function Home() {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-3">
                <Modules />
            </div>
            <div className="d-none d-xl-block">
                <Status />
            </div>
        </div>
    );
}