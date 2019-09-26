
import React, { Component } from 'react';
import "../styles/Register.css"

class RegisterPage extends Component {
    state = {
        username: '',
        lastname: '',
        email: '',
        login: '',
        pass: '',
        accept: false,

        errors: {
            username: false,
            lastname: false,
            email: false,
            login: false,
            pass: false,
            accept: false,
        }

    }

    messages = {
        login_incorrect: "Nazwa musi być dłuzsza niz 10 znaków i nie moze zawierać spacji",
        email_incorrect: 'Brak @ w emailu',
        password_incorrect: "Hasło musi zawierać co najmniej 8 znaków",
        accept_incorrect: "Pole wymagane"
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;

        if (type === "text" || type === "password" || type === "email") {

            const value = e.target.value;

            this.setState({
                [name]: value
            })
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState({
                [name]: checked
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (

            <div className="Register">
                <form action="register.php" method="post" noValidate>
                    <label htmlFor="user"> Imię
<input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
                        {this.state.errors.username && <span>{this.messages.username_incorrect} </span>}
                    </label>

                    <label htmlFor="lastname"> Nazwisko
<input type="text" id="ulastname" name="lastname" value={this.state.lastname} onChange={this.handleChange} />

                        {this.state.errors.lastname && <span>{this.messages.lastname_incorrect} </span>}

                    </label>

                    <label htmlFor="email"> Email
<input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />

                        {this.state.errors.email && <span>{this.messages.email_incorrect} </span>}
                    </label>
                    <label htmlFor="login"> Login
<input type="text" id="login" name="login" value={this.state.login} onChange={this.handleChange} />

                        {this.state.errors.login && <span>{this.messages.login_incorrect} </span>}
                    </label>
                    <label htmlFor="password"> Hasło
<input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />

                        {this.state.errors.pass && <span>{this.messages.pass_incorrect} </span>}
                    </label>
                    <label htmlFor="accept">
                        <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} /> Wyraam zgodę na przetwarzanie moich danych osobowych na potrzeby załoenia konta w serwisie
                    </label>
                    {this.state.errors.accept && <span>{this.messages.accept_incorrect} </span>}
                    <button type="submit" name="submit">Zapisz się</button>
                </form>
            </div>

        )
    }
}

export default RegisterPage;