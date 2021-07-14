import './Header.css';

interface Prop {
    user: string;
}



function Header({user} : Prop) {
    return (

        <header className="Header">
            <h1 className="MainTitle">Ice Cream Wars</h1>
            <h4>Welcome {user}</h4>
        </header>

        




    );




}


export default Header;