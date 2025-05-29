import React from "react"

const Demo = (props) => {

    let students = [
        { name: "Aarush", age: 9, city: "Rahta" },
        { name: "Kabir", age: 6, city: "Kopargaon" },
        { name: "Shiv", age: 20, city: "Vaijapur" },
        { name: "Rohan", age: 19, city: "Aghoor" },
        { name: "Rajendra", age: 119, city: "adafasdfAghoor" },
    ]


    return (
        <>

            <h1>List Rendering</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s,index) => {
                            return (
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <th>{s.name}</th>
                                    <th>{s.age}</th>
                                    <th>{s.city}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
};

export default Demo;
