import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
    const model = useLoader(
        GLTFLoader,
        props.path
    );

    return (
        <primitive
            object={model.scene}
            scale={props.scale}
            position={props.position}
        />
    );
}

export default Model;
