import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "../components/three/Text"
import Plane from "../components/three/Plane"
import { Block, useBlock } from "../hooks/blocks"
import state from "../store/store"
import "../styles/landing.css"
import Bulb from "../components/three/Bulb";
import styled from "styled-components";
import Footer from '../components/Footer';
import { Player } from "@lottiefiles/react-lottie-player";

function Startup() {
    const ref = useRef()
    useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
    return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text, links }) {
    const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
    const size = aspect < 1 && !mobile ? 0.55 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = "#FFEE00"

    return (
        <Block factor={factor} offset={offset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>
                <Suspense fallback={null}>
                    <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect/2} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
                </Suspense>
                <Html
                    as='div'
                    style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
                    <div tabIndex={index}>
                        {text}
                        <br />
                        <CTAButton><a href={links}>Know More</a></CTAButton>
                    </div>
                </Html>
                <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
                    {header}
                </Text>
                <Block factor={0.2}>
                    <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1, -10]}>
                        {"0" + (index + 1)}
                    </Text>
                </Block>
            </group>
        </Block>
    )
}

const Content = () => {
    const images = useLoader(
        TextureLoader,
        state.paragraphs.map(({ image }) => image)
    )
    useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
    const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
    return (
        <>
            <Block factor={1} offset={0}>
                <Block factor={1.2}>
                    <Text top left size={w * 0.1} position={[-w / 7, 2, -1]} color="#FFEE00">
                        IDEATE
                    </Text>
                </Block>
                <Block factor={1.2}>
                    <Text left size={w * 0.1} position={[-w / 10, 1, -1]} color="#FFEE00">
                        CREATE
                    </Text>
                </Block>
                <Block factor={1.0}>
                    <Html
                        className="bottom-left"
                        position={[-canvasWidth / 2, -canvasHeight / 2.5, 0]}>
                        {!mobile ? <h1 style={{
                                fontSize: 105,
                                lineHeight: 1,
                                fontWeight: 900,
                                color: "white"
                            }}>Innovators{mobile ? <br/> : " "}Hub</h1>
                            :
                            <h1 style={{
                                fontSize: 45,
                                lineHeight: 1,
                                fontWeight: 900,
                                color: "white"
                            }}>Innovators{mobile ? <br/> : " "}Hub</h1>
                        }
                    </Html>
                </Block>
                <Block factor={1.0}>
                    <Html style={{
                        position: "absolute",
                        top: "230px",
                        right: `${mobile ? "-55px" : "-80px"}`,
                    }}>
                        <Player
                            autoplay
                            loop
                            src="https://assets10.lottiefiles.com/packages/lf20_ADqq0Z.json"
                            speed={0.8}
                            style={{ height: "150px", width: "100px" }}
                        />
                    </Html>
                </Block>
            </Block>
            <Block factor={1.2} offset={5.7}>
                <MultilineText top left size={w * 0.1} lineHeight={w / 5.5} position={[-w / 3, 0, -1]} color="#FFEE00" text={"ideate\ninnovate\ncreate"} />
            </Block>
            {state.paragraphs.map((props, index) => (
                <Paragraph key={index} index={index} {...props} image={images[index]} links={state.links[index].path}/>
            ))}
            {state.stripes.map(({ offset, color, height }, index) => (
                <Block key={index} factor={-1.5} offset={offset}>
                    <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
                </Block>
            ))}
        </>
    )
}

function HomePage() {
    const scrollArea = useRef();
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])

    return (
        <div style={{ width: "100vw", height: "100vh"}}>
            <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: 75, position: [0, 0, 500] }}>
                <Suspense fallback={<Html center className="loading" children="Loading..." />}>
                    {/*<Suspense fallback={<Html center className="loading" children={<Spinner />} />}>*/}
                    <Content />
                    <Startup />
                    <Bulb />
                </Suspense>
            </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
                {new Array(state.sections).fill().map((_, index) => (
                    <div
                        key={index}
                        id={"0" + index}
                        style={{
                            height: `${(state.pages / state.sections) * 100}vh`
                        }}
                    />
                ))}
                <Footer />
            </div>
        </div>
    )
}
export default HomePage;

const CTAButton = styled.button`
  padding: 8px 0;
  background: transparent;
  border: 2px solid #ffee00;
  border-radius: 5em;
  color: #ffee00;
  text-align: center;
  font-size: 0.8em;
  font-weight: 550;
  margin-top: 5px;
  letter-spacing: 0.1em;
  font-family: Poppins, sans-serif;
  width: 150px;
  
  a {
    color: #ffee00;
    
    &:hover {
      color: black;
      background-color: #ffee00;
    }
  }
  
  &:hover {
    cursor: pointer;
    color: black;
    background: #ffee00;
    font-weight: 600;
  }
  
`;
