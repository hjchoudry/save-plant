import React from "react";
import husnain from "./image/logos/husnain.jpg";
import { About, Image } from "./basicstyle";
export default () => {
  return (
    <div>
      <About>
        <section>
          <h2>About the web site :</h2>
          <p>
            This web site is created to save the plants and Environment.We make
            people ware about the cause and problems which effects environment.
            We promts people to take step to save the environment by Planting a
            plants and trees as much as they can.We support people to save the
            world and reduce the pollution from the environment to make the
            earth more peacefull and beautifull place to live.We have to save
            about water and environment for the future gerentions.
          </p>
          <h3>You can also save environment by:</h3>
          <ul>
            <li>Saving the fresh water,</li>
            <li>Planting a tree,</li>
            <li>Making Lakes and Rivers clean,</li>
            <li>Less use of plastic bags,</li>
            <li>Using the recycle able things,</li>
            <li>Saving the Forests.</li>
          </ul>
        </section>
        <section>
          <h2>About developer:</h2>
          <p>
            I am husnain a web developer.I am working on this project to create
            small change in the world to save nature,plants and water.This is my
            small step but you can make it large joining hand togetter.We have
            to do something to save this world.lets us start from ourselfs by
            planting trees and saving fresh water, thanks.
          </p>
          <Image href={husnain} title="husnain">
            <img src={husnain} width="80" height="80" alt="this" />
          </Image>
          <h3>About My Work:</h3>
          <h4>I am working on:</h4>
          <ul>
            <li>HoodHeroes,</li>
            <li>Linkedin,</li>
            <li>Facebook and</li>
            <li>Youtube.</li>
          </ul>
        </section>
      </About>
    </div>
  );
};
