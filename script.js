"use strict";

$(() => {
$(document).on("click","button", () => {
    $(".recipes").empty();
    const userInput = $("input").val();
    $.get(`https://api.edamam.com/search?q=${userInput}&app_id=cc07f30f&app_key=09b908dcfe6d7f1438d1041e2c90e219`).then((data) => {
    // for (let post of data) {
    //     $(".recipe").append(`
    //     <p>${post.data.hits}</p>
    //     `)
    // }
    let recipes = data.hits;
    for (let i = 0; i < recipes.length; i++) {
        $(".recipes").append(`
        <h2>${recipes[i].recipe.label}</h2>
        <img src ="${recipes[i].recipe.image}">
        
        `);

    }
        console.log(data.hits);
    });
})
   
});

