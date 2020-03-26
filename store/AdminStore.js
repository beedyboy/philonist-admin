import { decorate, observable, action } from "mobx";

class AdminStore {
    likesCount = 12;

    updateCount(){
        this.likesCount++;
    }
}

decorate(AdminStore, {
    likesCount: observable,
    updateCount: action
})
const adminStoreInstance = new AdminStore()
export default adminStoreInstance;

