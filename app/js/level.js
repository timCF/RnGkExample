import React, { Component, PropTypes } from 'react';
import { autorun } from 'mobx';
import { View } from 'react-native';

import {
  TileMap,
} from 'react-game-kit/native';

import GameStore from './stores/game-store';

export default class Level extends Component {

  static contextTypes = {
    scale: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      stageX: 0,
    };
  }

  componentDidMount() {
    this.cameraWatcher = autorun(() => {
      const targetX = Math.round(GameStore.stageX * this.context.scale);
      this.setState({
        stageX: targetX,
      });
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const targetX = Math.round(GameStore.stageX * nextContext.scale);
    this.setState({
      stageX: targetX,
    });
  }

  componentWillUnmount() {
    this.cameraWatcher();
  }

  getWrapperStyles() {
    return {
      position: 'absolute',
      transform: [{translateX: this.state.stageX}, {translateY: 0}],
      //transform: `translate(${this.state.stageX}px, 0px) translateZ(0)`,
      //transformOrigin: 'top left',
    };
  }

  render() {
    return (
      <View style={this.getWrapperStyles()}>
        <TileMap
          style={{ top: Math.floor(64 * this.context.scale) }}
          src={require("./../assets/boardwalktile.png")}
          sourceWidth={128}
          tileSize={128}
          columns={24}
          rows={4}
          layers={[
            [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
          ]}
        />
        <TileMap
          style={{ top: Math.floor(-63 * this.context.scale) }}
          src={require("./../assets/buildings.png")}
          rows={1}
          columns={6}
          tileSize={512}
          sourceWidth={3072}
          layers={[
            [1, 2, 3, 4, 5, 6],
          ]}
        />
      </View>
    );
  }
}
