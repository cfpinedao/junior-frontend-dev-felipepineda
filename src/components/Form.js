
import Button from './Form_Button'
import SelectionCountry from './Form_Select_Country'
import SelectionId from './Form_Select_Id'
import TextField from './Form_Textfield'
import FormLabel from './Form_Label'
import React, { useState } from 'react';
import Axios from 'axios'

const Form = () => {

    let errors ={}
    const url ="http://144.217.88.168:3030/api/user"
    const [data,setData] = useState({
        sel_id: "",
        num_id:"",
        name: "",
        lastname:"",
        sel_country:"",
        num_cellphone:"",
        email:""
    })
    
    function handleForm(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e){

        e.preventDefault();
        let valid=true

        //Campo Nombre - Validación
        if(!data.name){
            errors.name = "Nombre requerido"
            valid=false
        }else if(!/^[A-Za-z]+/.test(data.name)){
            errors.name = "Solo se admite letras"
            valid=false
        }
        
        //Campo Apellido - Validación
        if(!data.lastname){
            errors.lastname = "Apellidos requerido"
            valid=false
        }else if(!/^[A-Za-z]+/.test(data.lastname)){
            errors.lastname = "Solo se admite letras"
            valid=false
        }
        
        //Campo identificación - Validación
        if(!data.num_id){
            errors.num_id = "Identificación vacía"
            valid=false
        }else if(!/^[0-9]+/.test(data.num_id)){
            errors.num_id = "Solo números en Identificación"
            valid=false
        }
        
        //Campo celular - Validación
        if(!data.num_cellphone){
            errors.num_cellphone = "Celular vacío"
            valid=false
        }else if(!/^[0-9]+/.test(data.num_cellphone)){
            errors.num_cellphone = "Solo números en celular"
            valid=false
        }
        //Campo email - Validación
        if(!data.email){
            errors.email = "Correo Vacío"
            valid=false
        }else if(!/\S+@\S+\.\S+/.test(data.email)){

            errors.email ="Correo incorrecto"
            valid=false
        }
        console.log(valid)
        if(!valid){
            
        }else{
            Axios.post(url,{

                firstName: data.name,
                lastName:data.lastname,
                email: data.email,
                sicCode: data.num_id,
                sicCodeType: data.sel_id,
                mobilePhone: data.num_cellphone,
                nationality: data.sel_country, 
                createdBy:"Felipe Pineda"
    
            })
            .then(res=>{
                console.log(res.data)
            })
        }
    }    
        


    return (

    <div>

  
        <form onSubmit={e =>submit(e)}>
            <div className="cont">
                <div className="cont-col1">
                    <div className="div-form-entries">
                        <FormLabel textf="Tipo de documento:"/>
                        <SelectionId onChange={(e)=>handleForm(e)} id="sel_id" value={data.sel_id} errors={errors.name} />
                    </div>
                    <div className="div-form-entries">
                        <FormLabel textf="Nombre(s):"/>
                        <TextField onChange={(e)=>handleForm(e)} id="name" value={data.name} pholder="Nombre(s)" type="text"/>
                    </div>
                    <div className="div-form-entries">
                        <FormLabel textf="Nacionalidad:" />
                        <SelectionCountry onChange={(e)=>handleForm(e)} id="sel_country" />
                    </div>
                    <div className="div-form-entries">
                        <FormLabel textf="Email" />
                        <TextField onChange={(e)=>handleForm(e)} id="email" value={data.email} pholder="Email" type="email"/>
                    </div>

                </div>
                <div className="cont-col2">
                    <div className="div-form-entries">
                        <FormLabel textf="Identificación"/>
                        <TextField onChange={(e)=>handleForm(e)} id="num_id" value={data.num_id} pholder="Identificación" type="text" />    
                    </div>
                    <div className="div-form-entries">
                        <FormLabel textf="Apellidos:" />
                        <TextField onChange={(e)=>handleForm(e)} id="lastname" value={data.lastname} pholder="Apellidos" type="text"/>
                    </div>
                    <div className="div-form-entries">
                        <FormLabel textf="Celular" />
                        <TextField onChange={(e)=>handleForm(e)} id="num_cellphone" value={data.num_cellphone} pholder="Celular" type="text"/>
                    </div>
                    <div className="div-form-entries">
                        <Button text="+Agregar"/>
                    </div>

                </div>

            </div>

            
            
        </form>

    </div>
    )
}

export default Form
