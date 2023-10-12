import Tracker from '../tracker/Tracker';
import Workout from '../tracker/Workout';

export default class TrackerApp {
  private container: HTMLElement;
  private tracker: Tracker;
  private addForm: HTMLFormElement

  constructor(tracker: Tracker) {
    this.container = document.getElementsByTagName('main')[0]!;
    this.tracker = tracker;
    this.addForm = document.querySelector('#add-form') as HTMLFormElement
    this.addForm.addEventListener('submit', this.getFormData.bind(this))
  }
  
  
  getFormData(e: SubmitEvent){
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const workoutName = formData.get('name')?.toString()!
    const workoutReps = (parseInt(formData.get('reps')?.toString()!))
    this.createWorkoutDiv(new Workout(workoutName, workoutReps)))

  }
  
  displayWorkouts() {
    this.container.innerHTML = '';
    for (const workout of Object.values(this.tracker.routine.workouts)) {
      const workoutDiv = this.createWorkoutDiv(workout);
      this.container.appendChild(workoutDiv);
    }
  }

  createWorkoutDiv(workout: Workout): HTMLDivElement {
    const workoutDiv = document.createElement('div');
    workoutDiv.className = 'workout-div'
    const p = document.createElement('p');
    this.updatePText(p, workout);
    workoutDiv.appendChild(p);
    this.addRepButtons(workoutDiv, workout);
    this.addCompleteButton(workoutDiv, workout);
    return workoutDiv;
  }

  updatePText(p: HTMLParagraphElement, workout: Workout): void {
    p.innerText = `${workout.name}
    Reps: ${workout.reps}`;
  }

  addRepButtons(div: HTMLDivElement, workout: Workout): void {
    const buttonContainer = document.createElement('div');
    for (const direction of ['+', '-']) {
      const containerRow = document.createElement('section')
      for (const number of [5, 10, 15]) {
        const repButton = document.createElement('button');
        repButton.innerText = `${direction}${number}`;
        repButton.addEventListener('click', () => {
          this.adjustReps(workout, parseInt(`${direction}${number}`));
          this.displayWorkouts();
        });
        containerRow.appendChild(repButton)
      }
      buttonContainer.append(containerRow);
    }
    div.appendChild(buttonContainer);
  }

  adjustReps(workout: Workout, reps: number):void {
    console.log(reps);
    if (reps > 0) this.tracker.addReps(workout.name, reps);
    else {
      console.log('below 0');
      this.tracker.completeReps(workout.name, reps);
    }
  }

  addCompleteButton(div: HTMLDivElement, workout: Workout):void {
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', () => {
      this.tracker.completeWorkout(workout.name)
      this.displayWorkouts()
    })
    div.appendChild(completeButton)
  }


}
