export class Obstacle {
    private readonly position: { x: number; y: number };
    private readonly radius: number;

    constructor(position: { x: number; y: number }, radius: number) {
        this.position = position;
        this.radius = radius;
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
}