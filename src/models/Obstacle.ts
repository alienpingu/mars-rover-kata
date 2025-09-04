export class Obstacle {
    private readonly position: { x: number; y: number };
    private readonly radius: number;
    private readonly obstacles: Obstacle[];

    constructor(position: { x: number; y: number }, radius: number, obstacles: Obstacle[] = []) {
        this.position = position;
        this.radius = radius;
        this.obstacles = obstacles;

    }

    getPosition(): { x: number; y: number } {
        return this.position;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getRadius(): number {
        return this.radius;
    }

    getRenderData(): object {
        return {
            radius: this.radius,
            obstacles: this.obstacles.map(o => ({
                position: o.getPosition(),
                radius: o.getRadius(),
            })),
        };
    }
}