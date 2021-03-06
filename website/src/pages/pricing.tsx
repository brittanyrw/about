import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { PricingFreeTierPopoverButton } from '../components/PricingFreeTierPopover'
import { PricingPlan } from '../components/PricingPlan'
import { PricingTable } from '../components/PricingTable'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="bg-white text-dark">
            <Helmet>
                <title>Sourcegraph - Pricing</title>
                <meta name="twitter:title" content="Sourcegraph - Pricing" />
                <meta property="og:title" content="Sourcegraph - Pricing" />
                <meta
                    name="twitter:description"
                    content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                />
                <meta
                    property="og:description"
                    content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                />
                <meta
                    name="description"
                    content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <div className="pricing-page">
                <ContentSection color="white" className="hero-section text-center py-5">
                    <h4 className="font-weight-light">
                        Sourcegraph code search, code navigation, and other limited features
                        <PricingFreeTierPopoverButton />
                        are free for individuals and small teams. <a href="https://docs.sourcegraph.com">Install</a> to
                        get started today!
                    </h4>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-6">
                        <div className="col-8 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Enterprise"
                                description="Enabling engineering and DevOps leaders to speed up the organization's software development and monitor risks."
                                price="$29"
                                features={[
                                    { name: 'Code review & pull request integration', id: 'code-review' },
                                    { name: 'Code alerts', id: 'automation' },
                                    { name: 'Deployment metrics & monitoring', id: 'deployment' },
                                    {
                                        name: 'High-scale/availability cluster deployment option',
                                        id: 'deployment',
                                    },
                                    { name: 'Single sign-on (SSO)', id: 'admin' },
                                    { name: 'Technical support', id: 'support' },
                                    { name: 'Cloud-managed option', id: 'deployment' },
                                ]}
                                buttonLabel="Try now"
                                buttonHref="/contact/sales/?form_submission_source=pricing-enterprise"
                            />
                        </div>
                        <div className="col-8 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Enterprise Plus"
                                description="Enabling large and complex organizations to accelerate the software lifecycle universally, across teams."
                                price="$69"
                                features={[
                                    { name: 'Repository access permissions', id: 'admin' },
                                    { name: 'Custom branding', id: 'admin' },
                                    { name: 'Sourcegraph extension whitelist', id: 'admin' },
                                    { name: 'Code reporting & analytics', id: 'admin', future: true },
                                    { name: 'Audit logs', id: 'admin', future: true },
                                    { name: 'Priority support', id: 'support' },
                                ]}
                                plusEverythingIn="Enterprise"
                                buttonLabel="Try now"
                                buttonHref="http://about.sourcegraph.com/contact/sales/?form_submission_source=pricing-enterprise-plus"
                            />
                        </div>
                        <div className="col-8 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Elite"
                                description="Enabling businesses to transform the software lifecycle with automation and intelligence."
                                price="$149"
                                features={[
                                    { name: 'Free guest users*', id: 'admin' },
                                    { name: 'Private Sourcegraph extension registry', id: 'admin' },
                                    { name: '24/7 uptime support', id: 'support' },
                                    {
                                        name: 'Large-scale code modifications/refactoring',
                                        id: 'automation',
                                        future: true,
                                    },
                                    {
                                        name: 'License compliance and security analysis',
                                        id: 'automation',
                                        future: true,
                                    },
                                    {
                                        name: 'Remote development environment',
                                        id: 'code-intelligence',
                                        future: true,
                                    },
                                    { name: 'Dedicated support available', id: 'support' },
                                ]}
                                plusEverythingIn="Enterprise Plus"
                                buttonLabel="Try now"
                                buttonHref="http://about.sourcegraph.com/contact/sales/?form_submission_source=pricing-elite"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection color="white" className="hero-section text-center py-5">
                * Limitations apply
            </ContentSection>
            <ContentSection color="purple" className="hero-section text-center py-5">
                <h2>Try Sourcegraph Enterprise Plus risk-free for 30 days</h2>
                <Link className="btn btn-lg btn-outline-light mt-3 font-weight-normal" to="/contact/request-demo">
                    Free trial
                </Link>
            </ContentSection>
            <ContentSection color="primary" className="hero-section text-center py-5">
                <h2>Questions?</h2>
                <Link className="btn btn-lg btn-outline-light mt-3 font-weight-normal" to="/contact/sales">
                    Contact sales
                </Link>
            </ContentSection>
            <div className="pricing-page__compare container-fluid py-6">
                <h2 className="text-center display-4 mb-6">Compare plans</h2>
                <PricingTable />
            </div>
            <Jumbotron
                color="purple"
                className="py-6 mb-0"
                title="Get Sourcegraph now"
                description="Start shipping better software faster with the new standard developer platform."
                logomark={false}
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
