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

describe('js-loops-3', function() {


  it('returns all ages from student object', function() {
    expect(getAges(students)).toEqual([25,28,31,23,19]);
  });
  it('returns all ages from student object', function() {
    expect(getAges(students)).toEqual([25,28,31,23,19]);
  });
  it('return all [First Name, City] pairs from student object', function() {
    expect(nameCity(students)).toEqual([["Derek", "Boulder"], ["Liz","Denver"],["Carl", "Denver"],["Peter", "Boulder"],["Megan", "Denver"]]);
  });
  it('returns all people from a given city from student object', function() {
    expect(fromCity(students, city)).toEqual(["Derek is from Boulder", "Carl is from Boulder", "Peter is from Boulder"]);
  });
  it('returns all student older than given age from student object', function() {
    expect(olderThan(students, age)).toEqual(['Liz',"Carl"]);
  });


});