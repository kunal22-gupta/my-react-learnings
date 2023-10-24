import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Github() {
    const {username} = useParams();
    const [data, setData] = useState({});
    let url = `https://api.github.com/users/kunal22-gupta`
    useEffect(() => {
        if(username) url = `https://api.github.com/users/${username}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
    <div>
        <h1 className="text-center text-2xl py-5">Github followers: {data.followers}</h1>
        <div className="flex justify-center mb-10">
            <img src={data.avatar_url} alt="pfp" width={300} className="rounded-full"/>
        </div>
    </div>
    );
}
