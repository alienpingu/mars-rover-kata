export class Rover {
    private readonly position: { x: number; y: number };
    private readonly speed: number;

    constructor(position: { x: number; y: number } = { x: 0, y: 0 }, speed: number = 1) {
        this.position = position;
        this.speed = speed;
    }

    move(angle: number, distance: number): void {
        this.position.x += distance * Math.cos(angle);
        this.position.y += distance * Math.sin(angle);
    }

    getPosition(): { x: number; y: number } {
        return this.position;
    }

    getSpeed(): number {
        return this.speed;
    }
}