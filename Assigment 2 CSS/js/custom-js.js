function toggleHoverEffects() {
    // Select SVG elements using jQuery
    const sweetCircle = $(".sweet-circle");
    const tartCircle = $(".tart-circle");

    // Add event listeners for Sweet circle - if mouse above the svg then trigger effect
    sweetCircle.on("mouseenter", function () {
        const sweetText = $(this).find("text");
        sweetText.html(`
            <tspan x="50" dy="-1em">Original SweeTARTS®:</tspan>
            <tspan x="50" dy="1.2em">A bite-sized burst</tspan>
            <tspan x="50" dy="1.2em">of tangy magic.</tspan>
        `);
        $(this).addClass("sweet-hover");
    });
//if mouse leaves then revert to original content
    sweetCircle.on("mouseleave", function () {
        const sweetText = $(this).find("text");
        sweetText.text("Sweet");
        $(this).removeClass("sweet-hover");
    });

    // Add event listeners for Tart circle
    tartCircle.on("mouseenter", function () {
        const tartText = $(this).find("text");
        tartText.html(`
            <tspan x="50" dy="-1.2em">Candy that speaks!</tspan>
            <tspan x="50" dy="1.2em">Choose the one that</tspan>
            <tspan x="50" dy="1.2em">sparks your conversation.</tspan>
        `);
        $(this).addClass("tart-hover");
    });

    tartCircle.on("mouseleave", function () {
        const tartText = $(this).find("text");
        tartText.text("Tart");
        $(this).removeClass("tart-hover");
    });
}

// Call the function
$(() => {
    toggleHoverEffects();
});
