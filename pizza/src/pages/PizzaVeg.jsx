import Admin from './Admin';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function PizzaVeg() {
    const [show, setShow] = useState([]);
    const token=localStorage.getItem("token")
    console.log(token)
    useEffect(() => {
        axios.get("http://localhost:8000/type/pizzaveg", {
            headers: {
                "Authorization": token
            }
        }).then((res) => {
            console.log(res.data)
            setShow(res.data)
        })
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/type/pizzaveg/${id}`, {
            headers: {
                "Authorization": token
            }
        });
        window.location.reload(false);
    }
    return (
        <>
            <section className="sm:grid sm:grid-cols-4 sm:gap-4">
                <Admin />
                <div className="col-span-3">
                    <div className="container mx-auto p-2 sm:flex sm:justify-between sm:items-center">
                        <h1 className="text-xl font-bold my-7">Pizza Veg</h1>

                    </div>
                    <ul>
                        {show.map((item, index) => {
                            return (

                                <li className="sm:flex sm:space-x-3 my-11 sm:justify-between sm:items-center">
                                    <div className="container sm:mx-auto font-bold text-lg">
                                        <p>Name:{item.name} Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="container sm:flex sm:space-x-6">
                                        <Link to={"/admin/pizzaveg/update/" + item._id} className="py-3 px-4 sm:bg-black sm:text-white rounded-lg">Update</Link>
                                        <Link onClick={() => { handleDelete(item._id) }} className="py-3 px-4 sm:bg-black sm:text-white rounded-lg">Delete</Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}