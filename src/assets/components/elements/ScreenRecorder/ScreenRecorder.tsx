import styles from "./ScreenRecorder.module.scss";

interface IScreenRecorder {
  status: string;
  startRecording: () => void;
  stopRecording: () => void;
  mediaBlobUrl: undefined | string;
}

const ScreenRecorder = ({
  status,
  mediaBlobUrl,
  startRecording,
  stopRecording,
}: IScreenRecorder) => {
  return (
    <div className={styles.screenRecorder}>
      <video src={mediaBlobUrl} controls autoPlay loop />
      <div className={styles.screenRecorder__buttons}>
        <button onClick={startRecording}>Start</button>
        <button onClick={stopRecording}>Stop</button>
      </div>
      <p>{status}</p>
    </div>
  );
};

export default ScreenRecorder;
