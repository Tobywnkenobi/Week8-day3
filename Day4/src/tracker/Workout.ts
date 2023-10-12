export default class Workout{

    constructor(public name: string, public _reps: number){}

    get reps(){
        return this._reps
    }
    set reps(reps: number){
        this._reps = reps >= 0 ? reps : 0
    }
}

