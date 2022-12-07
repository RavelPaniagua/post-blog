import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Image from 'next/image';

  export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const json_data = await data.json();
  const {results} = json_data;
  return {
    props: {
      allPostsData,
      results,
    },
  };
}

//para hacer el renderizado completo desde el servidor es lo mismo que getStaticProps solo que usando getServerSideProps
/*
export async function getServerSideProps(){
  return {
    props:{
      
    }
  }
}
*/

export default function Home({ allPostsData, results }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <hr></hr>
        <h1>API</h1>
        {results.map(({name,status,species,image})=>{
          return(
            <div class="card">
              <div class="card-header">{name}</div>
              <div class="card-body">
                {status}
                <p>{species}</p>
                
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  );
}
