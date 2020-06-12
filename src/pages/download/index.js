import '../../styles/pages/download/index.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql, Link } from 'gatsby'
import { downloadTiDB } from '../../data/download-tidb'

const Download = ({ data }) => {
  const { downloadTiDBHeroSVG, deployTiDBinCloudSVG } = data
  return (
    <Layout>
      <SEO title="Download TiDB" />
      <article className="PingCAP-Download-TiDB">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">
                Get started with TiDB now!
              </h1>
              <h2 className="section-subtitle">
                Everything you need from TiDB, in your way.
              </h2>
              <img
                src={downloadTiDBHeroSVG.publicURL}
                alt="Download TiDB Hero"
              />
            </div>
          </div>
        </section>

        <section className="section download-section">
          <div className="container">
            <div className="card deploy-in-cloud">
              <h2 className="title section-title">Deploy TiDB in Cloud</h2>
              <img
                className="cloud-icon"
                src={deployTiDBinCloudSVG.publicURL}
                alt="Deploy TiDB in Cloud"
              />
              <p>
                Fully managed TiDB service that lets you deploy and operate TiDB
                in a few clicks. Available on AWS and GCP.
              </p>
              <Link to="/products/tidb-cloud/trial">
                <button>APPLY FOR FREE TRIAL</button>
              </Link>
            </div>
            <div className="deploy-on-premise">
              <h2 className="title section-title">Deploy TiDB on Premise</h2>
              <div className="columns is-variable is-8">
                {downloadTiDB.map(item => (
                  <div className="column" key={item.title}>
                    <div className="card">
                      <img src={item.icon} alt={item.title} />
                      <h2 className="title section-title">{item.title}</h2>
                      <p>{item.desc}</p>
                      <ul>
                        {item.detailList.map((list, idx) => (
                          <li key={idx}>{list}</li>
                        ))}
                      </ul>
                      <Link to={item.buttonLink}>
                        <button>{item.buttonText}</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    downloadTiDBHeroSVG: file(
      relativePath: { eq: "download/download-tidb-hero.svg" }
    ) {
      publicURL
    }
    deployTiDBinCloudSVG: file(
      relativePath: { eq: "download/deploy-tidb-in-cloud.svg" }
    ) {
      publicURL
    }
  }
`

export default Download