import React, { useState } from 'react'
import { useGetAllCountriesQuery, useLazyGetAllCountriesQuery } from '../../services/countriesApi'

function Countries() {

    // const {isLoading,data} = useGetAllCountriesQuery()
    const [getAllCountriesFn,{isLoading, data}] = useLazyGetAllCountriesQuery()
    // const [showData, setShowData] = useState([])
    
    const handleShowData = () => {
        getAllCountriesFn()
        // .then(({data})=>{
            // setShowData(data)
        // }
    }

  return (
    <div>
        <h1>All Countries</h1>
        <button onClick={() => {handleShowData()}}>show countries</button>
        <ul>
        {
           isLoading === false && data?.map((c, i) => {
                return(
                    <li key={i}>{c.name.common}</li>
                )
            })
        }
        </ul>
        {isLoading === true && <div>please wait</div>}
    </div>
  )
}

export default Countries