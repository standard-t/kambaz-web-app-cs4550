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



    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);


    const [enrolling, setEnrolling] = useState<boolean>(false);

    const fetchMyCourses = async () => {
        try {
            const courses = await userClient.findMyCourses(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAllCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findMyCourses(
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };


    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };


    useEffect(() => {
        if (enrolling) {
            fetchAllCourses();
        } else {
            fetchMyCourses();
        }
    }, [currentUser, enrolling]);


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
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })
        );

    };






    /// need state variable to store current quiz, but needs to be able to be passed into routes at kambaz index.tsx so cant be state variable on 
    // look at quiz editor and kambaz index





    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<Account />} />
                        <Route path="Dashboard" element={<ProtectedRoute><Dashboard updateEnrollment={updateEnrollment} setEnrolling={setEnrolling} enrolling={enrolling} courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} /></ProtectedRoute>} />
                        <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
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