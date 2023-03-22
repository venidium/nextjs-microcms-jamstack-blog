import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import Header from '../components/Header';
 import Footer from '../components/Footer';

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};
 


export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      <Header />テスト
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
      <Footer />
    </div>
  );
}
