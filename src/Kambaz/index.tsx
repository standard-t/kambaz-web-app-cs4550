import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Labs from "../Labs";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";



export default function Kambaz() {

    const [allCourses, setAllCourses] = useState<any[]>([]);
    const [myCourses, setMyCourses] = useState<any[]>([]);


    const { currentUser } = useSelector((state: any) => state.accountReducer);


    const fetchAllCourses = async () => {
        let courses = [];
        try {
            courses = await courseClient.fetchAllCourses();
        } catch (error) {
            console.error(error);
        }
        setAllCourses(courses);
    };



    const fetchMyCourses = async () => {
        let courses = [];
        try {
            courses = await userClient.findMyCourses();
        } catch (error) {
            console.error(error);
        }
        setMyCourses(courses);
    };



    useEffect(() => {
        fetchAllCourses();
        fetchMyCourses()
    }, [currentUser]);

    const [course, setCourse] = useState<any>({

        _id: "1234",

        name: "New Course",

        number: "New Number",

        startDate: "2023-09-10",

        endDate: "2023-12-15",

        description: "New Description",

        img: "design.jpg",

    });



    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setAllCourses([...allCourses, newCourse]);
        setMyCourses([...myCourses, newCourse]);
    };

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setAllCourses(allCourses.filter((course) => course._id !== courseId));
        setMyCourses(myCourses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setAllCourses(allCourses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })
        );
        setMyCourses(myCourses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })
        );
    };












    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<Account />} />
                        <Route path="Dashboard" element={<ProtectedRoute><Dashboard setMyCourses={setMyCourses} allCourses={allCourses} myCourses={myCourses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} /></ProtectedRoute>} />
                        <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={allCourses} /></ProtectedRoute>} />
                        <Route path="Labs/*" element={<Labs />} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="History" element={<h1>History</h1>} />
                        <Route path="Help" element={<h1>Help</h1>} />
                    </Routes>
                </div>
            </div >
        </Session>
    );
}