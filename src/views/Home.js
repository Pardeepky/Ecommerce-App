import React from 'react'
import { toursData } from '../assets/data'

const Home = () => {
    return (
        <>
            <h1 className='text-center m-3'>Tours</h1>
            <table class="table">
                <tbody>
                    {toursData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.date}</th>
                                <td>{item.city}</td>
                                <td>{item.venue}</td>
                                <td><button className='btn btn-primary'>Buy Tickets</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Home