import React, { useContext } from 'react';
import Login from '../components/Login';
import { UidContext } from '../components/AppContext';
import UpdateProfil from '../components/Profil/UpdateProfil';

const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {uid ? (
                <UpdateProfil />
            ) : (
            <div className="log-container">
                <Login signIn={false} signUp={true} />
                <div className="img-container">
                    <img src="./img/log.svg" alt="img-log" />
                </div>
            </div>
            )}
        </div>
    );
};

export default Profil;