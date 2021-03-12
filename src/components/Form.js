
import Button from './Form_Button'
import SelectionCountry from './Form_Select_Country'
import SelectionId from './Form_Select_Id'
import TextField from './Form_Textfield'
import FormLabel from './Form_Label'
const cont_form = () => {
    
    return (
        <form>
            <div className="column">
                <FormLabel textf="Tipo de documento:"/>
                <SelectionId text1="Pasaporte" text2="Cédula de Ciudadania" text3="Cédula de Extranjería"/>
                <FormLabel textf="Nombre(s):"/>
                <TextField pholder="Nombre(s)"/>
                <FormLabel textf="Nacionalidad:" />
                <SelectionCountry />
                <FormLabel textf="Email" />
                <TextField pholder="Email" />
            </div>
            <div className="column">
                <FormLabel textf="Identificación"/>
                <TextField pholder="Identificación"/>
                <FormLabel textf="Apellidos:" />
                <TextField pholder="Apellidos" />
                <FormLabel textf="Celular" />
                <TextField pholder="Celular" />
                <Button />
            </div>  
            
        </form>
    )
}

export default cont_form
