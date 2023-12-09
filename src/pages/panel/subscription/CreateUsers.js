import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Block, BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle, Icon, RSelect } from "../../../components/Component";
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import teamData from "./data/team";
import { findUpper } from "../../../utils/Utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, FormGroup, Input, Label} from "reactstrap";
import '../subscription/styles/create-users.css';

export const teamRole = [
  { value: "Member", label: "Member" },
  { value: "Subscriber", label: "Subscriber" },
  { value: "Admin", label: "Admin" },
  { value: "Super Admin", label: "Super Admin" },
];

const CreateUsers = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
      
    const handleSubmit = (e) => {
       e.preventDefault();
       if (  fullname === "" || phone === "" ||  email === "" ||  password === ""  ){
           setErr (true);
          return;
       }

    //    let user = {
    //     first_name: firstname,
    //     last_name: lastname,
    //     email: email,
    //     phone: phone,
    //     password: password,
    //    }
    }
  return (
    <React.Fragment>
      <Head title="Team"></Head>
      <Content>
        <BlockHead size="lg">
            <div className="nk-block-head-sub"><span>Manage Users</span></div>
            <BlockBetween className="g-4" size="md">
                <BlockHeadContent>
                  <BlockTitle tag="h2" className="fw-normal">Create User</BlockTitle>
                  <BlockDes>
                    <p>You can create a new user anytime.</p>
                  </BlockDes>
                </BlockHeadContent>
                {/* <BlockHeadContent>
                    <ul className="nk-block-tools gx-3">
                      <li><a href="#" className="btn btn-primary">create New Staff</a></li>
                    </ul>
                </BlockHeadContent> */}
            </BlockBetween>
        </BlockHead>
        <Block>
          <Card className="card-bordered">
          <div className="create-user-form">
        {/* <h2>Create</h2> */}
        <Form className="form user-form">
          <FormGroup>
            <Label for="fullname">Fullname</Label>
            <Input
              type="text"
              name="name"
              id="fullname"
              placeholder="John Doe"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@john.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Phone Number</Label>
            <Input
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="+234 000 000"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        <Button>Create</Button>
      </Form>
    </div>   
          </Card>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CreateUsers;
            