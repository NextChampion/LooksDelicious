import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HeaderView from './components/HeaderView';
import ServingView from './components/ServingView';
import IWantView from './components/IWantView';
import Title from './components/Title';
import CardView from './components/CardView';
import SearchBar from './components/SearchBar';

export default class TabGiftScreen extends Component {
  render() {
    return (
      <ScrollView>
        <HeaderView />
        <ServingView />
        <IWantView />
        <Title title="杭州生活" />
        <CardView />
        <SearchBar style={styles.searchBar} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    left: 0,
    top: 165,
    right: 0,
  },
});
