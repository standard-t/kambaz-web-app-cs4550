export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your website
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right">
                        <label htmlFor="wd-group"> Assignment Group: </label>
                    </td>
                    <td valign="top">
                        <select id="wd-group">
                            <option value="DISCUSSIONS">DISCUSSIONS</option>
                            <option value="EXAMS">EXAMS</option>
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right">
                        <label htmlFor="wd-display-grade-as"> Display Grade as:</label>
                    </td>
                    <td valign="top">
                        <select id="wd-display-grade-as">
                            <option value="POINTS">POINTS</option>
                            <option value="DECIMAL">DECIMAL</option>
                            <option selected value="PERCENTAGE">
                                PERCENTAGE</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right">
                        <label htmlFor="wd-submission-type"> Assignment Group: </label>
                    </td>
                    <td valign="top">
                        <select id="wd--submission-type">
                            <option value="IN PERSON">IN PERSON</option>
                            <option selected value="ONLINE">
                                ONLINE</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <br />
                    <td valign="top">

                        <label htmlFor="wd-online-entry"> Online Entry Options: </label> <br />

                        <input type="checkbox" name="entry-type" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="entry-type" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="entry-type" id="wd-media-recording" />
                        <label htmlFor="wd-media-recording">Media Recording</label><br />

                        <input type="checkbox" name="entry-type" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label> <br />


                        <input type="checkbox" name="entry-type" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label> <br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to:</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date"> Due: </label>
                    </td>
                    <td>
                        <input type="date"
                            value="2024-05-13"
                            id="wd-due-date" /><br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td valign="top">
                        <label htmlFor="wd-available-from"> Available from: </label> <br />
                        <input type="date"
                            value="2024-05-06"
                            id="wd-available-from" />
                    </td>
                    <td valign="top">
                        <label htmlFor="wd-available-until"> Available until: </label> <br />
                        <input type="date"
                            value="2024-05-20"
                            id="wd-available-until" /><br />
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td colSpan={3} align="right">
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
