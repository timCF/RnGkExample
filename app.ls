React = require("react")
RN = require("react-native")
styles = require("./app/js/styles")() |> RN.StyleSheet.create(_)

RNGK = require("react-game-kit/native")

RnGkExample = React.createClass({
  getInitialState: -> require("./app/js/main")(this),
  render: ->
    React.createElement( RNGK.Sprite, {repeat: true, src: require("./app/assets/character-sprite.png"), state: 1, steps: [9, 9, 0, 4, 5]})
    |> React.createElement( RNGK.Body, {}, _)
    |> React.createElement( RNGK.World, {}, _)
    |> React.createElement( RNGK.Stage, {}, _)
    |> React.createElement( RNGK.Loop, {}, _)
})

RN.AppRegistry.registerComponent('RnGkExample', (-> RnGkExample))
