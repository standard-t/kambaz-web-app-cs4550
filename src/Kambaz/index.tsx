import { Navigate, Route, Routes } from "react-router";
import Account from "./Account ";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Labs from "../Labs";
import db from "./Database";

import "./styles.css";
import { useState } from "react";

export default function Kambaz() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState<any>({
        "_id": "RS105",
        "name": "New Course Name",
        "number": "New Course Number",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "D134",
        "credits": 3,
        "description": "new course description"
    });
    const addCourse = () => {
        console.log("Add new course: ", course);
        const newCourse = { ...course, _id: "RS" + Math.random().toString() };
        const updatedCourses = [...courses, newCourse];
        setCourses(updatedCourses)
    };
    const deleteCourse = (courseId: string) => {
        console.log("Delete course with id: ", courseId);
        const updatedCourses = courses.filter((course) => course._id !== courseId);
        setCourses(updatedCourses);
    };
    const editCourse = () => {
        const newCourses = courses.map((c) => {
            if (c._id === course._id) {
                return course;
            }
            return c;
        });
        setCourses(newCourses)
    };
    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account/*" element={<Account />} />
                    <Route path="Dashboard" element={<Dashboard editCourse={editCourse} addCourse={addCourse} deleteCourse={deleteCourse} courses={courses} course={course} setCourse={setCourse} />} />
                    <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
                    <Route path="Labs/*" element={<Labs />} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                    <Route path="History" element={<h1>History</h1>} />
                    <Route path="Help" element={<h1>Help</h1>} />
                </Routes>
            </div>
        </div >
    );
}