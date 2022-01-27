import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/AddFriend.module.css";

const AddFriend: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>One friend at a time | Friends</title>
      </Head>
      <main className={styles.main}>
        <h1>Add a friend</h1>
      </main>
    </div>
  );
};

export default AddFriend;
