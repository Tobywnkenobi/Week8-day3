import Tracker from "../tracker/Tracker"
import Workout from "../tracker/Workout"

export default class TrackerApp {
  private container: HTMLElement
  private tracker: Tracker

  constructor(tracker: Tracker){
    this.container = document.getElementsByTagName('main')[0]!
    this.tracker = tracker
  }

  displayWorkouts(){
    for(const workout of Object.values(this.tracker.routine.workouts)){
      const workoutDiv = this.createWorkoutDiv(workout)
      this.container.appendChild(workoutDiv)
    }
  }

  createWorkoutDiv(workout: Workout):HTMLDivElement{
    const workoutDiv = document.createElement('div')
    const p = document.createElement('p')
    this.updatePText(p, workout)
    workoutDiv.appendChild(p)
    return workoutDiv
  }

  updatePText(p:HTMLParagraphElement, workout:Workout):void{
    p.innerText = `${workout.name}
    Reps: ${workout.reps}`
  }

  addRepButtons(div:HTMLDivElement, workout: Workout):HTMLDivElement{
    const buttonContainer = document.createElement('div')
    for (const direction of ['+','-']){
        for(const number of [5,10,15]){
          const repButton = document.createElement('button')
          repButton.innerText = `${direction}${number}`
          buttonContainer.append(repButton)
        }
    } div.appendChild(buttonContainer)
    div.append(buttonContainer, document.createElement('div'))
  }
}