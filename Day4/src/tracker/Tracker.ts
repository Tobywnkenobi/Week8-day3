import Routine from "./Routine";

export default class Tracker{

  constructor(public routine: Routine){}

  adjustReps(workout: string, count: number){
    if(this.routine.workouts.hasOwnProperty(workout)){
      this.routine.workouts[workout]!.reps += count 
    }
    // this.routine.workouts[workout]?.reps += count 
  }
  completeWorkout(workout:string):void{
    this.routine.removeWorkout(workout)
  }
}