import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const permission = false; //uprawnienia do panelu

const AdminPage = () => {
    return (
        <Route render={() => (
            permission ? (<h3>Panel admina - dzień dobry</h3>) : (
                <Redirect to="/login"></Redirect>
            )
        )} />


    )
}

export default AdminPage;