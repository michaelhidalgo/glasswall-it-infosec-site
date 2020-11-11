import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Glasswall IT and InfoSec Team</>,
    imageUrl: "img/product-illustration-01.png",
    imageLinkTo: "docs/how-tos/ci-cd-pipeline",
    description: (
      <>
        About our versatile and innovative team, upcoming recruitments and how to contact us.
      </>
    ),
  },
  {
    title: <>IT Team</>,
    imageUrl: "img/documentation-illustration-02.png",
    imageLinkTo: "/docs/AboutUs/ItTeam/TheTeam",
    description: (
      <>
        Check out our IT projects and activities.
      </>
    ),
  },
  {
    title: <>InfoSec Team</>,
    imageUrl: "img/use-cases-illustration-03.png",
    imageLinkTo: "docs/AboutUs/InfoSecTeam/TheTeam",
    description: (
      <>
        Check out our InfoSec projects and activities.
      </>
    ),
  },
  

];

function Feature({ imageUrl, title, description, imageLinkTo }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={imageLinkTo}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </Link>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    
    <Layout
      title={`Glasswall`}
      description="The online knowledge base for the Glasswall SDK."
    >
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
             
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
