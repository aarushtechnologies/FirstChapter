// function Demo2(props)
function Demo2({student})
{
    return (
        <>
        <h1>Props Demo2</h1>
        {/* {props.student.name}
        <br />
        {props.student.age}
        <br />
        {props.student.city} */}

        {student.name}
        <br />
        {student.age}
        <br />
        {student.city}
        </>
    )
}

export default Demo2;
