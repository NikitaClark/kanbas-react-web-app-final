import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as client from "../client";
import * as userClient from "../../Account/client";
import { FaPlus } from "react-icons/fa6";
export default function People() {
    const { cid } = useParams<{ cid: string }>();
    const [users, setUsers] = useState<any[]>([]);
    const { uid } = useParams();
    const [role, setRole] = useState("");
    const [name, setName] = useState("");

    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await userClient.findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const fetchUsers = async () => {
        if (cid) {
            const users = await client.findUsersForCourse(cid);
            setUsers(users);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return (
        <div>
            <h3>Users</h3>
            <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                className="form-control float-start w-25 me-2 wd-filter-by-name" />

            <PeopleTable users={users} />
        </div>
    );
}
