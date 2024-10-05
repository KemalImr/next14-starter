import styles from "./postCard.module.css"
import Image from "next/image";

const PostCard = () =>{
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-picknick.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, consectetur reiciendis ea cupiditate placeat aspernatur animi sed doloribus alias earum nam quia repudiandae, laborum magni nobis quas, temporibus possimus.</p>
                <a className={styles.link} href="/bog/post">read more</a>
            </div>

        </div>
    );
}

export default PostCard;