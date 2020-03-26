import { observable, action, decorate } from 'mobx';

class CourseStore {
  @observable   modules = null;
   @observable  courses = null;
   @observable likesCount = 32;

     constructor(initialData = {}){
        this.courses = initialData.courses;
        this.modules = initialData.modules;
        // this.likesCount = initialData.likesCount;
        console.log('likes', this.likesCount);
     }

     @action setCount() {
       this.likesCount +=1;
        console.log('new', this.likesCount);
     }
     __data() {
        
        console.log('data', this.likesCount);
       return {
        courses: this.courses,
        modules: this.modules,
        likesCount: this.likesCount,
       }
     }

}

// decorate(CourseStore, {
//     modules: observable,
//     courses: observable,
// setCount: action
// })
// const courseStore = new CourseStore()
export default CourseStore;