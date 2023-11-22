import { useState } from "react";
import styles from "./assets/style.module.css";
import Images from "./Images";
function App() {
  const [image, setImage] = useState(Images[0]);
  return (
    <div className={styles.body}>
      <div className={styles.titleImage}>
        <img src={image} alt="" />
      </div>

      <div className={styles.imgContainer}>
        {Images.map((img, index) => (
          <img
            src={img}
            alt="AppleProduct"
            key={index}
            className={styles.images}
            onClick={() => {
              setImage(img);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
