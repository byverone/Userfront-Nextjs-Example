import type { NextPage } from "next";
import Layout from "../components/Layout";
import Section from "../components/Sections/Section";
import Block from "../components/Blocks/Block";
import ProjectsTableBlock from "../components/Blocks/ProjectsTableBlock";

import Userfront from "@userfront/react";

const SignUp: NextPage = () => {
    Userfront.init("demo1234");

    const SignupForm = Userfront.build({
        toolId: "dkklbor",
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <SignupForm />
        </div>
    );
};

export default SignUp;
