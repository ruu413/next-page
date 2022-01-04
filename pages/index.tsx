import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { AppBar, Toolbar, Typography, Grid, Card } from "@mui/material";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <header>
        <AppBar className="a" position="static">
          <Toolbar>
            <Typography>るーどっとでぶ</Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main style={{marginTop:10, padding:10, margin:"auto", maxWidth:800}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
          <Grid item xs={8} md={8}>
            <Card>カード</Card>
          </Grid>
          <Grid item xs={4}>
            <Card>カード</Card>
          </Grid>
          <Grid item xs={4}>
            <Card>カード</Card>
          </Grid>
          <Grid item xs={8}>
            <Card>カード</Card>
          </Grid>
        </Grid>
        <p style={{ fontSize: 65 }}>おためし</p>
      </main>
    </React.Fragment>
  );
};

export default Home;
