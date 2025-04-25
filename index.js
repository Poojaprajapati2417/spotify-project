// createing the cards of different sections dynamically using function


let data={
    artist_card_box: [
        {
            id:1,
            img:"./images/1.jpg",
            topicname:"A.R.Rehman",
            background: "linear-gradient(to bottom, #FF6B6B, rgba(255, 107, 107, 0))"
        },
        {
            id:2,
            img:"./images/2.jpg",
            topicname:"Amit Trivedi",
            background:"linear-gradient(to bottom,rgb(230, 255, 107), rgba(255, 107, 107, 0))"
        },
        {
            id:3,
            img:"./images/3.jpg",
            topicname:"Arijit Singh",
            background:"linear-gradient(to bottom,rgb(15, 218, 90), rgba(255, 107, 107, 0))"

        },
        {
            id:4,
            img:"./images/4.jpg",
            topicname:"Atif Aslam",
            background:"linear-gradient(to bottom,rgb(126, 94, 233), rgba(255, 107, 107, 0))"

        },
        {
            id:5,
            img:"./images/5.jpg",
            topicname:"Darshan Rawal",
            background:"linear-gradient(to bottom,rgb(185, 7, 170), rgba(255, 107, 107, 0))"

        },
        {
            id:6,
            img:"./images/6.jpg",
            topicname:"Diljit Dosanjh"
        },
        {
            id:7,
            img:"./images/7.jpg",
            topicname:"pritam"
        },
        {
            id:8,
            img:"./images/8.jpg",
            topicname:"Sachin Jigar"
        },
        {
            id:9,
            img:"./images/9.jpg",
            topicname:"Shreya Ghoshal"
        },
        {
            id:10,
            img:"./images/10.jpg",
            topicname:"Vishal Shekhar"
        }
    
    ],
    playlist_card_box:[
        {
            id:11,
            img:"./images/11.jpg",
            topicname:"Old Is Gold"
        },
        {
            id:12,
            img:"./images/12.jpg",
            topicname:"90s bollywood"
        },
        {
            id:13,
            img:"./images/13.jpg",
            topicname:"Evergreen Melodies"
        },
        {
            id:14,
            img:"./images/14.jpg",
            topicname:"Morning Bhajans"
        },
        {
            id:15,
            img:"./images/15.webp",
            topicname:"Midnight Tears"
        },
        {
            id:16,
            img:"./images/16.jpg",
            topicname:"Bollywood Dance Hits"
        },
        {
            id:17,
            img:"./images/17.jpg",
            topicname:"Awaaz-e-Khamoshi"
        },
        {
            id:18,
            img:"./images/18.jpg",
            topicname:"Bollywood Blockbusters"
        },    
    ],
    albums_card_box:[   
        {
        id:19,
        img:"./images/19.jpg",
        topicname:"Yeh Jawaani Hai Deewani"
    },
    {
        id:20,
        img:"./images/20.jpg",
        topicname:"Mismatched: Season 3 "
    },
    {
        id:21,
        img:"./images/21.jpg",
        topicname:"Aashiqui 2"
    },
    {
        id:22,
        img:"./images/22.jpg",
        topicname:"Sanam Teri Kasam"
    },
    {
        id:23,
        img:"./images/23.jpg",
        topicname:"Jab We Met"
    },
    {
        id:24,
        img:"",
        topicname:""
    },
    {
        id:25,
        img:"",
        topicname:""
    },
]
}

function generate_cards ( container_name,data_array){
let container=document.querySelector(`.${container_name}`)
if (!container) {
    console.warn(`Warning: No container found for "${container_name}"`);
    return;
}

let fragment = document.createDocumentFragment(); // Create a fragment
data_array.forEach(item => {
    

    let card=document.createElement("div")
    card.classList.add("card_class")
    card.setAttribute("data-id",item.id)
    card.innerHTML=`<div class="${container_name.includes('artist')?'img_div':'img_div_sq'}">
                                    <img src="${item.img}" alt="" loading="lazy">
                             </div>
                                <h3>${item.topicname}</h3>
                               
                            <div class="play_class flex justify-content align-items"> <i class="fa-solid fa-play"></i></div> `
    fragment    .appendChild(card)
    }); 
    container.appendChild(fragment);
}
for ( let section in data )
{generate_cards( section,data[section])};


songitems_Array=[
    {
        sr_no:1,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:2,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:3,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:4,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:5,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:6,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:7,
        img:"./images/1.jpg",
        songname:"A.R.Rehman",
        
    },
    {
        sr_no:8,
        img:"",
        songname:"",
        
    }
]
let songitems_outer=document.querySelector(".songitems_outer")
songitems_Array.forEach (item=>{
    let card=document.createElement("div")
    card.classList.add("list_item")
    card.innerHTML=`<div class="sr_no">
                                ${item.sr_no}
                            </div>
                            <div class="song_poster">
                                <img src="${item.img}" alt="" loading="lazy">
                            </div>
                            <div class="songname" style="width: 55%;">
                                ${item.songname}
                            </div>
                            <div class="endtime">
                                00:30
                            </div>`

                            songitems_outer.appendChild(card)
})
// converting the object data in the form of object where key is id of item and its value is whole item of that id

itemlookup={};
for(section in data){
    data[section].forEach(item=>{
       itemlookup[item.id] =item
    })
}
console.log(itemlookup)

// on click on cards

let frontposter=document.querySelector(".frontposter img ");
let backposter_text=document.querySelector(".backposter h3");
let side_heading=document.querySelector(".side_heading")
let backposter=document.querySelector(".backposter");
let currentIndex="1"

let card_class=Array.from(document.querySelectorAll(".card_class"))
card_class.forEach((card)=>{
    card.addEventListener("click",function(){
        let imgelement=this.querySelector("img")
        let titleElement=this.querySelector("h3")
        let currentIndex=this.getAttribute("data-id")
        console.log (currentIndex)
        
        
            frontposter.src = imgelement.src; // Update front poster image
            backposter_text.innerText = titleElement.innerText; // Update back poster text
            backposter.style.background=itemlookup[currentIndex].background
    })
})