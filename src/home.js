import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image1 from "./image/logos/imag2.jpg";
import Image2 from "./image/logos/imag.jpg";
import Image3 from "./image/logos/tree-8.jpg";
import Image4 from "./image/logos/images (2).jpeg";
import Image5 from "./image/logos/image27.jpg";
import { Pagebody, Article, Heading, Banner, Images } from "./homestyle";

export default () => {
  return (
    <div>
      <Banner>
        {" "}
        <h1>WHY TREES? </h1>{" "}
        <h2>The benefits of planting trees for our planet.</h2>
      </Banner>
      <Heading>
        <h1>WHY ARE TREES SO IMPORTANT TO THE ENVIRONMENT?</h1>
        <p>
          Trees help clean the air we breathe, filter the water we drink, and
          provide habitat to over 80% of the world's terrestrial biodiversity.
          Forests provide jobs to over 1.6 billion people, absorb harmful carbon
          from the atmosphere, and are key ingredients in 25% of all medicines.
        </p>
        <h3>
          {" "}
          Here are the some pillars that explain why trees are so vital...
        </h3>
        <section></section>
      </Heading>
      <Pagebody>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Images>
              <img src={Image1} width="95%" height="85%" alt="This" />
            </Images>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Article>
              <h1>For the AIR:</h1>
              <p>
                Trees are like the vacuums of our planet. Through their leaves
                and bark, they suck up harmful pollutants and release clean
                oxygen for us to breathe. In urban environments, trees absorb
                pollutant gases like nitrogen oxides, ozone, and carbon
                monoxide, and sweep up particles like dust and smoke. Increasing
                levels of carbon dioxide caused by deforestation and fossil fuel
                combustion trap heat in the atmosphere. Healthy, strong trees
                act as carbon sinks; absorbing atmospheric carbon dioxide and
                reducing the effects of climate change.
              </p>
            </Article>
          </Grid>
        </Grid>
        <section></section>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={6} md={9}>
            <Article>
              <h1>For the Water:</h1>
              <p>
                Trees play a key role in capturing rainwater and reducing the
                risk of natural disasters like floods and landslides. Their
                intricate root systems act like filters; removing pollutants and
                slowing down the water’s absorption into the ground. This
                process prevents harmful waterside erosion and reduces the risk
                of over-saturation and flooding. According to the Food and
                Agriculture Association of the United Nations, a mature
                evergreen tree can intercept more than 15,000 litres of water
                every year.
              </p>
            </Article>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Images>
              <img src={Image2} width="95%" height="85%" alt="This" />
            </Images>
          </Grid>
        </Grid>

        <section></section>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Images>
              <img src={Image3} width="95%" height="85%" alt="This" />
            </Images>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Article>
              <h1>For the CLIMATE:</h1>
              <p>
                Trees help cool the planet by sucking in and storing harmful
                greenhouse gases, like carbon dioxide, into their trunks,
                branches, and leaves, and releasing oxygen back into the
                atmosphere. In cities, trees can reduce overall temperature by
                up to eight degrees Celsius. With more than 50% of the world’s
                population living in cities—a number expected to increase to 66%
                by the year 2050—pollution and overheating are becoming a real
                threat. Fortunately, a mature tree can absorb an average of 48
                lbs of carbon dioxide per year, making cities a healthier, safer
                place to live.
              </p>
            </Article>
          </Grid>
        </Grid>

        <section></section>
        <h2>What you can do to Save planet</h2>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Images>
              <img src={Image4} width="95%" height="85%" alt="This" />
              <img src={Image5} width="95%" height="85%" alt="This" />
            </Images>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Article>
              <h1>You can:</h1>
              <p>
                Become take part to save the world by only taking small step.
                You can plant a tree to take part.Plant the trees and send us
                photos we will add it to our gallery.We will support you in this
                mission of billion trees.{" "}
                <h4>
                  There are some other advices which you can do to save earth
                  and reduce the population:
                </h4>
                <ul>
                  <li>Plant trees as many as you can,</li>
                  <li>Save the water,</li>
                  <li>Less the use of plastic bag,</li>
                  <li>Using recycleable materials,</li>
                  <li>Try to keep lake and river clean,</li>
                  <li>Save fresh water.</li>
                </ul>
              </p>
              <h4>TREE PLANTING PROJECT PHOTOS</h4>
              <p>
                Just a few photos from our tree planting projects around the
                world! Check out our full photo archive here.
                <Link to="galleries" title="Our photo galleries">
                  <strong> Galleries </strong>
                </Link>
              </p>
            </Article>
          </Grid>
        </Grid>
      </Pagebody>
    </div>
  );
};
