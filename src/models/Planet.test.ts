import { Planet } from './Planet';
import { Obstacle } from './Obstacle';

describe('Planet', () => {
  it('should create a planet with correct properties', () => {
    const planet = new Planet(10, 100);
    expect(planet.getRadius()).toBe(10);
    expect(planet.getMass()).toBe(100);
    expect(planet.getObstacles()).toEqual([]);
  });

  it('should accept obstacles and return them', () => {
    const obs1 = new Obstacle({ x: 1, y: 2 }, 3);
    const obs2 = new Obstacle({ x: 3, y: 4 }, 2);
    const planet = new Planet(10, 100, [obs1, obs2]);
    expect(planet.getObstacles()).toEqual([obs1, obs2]);
  });

  it('should return correct render data', () => {
    const obs1 = new Obstacle({ x: 1, y: 2 }, 3);
    const obs2 = new Obstacle({ x: 3, y: 4 }, 2);
    const planet = new Planet(10, 100, [obs1, obs2]);
    expect(planet.getRenderData()).toEqual({
      radius: 10,
      mass: 100,
      obstacles: [
        { position: { x: 1, y: 2 }, radius: 3 },
        { position: { x: 3, y: 4 }, radius: 2 },
      ],
    });
  });
});
