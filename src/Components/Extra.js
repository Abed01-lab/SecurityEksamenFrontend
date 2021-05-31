import { React } from "react";

function Extra({ userInfo }) {
    return (
        <div className="extra">
            <p className="m-2">Name: {userInfo.name}</p>
            <p className="m-2">Phone: {userInfo.phoneNumber}</p>
            <p className="m-2">Sex: {userInfo.sex}</p>
        </div>
    );
}

export default Extra;
