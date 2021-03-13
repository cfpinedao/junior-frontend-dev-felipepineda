

const Form_Textfield = ({pholder, id, onChange,type, errors}) => {
    return (
        <div>
            <input type={type} className="inputstyle"id={id} onChange={onChange} placeholder={pholder} />
            {errors && <p>{errors} holi</p>}
        </div>
        
    )
}

export default Form_Textfield
