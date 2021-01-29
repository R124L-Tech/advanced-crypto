import './Header.css'


const Header = ({ title }) => {
    return (
        <div className="head">
            <h1 className="title">{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Judul"
}

export default Header
