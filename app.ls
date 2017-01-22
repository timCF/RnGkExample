React = require("react")
RN = require("react-native")
styles = require("./app/js/styles")() |> RN.StyleSheet.create(_)

RnGkExample = React.createClass({
  getInitialState: -> require("./app/js/main")(this),
  render: ->
    [
      # hide status bar
      React.createElement( RN.StatusBar, {key: "status_bar", hidden: true}),
      React.createElement( RN.Text, {style: [styles.welcome], key: "child1"}, "Welcome to React Native!"),
      React.createElement( RN.Text, {style: [styles.instructions], key: "child2"}, "To get started, edit app.ls and execute `make`"),
      React.createElement( RN.Text, {style: [styles.instructions], key: "child3"}, "Press Cmd+R to reload,\nCmd+D or shake for dev menu"),
    ]
    |> React.createElement( RN.View, {style: [styles.container]}, _)
})

RN.AppRegistry.registerComponent('RnGkExample', (-> RnGkExample))
