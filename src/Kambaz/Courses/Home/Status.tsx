import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { GoHome, GoMegaphone } from "react-icons/go";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { IoBarChartOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
                <div className="w-50">
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
            </div>
            <br />
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <GoHome className="me-2 fs-5" /> Choose Home Page </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FiBarChart2 className="me-2 fs-5" /> View Course Stream </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <GoMegaphone className="me-2 fs-5" /> Make an Announcement </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <IoBarChartOutline className="me-2 fs-5" /> New Analytics </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <CiBellOn className="me-2 fs-5" /> View Course Notifications </Button>
        </div>);
}