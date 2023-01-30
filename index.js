

let arr=[];
let ans = ""
async function image_meal() {
    
    const input = document.getElementById("searchbox").value;      
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const res = await data.json()
    console.log(res); 

    if(input ==  ""){
        error.innerHTML = "Please enter Your Meals";
    }
    
    else if(res.meals == null){
        error.innerHTML = "No Meals Founds";
    }
    else{
    
        error.style.display = "none";
        await(res.meals).map((ele) =>{
            arr.push(ele);
        })
            if(input != ans){
                
                ans = input;
                console.log(ans);
                arr.map((ele)=>{
                
                let box = document.createElement("div");
                box.setAttribute("id","box");
                box.style.margin="20px";
                box.style.boxShadow = "0px 0px 0px 10px black"
        
                const img = document.createElement("img")
                img.src=`${ele.strMealThumb}`;
                const para = document.createElement("p")
                para.setAttribute("id","p_data");
                para.innerText=`${ele.strMeal}`;
                const button1 = document.createElement("input")
                button1.type="button";
                button1.setAttribute("id",`${ele.idMeal}`);
                button1.style.width="150px"
                button1.style.height="50px"
                button1.style.backgroundColor="#d65108";
                button1.style.borderStyle="none";
                button1.style.borderRadius ="50px"
                button1.style.color ="white";
                button1.setAttribute("Value","Get Recipe");
                console.log(para);
                box.appendChild(img);
                box.appendChild(para);
                box.appendChild(button1);
                main_box.appendChild(box);
                //popup data
                const popup_box = document.createElement("div")
                popup_box.setAttribute("id",`${ele.idMeal}`);
                popup_box.setAttribute("style","display:none;");
                popup_box_h3 = document.createElement("h3")
                popup_box_h3.setAttribute("id","pop_h3");
                
                popup_box_h3.setAttribute("color","black");
                popup_box_h3.innerHTML = `<h2 style="color:white;text-style:center;">${ele.strMeal} <br/>  ${ele.strCategory} <br/> Instructions: <br/><br/></h2>
        
                <p style="color:white">${ele.strInstructions}</p> <img id="img_model" src="${ele.strMealThumb}"> <br/>
                <a href="${ele.strYoutube}" style="color:white">Youtube</a>
                `;
                popup_box.appendChild(popup_box_h3);
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
                    // cross.style.fontSize: "28px";
                    // cross.style.color="black";
                    cross.style.marginRight="30px"
                    cross.style.marginTop="10px"
                    cross.style.backgroundColor="white";
                    cross.style.borderRadius="50%";
                    cross.style.padding="10px";
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
             })
        
            }
            else{
                arr=[];
                document.getElementById("main_box").innerHTML = "";
                image_meal()
                ans="";
            }
        }
    }
    function clean_meals(){
        arr=[];
        document.getElementById("main_box").innerHTML = "";
    }




