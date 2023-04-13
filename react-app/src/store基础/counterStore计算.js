import { computed, makeAutoObservable } from "mobx";

class CounterStore {
  list = [1, 2, 3, 4, 5, 6];

  constructor() {
    makeAutoObservable(this, {
      filterList: computed,
    });
  }

  // 修改原数组
  changeList = () => {
    this.list.push(7, 8, 9);
  };

  // 定义计算属性
  get filterList() {
    return this.list.filter((item) => item > 4);
  }
}

const counter = new CounterStore();
export default counter;
