export class DataService{
    private _data=["Milk", "Bread"];

    getRandomData(){
        return this._data[Math.floor(Math.random()*this._data.length)];
    }

    insertData(val:string){
        this._data.push(val);
    }


}


