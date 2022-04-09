import {useParams} from 'react-router-dom'

const AlumniMember = () => {
    const params = useParams()
    console.log(params)

    return (
        <div style={{ height: "100vh", marginTop: '60px'}}>
            <h1>Alumni Member Page of {params.name}</h1>
        </div>
    )
}

export default AlumniMember;
