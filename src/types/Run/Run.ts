import { Workout } from "../Workout/Workout";

export interface Run extends Workout {
    shoeId: string;
    distance: number;
}
