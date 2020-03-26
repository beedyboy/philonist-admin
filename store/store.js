// import { useStaticRendering } from 'mobx-react';
import {useLocalStore, useObserver} from 'mobx-react';
import CourseStore from './courseStore';

const isServer = typeof window === 'undefined';
// useStaticRendering(isServer);

let store;

export  function getStores(initialData = { courseStore: {} }) {

    if(isServer) {
        return {
            courseStore: new CourseStore(initialData.courseStore)
        };
    }
    if(!store) {
        store = {
            courseStore: new CourseStore(initialData.courseStore),
        };
    }
    return store;
}

// const StoreContext = React.createContext();

// export function StoreProvider(props) {
//     return <StoreContext.Provider value={props.value}>
//         {props.children}
//     </StoreContext.Provider>
// }



const StoreContext = React.createContext();

export function StoreProvider(props)  {
    
const store = useLocalStore(() => ({
    bugs: ['centipede'],
    addBug: (bug) => {
        store.bugs.push(bug);
    },
    get bugsCount() {
        return store.bugs.length
    }
}));

return (
    <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
)
};

export function useMobxStores() {
    return React.useContext(StoreContext);
}