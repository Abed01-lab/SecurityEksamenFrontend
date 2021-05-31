import { React, useEffect, useState } from "react";

function ViewPage() {
    useEffect(() => {
        //fetch members
    }, []);

    return (
        <>
            <Col>
                <ProfileImage />
                <Ekstra userInfo={userInfo} />
            </Col>
            <Col xs={9}>
                <Mainbox />
            </Col>
        </>
    );
}

export default ViewPage;
