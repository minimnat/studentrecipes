// JavaScript Document

//  Declare SQL Query for SQLite

var createStatement = "CREATE TABLE IF NOT EXISTS recipe (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, title TEXT, recipe TEXT,instruction TEXT)";

var selectAllStatement = "SELECT * FROM recipe";

var insertStatement = "INSERT INTO recipe (type,title,recipe,instruction) VALUES (?, ?,?,?)";

var dropStatement = "DROP TABLE recipe";

 var db = openDatabase("mydb001", "1.0", "My dnnbk", 200000);  // Open SQLite Database

var dataset;

var DataType;

 function initDatabase()  // Function Call When Page is ready.

{

    try {

        if (!window.openDatabase)  // Check browser is supported SQLite or not.

        {

            alert('Databases are not supported in this browser.');

        }

        else {

            createTable();  // If supported then call Function for create table in SQLite
			
        }

    }

    catch (e) {

        if (e == 2) {

            // Version number mismatch. 

            console.log("Invalid database version.");

        } else {

            console.log("Unknown error " + e + ".");

        }

        return;

    }

}

function createTable()  // Function for Create Table in SQLite.

{
dropTable();
    db.transaction(function (tx) { tx.executeSql(createStatement, [], showRecords1, onError); });
	
	insertRecord();

}
function dropTable() // Function Call when Drop Button Click.. Talbe will be dropped from database.

{

    db.transaction(function (tx) { tx.executeSql(dropStatement, [], showRecords1, onError); });

    
}

function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..

{
	var recipe1=new Object ();
		
        recipe1.type = "Chicken";
       recipe1.title = "Chicken Curry";
		recipe1.rec = "Skinless chicken breasts 2 large cut into chunks, Groundnut oil 1tbsp  Red pepper 1 deseeded and sliced Yellow pepper 1 deseeded and sliced,Chinese black bean sauce 2 tbsp Light soy sauce 1 tbsp Chicken stock 60ml, Cornflour 2 tsp Cooked 	long grain rice 250g (optional)";
	recipe1.instruction = ["Step1:To make the marinade combine ingredients Step2: Mix all ingredients into bowl  Step3: Add chicken and mix until 	covered all over Step4: Put into refrigerator for 15-20 minutes Step5: Ready to cook ,Heat the oil in a wok or large frying pan Step6: Once hot add chicken and stir for 4-5 minutes Step7: When golden, remove from wok or frying pan      Step8: Adding the peppers to the wok or frying pan , Brisk heat 	for 3 minutes Step9: Return chicken to wok or frying pan, add black bean sauce, Cook for another 2 minutes Step10: Combine soy sauce, chicken stock, cornflour in a bowl, adding 2 tbsp of water. Pour into wok or frying pan, Simmer gently for 3 minutes, until sauce is thick , Serve with rice"];
        db.transaction(function (tx) { tx.executeSql(insertStatement, [recipe1.type,recipe1.title,recipe1.rec,recipe1.instruction]); });
		
		var recipe=new Object ();
			recipe.type ="Pork";
			recipe.title ="Sausage Casserole";
			recipe.rec = ["Sausages 16","Passata 1 jar or 2 cartons" ,"Baked beans 2 Cans", "Sprinkling of chilli powder",
			"Garlic 1-2 chopped","Onions 1 chopped","Sprinkling of black pepper" ,"Sugar 1 ts"];
			recipe.instruction = ["Step1: Peel and dice onions Step2:Peel and thinly slice garlic Step3: Either heat sausages in a frying pan with oil and  	onions and garlic. Or bake sausages, brushing with a fair bit of oil Step4: place the onions and garlic on top, and bake for about 20 mins on medium heat Step5: Pour passata and beans into a large casserole dish  Step6: Sprinkle chilli and pepper to taste Step7: Spoon sugar, then add mustard if required, and stir it all up Step8: Remove onions, garlic and sausages from the oven Step9: Spoon saucy mix Step10: Put lid on dish, and bake at medium heat for an hour Step11: Option to serve with mashed potato."];
			 db.transaction(function (tx) { tx.executeSql(insertStatement, [recipe.type,recipe.title,recipe.rec,recipe.instruction]); });
			 	
			var recipe2=new Object ();
			
			recipe2.type ="Beef";
			recipe2.title ="Beef burgers";
			recipe2.rec = ["Ground beef 1-2lbs", "Egg 1", "Onion soup mix 1 pack","Greaseproof paper or non-stick tray"];
			recipe2.instruction = ["Step1: Use ground beef to create burgers Step2: Break ground beef into sections Step3: Form ground beef into small burger shapes, using your hands Step4: Place burger shapes onto greased baking tray Step5: Cook for 20-25 minutes at 400 degrees, ensuring flipping at least once Step6: Side options could be chips or salad Step7: Recipe can be adapted into meatballs, using a type of tomato sauce."];
			
 db.transaction(function (tx) { tx.executeSql(insertStatement, [recipe2.type,recipe2.title,recipe2.rec,recipe2.instruction]); })
			
			var recipe3=new Object ();
			recipe3.type ="Fish";
			recipe3.title ="Salmon with couscous";
			recipe3.rec = ["Lemon juice 1 ", "Olive oil 2tbsp", "Salt and pepper","Skinless salmon 		fillets 2 150g-175g each","Lemon, mint and parsley couscous 100g", "Rocket leaves 20g","Light mayonnaise 	2tbsp"];  
			 recipe3.instruction = ["Step1: To make the marinade, combine lemon juice and 1 tbsp of oil Step2: Add salmon fillets and turn twice ensuring coating is all over Step3: Cover and marinate for 15-20 minutes Step4: Preheat overn to 220C Drizzle remaining oil into a roastin tin Step5: Drain salmon and put into tin Step6: Roast for 15-20 minutes until salmon is starting to go crisp Step7: Put couscous into bowl, add boiling water Step8: Leave to stand for 5 mintues to absorb water Step9: Plate couscous on plate, rocket leaves Step10: Add mayonnaise if required."];
	 db.transaction(function (tx) { tx.executeSql(insertStatement, [recipe3.type,recipe3.title,recipe3.rec,recipe3.instruction]); })	
		//tx.executeSql(SQL Query Statement,[ Parameters ] , Sucess Result Handler Function, Error Result Handler Function );

}


