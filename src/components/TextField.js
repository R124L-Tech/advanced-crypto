import './TextField.css'

function TextField({ ref, label, placeholder, content }) {
    return (
        <div className="textField-container">
            <label className="textField-label" htmlFor="output">{label}</label>
            <textarea className="textField-textarea" ref={ref} id="output" cols="30" rows="5" placeholder={placeholder}>{content}</textarea>
        </div>
    )
}

TextField.defaultProps = {
    label: 'Label',
    placeholder: 'Placeholder here...'
}

export default TextField