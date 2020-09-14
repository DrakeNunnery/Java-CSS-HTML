d3.select("#bye")
    .on("click", function() {
        d3.select("p").text("Only instruments matter.")
    });

d3.select("#hello")
    .on("click", function() {
        d3.select("p").text("Only pandas matter.")
    });

d3.select("p").style("color","red")