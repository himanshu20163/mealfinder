

let arr=[];


async function image_meal() {
    
    const input = document.getElementById("searchbox").value;      
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const res = await data.json()
    //console.log(res); 
    
    await(res.meals).map((ele) =>{
        arr.push(ele);
    })
    //console.log(res);

    arr.map((ele)=>{
        
        // let newDiv = document.createElement('div');
        // let addAttr = addAttr('id', 'foodDiv');
        for (var i = 0; i <arr.length; i++) {
           document.getElementById("main_box").innerHTML = "<img src='"+ele[i].strMealThumb+"'>,<h2>'"+ele[].strMeal+"'</h2>";
        }
        
        // document.getElementById("main_box").innerHTML = "";
        // document.getElementById("main_box").innerHTML = "<img src='"+ele.strMealThumb+"'>";
     })
    }
