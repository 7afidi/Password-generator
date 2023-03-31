interface Props{
    inputStyle:object,
    handleChange(event: React.ChangeEvent<HTMLInputElement>):void,
    inputTitle:string

}

const InputField = ({inputStyle,handleChange,inputTitle}:Props) => {
    return ( <>
     <label htmlFor="switch" style={inputStyle}>
            {inputTitle}
            <input
              type="checkbox"
              id="switch"
              name="switch"
              role="switch"
              onChange={handleChange}
              style={{ marginLeft: "auto" }}
            />
          </label>
    </> );
}
 
export default InputField;