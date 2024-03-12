import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
    );

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

const SinglePostPage = async ({ params }) => {
    const { slug } = params;

    const post = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/17408946/pexels-photo-17408946/free-photo-of-entrenar-tren-transporte-publico-ventanas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    className={styles.img}
                    alt=""
                    fill
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image
                        src="https://images.pexels.com/photos/17408946/pexels-photo-17408946/free-photo-of-entrenar-tren-transporte-publico-ventanas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=""
                        className={styles.avatar}
                        width={50}
                        height={50}
                    />
                    <Suspense fallback={<p>Loading...</p>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
