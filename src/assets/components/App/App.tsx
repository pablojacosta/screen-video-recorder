import { useReactMediaRecorder } from "react-media-recorder";
import "@styles/globals.scss";
import styles from "./App.module.scss";
import ScreenRecorder from "../elements/ScreenRecorder/ScreenRecorder";

const App = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false, screen: true });

  return (
    <div className={styles.app}>
      <ScreenRecorder
        status={status}
        startRecording={startRecording}
        stopRecording={stopRecording}
        mediaBlobUrl={mediaBlobUrl}
      />
    </div>
  );
};

export default App;
