import React, { useLayoutEffect } from 'react'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { createHubSpotForm } from './sales'

export default ((props: any) => {
    useLayoutEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: '310000a0-2b6b-4da2-89e9-2be930a8a298',
            targetId: 'hubspotRequestDemoForm',
        })
    }, [])
    return (
        <Layout location={props.location} minimal={true}>
            <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
            <div className="bg-white text-dark">
                <div className="container-lg py-6 px-5">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-6">
                            <h1 className="display-4">Request a demo</h1>
                            <h3 className="font-weight-light text-sans-serif">
                                We'll reach out to discuss a product demo and trial.
                            </h3>
                            <div className="form mt-5">
                                <div id="hubspotRequestDemoForm" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogosSection className="mt-3 mb-6" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}) as React.FunctionComponent<any>
