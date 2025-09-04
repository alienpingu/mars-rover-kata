# Polar Coordinate System

This project implements a polar coordinate system to manage celestial bodies, obstacles, and rovers on a planet. It is designed to provide a structured approach to modeling these entities using TypeScript classes and interfaces.

## Project Structure

```
polar-coordinate-system
├── src
│   ├── models
│   │   ├── Planet.ts       # Abstract class defining properties and methods for planets
│   │   ├── Obstacle.ts     # Class representing obstacles on the planet
│   │   └── Rover.ts        # Class representing rovers that navigate the planet
│   ├── interfaces
│   │   └── ICoordinateSystem.ts # Interface for managing objects in the coordinate system
│   ├── main.ts             # Entry point of the application
│   └── types
│       └── index.ts       # Type definitions used throughout the project
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Features

- **Planet Modeling**: Abstract class `Planet` with properties like `radius` and `mass`, and methods for calculating coordinates and area.
- **Obstacle Management**: Class `Obstacle` that extends `Planet`, allowing for the definition of obstacles with specific positions.
- **Rover Navigation**: Class `Rover` that extends `Planet`, providing functionality for movement and position tracking.
- **Coordinate System Interface**: Interface `ICoordinateSystem` for adding and removing objects in the polar coordinate system.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.