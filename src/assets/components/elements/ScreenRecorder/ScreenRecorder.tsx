import { useReactMediaRecorder } from "react-media-recorder";
import styles from "./ScreenRecorder.module.scss";

const ScreenRecorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });

  return (
    <div className={styles.screenRecorder}>
      <video src={mediaBlobUrl} controls autoPlay loop />
      <div className={styles.screenRecorder__buttons}>
        <button className={styles.start} onClick={startRecording}>
          START
        </button>
        <button className={styles.stop} onClick={stopRecording}>
          STOP
        </button>
      </div>
      <p>{status}</p>
    </div>
  );
};

export default ScreenRecorder;
