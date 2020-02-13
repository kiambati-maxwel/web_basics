var students = [
    { 
      name: "Mary", 
      age: 10, 
      grades: [90, 88, 95]
    }, 
    {
      name: "Joseph", 
      age: 11, 
      grades: [80, 100, 90, 96]
    }
  ];

  for (const iterator of students) {
      console.log(students);
  }
students.forEach(students => {
      console.log(students.grades.reduce((accumulator, currentV) => accumulator+currentV
      ));
  });
  
 