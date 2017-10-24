// Sydney Flak
// sflak1@my.smccd.edu
// CIS 114 OL
// departments.js
// Assignment #7
// 5/13/16

$(document).ready(function(){
    var data = { depts: [
  { name:"Accounting",
    employees: [
      {firstName: "Angela", lastName: "Martin", title: "Senior Accountant", image: "photos/Angela_Martin.jpg"},
      {firstName: "Kevin", lastName: "Malone", title: "Accountant", image: "photos/Kevin_Malone.jpg"},
      {firstName: "Oscar", lastName: "Martinez", title: "Accountant", image: "photos/Oscar_Martinez.jpg"}]
  },
  { name: "Customer Service",
    employees: [
      {firstName: "Kelly", lastName: "Kapoor", title: "Customer Service Rep.", image: "photos/Kelly_Kapoor.jpg"}]
  },
  { name: "Human Resources",
    employees: [
      {firstName: "Toby", lastName: "Flenderson", title: "Human Resources Manager", image: "photos/Toby_Flenderson.jpg"}]
    },
  { name: "Management",
    employees: [
      {firstName: "Ryan", lastName: "Howard", title: "Vice President, North East", image: "photos/Ryan_Howard.jpg"},
      {firstName: "Michael", lastName: "Scott", title: "Regional Manager", image: "photos/Michael_Scott.jpg"},
      {firstName: "Dwight", lastName: "Schrute", title: "Assistant Regional Manager", image: "photos/Dwight_Schrute.jpg"},
      {firstName: "Jim", lastName: "Halpert", title: "Assistant Regional Manager", image: "photos/Jim_Halpert.jpg"}]
  },
  { name: "Sales",
    employees: [
      {firstName: "Andy", lastName: "Bernard", title: "Sales Director", image: "photos/Andy_Bernard.jpg"},
      {firstName: "Phyllis", lastName: "Lapin", title: "Sales Representative", image: "photos/Phyllis_Lapin.jpg"},
      {firstName: "Stanley", lastName: "Hudson", title: "Sales Representative", image: "photos/Stanley_Hudson.jpg"}]
  },
  { name: "Support",
    employees: [
      {firstName: "Pamela", lastName: "Beesly", title: "Receptionist", image: "photos/Pamela_Beesly.jpg"},
      {firstName: "Creed", lastName: "Bratton", title: "Quality Assurance", image: "photos/Creed_Bratton.jpg"},
      {firstName: "Meredith", lastName: "Palmer", title: "Supplier Relations", image: "photos/Meredith_Palmer.jpg"}] 
  }]
};


    var tpl = "{{#depts}}<h1>{{name}}</h1>" +
              "<ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
    var partials = {employee: "<li><img src={{image}}> {{firstName}} {{lastName}},  {{title}}</li>"};
    var html = Mustache.to_html(tpl, data, partials);
    $('#sampleArea').html(html);

});


