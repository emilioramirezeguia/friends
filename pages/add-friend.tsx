import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/AddFriend.module.css";

const AddFriend: NextPage = () => {
  const emptyForm = {
    firstName: "",
    lastName: "",
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
        <h1>Hey {form.firstName}</h1>
        <p>Is this form working? Type in your name and see it display above.</p>
        <form>
          <label>First Name:</label>
          <input
            type="text"
            name="first-name"
            value={form.firstName}
            onChange={handleChange}
          />
          <label>Last Name: </label>
          <input
            type="text"
            name="last-name"
            value={form.lastName}
            onChange={handleChange}
          />

          <label>Birthday: </label>
          <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
          />

          <label>Last contacted</label>
          <input
            type="date"
            name="last-contacted"
            value={form.lastContacted}
            onChange={handleChange}
          />
        </form>
      </main>
    </div>
  );
};

export default AddFriend;
