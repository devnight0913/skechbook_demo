import { Container, Grid, Button } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getContent } from "../actions/book";
import { Link, useParams } from "react-router-dom";

const Footer = ({ bookContent, getContent }) => {
  const bookId = useParams().id;
  const search = useParams().search;
  const item = useParams().item;
  const linkTo = search ? `/search/${search}/${item}` : "/";
  // console.log(linkTo);
  useEffect(() => {
    getContent(bookId);
  }, [getContent, bookId]);

  return (
    <div className="m-5">
      <Container>
        <Grid container columnSpacing={0} rowSpacing={3}>
          {bookContent.length ? (
            <>
              {bookContent.map((content, index) => {
                return (
                  <Grid item xs={6} key={index}>
                    <img src={content} alt="" />
                  </Grid>
                );
              })}
            </>
          ) : (
            <h1>There is no Content</h1>
          )}
        </Grid>
        <div className="go-back">
          <Link to={linkTo}>
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  bookContent: PropTypes.array,
};
const mapStateToProps = (state) => ({
  bookContent: state.book.bookContent,
});

export default connect(mapStateToProps, { getContent })(Footer);
