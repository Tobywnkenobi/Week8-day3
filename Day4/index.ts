import TrackerApp from './webApp/TrackerApp';
import Routine from './tracker/Routine';
import Workout from './tracker/Workout';
import Tracker from './tracker/Tracker';
import { LegDay, Insanity, BoulderingTraining, Pull } from './tracker/routines';
console.log('hello webpack');

const routine = new LegDay('Leg Day', [
  new Workout('Bulgarian Split Squats', 40),
  new Workout('Leg Curls', 20),
  new Workout('Calf Raises', 50),
  new Workout('Hip Thrusts', 80),
])

const tracker: Tracker = new Tracker(routine);

new TrackerApp(tracker);
