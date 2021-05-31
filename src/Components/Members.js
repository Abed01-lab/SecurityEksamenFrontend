import { React, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import facade from "./ApiFacadeFakeBook";
import firebase from "./FirebaseApi";

function Members() {
    const [members, setMembers] = useState(null);

    useEffect(() => {
        const user = firebase.auth().currentUser;
        console.log(user);
        facade.getAllUserInfo(user.za).then((data) => {
            setMembers(data);
        });
    }, []);

    const MembersArray = () => {
        return members.map((member) => {
            return (
                <>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src="../Billeder/defaultPP.jpg"
                        />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Button variant="primary">Profile</Button>
                        </Card.Body>
                    </Card>
                </>
            );
        });
    };

    return (
        <div className="mainBox">
            {members ? <MembersArray /> : <h1>Loading...</h1>}
        </div>
    );
}

export default Members;
