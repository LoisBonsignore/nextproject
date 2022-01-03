import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Occaecat officia aliquip ipsum esse anim proident aliquip. Nulla
        exercitation non aute laborum amet deserunt velit aliqua elit ut ad
        aliqua. Cupidatat commodo id aliqua dolor. Nisi aliquip et ipsum non
        ipsum velit consectetur culpa do consequat sunt eiusmod. Est dolore quis
        incididunt minim. Officia ea nisi labore ea nostrud amet id id dolor.
        Occaecat sit culpa est dolore minim sit velit. Proident ipsum eu non
        esse Lorem magna tempor nostrud incididunt. Tempor quis eu incididunt
        elit aliqua fugiat incididunt aliquip. Ex do voluptate voluptate eu elit
        reprehenderit. Ullamco exercitation adipisicing officia sunt ea sint
        enim nisi dolor veniam exercitation magna. Ut nulla officia nulla
        occaecat irure aute minim exercitation ea labore eiusmod fugiat.
        Excepteur quis mollit quis tempor. Tempor ipsum deserunt do excepteur ea
        nisi duis labore tempor. Consequat pariatur sunt in deserunt nisi
        reprehenderit fugiat reprehenderit ut tempor esse labore. Do ullamco
        laboris quis aliquip irure tempor dolore eiusmod consequat et.
      </p>
      <Link href="/other">
        <a className={styles.btn}>See others</a>
      </Link>
    </div>
  );
}
