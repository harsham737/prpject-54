import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class RedButton extends Component {
  displayalert() {
    alert('play sound !!');
  }
  render() {
    return (
      <Button
        title="Sound 1"
        color={this.props.color}
        onPress={this.displayalert}
      />
    );
  }
}
class HarshamButton extends Component {
  displayname() {
    alert('play sound !!');
  }
  render() {
    return (
      <Button
        title="Sound 2"
        color={this.props.color}
        onPress={this.displayname}
      />
    );
  }
}
class PretamButton extends Component {
  displayname() {
    alert('play sound !!');
  }
  render() {
    return (
      <Button
        title="Sound 3"
        color={this.props.color}
        onPress={this.displayname}
      />
    );
  }
}
class DeepaliButton extends Component {
  displayname() {
    alert('play sound !!');
  }
  render() {
    return (
      <Button
        title="Sound 4"
        color={this.props.color}
        onPress={this.displayname}
      />
    );
  }
}

class VikramButton extends Component {
  displayname() {
    alert('play sound !!  ');
  }
  render() {
    return (
      <Button
        title="Sound 5"
        color={this.props.color}
        onPress={this.displayname}
      />
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        {' '}
        <RedButton color="purple" /> <HarshamButton color="black" />
        <PretamButton color="cyan" />
        <DeepaliButton color="red" />
        <VikramButton color="green" />
      </View>
    );
  }
}
