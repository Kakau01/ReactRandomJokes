import './style.css';

const Header = (props) => {

    return (
        <div className="bx-header d-flex justify-content-center align-items-center">
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header;