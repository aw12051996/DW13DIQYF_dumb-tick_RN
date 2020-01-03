import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
} from 'native-base';
import moment from 'moment';
import NumberFormat from 'react-number-format';

export default class ListEvent extends Component {
  render() {
    return (
      <View>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Body>
                <Text>
                  <NumberFormat
                    value={this.props.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Rp '}
                    renderText={value => <Text note>{value}</Text>}
                  />
                </Text>
              </Body>
            </Left>
            <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="heart" />
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri: this.props.image,
              }}
              style={{height: 200, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text onPress={this.props.getId}>{this.props.title}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text note>{moment(this.props.date).format('YYYY-MM-DD')}</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 300,
  },
});
