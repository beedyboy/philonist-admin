import React from 'react';
import { Provider } from 'mobx-react';
import App, { Container } from 'next/app';
import 'semantic-ui-css/semantic.min.css'
import { getStores, StoreProvider } from '../store/store';
// import { initializeStoreInstance } from 'mobx/lib/internal';

class CustomApp extends App {
    static async getInitialProps(appContext) {
        const mobxStores = getStores();

        //make stores available to all pages
        appContext.ctx.mobxStore = mobxStores;
        //call super to run pages
        const appProps = await App.getInitialProps(appContext);
        //gather serialization friendly data from store
        const initialData = {
            courseStoreInitialData: mobxStores.courseStore.__data()
        }
        return {
            ...appProps,
            initialData
            // initialMobxState: mobxStore,
        };
    }
    // constructor(props) {
    //     super(props);
    //     const isServer = typeof window === 'undefined';
    //     this.mobxStores = isServer ? props.initialMobxState : getStores(props.initialMobxState);
    // }
    render() {
        const { Component, pageProps, initialData } = this.props;
        const stores = getStores(initialData);
        return (
             <StoreProvider value={stores}>
                 
                    <Component {...pageProps} />
                  
             </StoreProvider>
        )
    }
}
export default CustomApp;