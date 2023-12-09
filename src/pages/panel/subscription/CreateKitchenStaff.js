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
import '../subscription/styles/create-staff.css';


export const teamRole = [
  { value: "Member", label: "Member" },
  { value: "Subscriber", label: "Subscriber" },
  { value: "Admin", label: "Admin" },
  { value: "Super Admin", label: "Super Admin" },
];

const CreateKitchenStaff = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    
   
   
    const handleSubmit = (e) => {
       e.preventDefault();
       if (  fullname === "" || phone === "" ||  email === "" ||  password === "" ){
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
            <div className="nk-block-head-sub"><span>Kitchen Team</span></div>
            <BlockBetween className="g-4" size="md">
                <BlockHeadContent>
                  <BlockTitle tag="h2" className="fw-normal">Create Kitchen Staff</BlockTitle>
                  <BlockDes>
                    <p>You can create a new staff as you want.</p>
                  </BlockDes>
                </BlockHeadContent>
            </BlockBetween>
        </BlockHead>
        <Block>
            <Card className="card-bordered">
          <div className="create-staff-form">
        {/* <h2>Create</h2> */}
        <Form className="form staff-form">
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

export default CreateKitchenStaff;
        //   <form className="form" onSubmit={handleSubmit}>
        //     <div className="form-grid">
        //     <div className="form-group"> 
        //          <input type="text" value={fullname} placeholder="Full Name*" />
        //          {err === true && fullname === "" ? <span>Fullname is required</span> : null}
        //      </div>
        //      <div className="form-group"> 
        //          <input type="text" value={email} placeholder="Email*" onChange={(e) => setEmail(e.target.value)} />
        //        {err === true && email === "" ? <span>Email is Required</span> : null}
        //      </div>
        //     </div>
        //      <div className="form-group"> 
        //          <input type="text" value={phone} placeholder="Phone Number*" onChange={(e) => setPhone(e.target.value)} />
        //          {err === true && phone === "" ? <span> Phone number is Required</span> : null}
        //      </div>
        //      <div className="form-group"> 
        //          <input type="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />
        //          {err === true && password === "" ? <span> password is Required</span> : null}
        //      </div>
        //     <div className="form-btn">
        //     <button>Create</button>
        //     </div>
        // </form>
            // <table className="table table-member">
            //     <thead className="tb-member-head table-light">
            //         <tr className="tb-member-item">
            //             <th className="tb-member-info">
            //                 <span className="overline-title">Team Member</span>
            //             </th>
            //             <th className="tb-member-type tb-col-sm">
            //                 <span className="overline-title">Permission</span>
            //             </th>
            //             <th className="tb-member-role tb-col-md">
            //                 <span className="overline-title">Role</span>
            //             </th>
            //             <th className="tb-member-action">
            //                 <span className="overline-title">Action</span>
            //             </th>
            //         </tr>
            //     </thead>
            //     <tbody className="tb-member-body">
            //       {teamData.map((item,index) =>  {
            //         return(
            //           <tr key={index} className="tb-member-item">
            //             <td className="tb-member-info">
            //                 <div className="user-card">
            //                     <div className={`user-avatar bg-${item.avatarBg}`}>
            //                         {item.image ? <img src={item.image} alt="" /> : <span>{findUpper(item.name)}</span> }
            //                     </div>
            //                     <div className="user-info">
            //                         <span className="lead-text">{item.name}</span>
            //                         <span className="sub-text">{item.email}</span>
            //                     </div>
            //                 </div>
            //             </td>
            //             <td className="tb-member-type tb-col-sm">
            //                 <span>{item.permission}</span>
            //             </td>
            //             <td className="tb-member-role tb-col-md">
            //                 {item.role === 'All' ? <span>All</span> : 
            //                   <RSelect options={teamRole}
            //                     defaultValue={[
            //                       {
            //                         value: item.role,
            //                         label: item.role,
            //                       },
            //                     ]}
            //                   />
            //                 }
            //             </td>
            //             <td className="tb-member-action">
            //                 <div className="d-none d-md-inline">
            //                     <a href="#" className="link link-sm"><span>Edit</span></a>
            //                     <a href="#" className="link link-sm link-danger"><span>Remove</span></a>
            //                 </div>
            //                 <UncontrolledDropdown className="d-md-none">
            //                   <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
            //                     <Icon name="more-v"></Icon>
            //                   </DropdownToggle>
            //                   <DropdownMenu size="xs" end>
            //                     <ul className="link-list-plain no-bdr">
            //                         <li className="active"><a className="link link-sm" href="#">Edit</a></li>
            //                         <li><a className="link link-sm link-danger" href="#">Remove</a></li>
            //                     </ul>
            //                   </DropdownMenu>
            //                 </UncontrolledDropdown>
            //             </td>
            //           </tr>
            //         )
            //       })}
            //     </tbody>
            // </table>

             {/* <BlockHeadContent>
                    <ul className="nk-block-tools gx-3">
                      <li><a href="#" className="btn btn-primary">create New Staff</a></li>
                    </ul>
                </BlockHeadContent> */}

    //             <div className="create-team-form">
    //     <h2>Create</h2>
    //     <Form className="form">
    //       <FormGroup>
    //         <Label for="fullname">Fullname</Label>
    //         <Input
    //           type="email"
    //           name="email"
    //           id="exampleEmail"
    //           placeholder="example@example.com"
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label for="examplePassword">Password</Label>
    //         <Input
    //           type="password"
    //           name="password"
    //           id="examplePassword"
    //           placeholder="********"
    //         />
    //       </FormGroup>
    //     <Button>Submit</Button>
    //   </Form>
    // </div>  