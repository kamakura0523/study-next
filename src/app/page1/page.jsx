import { useDebugValue } from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div style={{ color: "red" }}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          <li>
            <Link href="../products">スマートフォン</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
