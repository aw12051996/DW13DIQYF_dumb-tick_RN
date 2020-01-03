import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import axios from 'axios';

import HeaderApp from './../Components/Header';
import moment from 'moment';
import NumberFormat from 'react-number-format';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    const id = JSON.stringify(navigation.getParam('itemId'));
    console.log(id);
    axios
      .get(`http://192.168.1.7:5000/api/v1/events/${id}`)
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => {
        alert(err);
      });
    console.log(this.state.events);
  }

  render() {
    return (
      <Container>
        <HeaderApp />
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>
                    {this.state.events.categoryId &&
                      this.state.events.categoryId.name}
                  </Text>
                </Body>
              </Left>
              <Right>
                <Text note>{moment(this.props.date).format('YYYY-MM-DD')}</Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: this.state.events.image,
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.state.events.title}</Text>
                </Body>
              </Left>
              <Right>
                <NumberFormat
                  value={this.state.events.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp '}
                  renderText={value => <Text note>{value}</Text>}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.state.events.desc}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
