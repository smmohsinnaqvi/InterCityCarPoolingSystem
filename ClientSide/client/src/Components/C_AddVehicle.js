// import dayjs from 'dayjs';
// import { Form, Input, Select, Space, TimePicker } from "antd";

// export default function C_AddVehicle()
// {
//     return(<div className="rideForm">
//     <form className="">
//     <Form.Item label="Car Company" labelCol={{ span: 24 }} style={{}}>
//             <Select name="car_com" defaultValue="0" className="">
//                 <option value='0'>--Select Car Company --</option>
//                 <option value="1">Honda</option>
//                 <option value="2">Maruti</option>
//                 <option value="3">Toyota</option>
//                 <option value="4">Mahindra</option>
//                 <option value="5">Tata</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="Car Model" labelCol={{ span: 24 }} style={{}}>
//             <Select name="car_mod" defaultValue="0" className="">
//                 <option value='0'>--Select Car Model --</option>
//                 <option value="1">Fortuner</option>
//                 <option value="2">Innova</option>
//                 <option value="3">Scorpio</option>
//                 <option value="4">Wagon-R</option>
//                 <option value="5">Safari</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="Registration Certificate (RC)" labelCol={{ span: 24 }}>
//             <Input type="number" name="rc" required></Input>
//         </Form.Item>
//         <Form.Item label="Color Of Vehicle" labelCol={{ span: 24 }} style={{}}>
//             <Select name="seats" defaultValue="0" className="">
//                 <option value='0'>--Select Color --</option>
//                 <option value="1">Red</option>
//                 <option value="2">Black</option>
//                 <option value="3">Green</option>
//                 <option value="4">Blue</option>
//                 <option value="5">Gray</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="Start City" labelCol={{ span: 24 }} style={{}}>
//             <Select name="Start City" className="">
//                 <option value='0'>--Select Type --</option>
//                 <option value="1">Mumbai</option>
//                 <option value="2">Pune</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="End City" labelCol={{ span: 24 }} style={{}}>
//             <Select name="End City" className="">
//                 <option value='0'>--Select Type --</option>
//                 <option value="1">Mumbai</option>
//                 <option value="2">Pune</option>
//             </Select>
//         </Form.Item>
//         <Form.Item style={{ width: '50%' }} label="Date Of Journey" labelCol={{ span: 24 }}>
//             <Input type="date" name="doj"></Input>
//         </Form.Item>
//         <Form.Item label="Time of Departure" labelCol={{ span: 24 }} style={{}}>
//             <Space wrap>
//                 <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
//             </Space>
//         </Form.Item>
//         <Form.Item label="Time of Reaching" labelCol={{ span: 24 }} style={{}}>
//             <Space wrap>
//                 <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
//             </Space>
//         </Form.Item>

//         <Form.Item label="Number Of Seats" labelCol={{ span: 24 }} style={{}}>
//             <Select name="seats" defaultValue="0" className="">
//                 <option value='0'>--Select Seats --</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//             </Select>
//         </Form.Item>
//     </form>
// </div>)
// }






// import { useReducer, useState } from "react"
// import './styles.css'

// export const FormValidateWithReducer = () => {

//     const init = {
//         firstName:{value:"",touched:false,valid:false,error:""},
//         lastName:{value:"",touched:false,valid:false,error:""},
//         email:{value:"",touched:false,valid:false,error:""},
//         password:{value:"",touched:false,valid:false,error:""},
//         confirmpassword:{value:"",touched:false,valid:false,error:""},
//         formvalid:false
//     }


   
//     const reducer = (state,action) => {
//         switch(action.type){
//             case 'update':
//                            const {name, value, touched, valid,error,formvalid} = action.data
//                            //console.log(formvalid)
//                            return {...state, [name]: {value, touched, valid, error}, formvalid }
                           
//             case 'reset':
//                           return init;        

//         }
//     }

//Previous Reg
    // const initialState = {
//     fname: "",
//     lname: "",
//     dob: null,
//     gender: "",
//     phone: 0,
//     email: "",
//     semail: "",
//     pwd: "",
//     aadhar_no: null,
//     licence: null,
//     role: 0
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'update':
//             return { ...state, [action.fld]: action.value };
//         case 'clear':
//             return initialState;
//     }
// }

//Latest Reg
    
//     const [state,dispatch] = useReducer(reducer,init);
//     const [pwdtype,setPwdtype] = useState("password");


