import React,{useEffect,useState} from 'react'
import axios from 'axios'

const List = () => {

    const [items,setItems] = useState([])

    useEffect(()=>{
        axios.get('http://144.217.88.168:3030/api/user')
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    
    return (
        <div>
            
                
                    
                    
                    <table className="div-list">
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Nombre Completo</th>
                                <th>Nacionalidad</th>
                                <th>Celular</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        {Object.values(items).map(item =>
                            Object.values(item).map(it =>
                            <tr>
                                <td key="1">{it.sicCodeType} {it.sicCode} </td>
                                <td key="2">{it.firstName} {it.lastName}</td>
                                <td key="3">{it.nationality}</td>
                                <td key="4">{it.mobilePhone}</td>
                                <td key="5">{it.email}</td>
                            </tr>))}
        
                        
        
                </table>
            
        </div>
    )
}

export default List
