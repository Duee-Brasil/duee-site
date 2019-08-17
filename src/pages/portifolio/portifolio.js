import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Case from '../../components/card_case/card_case'
import Lazyload from 'react-lazyload'

import './portifolio.scss'


const Portifolio = () => (
    <Layout>
        <SEO title="Contato" />
        <div class="is-preload">
            {/* <!-- First --> */}
            <section id="one" className="main style3">
                <div className="container">
                    <div className="row gtr-150">
                        <section>
                            <header>
                                <h2>Portifolio</h2>
                            </header>
                            <div className="col-12 row">
                                <Lazyload>
                                    <Case title="case 01" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload>
                                    <Case title="case 02" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload throttle={200} height={300}>
                                    <Case title="case 03" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload throttle={200} height={300}>
                                    <Case title="case 04" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload throttle={200} height={300}>
                                    <Case title="case 05" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload throttle={200} height={300}>
                                    <Case title="case 06" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload throttle={200} height={300}>
                                    <Case title="case 07" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            <Lazyload throttle={200} height={300}>
                                    <Case title="case 08" img='https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg' />
                            </Lazyload>
                            </div>
                            
                        </section>
                    </div>
                </div>
            </section>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Portifolio