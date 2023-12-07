const ol = document.querySelector("ol");
const movies = [
    {
        name: "Schindlers list",
        year: 1993,
        director: "Steven Spielberg",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
        name: "Y tu Mama tambien",
        year: 2001,
        director: "Alfonso Cuaron",
        imgsrc: "https://mondoshop.com/cdn/shop/products/Wong_YTu_Lg_1024x.jpg?v=1670271727"
    
    },
    {
        name: "City of God",
        year: 2002,
        director: " Fernando Meirelles, Kátia Lund",
        imgsrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.miramax.com%2Fmovie%2Fcity-of-god%2F&psig=AOvVaw2iygbw6UdZluzznXRCyaUC&ust=1702027272124000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCrmer__IIDFQAAAAAdAAAAABAR" 
    }
];
const li = `
    <li>
        <p>Name: ${movies[0].name}</p>
        <p>Year: ${movies[0].year}</p>
        <p>Director: ${movies[0].director}</p>
        ${movies[0].imgsrc}
    </li>
`

const template = movies.map(movies =>`
<li>
        <p>Name: ${movies.name}</p>
        <p>Year: ${movies.year}</p>
        <p>Director: ${movies.director}</p>
        ${movies.imgsrc}
</li>        
`);
console.log(template);
ol.innerHTML = template.join(``)