import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Grid, Container, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import MediaCard from "./MediaCard";
import NoSearch from "./NoSearch";
import Spinner from "./Spinner";
import { authGet } from "../actions/book";

const Search = ({ authSearch, loading, authGet }) => {
  const word = useParams().word;
  const item = useParams().item;
  useEffect(() => {
    authGet(word, item);
  }, [authGet, word, item]);
  // console.log(authSearch.length, loading);
  return (
    <div className="mt-6">
      <Container>
        <h1 className="artist-name">Result is {authSearch.length}</h1>
        <Grid container spacing={6}>
          {loading ? (
            <Spinner />
          ) : authSearch.length ? (
            authSearch.map((book, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <h2 className="artist-name">{word}</h2>
                  <Link to={`/book/${book.lid}/${word}/${item}`}>
                    <MediaCard
                      title={book.title ? book.title : "Default"}
                      imgURL={
                        book.frontPage
                          ? book.frontPage
                          : "http://s3.amazonaws.com/data.arthousecoop.com/attachments/380709/standard/S8-02.jpg"
                      }
                    />
                  </Link>
                </Grid>
              );
            })
          ) : (
            <div className="no-search">
              <NoSearch />
            </div>
          )}
        </Grid>
        <div className="go-back">
          {/* <Link to={`/search/${word}`}> */}
          <Link to="/">
            <Button variant="contained">Go Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

Search.propTypes = {
  authSearch: PropTypes.array,
  load: PropTypes.bool,
  word: PropTypes.string,
  authGet: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authSearch: state.book.authSearch,
  loading: state.book.loading,
  word: state.book.word,
});

export default connect(mapStateToProps, { authGet })(Search);
