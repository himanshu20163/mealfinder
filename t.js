

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
        let box = document.createElement("div");
        box.setAttribute("id","box");
        box.style.margin="20px";
        const img = document.createElement("img")
        img.src=`${ele.strMealThumb}`;
        const para = document.createElement("p")
        para.innerText=`${ele.strMeal}`;
        const button1 = document.createElement("input")
        button1.type="button";
        button1.setAttribute("id",`${ele.idMeal}`);
        button1.style.width="150px"
        button1.style.height="50px"
        button1.setAttribute("Value","Get Recipe");
        console.log(para);
        main_box.innerText = box
        //popup data
        const popup_box = document.createElement("div")
        popup_box.setAttribute("id",`${ele.idMeal}`);
        popup_box.setAttribute("style","display:none");
        popup_box_h3 = document.createElement("h3")
        popup_box_h3.setAttribute("id","pop_h3");
        
        popup_box_h3.setAttribute("color","black");
        popup_box_h3.innerText = `${ele.strMeal} <br/>  ${ele.strCategory} <br/> strInstructions: <br/>
        ${ele.strInstructions}
        `;
        const img1 = document.createElement("img")

        img1.src=`${ele.strMealThumb}`;
        popup_box.appendChild(popup_box_h3);
        popup_box.appendChild(img1);
        popup_box.style.value="true";
        console.log(popup_box);
        //document.body.appendChild(popup_box);
        model_box.appendChild(popup_box);
        //check popup data
        const model = document.getElementById("model_box");
        button1.addEventListener('click', ()=>{
            if(popup_box.value == "true"){
               popup_box.setAttribute("style","display:none");
            }
            else{
               popup_box.setAttribute("style","display:show"); 
            }
            model.style.display = "block";
            const cross = document.getElementsByClassName("fa")[0];
            cross.style.display = "block";
            cross.style.float ="right"
            console.log(cross);
            console.log(popup_box);
        })
        const cross = document.getElementsByClassName("fa")[0];   
        cross.addEventListener('click',()=>{
            popup_box.setAttribute("style","display:none");
            model.style.display = "none";
            console.log(model);
        })
        //
        box.removeAttribute('id', 'box');
     })
    }
