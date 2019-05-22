// from data.js, set data as array into JS
var tableData = data;

// Add another object to tableData array
var dallas =
{
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
}

tableData.push(dallas); //push data to array

myAliens(tableData);  //call function to create HTML table

var filter_btn = d3.select("#filter-btn"); //reference filter button

//create array of filtered data and load to html
filter_btn.on("click",function() {

    d3.event.preventDefault();

    var filter_arr = tableData.filter(filter_data);
    myAliens(filter_arr);
  });

  //funtion to search for create filtered array
function filter_data (alien){
    return alien.datetime === document.getElementById("datetime").value;
}

//function to print array into html as table format
function myAliens (mylist){
   
  //refernce tbody with id "alien-data"
  var tbody = d3.select("#alien-data").text("");

  //add data to table
  mylist.forEach((datum) => {
      var row = tbody.append("tr");
      Object.entries(datum).forEach(([key, value]) => {
        var cell = row.append("td").text(value);
      });
    });
}
