import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Letter } from "react-letter";
import { extract } from "letterparser";
import { useState } from "react";

export default function Home() {
  interface LetterInf {
    to: string;
    from: string;
    subject: string;
    date: string;
    html: string;
  }

  const [mime, setMime] = useState("");
  const [Html, setHtml] = useState({} as LetterInf);
  return (
    <div className={styles.container}>
      <Head>
        <title>HTML Mime parser</title>
        <meta name="description" content="HTML Mime parser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>HTML Mime parser</h1>
        <div>
          <textarea
            placeholder="Paste your mime here"
            value={mime}
            onChange={event => {
              setMime(event.target.value);
            }}
          ></textarea>
          <div>
            <button
              onClick={async () => {
                const html = await extract(mime);
                //@ts-ignore @TODO: fix this
                setHtml(html);
              }}
            >
              Parse
            </button>
          </div>
        </div>
        <div>
          To:{" "}
          <p>
            <textarea disabled>{Html.to}</textarea>
          </p>
        </div>
        <div>
          From:{" "}
          <p>
            <textarea disabled>{Html.from}</textarea>
          </p>
        </div>
        <div>
          Subject:{" "}
          <p>
            <textarea disabled>{Html.subject}</textarea>
          </p>
        </div>
        <div>
          Date:{" "}
          <p>
            <textarea disabled>{Html.date}</textarea>
          </p>
        </div>
        <div>
          HTML:{" "}
          <p>
            <textarea disabled>{Html.html}</textarea>
          </p>
        </div>
      </main>
    </div>
  );
}
