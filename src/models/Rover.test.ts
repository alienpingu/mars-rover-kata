import { Rover } from './Rover';

describe('Rover', () => {
  it('should create a rover with correct properties', () => {
    const rover = new Rover({ x: 1, y: 2 }, 5);
    expect(rover.getPosition()).toEqual({ x: 1, y: 2 });
    expect(rover.getSpeed()).toBe(5);
  });

  it('should move the rover correctly', () => {
    const rover = new Rover({ x: 0, y: 0 }, 1);
    rover.move(Math.PI / 2, 10); // Move 10 units up
    expect(rover.getPosition().x).toBeCloseTo(0);
    expect(rover.getPosition().y).toBeCloseTo(10);
  });

  it('should return the correct speed', () => {
    const rover = new Rover({ x: 0, y: 0 }, 3);
    expect(rover.getSpeed()).toBe(3);
  });

  it('should move the rover at different angles', () => {
    const rover = new Rover({ x: 0, y: 0 }, 1);
    rover.move(0, 5); // Move right
    expect(rover.getPosition().x).toBeCloseTo(5);
    expect(rover.getPosition().y).toBeCloseTo(0);
    rover.move(Math.PI, 5); // Move left
    expect(rover.getPosition().x).toBeCloseTo(0);
    expect(rover.getPosition().y).toBeCloseTo(0);
  });
});
