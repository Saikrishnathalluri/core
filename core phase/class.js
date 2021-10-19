class School {
    constructor(name, learners, address) {
      (this.name = name), (this.learners = learners);
      this.address = address;
    }
    schoolName = function () {
      console.log(this.name);
    };
  }
  
  let soal = new School(
    "School of accelerated learning",
    ["raju", "subhash", "akhil"],
    "hyderabad"
  );
  
  console.log(soal.name, soal.learners ,soal.address);
  
  