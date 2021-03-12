
import Button from './Form_Button'
import Selection from './Form_Select'
import TextField from './Form_Textfield'
import FormLabel from './Form_Label'
const cont_form = () => {
    return (
        <form>
            <div className="column">
                <FormLabel textf="Tipo de documento:"/>
                <Selection text="opcion1" value="valor1"/>
                <FormLabel textf="Nombre(s):"/>
                <TextField pholder="Nombre(s)"/>
                <FormLabel textf="Nacionalidad:" />
                <Selection text="opcion2" value="opcion2" />
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
