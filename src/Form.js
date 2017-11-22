import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const style = {
    margin: 12,
    width: 2
  };

export default class extends React.Component{
    state = {
        firstName:'',
        firstNameError:'',
        lastName:'',
        lastNameError:'',
        username:'',
        usernameError:'',
        email:'',
        emailError:'',
        password:'',
        passwordError:''
    }

    change = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError:'',
            lastNameError:'',
            usernameError:'',
            emailError:'',
            passwordError:''
        };

        if(this.state.username.length<5){
            isError =true;
            errors.usernameError = "Username needsto be atleast 5 characters long";
        }

        if(this.state.email.indexOf("@") === -1){
            isError =true;
            errors.emailError = "Email needs to contain an @ character";
        }

        if(isError){
            this.setState({
                ...this.state,
                ...errors
            })
        }
        return isError;
    }
    onSubmit = e =>{
        e.preventDefault();
        const err = this.validate();
        if (!err){
            this.props.onSubmit(this.state);
            //clear form 
            this.setState({
                firstName:'',
                firstNameError:'',
                lastName:'',
                lastNameError:'',
                username:'',
                usernameError:'',
                email:'',
                emailError:'',
                password:'',
                passwordError:''
            })
        }
        
    }

    render(){
        return (
            <form>
                <TextField
                name="firstName"
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                hintText="Enter first name"
                floatingLabelText="First name"
                errorText={this.state.firstNameError}
                floatingLabelFixed={true}
                />
                <br/>
                <TextField 
                value={this.state.lastName} 
                onChange={e => this.setState({lastName:e.target.value})}
                hintText="Enter last name"
                floatingLabelText="Last name"
                errorText={this.state.lastNameError}
                floatingLabelFixed={true}
                />
                <br/>
                <TextField 
                value={this.state.username} 
                onChange={e => this.setState({username:e.target.value})}
                hintText="Enter user name"
                floatingLabelText="User name"
                errorText={this.state.usernameError}
                floatingLabelFixed={true}
                />
                <br/>
                <TextField 
                value={this.state.email} 
                onChange={e => this.setState({email:e.target.value})}
                hintText="Enter email"
                floatingLabelText="Email"
                errorText={this.state.emailError}
                floatingLabelFixed={true}
                />
                <br/>
                <TextField 
                value={this.state.password} 
                type="password"
                onChange={e => this.setState({password:e.target.value})}
                hintText="Enter password"
                floatingLabelText="Password"
                errorText={this.state.passwordError}
                floatingLabelFixed={true}
                />
                <br/>
                <RaisedButton primary={true} onClick={e => this.onSubmit(e)} style={style} label="Submit"/>

            </form>
        );
    }
}

