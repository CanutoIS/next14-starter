import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/17408946/pexels-photo-17408946/free-photo-of-entrenar-tren-transporte-publico-ventanas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' className={styles.img} fill />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores eius iste expedita maiores similique. Eveniet obcaecati ullam, fugit exercitationem placeat saepe beatae quibusdam quas, quasi, molestias odio eos non?</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard