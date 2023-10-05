const uniqId = require("uniqid")

const cubes = [
    {
        id: '35bua3clnarzjqk',
        name: 'Cub1',
        description: 'no',
        imageUrl: 'https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3ViZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        difficultyLevel: 1
      },
      {
        id: '35bua3clnarzznp',
        name: 'Cube2',
        description: 'no',
        imageUrl: 'https://m.media-amazon.com/images/I/61fB-s4DPVS.jpg',
        difficultyLevel: 2
      },
      {
        id: '35bua3clnas0w5w',
        name: 'Cub2',
        description: 'noo',
        imageUrl: 'https://m.media-amazon.com/images/I/61fB-s4DPVS.jpg',
        difficultyLevel: 3
      }
];

exports.create = (cubeData) => {
  const id = uniqId()
    const newCube = {
        id,
        ...cubeData,

    }
    cubes.push(newCube);
    return newCube

}


exports.getAll = (search, from, to) => {
   let filterCubes = [...cubes];
   if(search){
    filterCubes = filterCubes.filter(cube => cube.name.toLowerCase.includes(search));

   }
   if(from){
    filterCubes = filterCubes.filter(cube => cube.difficultyLevel >= Number(from));
  
   }
   if(to){
    filterCubes = filterCubes.filter(cube => cube.difficultyLevel <= Number(to));
    
   }

   return filterCubes;

};


exports.getSinleCube = (id) =>{
  return cubes.find(cube => cube.id === id  )
}


