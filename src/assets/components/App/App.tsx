import { useReactMediaRecorder } from "react-media-recorder";
import "@styles/globals.scss";
import styles from "./App.module.scss";

const App = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false, screen: true });

  return (
    <div className={styles.app}>
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <video src={mediaBlobUrl} controls autoPlay loop />
      </div>
    </div>
  );
};

export default App;
