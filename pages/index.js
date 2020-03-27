import React  from 'react';
import { inject, observer } from 'mobx-react';
import { useMobxStores } from '../store/store'; 
import { Button } from 'semantic-ui-react';

const DisplayHome = 
observer(props => {
      const { courseStore } = useMobxStores();
     return (
       <div>
            home page {courseStore.likesCount}
<br/>
            <Button primary onClick={() => { 
                 courseStore.setCount()
            } }>Add Count</Button>
       </div>
     )
})

  class Index extends React.PureComponent {
//     static async getInitialProps({ mobxStore, query }) {
//         await mobxStore;
//         return { course: mobxStore}
//     }
    render() {
         return (
            <div>
              <DisplayHome/> 
            </div>
        )
    }
}

 
export default observer(Index);