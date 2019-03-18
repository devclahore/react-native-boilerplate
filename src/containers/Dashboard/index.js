/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { } from "prop-types";
import { View, Text } from "react-native";

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
// import styles from "./styles";
import { ContainerView, H1Text } from "./styles";
import AppCard from "../../components/AppCard";
import AppTitle from "../../components/AppTitle";
import AppParagraph from "../../components/AppParagraph";
import AppButton from "../../components/AppButton";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <ContainerView>
          <H1Text>Dashboard</H1Text>
          <AppCard>
            <AppCard.Content>
              <AppTitle>Card Title</AppTitle>
              <AppParagraph>Card Description</AppParagraph>
            </AppCard.Content>
            <AppCard.Cover source={{ uri: "https://picsum.photos/700" }} />
            <AppCard.Actions>
              <AppButton>Ok</AppButton>
              <AppButton>Cancel</AppButton>
            </AppCard.Actions>
          </AppCard>
        </ContainerView>
      </Fragment>
    );
  }
}

export default Dashboard;
