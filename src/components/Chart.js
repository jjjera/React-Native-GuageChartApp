/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SolidGauge from 'react-solidgauge';

const values = [
  { label: 'Email Campaign',    value: 189, fill: '#881' },
  { label: 'Google AdWords',    value: 65,  fill: '#188' },
  { label: 'Youtube Campaign',  value: 49,  fill: '#818' },
  { label: 'Facebook Campaign', value: 29,  fill: '#bb4' },
];


export default class Chart extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      state: this.state.values.map(d => {
        d.values = Math.random() * 100;
        return d;
      })
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Gauge Meter</Text>
        <div style={{
          width: '100%',
          height: '500px',
        }}>
          <SolidGauge
            responsive
            background={{
              fill: '#ddd',
              stroke: '#aaa',
            }}
            pathWidth={0.1}
            pathMargin={0.1}
            values={this.state.values}
            animationTime={1500}
            showTooltip
            animateTime={2000}
            ease='easeLinear'
            fontSize={18}
            />
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
