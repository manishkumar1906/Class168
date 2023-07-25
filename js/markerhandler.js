AFRAME.registerComponent ( "markerhandler",{
    init: function(){
        this.el.addEventListner("markerFOund", ()=>{
            console.log("Marker is Found!!")
            this.handleMarkerFound()
        })
    
        this.el.addEventListner("markerLost", ()=>{
            console.log("Marker is lost!!")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound : function(){
        var button = document.getElementById("button-div")
        button.style.display = "flex";
        
        var ratingButton = document.getElementById("rating-button")
        ratingButton.addEventListener("click",function (){
            swal({
                icon:"warning",
                title : "Rate the Dish!!",
                text:"Work in progress"
            })
        })
        
        var orderButton = document.getElementById("order-button")
        orderButton.addEventListener("click", function (){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title : "Thanks for Order!!",
                text:"Your order will be served soon at you table"
            })
        })
    },
    handleMarkerLost : function(){
      var button = document.getElementById("button-div")
      button.style.display = "none"  
    }
} )