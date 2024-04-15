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
