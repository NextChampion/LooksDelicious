import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { Icon, Header, Button } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast';

import server from '../server';
import { dispatch, connect } from '../redux';
import UI from '../UI';

import Container from './components/Container';
import SearchBar from './TabCookScreen/components/SearchBar';
import DishItem from './TabCookScreen/components/DishItem';
import RecentSearch from './components/RecentSearch';
import Loading from './components/Loading';
import ErrorView from './components/ErrorView';

@connect(['search'])
class SearchScreen extends Component<{}> {
  state = {
    status: 'normal', // 'searching', 'loaded', 'error'
    data: [],
  };

  textInput = '';

  componentDidMount() {}

  serachWithKey = async key => {
    if (!key) {
      this.toast.show('请输入您要搜索的内容');
      return;
    }
    this.setState({
      status: 'loading',
    });
    let result;
    dispatch('ADD_RECENT_SEARCK_KEY', { key });
    try {
      result = await server.searchWithKey(key);
    } catch (e) {
      console.log('eeeee', e);
    }
    if (result.resultcode === '200') {
      this.setState({
        data: result.result.data,
        status: 'loaded',
      });
    } else {
      this.setState({
        status: 'error',
      });
    }
  };

  //   albums: ["http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/0/28_164761.jpg"]
  // burden: "油,适量;盐,适量;葱,适量;冰糖,适量;可乐,200ml"
  // id: "28"
  // imtro: "我家也是深爱这道菜，每次做都是一扫而光，而且这道菜真的就是成功率百分百的一道菜，前几天打开一瓶可乐，天太冷了，消耗太慢，眼看着气体越来越少就更不好喝了，不浪费的方法就是拿来做菜了。"
  // ingredients: "翅根,500g"
  // steps: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // tags: "家常菜;咸甜;10-20分钟;炖;孕妇;青少年;老人;白领;晚餐;营养;增强抵抗力;全菜系;3-4人;待客菜;炒锅"
  // title: "可乐鸡翅"

  renderItem = ({ item }) => (
    <DishItem
      data={item}
      onPress={() => {
        const { navigation } = this.props;
        navigation.navigate('stepList', item);
      }}
    />
  );

  renderContent = () => {
    const { search } = this.props;
    const { data, status } = this.state;
    const recent = search.get('recent').toArray();
    if (status === 'loading') {
      return <Loading />;
    }
    if (status === 'error') {
      return <ErrorView />;
    }
    if (status === 'loaded') {
      return (
        <FlatList
          data={data || []}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      );
    }
    return (
      <RecentSearch
        recent={recent}
        onItemPress={a => {
          this.searchBar.setValue(a);
          this.serachWithKey(a);
        }}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header transparent searchBar rounded>
          <TouchableOpacity
            style={{
              width: 44,
              paddingHorizontal: UI.unit * 2,
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('main');
            }}
          >
            <Icon name="arrow-back" style={{ color: UI.color.primary1 }} />
          </TouchableOpacity>
          <SearchBar
            spellCheck={false}
            ref={a => (this.searchBar = a)}
            placeholderTextColor={UI.color.gray9}
            autoFocus
            clearButtonMode="always"
            onChangeText={text => {
              this.textInput = text.trim();
              if (!text) {
                this.setState({ status: 'normal' });
              }
            }}
            onSubmitEditing={() => {
              this.serachWithKey(this.textInput);
            }}
          />
          <Button
            transparent
            onPress={() => {
              this.serachWithKey(this.textInput);
            }}
          >
            <Text>搜索</Text>
          </Button>
        </Header>
        <Container style={{ paddingBottom: 0 }}>
          {this.renderContent()}
        </Container>
        <Toast ref={a => (this.toast = a)} />
      </View>
    );
  }
}

export default SearchScreen;
