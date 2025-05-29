import Demo2 from "./Demo2";

function Demo()
{
    // let full_name = "Aarush Sonavane";

    let student_obj = {
        name:"Aarush",
        age:8,
        city:"Rahta"
    }

    return (
        <>
        <h1>Props Demo 1</h1>

        {/* <Demo2 name={full_name} age={8} /> */}

        <Demo2 student={student_obj} />
        </>
    )
}

export default Demo;
