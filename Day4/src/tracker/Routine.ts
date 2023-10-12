import Workout from './Workout'

export interface Workouts {
  [workout:string]:Workout
}

export default abstract class Routine {
  public workouts: Workouts = {}

  constructor( public name: string, public workoutArray: Array<Workout> ){
    workoutArray.map((workout: Workout) => this.workouts[workout.name] = workout)
  }

  addWorkout(workout:string, reps: number):void {
    this.workouts[workout] = new Workout(workout, reps)
  }
  
  removeWorkout(workout:string):void {
    delete this.workouts[workout]
  }
}

