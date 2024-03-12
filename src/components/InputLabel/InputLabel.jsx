import { ContentInput, TextField } from "../Styled/Styled"
export default function InputLAbel({ label, type, name, value, placeholder }) {
    return (
        <ContentInput>
            <label>{label}</label>
            <TextField 
                placeholder={placeholder} 
                type={type} 
                name={name}
            />
        </ContentInput>
    )
}