
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Form_Select_Country = () => {

    const [countries,setCountries] = useState([])

    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                console.log(res)
                setCountries(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    
    return (
        <select>
           {countries.map(country => (<option value={country.name}>{country.name}</option>
                ))}
        </select>
    )
}

export default Form_Select_Country
