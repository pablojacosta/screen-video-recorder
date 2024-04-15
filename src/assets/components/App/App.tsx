import "@styles/globals.scss";
import styles from "./App.module.scss";
import ScreenRecorder from "../elements/ScreenRecorder/ScreenRecorder";

const App = () => (
  <div className={styles.app}>
    <ScreenRecorder />
  </div>
);

export default App;
