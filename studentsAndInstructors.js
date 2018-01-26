//Part I
var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
function stud(){
    for (var i = 0; i < students.length; i++) {
        console.log(`${students[i].first_name} ${students[i].last_name}`);
    }
}
stud();
//Part II
var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
function studentsAndInstructors(){
    var count = 0;
    console.log("\nStudents");
    for (var i = 0; i < users.Students.length ; i++) {
        count++;
        console.log(`${count} - ${users.Students[i].first_name.toUpperCase()} ${users.Students[i].last_name.toUpperCase()} - ${users.Students[i].first_name.length + users.Students[i].last_name.length}`);
    }
    console.log("Instructors");
    var cnt = 0;
    for (var i = 0; i < users.Instructors.length; i++) {
        cnt++;
        console.log(`${cnt} - ${users.Instructors[i].first_name.toUpperCase()} ${users.Instructors[i].last_name.toUpperCase()} - ${users.Instructors[i].first_name.length + users.Instructors[i].last_name.length}`);
    }
}
studentsAndInstructors(users);
