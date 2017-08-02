import { observable, computed, action, autorun } from 'mobx';

export default class AgeStore {
    
    @observable 
    private _age: number = 30;

    constructor(age: number) {
        this._age = age;
    }

    @computed
    get age(): number {
        return (this._age > 40) ? this._age : 0;
    }
    
    public getAge(): number {
        return this._age;
    }
    @action
    public setAge(age: number): void {
        this._age = age;
    }
    @action
    public addAge(): void {
        this._age = this._age + 1;
    }

    public ageLog(): Function {
        return autorun(() => {
            if (this.getAge() > 50) {
                window.alert('나이가 너무 많아');
            }
            console.log('Age', this.getAge());
        });
    }

}