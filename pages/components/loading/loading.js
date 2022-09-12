import Image from "next/image"
import styles from "./loading.module.css"

function Loading() {
    return <div className={styles.loadingback}>
        <Image src="/logo.svg" alt="logo" width="175" height="175" />
    </div>
  }
  
  export default Loading