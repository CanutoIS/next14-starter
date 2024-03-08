import Image from "next/image"
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/20232750/pexels-photo-20232750/free-photo-of-ligero-amanecer-paisaje-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' fill/>
      </div>
    </div>
  )
}

export default AboutPage