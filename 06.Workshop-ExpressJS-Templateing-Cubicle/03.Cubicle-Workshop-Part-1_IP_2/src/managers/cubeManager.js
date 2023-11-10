const uniqid = require('uniqid')
const cubes = [
    {
        id: '35bujj0lot10j0k',
        name: 'Mirror Cube',
        description: 'A cool miror cube',
        imageUrl: 'https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?cs=srgb&dl=pexels-jadson-thomas-1500610.jpg&fm=jpg',
        difficultyLevel: 4
      },
      {
        id: '3533uhe0lot10j0k',
        name: 'Rubic Classic',
        description: 'Evergreen',
        imageUrl: 'https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3ViZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        difficultyLevel: 3
      }
]


exports.getAll = ()=> cubes.slice()
exports.getOne = (cubeId)=> cubes.find( x => x.id = cubeId)

exports.create = (cubeData) => {
   const newCube = {
        id: uniqid(),
        ...cubeData,
    };
    cubes.push(newCube)
    return newCube

}