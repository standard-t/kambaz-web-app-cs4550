import Modules from "../Modules";
import Status from "./Status";

export default function Home() {
    return (
        <div>
            <table>
                <tr>
                    <td valign="top">
                        <Modules />
                    </td>
                    <td valign="top">
                        <Status />
                    </td>
                </tr>
            </table>
        </div>
    );
}