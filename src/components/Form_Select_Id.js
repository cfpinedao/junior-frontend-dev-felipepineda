import React, {useState} from 'react'

const Form_Select_Id = ({id,onChange}) => {

    const [value,setValue]= useState()
    
    let listId=[{
        itemId:'Cédula de Ciudadania'
    },{
        itemId:'Cédula de Extranjería'
    },{
        itemId:'Pasaporte'
    }];

    return (
        <div>
            <select id={id} value={value} onChange={onChange}>
                <option defaultValue>-Tipo de Documento-</option>
                {listId.map(item => (<option key={item.itemId} value={onChange.itemId}>{item.itemId}</option>
                ))}

            </select>
        </div>
    )
}


export default Form_Select_Id
