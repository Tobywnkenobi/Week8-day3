import Routine from "./Routine";

export default class Tracker{

  constructor(public routine: Routine){}

  addReps(workout: string, count: number):void{
    if(this.routine.workouts.hasOwnProperty(workout)){
      this.routine.workouts[workout]!.reps += count
    }
  }

  completeReps(workout: string, count: number):void{
    if(this.routine.workouts.hasOwnProperty(workout)){
      this.routine.workouts[workout]!.reps += count 
    }
  }

  completeWorkout(workout:string):void{
    this.routine.removeWorkout(workout)
    // if(this.routine.workouts.hasOwnProperty(workout)){
    //   this.routine.workouts[workout]!.reps = 0
    // }
  }

  displayWorkouts():void{
    console.table(this.routine.workouts)
  }
}