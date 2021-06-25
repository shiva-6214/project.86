var canvas = new fabric.Canvas('myCanvas');

var block_width = 30;
var block_height = 30;

var player_x = 10;
var player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(80);
        player_object.scaleToHeight(100);

        player_object.set({
            top: player_y,
            left: player_x
        })

        canvas.add(player_object)
    })
}

function new_img_block(getImg) {
    fabric.Image.fromURL(getImg, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_width);
        block_img_object.scaleToHeight(block_height);

        block_img_object.set({
            top: player_y,
            left: player_x
        })

        canvas.add(block_img_object);
    })
}