function loadRecord(i) // Function for display records which are retrived from database.

{

    var item = dataset.item(i);

    $("#type").val((item['type']).toString());

    $("#title").val((item['title']).toString());
	
$("#recipe").val((item['recipe']).toString());

$("#instruction").val((item['instruction']).toString());

 $("#id").val((item['id']).toString());

}
function onError(tx, error) // Function for Hendeling Error...

{

    alert(error.message);

}
function showRecords1() 
{
}

function showRecords() // Function For Retrive data from Database Display records as list

{
	
    $("#results").html('');
 $("#results1").html('');
  $("#results2").html('');
  $("#results3").html('');
  $("#results4").html('');
 $("#results5").html('');
  $("#results6").html('');
  $("#results7").html('');
    $("#results8").html('');
	  $("#results9").html('');
	    $("#results10").html('');
		$("#results11").html('');
  $("#results12").html('');
    $("#results13").html('');
	  $("#results14").html('');
	    $("#results15").html('');
		
    db.transaction(function (tx) {

        tx.executeSql(selectAllStatement, [], function (tx, result) {

            dataset = result.rows;

            for (var i = 0, item = null; i < dataset.length; i++) {

                item = dataset.item(i);

                var type1 = item['type'] ;
				var title = item['title'] ;
				var recipe = item['recipe'];
				var instruction = item['instruction'];
			//	var temp = '<li>' + item['type'] + ' , ' + item['title'] + ', ' + item['recipe'] + ', '+ item['instruction'];
				if(type1 == "Pork")
				{
                $("#results").append(type1);
				$("#results1").append(title);
				$("#results2").append(recipe);
				$("#results3").append(instruction);
				}
				else if(type1 == "Chicken")
				{
				$("#results4").append(type1);
				$("#results5").append(title);
				$("#results6").append(recipe);
				$("#results7").append(instruction);
				}
				else if(type1 == "Beef")
				{
				$("#results8").append(type1);
				$("#results9").append(title);
				$("#results10").append(recipe);
				$("#results11").append(instruction);
				}
				else if(type1 == "Fish")
				{
				$("#results12").append(type1);
				$("#results13").append(title);
				$("#results14").append(recipe);
				$("#results15").append(instruction);
				}
            }

        });

    });

}

$(document).ready(function () // Call function when page is ready for load..

{
;

    $("body").fadeIn(2000); // Fede In Effect when Page Load..

    initDatabase();
	
	showRecords();
	


  });

 
