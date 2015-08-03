// add scripts

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];


console.log("sanity check!");

function getAges(students){
  return students.map(function(student){
    return student.age;
  });
};


function getNameAndCity (students){
  return students.map(function(student){
    return [student.name, student.city];
  });
};

function showFromCity(students, city){
  return students.filter(function(student){
    if(student.city === "Boulder")
      return student;
  }).map(function(filtered){
      return filtered.name+" is from "+filtered.city});
  };

function findOlderThan(students, filterAge){
  return students.filter(function(student){
    if(student.age > filterAge)
      return student;
    }).map(function(student){
        return student.name;
  });
};






