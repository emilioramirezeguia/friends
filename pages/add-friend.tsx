import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/AddFriend.module.css";

const AddFriend: NextPage = () => {
  const emptyForm = {
    name: "",
    birthday: "",
    lastContacted: "",
  };

  const [form, setForm] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>One friend at a time | Friends</title>
      </Head>
      <main className={styles.main}>
        <h1>Hey {form.name}</h1>
        <p>Is this form working? Type in your name and see it display above.</p>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}></input>
          </label>
        </form>
      </main>
    </div>
  );
};

export default AddFriend;
