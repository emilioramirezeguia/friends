import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/AddFriend.module.css";

const AddFriend: NextPage = () => {
  const emptyForm = {
    name: "",
    birthday: "",
    lastContacted: "",
  };

  const [form, setForm] = useState(emptyForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
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
          <label>
            Birthday:
            <input
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}></input>
          </label>
        </form>
      </main>
    </div>
  );
};

export default AddFriend;