//     const validateData = (name,value) => {
//         let valid = false;
//         let error = "";
//         switch(name) {
//             case 'firstName': var pattern = /^[A-Z][a-z]{2,15}$/
//                               if(pattern.test(value))
//                               {
//                                  valid = true;
//                                  error = "";
//                               }
//                               else
//                               {
//                                  valid = false;
//                                  error = "First name invalid"
//                               }
//                               break;
//             case 'lastName':  var pattern = /^[A-Z][a-z]{2,15}$/
//                               if(pattern.test(value))
//                               {
//                                 valid = true;
//                                 error = "";
//                                }
//                                else
//                                {
//                                 valid = false;
//                                 error = "Last name invalid"
//                                }
//                               break;
//             case 'email':     var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/
//                               if(pattern.test(value))
//                               {
//                                 valid = true;
//                                 error = "";
//                               }
//                               else
//                               {
//                                 valid = false;
//                                 error = "Email invalid"
//                               }
//                               break;
//             case 'password':  var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/
//                                 if(pattern.test(value))
//                                 {
//                                 valid = true;
//                                 error = "";
//                                 }
//                                 else
//                                 {
//                                 valid = false;
//                                 error = "Password invalid"
//                                 }
//                               break;
//             case 'confirmpassword':
//                               if(state.password.value === value)
//                               {
//                                 valid = true;
//                                 error = "";
//                               } 
//                               else
//                               {
//                                 valid = false;
//                                 error = "Passwords do not match"
//                               }     
//                               break;
                            
//         }
//         return {valid, error};
//     }

//     const handleChange = (name,value) => {
//         const {valid,error} = validateData(name,value)
//         let formvalid = true;
//         /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
//             formvalid = true;*/
//         for(const key in state)
//         {
//             console.log(key+" : "+state[key].valid )
//             if(state[key].valid === false)
//             {
//                 formvalid = false;
//                 break;
//             }
//         }  
//         console.log(formvalid)  
//         dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
//     }

//     const onFocusout = (name,value) => {
//         const {valid,error} = validateData(name,value)
//         let formvalid = true;
//         /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
//             formvalid = true;*/
//         for(const key in state)
//         {
//             console.log(key+" : "+state[key].valid )
//             if(state[key].valid === false)
//             {
//                 formvalid = false;
//                 break;
//             }
//         }  
//         dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
//     }

//     return (
//         <div className="container">
//             <h2> Registration Form </h2>
//             <form>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <label htmlFor="firstName"> First Name : </label>
//                         <input type="text" style={{backgroundColor: state.firstName.touched && state.firstName.valid?"green":"red"}} name="firstName" className="form-control" placeholder="First Name"
//                         onChange={(e)=> handleChange("firstName",e.target.value)} />
//                         <div className="error-msg"> {state.firstName.error}</div> 
//                     </div>  
//                     <div className="col-md-6">
//                         <label htmlFor="lastName"> Last Name : </label>
//                         <input type="text" name="lastName" className="form-control" placeholder="Last Name" 
//                         onChange={(e)=>handleChange("lastName",e.target.value)} />
//                         <div className="error-msg"> {state.lastName.error}</div>  
//                     </div>   
//                     {/* onChange={handleChange("lastName")} />    */}          
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <label htmlFor="email"> Email : </label>
//                         <input type="email" name="email" className="form-control" placeholder="E-mail" 
//                         onChange={(e)=> handleChange("email",e.target.value)} />
                        
//                         <div className="error-msg"> {state.email.error}</div>  
//                     </div>                
//                 </div>
                
//                 <div className="row">
//                     <div className="col-md-12">
//                         <label htmlFor="password"> Password : </label>
//                         <div className="input-group">
//                             <input type={pwdtype}  name="password" className="form-control" placeholder="Password" />
//                             <button type="button" className="btn btn-primary" onClick={()=>{setPwdtype(pwdtype==="password"?"text":"password")}} >
//                                 { pwdtype==="password"? <i className="fa fa-eye-slash"/> : <i className="fa fa-eye" /> }
//                             </button>
//                         </div>
//                         <div className="error-msg"> {state.password.error} </div>
//                     </div>                
//                 </div> 
//                 <div className="row">
//                     <div className="col-md-12">
//                         <label htmlFor="confirmpassword"> Confirm Password : </label>
//                         <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm Password"
//                         onChange={(e)=> handleChange("confirmpassword",e.target.value)}
//                         onBlur={(e)=> onFocusout("confirmpassword", e.target.value)} />
//                         <div className="error-msg"> {state.confirmpassword.error}</div>  
//                     </div>                
//                 </div>
//                 <div className="mb-3">
//                     <button type="submit" disabled={!state.formvalid}>Create Account</button>
//                 </div>
//             </form>
//             {JSON.stringify(state)}
//         </div>
//     )
// }