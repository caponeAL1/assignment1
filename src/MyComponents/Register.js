

import React, { Component } from "react";

import User from './User';


 

class Register extends Component {

    userArray = [];

    cnt = 0;

 

    constructor() {

        super();

        this.state = {

            firstName: 'Unknown',

            lastName: 'Unknown',

            Address: 'Unknown',

            updateCount: 0,

            isTableVisible: false // Initially, the table is hidden

        };

        this.updateFirstName = this.updateFirstName.bind(this);

        this.updateLastName = this.updateLastName.bind(this);

        this.updateAddress = this.updateAddress.bind(this);

        this.confirmReset = this.confirmReset.bind(this);

        this.addUser = this.addUser.bind(this);

        this.deleteUser = this.deleteUser.bind(this);

        this.toggleTableView = this.toggleTableView.bind(this); // Function to toggle the table visibility

    }

 

    componentDidMount() {

        const storedData = JSON.parse(localStorage.getItem('userArray'));

        if (storedData) {

            this.userArray = storedData;

        }

        console.log("State initialized...");

    }

 

    componentDidUpdate() {

        var today = new Date();

        console.log("Got updated on " + today.getHours() + ":" + today.getMinutes() + " for " + this.state.updateCount + " times");

    }

 

    componentWillUnmount() {

        var today = new Date();

        console.log("Got unmounted on " + today.getHours() + ":" + today.getMinutes() + " for " + this.state.updateCount + " times");

    }

 

    updateFirstName(e) {

        this.setState({ firstName: e.target.value });

        this.setState({ updateCount: this.state.updateCount + 1 });

        console.log(this.state.updateCount);

    }

 

    updateLastName(e) {

        this.setState({ lastName: e.target.value });

        this.setState({ updateCount: this.state.updateCount + 1 });

        console.log(this.state.updateCount);

    }

 

    updateAddress(e) {

        this.setState({ Address: e.target.value });

        this.setState({ updateCount: this.state.updateCount + 1 });

        console.log(this.state.updateCount);

    }

 

    confirmReset() {

        var v = window.confirm("Do you wish to reset the form? Yes/No ?");

        return v;

    }

 

    addUser(event) {

        event.preventDefault();

        var user = new User(this.state.firstName, this.state.lastName, this.state.Address);

        this.userArray.push(user);

        this.setState({ firstName: '', lastName: '', Address: '' });

        localStorage.setItem('userArray', JSON.stringify(this.userArray));

        console.log(this.userArray);

    }

 

    deleteUser(index) {

        this.userArray.splice(index, 1);

        this.setState({ updateCount: this.state.updateCount + 1 });

        localStorage.setItem('userArray', JSON.stringify(this.userArray));

    }

 

    toggleTableView() {

        // Toggle the visibility of the table

        this.setState({ isTableVisible: !this.state.isTableVisible });

    }

 

    render() {

        return (

            <center>

                <div className="userdetails" onReset={this.confirmReset} onSubmit={this.addUser}>

                    <h2>Registration Details</h2>

                    <form>

                        <label>FirstName</label>

                        <input type="text" value={this.state.firstName} onChange={this.updateFirstName} /><br /><br />

                        <label>LastName</label>

                        <input type="text" value={this.state.lastName} onChange={this.updateLastName} /><br /><br />

                        <label>Address</label>

                        <input type="text" value={this.state.Address} onChange={this.updateAddress} /><br /><br />

                        <input type="submit" value="Add Data" />&nbsp;&nbsp;

                        <input type="reset" value="Reset" />

                    </form>

                    <br />

                    <button onClick={this.toggleTableView}>

                        {this.state.isTableVisible ? 'Hide Table' : 'View Table'}

                    </button>

                    {this.state.isTableVisible && (

                        <table>

                            <thead>

                                <tr>

                                    <th>FirstName</th>

                                    <th>LastName</th>

                                    <th>Address</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {this.userArray.map((usr, index) => (

                                    <tr key={index}>

                                        <td>{usr.firstName}&nbsp;</td>

                                        <td>{usr.lastName}&nbsp;</td>

                                        <td>{usr.Address}</td>

                                        <td><button onClick={() => this.deleteUser(index)}>Delete</button></td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    )}

                </div>

            </center>

        );

    }

}

 

export default Register;