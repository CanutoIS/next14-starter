import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/17408946/pexels-photo-17408946/free-photo-of-entrenar-tren-transporte-publico-ventanas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    className={styles.img}
                    fill
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src='https://images.pexels.com/photos/17408946/pexels-photo-17408946/free-photo-of-entrenar-tren-transporte-publico-ventanas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' className={styles.avatar} width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque exercitationem quod mollitia, maxime aut voluptates voluptatem tempore aliquam necessitatibus nobis iure ipsa sequi, eos provident vitae repellendus pariatur quo!
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
