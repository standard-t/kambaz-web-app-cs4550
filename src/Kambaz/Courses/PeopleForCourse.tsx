import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";

export default function PeopleForCourse() {
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams();

    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(cid!);
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    });
    return (
        <div>
            <h3>People</h3>
            <PeopleTable users={users} />
        </div>
    );
}
