import {useThree} from "@react-three/fiber";

const Orbit = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    return (
        <orbitControls
            attach='orbitControls'
            args={[camera, domElement]}
        />
    );
}

export default Orbit;
