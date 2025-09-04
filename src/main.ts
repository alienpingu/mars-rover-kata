import { Planet } from './models/Planet';
import { Obstacle } from './models/Obstacle';
import { Rover } from './models/Rover';
import { ICoordinateSystem } from './interfaces/ICoordinateSystem';

class PolarCoordinateSystem implements ICoordinateSystem {
    private objects: (Planet | Obstacle | Rover)[] = [];

    addObject(object: Planet | Obstacle | Rover): void {
        this.objects.push(object);
    }

    removeObject(object: Planet | Obstacle | Rover): void {
        this.objects = this.objects.filter(obj => obj !== object);
    }

    getObjects(): (Planet | Obstacle | Rover)[] {
        return this.objects;
    }
}

const coordinateSystem = new PolarCoordinateSystem();

const earth = new Planet(6371, 5.972e24); // Example planet
const obstacle = new Obstacle({x: 10, y: 20}, 90); // Example obstacle
const rover = new Rover({x: 12, y: 4}, 0.1); // Example rover

coordinateSystem.addObject(earth);
coordinateSystem.addObject(obstacle);
coordinateSystem.addObject(rover);

console.log(coordinateSystem.getObjects());