import styles from "./singlePost.module.css"
import Image from "next/image";

const SinglePostPage = () => {
    return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image
          src ="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-picknick.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-picknick.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Kemal Imeri</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>

          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe amet repellendus delectus nesciunt quidem perferendis debitis dolor? Distinctio sit error pariatur repellendus quasi suscipit praesentium similique explicabo voluptatum maiores.
          </div>
        </div>
      </div>

    </div>
    );
  };

  export default SinglePostPage;