import { Obstacle } from './Obstacle';

describe('Obstacle', () => {
  it('should create an obstacle with correct properties', () => {
    const obstacle = new Obstacle({ x: 3, y: 4 }, 2);
    expect(obstacle.getPosition()).toEqual({ x: 3, y: 4 });
    expect(obstacle.getRadius()).toBe(2);
  });

  it('should calculate the correct area', () => {
    const obstacle = new Obstacle({ x: 0, y: 0 }, 3);
    expect(obstacle.getArea()).toBeCloseTo(Math.PI * 9);
  });

  it('should return the correct radius', () => {
    const obstacle = new Obstacle({ x: 1, y: 1 }, 7);
    expect(obstacle.getRadius()).toBe(7);
  });
});
