controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fish_on) {
        music.baDing.play()
        reel_number += 1
        scene.cameraShake(4, 100)
    }
})
let fish_on = false
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000001010101010102020202`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile6], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . f f f f 2 f f . . . . . . . . . . . . . . . . . . . . . . . . 
    . . f f e e e e f 2 f f . . . . . . . . . . . . . . . . . . . . . . . 
    . f f e e e e e f 2 2 f f . . . . . . . . . . . . . . . . . . . . . . 
    . f e e e e f f e e e e f . . . . . . . b b b . . . . . . . . . . . . 
    . f f f f f e e 2 2 2 2 e f . . . . . b b . b b . . . . . . . . . . . 
    f f f e 2 2 2 f f f f e 2 f . . . . b b . . . b b . . . . . . . . . . 
    f f f f f f f f e e e f f f . . . b b . . . . . b b . . . . . . . . . 
    f e f e 4 4 e b f 4 4 e e f . . b b . . . . . . . b b . . . . . . . . 
    . f e e 4 d 4 b f d d e f . . b b . . . . . . . . . b b . . . . . . . 
    . . f e e e 4 d d d e e . . b b . . . . . . . . . . . b b . . . . . . 
    . . . f 2 2 2 2 e e d d b b b . . . . . . . . . . . . . b b . . . . . 
    . . . f 4 4 4 e 4 4 d d b b . . . . . . . . . . . . . . . b b . . . . 
    . . . f f f f f e e e e b . . . . . . . . . . . . . . . . . b . . . . 
    . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . d . . . . 
    . . . f f f . f f f . . . . . . . . . . . . . . . . . . . . d . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.placeOnRandomTile(mySprite, myTiles.tile6)
let reel_number = 0
fish_on = false
music.setVolume(20)
game.showLongText("to  reel in a fish, repeatedly press A.", DialogLayout.Bottom)
forever(function () {
    mySprite.say("" + reel_number)
})
forever(function () {
    pause(8000)
    if (Math.percentChance(30)) {
        fish_on = true
        game.showLongText("you got one on! ", DialogLayout.Bottom)
        pause(2000)
        if (reel_number > 17) {
            game.showLongText("you got the fish!!!", DialogLayout.Bottom)
            info.changeScoreBy(4)
        } else {
            game.showLongText("man. you lost the fish.", DialogLayout.Bottom)
        }
        fish_on = false
        reel_number = 0
    } else if (Math.percentChance(40)) {
        fish_on = true
        game.showLongText("you got one on! ", DialogLayout.Bottom)
        pause(2000)
        if (reel_number > 15) {
            game.showLongText("you got the fish!!!", DialogLayout.Bottom)
            info.changeScoreBy(3)
        } else {
            game.showLongText("man. you lost the fish.", DialogLayout.Bottom)
        }
        fish_on = false
        reel_number = 0
    } else if (Math.percentChance(50)) {
        fish_on = true
        game.showLongText("you got one on! ", DialogLayout.Bottom)
        pause(2000)
        if (reel_number > 10) {
            game.showLongText("you got the fish!!!", DialogLayout.Bottom)
            info.changeScoreBy(2)
        } else {
            game.showLongText("man. you lost the fish.", DialogLayout.Bottom)
        }
        reel_number = 0
        fish_on = false
    } else {
        fish_on = true
        game.showLongText("you got one on! ", DialogLayout.Bottom)
        pause(2000)
        if (reel_number > 5) {
            game.showLongText("you got the fish!!!", DialogLayout.Bottom)
            info.changeScoreBy(1)
        } else {
            game.showLongText("man. you lost the fish.", DialogLayout.Bottom)
        }
        fish_on = false
        reel_number = 0
    }
})
