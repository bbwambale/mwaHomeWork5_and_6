const{from} = require('rxjs');
const{filter} = require('rxjs/operators');

class Grades{
    constructor(){
        this.db = new Array();
    }
    
    insertGrade(obj){
        this.db.push(obj);
        this.db.sort((grade1, grade2)=>{return grade1.id - grade2.id});
    }
    
    findGradeById(id){
      let result;
      from(this.db)
      .pipe(filter((grade) => grade.id == id))
      .subscribe((grade) => {result = grade;});
      return (result)? result:{};
    }

removeGrade(){
    let oldGrade = this.findGradeById(id);
    let tmpArray = this.db;
    this.db = new Array();
   
    from(tmpArray)
    .pipe(filter((grade)=> grade.id !== oldGrade.id)) 
    .subscribe((grade)=>{this.db.push(grade);});

    return oldGrade;
}
updateGrade(obj){
    let grade = this.removeGrade(obj.id);
    (grade.id) ? this.insertGrade(obj) : {};
}

findAll(){
    return this.db;
}
}
      
module.exports = new Grades();