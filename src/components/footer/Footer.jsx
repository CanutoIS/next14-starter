import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>lamadev</p>
      <p className={styles.text}>Lama creative thoughts agency © All rights reserved.</p>
    </div>
  )
}

export default Footer