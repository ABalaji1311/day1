let testimonial_data =[
    {
        name:"Balaji",
        image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-into-the-distance-on-top-of-the-mountain-free-image.jpg?w=600&quality=80",
        text_content:"I am very happy with the service provided by the company. They are very professional and nice"
    },
    {
        name:"Bala..",  
        image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        text_content:"I am very happy with the service provided by the company. They are very professional and super"
    },
    {
        name:"BALAJI....",
        image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        text_content:"I am very happy with the service provided by the company. They are very professional and better"
    }
        

]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current =testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++
    
    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()