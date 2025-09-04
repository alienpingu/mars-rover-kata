import { Planet } from '../models/Planet';
import { Obstacle } from '../models/Obstacle';
import { Rover } from '../models/Rover';

export interface ICoordinateSystem {
    addObject(object: Planet | Obstacle | Rover): void;
    removeObject(object: Planet | Obstacle | Rover): void;
    getObjects(): (Planet | Obstacle | Rover)[];
}