var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)

// A "ghost" layer which offsets f in the tree
addNode("E", {
    symbol: "E",
    branches: ["Ex"],
    color: '#6d3678',
    layerShown: true,
    //canClick() {return player.points.gte(10)},
    //tooltip: "Thanos your points",
    //tooltipLocked: "Thanos your points",
    //onClick() {player.points = player.points.div(2)
    //console.log(this.layer)}

}, 
)


// A "ghost" layer which offsets f in the tree
addNode("Ex", {
    branches: ["E"],
    layerShown: hasupgrade('E', 11),
    //tooltip() {return "Restore your points to " + player.c.otherThingy},
    //tooltipLocked() {return "Restore your points to " + player.c.otherThingy},
    //row: "side",
    //canClick() {return player.points.lt(player.c.otherThingy)},
    //onClick() {player.points = new Decimal(player.c.otherThingy)}
}, 
)

addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
})