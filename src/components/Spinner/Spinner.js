import { Player } from '@lottiefiles/react-lottie-player';

const Spinner = () => {
  return (
      <div style={{height: "100vh", width: "100vw", display: "flex", zIndex: 9999999}}>
          <div style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
          }}>
              <Player
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/packages/lf20_jJ7Djd.json"
                  speed={0.6}
                  style={{ height: '400px', width: '400px' }}
              />
          </div>
      </div>
  );
}

export default Spinner;
