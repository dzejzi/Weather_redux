import React, { Component } from 'react';


class CookieBanner extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { accepted, handleOnClick } = this.props;
 
        return (
            (!accepted) &&
            (
                <div className="CookieBanner">
                    <p className="CookieBanner__p">
                        Informujemy, iż w celu optymalizacji treści dostępnych w naszym serwisie, dostosowania ich do Państwa indywidualnych potrzeb korzystamy z informacji zapisanych za pomocą plików cookies na urządzeniach końcowych użytkowników.
            <br /> Pliki cookies użytkownik może kontrolować za pomocą ustawień swojej przeglądarki internetowej. Dalsze korzystanie z naszego serwisu internetowego, bez zmiany ustawień przeglądarki internetowej oznacza, iż użytkownik akceptuje stosowanie plików cookies. </p>
                    <button className="CookieBanner__button" onClick={handleOnClick}>Akceptuję</button>
                </div>
            )


        )
    }
}

export default CookieBanner