import { Obstacle } from './Obstacle';

export class Planet {
    private readonly radius: number;
    private readonly mass: number;
    private readonly obstacles: Obstacle[];

    constructor(radius: number, mass: number, obstacles: Obstacle[] = []) {
        this.radius = radius;
        this.mass = mass;
        this.obstacles = obstacles;
    }

    getRadius(): number {
        return this.radius;
    }

    getMass(): number {
        return this.mass;
    }

    getObstacles(): Obstacle[] {
        return this.obstacles;
    }

    // Add this method:
    getRenderData(): object {
        return {
            radius: this.radius,
            mass: this.mass,
            obstacles: this.obstacles.map(o => ({
                position: o.getPosition(),
                radius: o.getRadius(),
            })),
        };
    }
}