$( document ).ready(()=>{

let display =false;
 $( "#rajesh" ).tabs();
 $(".results").hide();
 $(".results2").hide();


$(".log").click(()=>{

   let title = $("#sname").val();
   let titleTrim = title.trim();
   let titlePlus = titleTrim.split(" ").join("+");
  
   let click = false;

  
   let yr = $('#year').val();
  
   let yearTrim =  yr.trim();
      
    if(title != "" && title !=null){

	     if(yearTrim != null && yearTrim != ""){
           $(".disp").hide();
           alert("hello");
           getAllData(titlePlus,yearTrim); 	
        	
          }else{
              
              $(".disp").hide();
              getAllData2(titlePlus);	   		
             }
        }else{ 
          alert("Enter some values for title")
              }

})



$(".log2").click(()=>{ 

  let titleId = $("#titleId").val();
  let titleIdTrim = titleId.trim();
  
  $(".disp").hide();

  if( titleIdTrim != "" && titleIdTrim != null){
    $(".disp").hide();
    getAllData3(titleIdTrim);
  }else{
    alert("please enter title ID which is not null or empty");
  }

})

})





let getAllData = (titlePlus,yearTrim) => {
alert(titlePlus);
alert(yearTrim);
$.ajax({
        type: 'GET',
        dataType: 'json', 
        url: 'https://www.omdbapi.com/?apikey=aa8f140e&s='+titlePlus+'&y='+yearTrim,
        success: (data) => { // in case of success response
            
            /*console.log(data);*/
            
        alert("success");
        if(data.Response == "True"){
           $(".results2").show();
             

           
            for(x of data.Search){

              if (x.Poster !="N/A") {
                 let tempRow = `<div class="card m-1 disp" style="width: 18rem;">  <img class="card-img-top" src="${x.Poster}" height="60%"  alt="Card image cap"> 
                               <div class="card-body">    <h5 class="card-title">${x.Title}</h5>  
                               <p class="card-text">Year in which this <i>${x.Type}</i> released is:  <i> ${x.Year} </i>  <br> and the Movie Id is: 
                                <b> <i> ${x.imdbID} </i> </b> </p>
                                  </div>
                                </div>   <br> `

                     $(".results").show();           
                   $(".results").append(tempRow);                

              }else{

                    let tempRow = `<div class="card m-1 disp" style="width: 18rem;">  <img class="card-img-top" src="not_Available.png" height="58%"  alt="Card image cap"> 
                               <div class="card-body">    <h5 class="card-title">${x.Title}</h5>  
                               <p class="card-text">Year in which this <i>${x.Type}</i> released is:  <i> ${x.Year} </i>  <br> and the Movie Id is: 
                                <b> <i> ${x.imdbID} </i> </b> </p>
                               
                                  </div>
                                </div>  <br>  `
                    $(".results").show();  
                    $(".results").append(tempRow);               
              }
            }
           }else{alert("Movie not found")}
        },
        error: (err) => { // in case of error response

                 alert(err.responseJSON.error.message);
        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    })
  }






let getAllData2 = (titlePlus) => {

$.ajax({
        type: 'GET',
        dataType: 'json', 
        url: 'https://www.omdbapi.com/?apikey=aa8f140e&s='+titlePlus,
        success: (data) => { // in case of success response
            
            //console.log(data);
            

          if(data.Response == "True"){
          $(".results").show();
            for(x of data.Search){
               if (x.Poster !="N/A") {
                 let tempRow = `<div class="card m-1 disp" style="width: 18rem;">  <img class="card-img-top" src="${x.Poster}" height="60%"  alt="Card image cap"> 
                              <div class="card-body">    <h5 class="card-title">${x.Title}</h5>  
                               <p class="card-text">Year in which this <i>${x.Type}</i> released is:  <i> ${x.Year} </i>  <br> and the Movie Id is: 
                                <b> <i> ${x.imdbID} </i> </b> </p>
                                  </div>
                                </div>   <br> `
                  
                    $(".results").show();             
                   $(".results").append(tempRow);                

              }else{

                    let tempRow = `<div class="card m-1 disp" style="width: 18rem;">  <img class="card-img-top" src="not_Available.png" height="58%"  alt="Card image cap"> 
                               <div class="card-body">    <h5 class="card-title">${x.Title}</h5>  
                               <p class="card-text">Year in which this <i>${x.Type}</i> released is:  <i> ${x.Year} </i>  <br> and the Movie Id is: 
                                <b> <i> ${x.imdbID} </i> </b> </p>
                               
                                  </div>
                                </div>  <br>  `
                     $(".results").show(); 
                    $(".results").append(tempRow);               
              }            
            }
          }else{
            alert("Movie not found")
          }

        },
        error: (err) => { // in case of error response

                 alert(err.responseJSON.error.message);


        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            //alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            //alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    })
  }



let getAllData3 = (titleIdTrim) => {
 

$.ajax({
        type: 'GET',
        dataType: 'json', 
        url: 'https://www.omdbapi.com/?apikey=aa8f140e&i='+titleIdTrim,
        success: (data) => { // in case of success response
            
            //console.log(data);
            
          
            
              if(data.Response == "True"){
                 $(".results").show();
               
                let tempRow = `<div class="card m-1 disp" style="width: 40rem;">  <img class="card-img-top" src="${data.Poster}" alt="Card image cap"> 
                               <div class="card-body">    <h5 class="card-title">${data.Title}</h5>  
                               <p class="card-text">Year in which this <i>${data.Type}</i> released is:  <i> ${data.Year} </i>  <br> and the Movie Id is: 
                                <b> <i> ${data.imdbID} </i> </b> </p>
                                  </div>
                                </div>    `


               $(".results").append(tempRow);      

              }else{
                alert("incorrect id");
              }                                
        },
        error: (err) => { // in case of error response

                 alert(err.responseJSON.error.message);

        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            //alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            //alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    })
  
  }
